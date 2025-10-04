---
layout: Post
title: "Lesson 2: LangChain Basics"
permalink: /lessons/02-langchain-basics/
content-type: lesson
lesson-number: 2
tags: [lesson, foundation, langchain, framework]
---

# Lesson 2: LangChain Basics

**Discover LangChain, the powerful framework that makes building AI applications simple and scalable.**

## Learning Objectives

By the end of this lesson, you will:

- **Understand** what LangChain is and why it's essential for AI development
- **Install** and set up LangChain in your development environment
- **Recognize** the core components and architecture of LangChain
- **Build** your first simple LangChain application

## What is LangChain?**LangChain** is an open-source framework designed to simplify the creation of applications using large language models (LLMs). It provides a standard interface for working with different LLMs and includes modular components for building complex AI workflows.

### Why LangChain?

**Before LangChain**:

- Complex API integration for each LLM provider
- No standard patterns for common AI workflows
- Difficult to chain multiple AI operations
- Limited tooling for production deployment

**With LangChain**:

- ✅ **Unified Interface**: Work with any LLM through consistent APIs
- ✅ **Modular Components**: Pre-built blocks for common patterns
- ✅ **Easy Chaining**: Connect multiple AI operations seamlessly
- ✅ **Production Ready**: Built-in monitoring, caching, and error handling

## Core Architecture

LangChain is built around several key concepts:

### 1. Components

**Modular building blocks** that can be combined in different ways:

- **LLMs**: Interface to language models
- **Prompts**: Templates for model inputs
- **Chains**: Sequences of operations
- **Agents**: AI systems that can use tools
- **Memory**: Conversation and context storage

### 2. Chains

**Sequences of operations** that can include:

- LLM calls
- Data processing
- External API calls
- Conditional logic

### 3. Agents

**Autonomous AI systems** that can:

- Reason about problems
- Use external tools
- Make decisions
- Execute multi-step workflows

## Installation & Setup

### Prerequisites

- **Python 3.8+**: Modern Python version
- **pip or conda**: Package manager
- **API Keys**: For LLM providers (OpenAI, Anthropic, etc.)

### Installation

```bash
# Install LangChain core
pip install langchain

# Install specific integrations (examples)
pip install langchain-openai      # For OpenAI models
pip install langchain-anthropic   # For Anthropic models
pip install langchain-community   # Community integrations

# Optional but recommended
pip install langchain-experimental # Experimental features
```

### Environment Setup

Create a `.env` file for your API keys:

```bash
# .env file
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

Install python-dotenv to load environment variables:

```bash
pip install python-dotenv
```

## Your First LangChain Application

Let's build a simple application that summarizes text using LangChain:

### Step 1: Basic Setup

```python
# first_langchain_app.py
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage

# Load environment variables
load_dotenv()

# Initialize the language model
llm = ChatOpenAI(
    model="gpt-3.5-turbo",
    temperature=0.7,
    api_key=os.getenv("OPENAI_API_KEY")
)

# Create a simple message
message = HumanMessage(content="Explain quantum computing in simple terms.")

# Get response
response = llm.invoke([message])
print(response.content)
```

### Step 2: Using Prompt Templates

```python
from langchain.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI

# Create a prompt template
prompt = ChatPromptTemplate.from_template(
    "Summarize the following text in {word_count} words or less:\n\n{text}"
)

# Initialize LLM
llm = ChatOpenAI(model="gpt-3.5-turbo")

# Create a chain
chain = prompt | llm

# Use the chain
text_to_summarize = """
Artificial intelligence (AI) has transformed numerous industries by enabling
machines to perform tasks that typically require human intelligence. From
healthcare diagnostics to autonomous vehicles, AI applications continue to
expand and evolve. Machine learning, a subset of AI, allows systems to
automatically learn and improve from experience without being explicitly
programmed for every scenario.
"""

result = chain.invoke({
    "text": text_to_summarize,
    "word_count": 50
})

print(result.content)
```

### Step 3: Adding Output Parsing

```python
from langchain.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from langchain.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field

# Define output structure
class Summary(BaseModel):
    summary: str = Field(description="Brief summary of the text")
    key_points: list[str] = Field(description="List of 3-5 key points")
    word_count: int = Field(description="Number of words in summary")

# Create parser
parser = PydanticOutputParser(pydantic_object=Summary)

# Create prompt with parser instructions
prompt = ChatPromptTemplate.from_template(
    "Summarize the following text:\n\n{text}\n\n{format_instructions}"
)

# Create chain
llm = ChatOpenAI(model="gpt-3.5-turbo")
chain = prompt | llm | parser

# Use the chain
result = chain.invoke({
    "text": text_to_summarize,
    "format_instructions": parser.get_format_instructions()
})

