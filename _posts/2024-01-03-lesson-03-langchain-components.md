---
layout: Post
title: "Lesson 3: LangChain Components & Setup"
permalink: /lessons/03-langchain-components/
content-type: lesson
lesson-number: 3
tags: [lesson, foundation, langchain, components, setup]
---

# Lesson 3: LangChain Components & Setup

This lesson turns the conceptual foundation from Lesson 2 into practical capability. You will set up LangChain, understand its core abstractions, and build your first working chains.

## Learning Objectives

By the end of this lesson you will be able to:

- Install and configure LangChain and common provider integrations
- Explain the role of LLMs, Prompts, Chains, Agents, and Memory
- Build a basic chain using the pipe (`|`) operator / runnable composition
- Apply prompt templates and structured output parsing
- Compare direct API usage vs. LangChain abstractions

---

## 1. Core Architecture at a Glance

LangChain centers around **composable primitives**:

| Primitive               | Purpose                                     | Typical Examples                     |
| ----------------------- | ------------------------------------------- | ------------------------------------ |
| LLM / Chat Model        | Core text generation interface              | `ChatOpenAI`, `ChatAnthropic`        |
| Prompt / PromptTemplate | Parameterized input formatting              | System + user message templates      |
| Chain / Runnable        | Execution pipeline (can branch/compose)     | Prompt → LLM, multi-step workflows   |
| Agent                   | Dynamic decision-maker that selects tools   | Tool-using conversational assistant  |
| Tool                    | External capability invoked by an agent     | Web search, DB query, calculator     |
| Memory                  | Persists conversational or contextual state | Buffer, summary, vector store memory |
| Output Parser           | Structures raw model text into objects      | Pydantic parser, JSON schema parser  |

The mental model: **Inputs → (Prompt Formatting) → LLM Call(s) → (Parsing / Post-processing) → Output**.

---

## 2. Installation & Environment

### Python Version

Use Python 3.9+ (3.10–3.12 recommended for ecosystem compatibility).

### Install Core Packages

```bash
pip install langchain
pip install langchain-openai langchain-anthropic langchain-community
# Optional extras
pip install langchain-experimental
pip install python-dotenv pydantic
```

### Environment Variables

Create a `.env` file (never commit real keys):

```bash
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

Load them in Python:

```python
from dotenv import load_dotenv
load_dotenv()
```

---

## 3. First Minimal Chat Invocation

```python
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage

load_dotenv()

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0.7)
response = llm.invoke([HumanMessage(content="Explain quantum computing in one sentence.")])
print(response.content)
```

**Key Idea:** `invoke()` accepts a list of messages for chat models; behind the scenes LangChain normalizes provider differences.

---

## 4. Prompt Templates and Chaining

LangChain encourages separating **template** from **model**:

```python
from langchain.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI

prompt = ChatPromptTemplate.from_template(
    "Summarize the following text in {word_count} words or less:\n\n{text}" )

llm = ChatOpenAI(model="gpt-3.5-turbo")
chain = prompt | llm  # Runnable composition

text_to_summarize = """
Artificial intelligence (AI) has transformed numerous industries by enabling
machines to perform tasks that typically require human intelligence..."""

result = chain.invoke({"text": text_to_summarize, "word_count": 40})
print(result.content)
```

**Why `|`?** In LangChain v0.3 the runnable protocol standardizes synchronous / async execution and streaming across composable steps.

---

## 5. Structured Output with Pydantic

```python
from langchain.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from langchain.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field

class Summary(BaseModel):
    summary: str = Field(description="Brief summary of the text")
    key_points: list[str] = Field(description="List of 3-5 key points")
    word_count: int = Field(description="Word count of summary")

parser = PydanticOutputParser(pydantic_object=Summary)

prompt = ChatPromptTemplate.from_template(
    "Summarize the following text and return JSON with fields: summary, key_points, word_count.\n\n{text}\n\n{format_instructions}"
)

llm = ChatOpenAI(model="gpt-3.5-turbo")
chain = prompt | llm | parser

result = chain.invoke({
    "text": text_to_summarize,
    "format_instructions": parser.get_format_instructions()
})
print(result.summary)
print(result.key_points)
print(result.word_count)
```

---

## 6. Expanding to Multi-step Chains

```python
from langchain.prompts import PromptTemplate, ChatPromptTemplate
from langchain.chains import LLMChain, SimpleSequentialChain
from langchain_openai import ChatOpenAI

facts_chain = LLMChain(
    llm=ChatOpenAI(),
    prompt=PromptTemplate(input_variables=["topic"], template="Generate 5 concise facts about {topic}.")
)
quiz_chain = LLMChain(
    llm=ChatOpenAI(),
    prompt=PromptTemplate(input_variables=["facts"], template="Turn these facts into a short quiz:\n{facts}")
)
workflow = SimpleSequentialChain(chains=[facts_chain, quiz_chain])
quiz = workflow.run("artificial intelligence")
print(quiz)
```

**Takeaway:** Higher-order chains let you encapsulate logic while retaining transparency.

---

## 7. Direct API vs. LangChain Abstraction

Direct OpenAI call (manual formatting):

```python
import openai, os
openai.api_key = os.getenv("OPENAI_API_KEY")
resp = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "system", "content": "You are a helpful assistant."},
              {"role": "user", "content": "Explain machine learning."}]
)
print(resp.choices[0].message.content)
```

LangChain version:

```python
from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant."),
    ("user", "Explain {topic}."),
])
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0.7)
chain = prompt | llm
print(chain.invoke({"topic": "machine learning"}).content)
```

**Benefits:** Swappable models, reusable prompts, richer tooling (retries, caching, tracing via LangSmith).

---

## 8. Ecosystem Snapshot

| Category         | Examples                                |
| ---------------- | --------------------------------------- |
| Vector Stores    | Pinecone, Chroma, FAISS, Weaviate       |
| Document Loaders | PDF, HTML, Web, CSV, Notion             |
| Memory           | Buffer, Summary, Vector store-backed    |
| Monitoring       | LangSmith, W&B                          |
| Embeddings       | OpenAI, HuggingFace, Instructor, Cohere |

---

## 9. Best Practices Starter

1. **Use environment variables** for keys (never hard-code).
2. **Keep prompts versioned** when iterating (treat like code).
3. **Add output parsers** early if you expect structured responses.
4. **Start small**: Validate each stage (prompt → model → parser) incrementally.
5. **Instrument** with tracing (e.g., LangSmith) before scaling.

---

## Practice Exercises

1. Modify the summarization chain to return both a short and extended summary.
2. Build a chain that generates brainstorm ideas and then turns them into an action plan.
3. Add error handling around the Pydantic parser (simulate malformed output).
4. Swap the LLM provider (Anthropic or an open-source model) without changing downstream logic.

---

## What’s Next?

In Lesson 4 we will dive specifically into **LLM model selection and prompt engineering fundamentals**, then move toward parsing, runnables/LCEL, and memory patterns.

[**← Previous: Lesson 2 - Introduction to LangChain**]({{ "/lessons/02-introduction-to-langchain/" | relative_url }})  
[**Next: Lesson 4 - Models & Prompt Foundations →**]({{ "/lessons/04-models-and-prompts/" | relative_url }})
