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

_Philosophy: Clean, fast, accessible content that focuses on learning rather than distracting effects._

---

**Ready to start?**

- [View Curriculum](/langchain/curriculum/) for the complete learning path
- [Explore Projects](/langchain/projects/) to build hands-on
- [See Capstone](/langchain/projects/capstone-enterprise-rag/) for the big picture

<style>
/* Professional, sleek styling */
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.7;
    color: #2c3e50;
}

h1, h2, h3 {
    color: #1a252f;
    font-weight: 600;
    letter-spacing: -0.025em;
}

h1 {
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
    border-bottom: 3px solid #3498db;
    padding-bottom: 0.5rem;
}

h2 {
    font-size: 1.5rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
}

h3 {
    font-size: 1.25rem;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
}

/* Sleek table design */
table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #e8ecf4;
}

table td {
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid #f1f4f8;
    vertical-align: top;
    transition: background-color 0.2s ease;
}

table tr:hover td {
    background-color: #f8fafc;
}

table td:first-child {
    font-weight: 600;
    white-space: nowrap;
    width: 140px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-right: 1px solid #e8ecf4;
}

table tr:hover td:first-child {
    background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
}

/* Clean horizontal rules */
hr {
    border: none;
    height: 2px;
    background: linear-gradient(90deg, #3498db, #2ecc71);
    margin: 3rem 0;
    border-radius: 1px;
}

/* Professional lists */
ul {
    padding-left: 1.5rem;
}

li {
    margin: 0.75rem 0;
    line-height: 1.7;
    position: relative;
}

li::marker {
    color: #3498db;
}

/* Sophisticated links */
a {
    color: #3498db;
    text-decoration: none;
    transition: all 0.2s ease;
    font-weight: 500;
}

a:hover {
    color: #2980b9;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
}

/* Elegant blockquotes */
blockquote {
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    border-left: 4px solid #3498db;
    margin: 2rem 0;
    padding: 1.5rem 2rem;
    border-radius: 0 8px 8px 0;
    font-style: italic;
    color: #4a5568;
    position: relative;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

blockquote::before {
    content: '"';
    position: absolute;
    top: -5px;
    left: 15px;
    font-size: 3rem;
    color: #3498db;
    opacity: 0.3;
    font-family: Georgia, serif;
}

blockquote p {
    margin: 0;
    font-size: 1.1rem;
}

blockquote strong {
    color: #2c3e50;
    font-weight: 600;
}

/* Professional call-to-action buttons */
p > a {
    display: inline-block;
    margin: 0.5rem 1rem 0.5rem 0;
    padding: 0.875rem 1.75rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 8px;
    text-decoration: none;
    font-size: 0.925rem;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.25);
    letter-spacing: 0.025em;
}

p > a:hover {
    background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.35);
    color: white;
    text-decoration: none;
}

/* Typography refinements */
p {
    margin: 1rem 0;
    line-height: 1.8;
}

strong {
    font-weight: 600;
    color: #2c3e50;
}

em {
    font-style: italic;
    color: #4a5568;
}

/* Responsive design */
@media (max-width: 768px) {
    h1 {
        font-size: 1.875rem;
    }
    
    table td {
        padding: 1rem;
    }
    
    table td:first-child {
        width: 120px;
        font-size: 0.875rem;
    }
    
    blockquote {
        margin: 1.5rem 0;
        padding: 1rem 1.5rem;
    }
    
    p > a {
        display: block;
        margin: 0.75rem 0;
        text-align: center;
    }
}

@media (max-width: 480px) {
    table td:first-child {
        width: 100px;
        padding: 0.75rem;
    }
    
    blockquote::before {
        font-size: 2rem;
        top: 0;
    }
}
</style>
