---
layout: Post
title: About
permalink: /about/
content-type: eg
---

I'm **Sanjan B M** an engineer and writer focused on making AI concepts practical and accessible.

My areas of interest:

- Generative AI systems and application architecture
- Learning frameworks that build durable understanding
- Clear abstractions over implementation complexity

I believe in learning that compounds across domains rather than chasing trends.

> _"The best way to understand AI is to build with it."_

---

## About This Site

This is a structured learning path for building real applications with **LangChain** and modern LLM tooling. The focus is on developing precise conceptual understanding and building production-ready systems step by step.

> **Why this course exists:** Most AI tutorials teach you to copy-paste code. This course teaches you to _think_ in AI patterns and build systems that scale.

### Learning Philosophy

- **Clarity over novelty** – Fewer concepts, deeply understood
- **Execution awareness** – Understanding how components actually work together
- **Precise naming** – Distinguishing tools vs. agents, prompts vs. templates
- **Progressive building** – Start concrete, then generalize
- **Testable components** – Every piece should be reusable and evaluable

---

## What You'll Find

| **Curriculum** | Sequenced path from fundamentals → retrieval → agents |
| **Projects** | Guided builds reinforcing core patterns |
| **Capstone** | Enterprise RAG system integrating all concepts |

> **Learning outcome:** By the end, you'll think like an AI engineer, not just follow tutorials.

### Course Structure

**Part 1: Fundamentals**  
Components, models, prompts, parsing, chains, memory

**Part 2: Retrieval (RAG)**  
Loaders, embeddings, vector stores, end-to-end RAG systems

**Part 3: Agents**  
Tools, reasoning, structured workflows, autonomous systems

**Projects**  
Chatbot → Summarizer → Knowledge Base → Assistant → Enterprise RAG

---

## How to Use This Site

1. **Start with curriculum** if you want the complete path
2. **Preview lessons** by reading "Why this matters" sections first
3. **Build immediately** – complete projects after prerequisite lessons
4. **Refactor later** – revisit code once you learn new abstractions
5. **Keep notes** – maintain a personal glossary for precision

---

## Connect

Let's build the future of AI together.

- **Website**: [sanjanb.github.io](https://sanjanb.github.io/)
- **LinkedIn**: [linkedin.com/in/sanjan-bm](https://www.linkedin.com/in/sanjan-bm/)
- **GitHub**: [github.com/sanjanb](https://github.com/sanjanb)

Questions, feedback, or collaboration ideas? Feel free to reach out.---

## Technical Notes

Built with Jekyll. Markdown content with minimal dependencies. Emphasis on clarity and stability over visual effects.

*Philosophy: Clean, fast, accessible content that focuses on learning rather than distracting effects.*

---

**Ready to start?**

- [View Curriculum](/langchain/curriculum/) for the complete learning path
- [Explore Projects](/langchain/projects/) to build hands-on
- [See Capstone](/langchain/projects/capstone-enterprise-rag/) for the big picture

<style>
/* Minimal styling for clean presentation */
table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    background: #fafafa;
    border-radius: 6px;
    overflow: hidden;
}

table td {
    padding: 12px 16px;
    border-bottom: 1px solid #eee;
    vertical-align: top;
}

table td:first-child {
    font-weight: 600;
    white-space: nowrap;
    width: 140px;
    background: #f5f5f5;
}

hr {
    border: none;
    border-top: 1px solid #eee;
    margin: 40px 0;
}

ul {
    padding-left: 20px;
}

li {
    margin: 8px 0;
    line-height: 1.6;
}

a {
    color: #0066cc;
    text-decoration: none;
    transition: color 0.2s ease;
}

a:hover {
    color: #0052a3;
    text-decoration: underline;
}

/* Engaging blockquotes */
blockquote {
    background: linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%);
    border-left: 4px solid #0066cc;
    margin: 20px 0;
    padding: 16px 20px;
    border-radius: 0 6px 6px 0;
    font-style: italic;
    color: #444;
}

blockquote p {
    margin: 0;
}

/* Clean link styling for bottom section */
p > a {
    display: inline-block;
    margin: 5px 15px 5px 0;
    padding: 10px 18px;
    background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
    border-radius: 6px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s ease;
    border: 1px solid #ddd;
}

p > a:hover {
    background: linear-gradient(135deg, #e5e5e5 0%, #d8d8d8 100%);
    text-decoration: none;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Subtle emoji spacing */
li:has(emoji), td:has(emoji) {
    line-height: 1.7;
}

/* Responsive design */
@media (max-width: 600px) {
    p > a {
        display: block;
        margin: 8px 0;
        text-align: center;
    }
    
    table td:first-child {
        width: 120px;
        font-size: 14px;
    }
    
    blockquote {
        margin: 15px 0;
        padding: 12px 16px;
    }
}
</style>
