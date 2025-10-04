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

This is the **foundation** — around **7–8 lessons** — on which everything else is built.

| Lesson                 | Focus Area                                                           |
| ---------------------- | -------------------------------------------------------------------- |
| 1. LangChain Overview  | Why use LangChain, architecture, and where it fits in the ecosystem. |
| 2. Components          | Overview of all major LangChain components.                          |
| 3. Models              | How to integrate with different LLMs and get responses.              |
| 4. Prompts             | Prompt templates, prompt types, and techniques.                      |
| 5. Output Parsing      | Techniques for structuring and parsing LLM outputs.                  |
| 6. Runnables & LCEL/CL | Core execution model of LangChain.                                   |
| 7. Chains              | Deep dive into building multi-step workflows.                        |
| 8. Memory              | Adding conversational memory for chatbots and assistants.            |

---

### Part 2: Retrieval-Augmented Generation (RAG)

Once fundamentals are clear, the focus shifts to **RAG applications**.

| Lesson               | Focus Area                                      |
| -------------------- | ----------------------------------------------- |
| 9. Document Loaders  | How to bring external knowledge into LangChain. |
| 10. Text Splitters   | Chunking strategies for LLM efficiency.         |
| 11. Embeddings       | Representing text as vectors for retrieval.     |
| 12. Vector Databases | Using stores like Pinecone, FAISS, Chroma.      |
| 13. Retrievers       | Building flexible retrieval pipelines.          |
| 14. Build a RAG App  | End-to-end RAG application project.             |

---

### Part 3: AI Agents

The final stage focuses on **autonomous AI agents**.

| Lesson                | Focus Area                                                |
| --------------------- | --------------------------------------------------------- |
| 15. Tools & Toolkits  | Using APIs and utilities within LangChain.                |
| 16. Tool Calling      | Concepts of structured tool execution.                    |
| 17. Build an AI Agent | Final project: Create an AI agent combining all concepts. |

---

## IV. Focus Areas & Learning Approach

### Focus Areas

1. **Latest Version:** Entirely based on **LangChain v0.3** (not outdated v0.1 or v0.2).
2. **Conceptual Clarity:** Explain both _how_ and _why_, including behind-the-scenes details.
3. **Future-Proof Learning:** Emphasize core concepts like _Runnables_ and _Chains_ so learners can adapt to future updates.
4. **Practical Coverage:** Balance theory + hands-on demos.

### Timeline

- **Release Frequency:** Approximately 2 lessons per week.
- **Duration:** 17 comprehensive lessons.
- **Completion:** Around **8 weeks (2 months)** for the full series.

---

## V. Hands-on Projects

Alongside the curriculum, you'll build **4 mini-projects** and **1 capstone project**:

### Mini-Projects

1. **Simple Q&A Chatbot** (After lessons 1-6)
2. **Document Summarization Tool** (After lessons 7-9)
3. **RAG-powered Knowledge Base** (After lessons 10-14)
4. **Multi-tool AI Assistant** (After lessons 15-16)

### Capstone Project

**Enterprise RAG System** - A production-ready, multi-tenant RAG application demonstrating all learned concepts.

---

## VI. Road Ahead

After completing the LangChain curriculum, learners will be equipped to dive deeper into:

- **Prompt Engineering** (advanced techniques).
- **Advanced RAG Architectures** (hybrid retrievers, caching, knowledge graphs).
- **LLM Ops** (deployment, monitoring, scaling).
- **Agentic Systems** (multi-agent collaboration, planning, reasoning).

---

This curriculum is designed to balance **breadth + depth** — ensuring learners can not only build with LangChain today but also **adapt to future changes** in the rapidly evolving GenAI ecosystem.

## Getting Started

Ready to begin your journey? Start with [**Lesson 1: Introduction to Generative AI**](/lessons/01-intro-to-generative-ai/) or explore our [**Project Overview**](/projects/) to see what you'll be building.

**Prerequisites**: Basic Python knowledge and enthusiasm for AI!

---

**Next Steps:**

- [View All Lessons](/posts/)
- [Explore Projects](/projects/)
- [Get Started with Lesson 1](/lessons/01-intro-to-generative-ai/)

### **Advanced Applications Phase** (Lessons 14-19)

Explore advanced topics, production deployment, and cutting-edge techniques.

---

## Complete Curriculum

### **Foundation Phase**

#### [[Lesson 1: Introduction to Generative AI]]

- What is Generative AI?
- Types of Generative Models
- Real-world Applications
- Industry Impact and Future Trends

#### [[Lesson 2: Understanding Large Language Models]]

