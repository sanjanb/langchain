---
layout: Post
title: About
permalink: /about/
content-type: eg
---

I'm **Sanjan B M**an engineer and writer focused on making AI concepts practical and accessible.

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

Questions, feedback, or collaboration ideas? Feel free to reach out.

---

**Ready to start?**

- [View Curriculum](/langchain/curriculum/) for the complete learning path
- [Explore Projects](/langchain/projects/) to build hands-on
- [See Capstone](/langchain/projects/capstone-enterprise-rag/) for the big picture

<style>
/* Professional, sleek styling */
body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}

/* Clean table design */
table {
    width: 100%;
    border-collapse: collapse;
    margin: 32px 0;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

table td {
    padding: 16px 20px;
    border-bottom: 1px solid #f1f5f9;
    vertical-align: top;
    line-height: 1.6;
}

table td:first-child {
    font-weight: 600;
    white-space: nowrap;
    width: 140px;
    background: #f8fafc;
    color: #334155;
    border-right: 1px solid #e2e8f0;
}

table tr:last-child td {
    border-bottom: none;
}

/* Elegant dividers */
hr {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%);
    margin: 48px 0;
}

/* Typography refinements */
h1 {
    color: #1e293b;
    font-weight: 700;
    letter-spacing: -0.025em;
}

h2 {
    color: #334155;
    font-weight: 600;
    margin-top: 48px;
    margin-bottom: 24px;
}

h3 {
    color: #475569;
    font-weight: 600;
    margin-top: 32px;
}

ul {
    padding-left: 0;
    list-style: none;
}

li {
    margin: 12px 0;
    line-height: 1.7;
    position: relative;
    padding-left: 20px;
}

li::before {
    content: '•';
    color: #64748b;
    position: absolute;
    left: 0;
    font-weight: bold;
}

/* Professional links */
a {
    color: #2563eb;
    text-decoration: none;
    transition: all 0.2s ease;
    border-bottom: 1px solid transparent;
}

a:hover {
    color: #1d4ed8;
    border-bottom-color: #1d4ed8;
}

/* Sleek blockquotes */
blockquote {
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    border-left: 3px solid #2563eb;
    margin: 32px 0;
    padding: 20px 24px;
    border-radius: 0 6px 6px 0;
    font-style: normal;
    color: #475569;
    position: relative;
}

blockquote::before {
    content: '"';
    font-size: 3em;
    color: #cbd5e1;
    position: absolute;
    top: -10px;
    left: 10px;
    font-family: Georgia, serif;
}

blockquote p {
    margin: 0;
    font-weight: 500;
    position: relative;
}

/* Professional navigation buttons */
p > a {
    display: inline-block;
    margin: 6px 12px 6px 0;
    padding: 12px 20px;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    color: #475569;
    transition: all 0.2s ease;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

p > a:hover {
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    border-color: #cbd5e1;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    color: #334155;
}

/* Ordered list improvements */
ol {
    padding-left: 0;
    counter-reset: step-counter;
}

ol li {
    counter-increment: step-counter;
    padding-left: 40px;
}

ol li::before {
    content: counter(step-counter);
    position: absolute;
    left: 0;
    top: 0;
    background: #2563eb;
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
}

/* Responsive design */
@media (max-width: 768px) {
    p > a {
        display: block;
        margin: 8px 0;
        text-align: center;
    }
    
    table td:first-child {
        width: 100px;
        font-size: 13px;
    }
    
    table td {
        padding: 12px 16px;
    }
    
    blockquote {
        margin: 24px 0;
        padding: 16px 20px;
    }
    
    hr {
        margin: 32px 0;
    }
}

/* Subtle animations */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

table, blockquote {
    animation: fadeIn 0.6s ease-out;
}
</style>