print(f"Summary: {result.summary}")
print(f"Key Points: {result.key_points}")
print(f"Word Count: {result.word_count}")
```

## Core Components Deep Dive

### LLMs and Chat Models

```python
from langchain_openai import OpenAI, ChatOpenAI
from langchain_anthropic import ChatAnthropic

# Different LLM options
openai_llm = OpenAI(model="gpt-3.5-turbo-instruct")  # Completion model
chat_openai = ChatOpenAI(model="gpt-4")              # Chat model
claude = ChatAnthropic(model="claude-3-sonnet")      # Anthropic model

# All use the same interface!
response = chat_openai.invoke("What is machine learning?")
```

### Prompt Templates

```python
from langchain.prompts import PromptTemplate, ChatPromptTemplate

# Simple template
simple_prompt = PromptTemplate(
    input_variables=["topic"],
    template="Write a brief explanation of {topic}."
)

# Chat template with system message
chat_prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful AI assistant that explains complex topics simply."),
    ("human", "Explain {topic} to someone who is just starting to learn about it.")
])

# Few-shot template
few_shot_prompt = PromptTemplate(
    input_variables=["question"],
    template="""
    Here are some examples of good questions and answers:

    Q: What is Python?
    A: Python is a programming language known for its simplicity and readability.

    Q: What is machine learning?
    A: Machine learning is a way for computers to learn patterns from data.

    Q: {question}
    A: """
)
```

### Chains

```python
from langchain.chains import LLMChain, SimpleSequentialChain

# Basic LLM Chain
llm_chain = LLMChain(
    llm=ChatOpenAI(),
    prompt=chat_prompt
)

# Sequential chains
first_chain = LLMChain(
    llm=ChatOpenAI(),
    prompt=PromptTemplate(
        input_variables=["topic"],
        template="Generate 5 interesting facts about {topic}."
    )
)

second_chain = LLMChain(
    llm=ChatOpenAI(),
    prompt=PromptTemplate(
        input_variables=["facts"],
        template="Turn these facts into a quiz:\n{facts}"
    )
)

# Combine chains
overall_chain = SimpleSequentialChain(
    chains=[first_chain, second_chain]
)

result = overall_chain.run("artificial intelligence")
```

## LangChain vs. Direct API Usage

### Direct API Call (Without LangChain)

```python
import openai

openai.api_key = "your-api-key"

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain machine learning."}
    ],
    temperature=0.7
)

print(response.choices[0].message.content)
```

### LangChain Approach

```python
from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate

# More readable and maintainable
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant."),
    ("user", "Explain {topic}.")
])

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0.7)
chain = prompt | llm

response = chain.invoke({"topic": "machine learning"})
print(response.content)
```

**Benefits of LangChain approach**:

- **Reusable Components**: Prompts and chains can be reused
- **Easy Model Switching**: Change LLM with one line
- **Built-in Features**: Automatic retries, caching, monitoring
- **Extensibility**: Easy to add new features and components

## LangChain Ecosystem

### Core Packages

| Package                  | Purpose                             |
| ------------------------ | ----------------------------------- |
| `langchain`              | Core functionality and base classes |
| `langchain-community`    | Community integrations              |
| `langchain-experimental` | Experimental features               |
| `langchain-openai`       | OpenAI integrations                 |
| `langchain-anthropic`    | Anthropic integrations              |

### Popular Integrations

- **Vector Stores**: Pinecone, Chroma, Weaviate
- **Document Loaders**: PDF, CSV, Web scraping
- **Tools**: Search engines, APIs, databases
- **Memory**: PostgreSQL, Redis, in-memory
- **Monitoring**: LangSmith, Weights & Biases

## Best Practices

### 1. Environment Management

```python
# Use environment variables for sensitive data
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise ValueError("OPENAI_API_KEY not found in environment variables")
```

### 2. Error Handling

```python
from langchain.schema import OutputParserException

try:
    result = chain.invoke({"text": user_input})
except OutputParserException as e:
    print(f"Failed to parse output: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
```

### 3. Testing Your Chains

```python
def test_summarization_chain():
    test_text = "This is a test document for summarization."
    result = summarization_chain.invoke({"text": test_text})

    assert result is not None
    assert len(result.content) > 0
    assert len(result.content) < len(test_text)  # Summary should be shorter
```

## What's Next?

In our next lesson, we'll dive deep into **Large Language Models (LLMs)** and **Prompt Engineering**. You'll learn how to craft effective prompts and get the best results from language models.

### Practice Exercises

1. **Create a simple Q&A chain** that answers questions about a specific topic
2. **Build a text translator** using prompt templates and output parsing
3. **Experiment with different LLMs** and compare their outputs

---

**Ready to master prompting and LLMs? Let's continue to Lesson 3!**

[**← Previous: Lesson 1 - Introduction to Generative AI**](/lessons/01-intro-to-generative-ai/)  
[**Next: Lesson 3 - LLMs and Prompt Engineering →**](/lessons/03-llms-and-prompting/)