- How LLMs Work
- Transformer Architecture Basics
- Popular LLM Models (GPT, Claude, Llama)
- Capabilities and Limitations

#### [[Lesson 3: Introduction to LangChain]]

- What is LangChain?
- Core Philosophy and Design Principles
- Installation and Setup
- Your First LangChain Application

#### [[Lesson 4: LangChain Architecture Overview]]

- Components and Modules
- Data Flow in LangChain
- Key Abstractions
- Development Patterns

#### [[Lesson 5: Working with Language Models]]

- LLM Integration in LangChain
- Model Selection and Configuration
- Prompt Engineering Basics
- Handling API Keys and Authentication

#### [[Lesson 6: Prompt Engineering Fundamentals]]

- Prompt Design Principles
- Few-shot Learning
- Chain-of-Thought Prompting
- Prompt Templates in LangChain

---

### **Core Skills Phase**

#### [[Lesson 7: Chains - Basic Building Blocks]]

- Understanding Chains
- LLMChain and Sequential Chains
- Router Chains
- Custom Chain Development

#### [[Lesson 8: Memory and Conversation Management]]

- Types of Memory in LangChain
- Conversation Buffer Memory
- Conversation Summary Memory
- Persistent Memory Solutions

#### [[Lesson 9: Document Processing and Text Splitters]]

- Loading Documents
- Text Splitting Strategies
- Handling Different File Formats
- Preprocessing Best Practices

#### [[Lesson 10: Embeddings and Vector Stores]]

- Understanding Embeddings
- Creating and Using Embeddings
- Vector Database Integration
- Similarity Search Techniques

#### [[Lesson 11: Retrieval-Augmented Generation (RAG)]]

- RAG Architecture and Benefits
- Building Basic RAG Systems
- Advanced Retrieval Strategies
- Evaluation and Optimization

#### [[Lesson 12: Agents and Tool Integration]]

- Understanding AI Agents
- Tool Definition and Integration
- Agent Types and Strategies
- Custom Tool Development

#### [[Lesson 13: Output Parsers and Data Formatting]]

- Structured Output Generation
- Pydantic Integration
- Custom Output Parsers
- Error Handling and Validation

---

### **Advanced Applications Phase**

#### [[Lesson 14: Advanced RAG Techniques]]

- Multi-modal RAG
- Hybrid Search Strategies
- RAG with Knowledge Graphs
- Performance Optimization

#### [[Lesson 15: Multi-Agent Systems]]

- Agent Collaboration Patterns
- Hierarchical Agent Architectures
- Communication Protocols
- Conflict Resolution

#### [[Lesson 16: LangChain Expression Language (LCEL)]]

- LCEL Syntax and Benefits
- Building Complex Pipelines
- Parallel Processing
- Streaming and Async Operations

#### [[Lesson 17: Production Deployment]]

- Deployment Strategies
- Monitoring and Logging
- Performance Optimization
- Security Considerations

#### [[Lesson 18: Evaluation and Testing]]

- LLM Application Testing
- Evaluation Metrics
- A/B Testing Strategies
- Quality Assurance Workflows

#### [[Lesson 19: Advanced Topics and Future Trends]]

- Fine-tuning with LangChain
- Multi-modal Applications
- Edge Deployment
- Emerging Patterns and Best Practices

---

## Hands-on Projects

### **Mini Projects** (Build alongside lessons)

- **Project 1**: Simple Q&A Chatbot
- **Project 2**: Document Summarization Tool
- **Project 3**: RAG-powered Knowledge Base
- **Project 4**: Multi-tool AI Assistant

### **Capstone Project**

- **Enterprise RAG System**: Build a production-ready, multi-modal RAG system with advanced features

---

## Learning Outcomes

By completing this curriculum, you will be able to:

**Understand** the fundamentals of Generative AI and LLMs  
**Build** sophisticated AI applications using LangChain  
**Implement** RAG systems for knowledge-intensive tasks  
**Deploy** production-ready AI solutions  
**Evaluate** and optimize LLM application performance  
**Design** multi-agent systems for complex workflows

---

## Getting Started

1. **Prerequisites**: Basic Python programming knowledge
2. **Setup**: Follow [[Lesson 3]] for environment setup
3. **Practice**: Complete exercises in each lesson
4. **Build**: Work on mini-projects to reinforce learning
5. **Apply**: Implement the capstone project

---

## 🤝 Contributing

This is an open-source curriculum! Help us improve by:

- Reporting issues or suggesting improvements
- Contributing additional examples or exercises
- Sharing your project implementations
- Creating supplementary content

**Happy Learning! **
