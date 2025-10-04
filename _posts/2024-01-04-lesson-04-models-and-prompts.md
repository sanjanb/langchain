---
layout: Post
title: "Lesson 4: Models & Prompt Foundations"
permalink: /lessons/04-models-and-prompts/
lesson-number: 4
tags: [lesson, foundation, models, prompts, langchain]
content-type: notes
published: true
hide_title: true
---

# Lesson 4: Models & Prompt Foundations

<div class="callout info">
    <div class="callout-title">Why this matters</div>
    <p>Model selection + prompt design determine 70% of early application quality. Here we turn vague prompting into deliberate, testable interfaces.</p>
</div>

---

## Learning Objectives

<ul class="objective-list">
    <li><strong>Model Literacy:</strong> Differentiate chat, completion, and embedding models and pick appropriately.</li>
    <li><strong>Provider Agility:</strong> Swap vendors with minimal downstream adjustments.</li>
    <li><strong>Controlled Generation:</strong> Tune temperature / top_p / max_tokens intentionally rather than guess.</li>
    <li><strong>Prompt Architecture:</strong> Decompose role, task, context, constraints, and output format explicitly.</li>
    <li><strong>Few‑Shot Discipline:</strong> Use compact exemplars that justify their token cost.</li>
    <li><strong>Reliability:</strong> Enforce structured outputs early with schemas & parsers.</li>
</ul>

---

## 1. Model Classes in LangChain

LangChain standardizes model interaction:

| Category                 | Purpose                                | Typical Classes                                                     | Notes                                  |
| ------------------------ | -------------------------------------- | ------------------------------------------------------------------- | -------------------------------------- |
| Chat Models              | Multi-message conversational interface | `ChatOpenAI`, `ChatAnthropic`, `ChatGoogleGenerativeAI`             | Accept/return message lists            |
| Completion Models        | Single text-in → text-out              | `OpenAI` (instruct variants)                                        | Legacy style—chat models now preferred |
| Embedding Models         | Text → vector                          | `OpenAIEmbeddings`, `HuggingFaceEmbeddings`, `InstructorEmbeddings` | Used in retrieval pipelines            |
| Image / Other (optional) | Multimodal / tool-enabled flows        | Provider-specific wrappers                                          | Out-of-scope for fundamentals          |

### 1.1 Basic Chat Invocation

```python
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage

chat = ChatOpenAI(model="gpt-3.5-turbo", temperature=0.2)
resp = chat.invoke([HumanMessage(content="Give me a two-sentence overview of reinforcement learning.")])
print(resp.content)
```

### 1.2 Provider Swapping

```python
# Anthropic
from langchain_anthropic import ChatAnthropic
anthropic_chat = ChatAnthropic(model="claude-3-sonnet-20240229", temperature=0.2)

# (Hypothetical) open-source local via wrappers
# from langchain_community.chat_models import ChatOllama
# local_chat = ChatOllama(model="llama3", temperature=0.2)
```

Because all conform to the same interface, downstream chains need no change.

### 1.3 Key Parameters

| Parameter           | Effect                  | Guidance                                    |
| ------------------- | ----------------------- | ------------------------------------------- |
| `temperature`       | Output randomness       | 0.0–0.3 for precision, 0.6–0.9 for ideation |
| `max_tokens`        | Response length cap     | Set explicitly for cost control             |
| `top_p`             | Nucleus sampling        | Tune instead of temperature (not both)      |
| `frequency_penalty` | Penalize repetition     | Use for long-form outputs                   |
| `streaming`         | Incremental token yield | Use for UX responsiveness                   |

---

## 2. Prompt Design Principles

Effective prompts express **role + task + context + constraints + output format**.

| Component     | Question to Answer     | Example                                     |
| ------------- | ---------------------- | ------------------------------------------- |
| Role          | Who is the model?      | "You are a pragmatic senior data engineer." |
| Task          | What must it do?       | "Summarize the incident log."               |
| Context       | What info is provided? | Logs / error snippet                        |
| Constraints   | Boundaries or style    | "Limit to 120 words; formal tone."          |
| Output Format | Desired structure      | JSON with fields `summary`, `severity`      |

