---
layout: Post
title: "Lesson 2: The Six Core Components of LangChain"
permalink: /lessons/02-introduction-to-langchain/
lesson-number: 2
tags: [lesson, foundation, langchain, components, overview]
published: true
---

# Lesson 2 – The Six Core Components of LangChain

After understanding the necessity of LangChain in the previous lesson, this lesson provides a **conceptual overview of LangChain’s six core components**. These six components form the foundation of the entire framework, and mastering them equips developers with the knowledge needed to build almost any application using LangChain. This also sets the stage for the coding tutorials that follow in the playlist.

---

## I. Introductory Context and Rationale for LangChain

The purpose of this lesson is not only to describe the six building blocks of LangChain but also to explain **why they matter** in the broader ecosystem of LLM applications. The playlist itself has been structured to start with two theoretical discussions (the introduction and this one) before moving into hands-on coding. This ensures that you build a clear mental model of the architecture before diving into implementation.

LangChain, as established earlier, is an **open-source framework for building LLM-powered applications**. Its greatest contribution lies in its ability to **orchestrate multiple moving parts** and build efficient **pipelines** (called **Chains** in LangChain). These pipelines remove boilerplate otherwise required to pass outputs from one component to the next.

Another critical feature is that LangChain is **model agnostic**. You can switch from OpenAI’s GPT to Google’s Gemini, or from Anthropic’s Claude to an open-source Hugging Face model, usually by changing just **one or two lines of code**. This flexibility saves time and encourages experimentation.

The end goal is to make developers productive in building real-world applications — whether **conversational chatbots**, **knowledge assistants**, or **autonomous AI agents**. With this context clarified, let’s break down the six components one by one.

---

## II. The Six Core Components of LangChain

LangChain’s framework is built around **six major components**: **Models, Prompts, Chains, Indexes, Memory, and Agents.** Together, these cover the majority of the framework’s functionality.

---

### 1. Models (The Core Interface)

The **Model component** is the central interface through which a developer interacts with LLMs and related AI models.

Historically, building a chatbot required solving two very hard problems: **Natural Language Understanding (NLU)** (understanding user intent) and **Context-Aware Text Generation** (producing coherent responses). Large language models trained on internet-scale datasets now tackle both problems simultaneously. However, running such large models (often >100GB) locally is infeasible for most teams. To overcome this, providers like **OpenAI, Anthropic, Google, Azure, Hugging Face**, and others host these models and expose them through **APIs** so developers pay per usage.

A new problem then emerged: **lack of standardization**. Each provider exposed different parameter names, response formats, and error patterns. Applications became littered with provider-specific code.

LangChain solves this by **standardizing model invocation**. You can switch providers with minimal changes, and downstream parsing stays stable. This accelerates iteration and fosters vendor flexibility.

Two broad model types:

- **Language / Chat Models:** Input text → output text (chatbots, assistants, agents). Often support structured tool calling, system prompts, function outputs, or multimodality.
- **Embedding Models:** Input text → output vector (semantic search, clustering, retrieval).

---

### 2. Prompts

Prompts are the **instructions or queries** given to an LLM. Outputs are highly sensitive to phrasing, tone, role framing, and context ordering — hence the rise of **Prompt Engineering**.

LangChain provides utilities for **dynamic, reusable, and structured prompts**. Common strategies:

1. **Parameterized Templates:** Fill placeholders (e.g., `{topic}`, `{tone}`) at runtime.
2. **Role-Based Prompts:** Frame the model’s persona (e.g., “You are a senior security auditor…”).
3. **Few-Shot Prompts:** Provide examples of high-quality input → output pairs to condition behavior.

By encapsulating prompts as objects, LangChain improves maintainability, versioning, and reuse across chains and agents.

---

### 3. Chains

**Chains** are the pipelines that connect steps. They compose prompts, models, parsers, retrievers, conditionals, and more.

In a chain, the **output of one stage becomes the input of the next** with minimal glue code. Example: translate English → Hindi → summarize; or: retrieve docs → construct answer → evaluate quality.

Common chain patterns:

1. **Sequential Chains:** Steps execute in order.
2. **Parallel Chains:** Fan-out multiple model calls on the same input, combine later.
3. **Conditional / Branching Chains:** Flow determined by intermediate analysis (e.g., classification result).

Modern LangChain emphasizes **runnables / LCEL (LangChain Expression Language)**, allowing composition via the `|` operator for readability and flexibility (e.g., `prompt | llm | parser`).

---

### 4. Indexes

**Indexes** bridge an LLM with **external knowledge** (documents, files, web pages, internal data). Because general-purpose LLMs lack access to proprietary or up-to-date data, we supplement them via a **Retrieval-Augmented Generation (RAG)** pipeline.

Typical Index pipeline:

1. **Document Loaders:** Ingest PDFs, HTML, Markdown, Notion exports, etc.
2. **Text Splitters:** Chunk documents (optimize token usage + retrieval granularity).
3. **Embedding Models:** Convert chunks to dense vectors.
4. **Vector Stores:** Persist embeddings (e.g., Pinecone, Chroma, FAISS, Weaviate).
5. **Retrievers:** Query vector store to return top-k relevant chunks.

Those retrieved chunks are injected into a prompt context window to ground model answers. Indexes thus unlock domain-specific assistants (legal, academic, enterprise, scientific).

---

### 5. Memory

LLM API calls are **stateless** — prior exchanges are forgotten unless resent. For multi-turn interactions, this is limiting.

LangChain’s **Memory** component manages conversational or contextual persistence by reconstructing relevant history for each call.

Memory patterns:

- **Conversation Buffer:** Stores full chat transcript (simple but token-hungry).
- **Buffer Window:** Keeps only the last _N_ turns (token-efficient).
- **Summary Memory:** Maintains a rolling summary + a few recent turns.
- **Hybrid / Vector Memory:** Stores embeddings of past interactions for semantic recall.

Memory enables pronoun resolution (“that”, “he”), context continuity, user personalization, and multi-step reasoning continuity.

---

### 6. Agents

**Agents** are advanced constructs that combine reasoning + tool usage. While a simple chain follows a fixed path, an agent **decides dynamically** which tools to call (or which chain to invoke) based on intermediate responses.

Typical agent loop:

1. Receive user query.
2. Reflect / plan (hidden chain-of-thought or structured reasoning pattern).
3. Choose a tool (search, calculator, retrieval, database query, code interpreter, etc.).
4. Execute tool → observe result.
5. Iterate until termination condition satisfied.

Agents enable workflows like: “Fetch today’s stock price, compare with last quarter average, and produce a recommendation.” They are essential for complex assistants, research bots, multi-tool automation, and orchestrated knowledge workers.

---

## III. Conclusion

Together, these six components — **Models, Prompts, Chains, Indexes, Memory, and Agents** — provide a comprehensive toolkit for building LLM-powered applications. LangChain’s design simplifies orchestration, extends knowledge with retrieval, maintains conversational state, and empowers AI to act using external tools.

In the next lesson, we will dive deeper into practical implementation: setting up your environment, composing runnable chains, and experimenting with structured outputs.

---

{% include lesson-nav.html prev_url="/lessons/01-intro-to-generative-ai/" prev_text="Lesson 1 - Introduction to Generative AI" next_url="/lessons/03-langchain-components/" next_text="Lesson 3 - LangChain Components & Setup" %}
