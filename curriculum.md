---
layout: Post
title: "Curriculum Overview"
permalink: /curriculum/
content-type: eg
content-type: static
---

# Generative AI: LangChain Curriculum

## I. Context and Purpose

The **LangChain Playlist** is the **first step** in the larger **Generative AI Curriculum**.

The curriculum is divided into two broad perspectives:

- **Builder Side** → Developing foundation models.
- **User Side** → Using foundation models to build applications.

This playlist belongs to the **User Side**, focusing specifically on **"How to build LLM-based applications."**

LangChain is chosen as the starting point because:

- It gives a **holistic overview** of LLM-based application development.
- It exposes learners to multiple core topics such as:

  - Working with both open-source and closed-source LLMs.
  - Integrating APIs (OpenAI, Hugging Face, Ollama, etc.).
  - Prompt engineering fundamentals.
  - Building Retrieval-Augmented Generation (RAG) applications.
  - Developing AI agents.
  - A first taste of **LLMOps** concepts.

Once this playlist is completed, learners will be well-prepared to dive into **dedicated playlists** on **Prompt Engineering**, **RAG & Advanced RAG Techniques**, and more.

---

## II. What is LangChain?

**LangChain** is an **open-source framework** for building applications powered by large language models (LLMs). It provides both **modular components** and **end-to-end tools** to simplify development.

### Why LangChain?

- **Universal LLM Support:** Works with most LLMs (OpenAI, Anthropic, Google, open-source models).
- **Simplified Development:** Concepts like _Chains_ allow complex app design with minimal code.
- **Extensive Integrations:** Easy connectors to databases, APIs, vector stores, and deployment endpoints.
- **Free & Open Source:** Rapidly evolving, with frequent releases and active community support.
- **All-in-One for GenAI:** From chatbots → RAG systems → AI agents.

**Use Cases:**

- Chatbots and conversational systems.
- Q&A platforms.
- RAG-based pipelines.
- Multi-tool AI agents.

---

## III. Curriculum Structure

The playlist is designed around **three main parts**, covering **LangChain v0.3** (latest stable version).

> Goal: Cover the **most important 80%** of LangChain functionality — enough to build real-world apps while ensuring adaptability for future versions.

---

### Part 1: Fundamentals of LangChain

This is the **foundation**—the conceptual and practical base on which everything else is built.

| Lesson | Title / Focus Area | Core Outcome |
| ------ | ------------------ | ------------ |
| 1 | Introduction to Generative AI | Understand what generative AI is and why it matters. |
| 2 | The Six Core Components of LangChain | Conceptual model of Models, Prompts, Chains, Indexes, Memory, Agents. |
| 3 | LangChain Components & Setup | Environment, primitives, runnable composition basics. |
| 4 | Models & Prompt Foundations | Model interfaces, selection, and prompt engineering principles. |
| 5 | Output Parsing | Methods to structure LLM output (parsers, schema, validation). |
| 6 | Runnables & LCEL | Execution model, composition with `|`, streaming & async patterns. |
| 7 | Chains | Designing multi-step deterministic workflows. |
| 8 | Memory | Conversation state management and persistence strategies. |

---

### Part 2: Retrieval-Augmented Generation (RAG)

Once fundamentals are clear, the focus shifts to **RAG applications**.

| Lesson | Focus Area | Core Outcome |
| ------ | ---------- | ------------ |
| 9 | Document Loaders | Ingest diverse external data into pipelines. |
| 10 | Text Splitters | Apply chunking strategies for balanced recall & cost. |
| 11 | Embeddings | Represent text semantically for retrieval. |
| 12 | Vector Databases | Store & query embeddings efficiently. |
| 13 | Retrievers | Compose retrieval logic (filters, hybrids, re-ranking). |
| 14 | Build a RAG App | End-to-end grounded question answering system. |

---

### Part 3: AI Agents

The final stage focuses on **autonomous AI agents**.

| Lesson | Focus Area | Core Outcome |
| ------ | ---------- | ------------ |
| 15 | Tools & Toolkits | Define and expose external capabilities safely. |
| 16 | Tool Calling | Structured invocation & decision orchestration. |
| 17 | Build an AI Agent | Assemble a multi-tool reasoning assistant. |

---

## IV. Focus Areas & Learning Approach

### Focus Areas

1. **Latest Version:** Entirely based on **LangChain v0.3**.
2. **Conceptual Clarity:** Explain both _how_ and _why_ with mental models.
3. **Future-Proof Learning:** Emphasize core abstractions (Runnables, Chains) for adaptability.
4. **Practical Coverage:** Balance theory + incremental hands-on builds.

### Timeline

- **Release Frequency:** ~2 lessons per week.
- **Duration:** 17 comprehensive lessons.
- **Completion:** ≈ 8 weeks.

---

## V. Hands-on Projects

Alongside the curriculum, you'll build **4 mini-projects** and **1 capstone project**:

### Mini-Projects

1. **Simple Q&A Chatbot** (After lessons 1–6)
2. **Document Summarization Tool** (After lessons 7–9)
3. **RAG-powered Knowledge Base** (After lessons 10–14)
4. **Multi-tool AI Assistant** (After lessons 15–16)

### Capstone Project

**Enterprise RAG System** – A production-ready, multi-tenant RAG application demonstrating all learned concepts.

---

## VI. Road Ahead

After completing the LangChain curriculum, learners will be equipped to dive deeper into:

- **Prompt Engineering** (advanced techniques).
- **Advanced RAG Architectures** (hybrid retrievers, caching, knowledge graphs).
- **LLM Ops** (deployment, monitoring, scaling).
- **Agentic Systems** (multi-agent collaboration, planning, reasoning).

---

This curriculum is designed to balance **breadth + depth**—ensuring learners can not only build with LangChain today but also **adapt to future changes** in the rapidly evolving GenAI ecosystem.

## Getting Started

Ready to begin your journey? Start with [**Lesson 1: Introduction to Generative AI**]({{ "/lessons/01-intro-to-generative-ai/" | relative_url }}) or explore our [**Project Overview**]({{ "/projects/" | relative_url }}) to see what you'll be building.

**Prerequisites**: Basic Python knowledge and enthusiasm for AI!

---

**Next Steps:**

- [View All Lessons]({{ "/posts/" | relative_url }})
- [Explore Projects]({{ "/projects/" | relative_url }})
- [Get Started with Lesson 1]({{ "/lessons/01-intro-to-generative-ai/" | relative_url }})