### 2.1 Simple Chat Prompt Template

```python
from langchain.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a concise technical explainer."),
    ("human", "Explain {topic} in exactly three bullet points."),
])
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0.3)
chain = prompt | llm
print(chain.invoke({"topic": "vector embeddings"}).content)
```

### 2.2 Few-Shot Prompting

```python
from langchain.prompts import PromptTemplate, FewShotPromptTemplate

examples = [
    {"term": "Transformers", "definition": "Neural architectures using attention to model dependencies."},
    {"term": "Embeddings", "definition": "Vector representations capturing semantic meaning."},
]
example_fmt = PromptTemplate(
    input_variables=["term", "definition"],
    template="Term: {term}\nDefinition: {definition}\n"
)

few_shot_prompt = FewShotPromptTemplate(
    examples=examples,
    example_prompt=example_fmt,
    suffix="Term: {query}\nDefinition:",
    input_variables=["query"],
)
print(few_shot_prompt.format(query="RAG"))
```

### 2.3 Enforcing Structured Output

```python
from langchain.prompts import ChatPromptTemplate
from langchain.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field
from langchain_openai import ChatOpenAI

class GlossaryEntry(BaseModel):
    term: str = Field(description="Technical term")
    definition: str = Field(description="Concise definition <= 25 words")
    category: str = Field(description="Topic grouping")

parser = PydanticOutputParser(pydantic_object=GlossaryEntry)

prompt = ChatPromptTemplate.from_template(
    "Generate a glossary entry for the term '{term}'.\n{format_instructions}"
)

chain = prompt | ChatOpenAI(model="gpt-3.5-turbo") | parser
entry = chain.invoke({"term": "Retrieval-Augmented Generation", "format_instructions": parser.get_format_instructions()})
print(entry)
```

---

## 3. Layering Prompts in Chains

Prompt templates can precede other runnables (retrievers, transformations). Example pattern:

```python
from langchain.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI

refinement = ChatPromptTemplate.from_messages([
    ("system", "You refine drafts for clarity and brevity."),
    ("human", "Improve this draft without changing meaning:\n\n{draft}"),
])
raw_prompt = ChatPromptTemplate.from_template(
    "Write a short internal memo about: {topic}\nAudience: engineering leadership."
)
model = ChatOpenAI(model="gpt-3.5-turbo", temperature=0.5)
raw_chain = raw_prompt | model
refine_chain = refinement | model

initial = raw_chain.invoke({"topic": "migrating from REST to gRPC"}).content
final = refine_chain.invoke({"draft": initial}).content
print(final)
```

---

## 4. Common Anti-Patterns

| Anti-Pattern                     | Issue             | Fix                          |
| -------------------------------- | ----------------- | ---------------------------- |
| Underspecified task              | Vague outputs     | Add constraints + role       |
| Mixing styles                    | Inconsistent tone | Standardize with system role |
| Overlong few-shot examples       | Token waste       | Compress / abstract examples |
| No format instruction            | Parsing failures  | Provide JSON / schema hints  |
| Simultaneous temp & top_p tuning | Unpredictable     | Tune one primary sampler     |

---

## 5. Practice Exercises

1. Create a prompt template that outputs a JSON object describing a user story (fields: `role`, `action`, `benefit`, `acceptance_criteria`).
2. Build a chain that: (a) Generates 3 potential product ideas, (b) Refines each into a one-sentence pitch.
3. Implement a few-shot classifier (bug / feature / question) and test on 5 sample tickets.
4. Compare outputs at temperatures 0.0, 0.3, 0.8 for a creative writing task.

---

## 6. What’s Next?

In Lesson 5 we will focus exclusively on **Output Parsing**—ensuring LLM responses are reliable, constrained, and machine-consumable.

{% include lesson-nav.html prev_url="/lessons/03-langchain-components/" prev_text="Lesson 3 - LangChain Components & Setup" next_url="/lessons/05-output-parsing/" next_text="Lesson 5 - Output Parsing" %}
