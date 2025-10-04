---
layout: Post
title: "Lesson 2: The Six Core Components of LangChain"
permalink: /lessons/02-introduction-to-langchain/
lesson-number: 2
tags: [lesson, foundation, langchain, components, overview]
content-type: notes
published: true
hide_title: true
---

<!-- Keep one H1 for SEO; layout suppresses duplicate via hide_title -->

# Lesson 2 – The Six Core Components of LangChain

{% include lesson-progress.html %}

{% include callout.html type="info" title="Why this lesson matters" %}
Before we start wiring code in LangChain, we need a mental map of the six primitives the framework is built around. Mastering these lets you assemble 80–90% of production use‑cases without guesswork.
{% endinclude %}

{% include lesson-toc.html %}

## Learning Objectives

<ul class="objective-list">
	<li><strong>Build a Mental Model:</strong> Understand how the six components interlock to form reliable LLM application pipelines.</li>
	<li><strong>Reduce Accidental Complexity:</strong> Recognize where LangChain abstracts boilerplate (prompt formatting, routing, retrieval orchestration).</li>
	<li><strong>Vendor Flexibility:</strong> See how interfaces decouple your app from individual model providers.</li>
	<li><strong>Pattern Recognition:</strong> Identify which component to reach for when solving a specific product or research need.</li>
	<li><strong>Avoid Early Pitfalls:</strong> Learn common mistakes (prompt sprawl, unbounded memory, naïve retrieval) before they cost time.</li>
</ul>

---

## Context: Why These Components Exist

When teams first experiment with LLMs, they often write ad‑hoc scripts: raw prompts, direct API calls, copy‑pasted retrieval helpers. This scales poorly. LangChain introduces <em>stable, composable building blocks</em>—so your prototype architecture doesn’t collapse under feature growth.

Key drivers:

<ul class="feature-list">
	<li><strong>Orchestration:</strong> Move data cleanly between model calls, retrieval steps, parsing, and post‑processing.</li>
	<li><strong>Abstraction:</strong> Swap providers without rewriting business logic.</li>
	<li><strong>Extensibility:</strong> Insert custom logic (guards, scoring, tracing) at predictable seams.</li>
</ul>

---

## The Six Components at a Glance

<p><strong>Models</strong> (LLMs & embeddings) • <strong>Prompts</strong> (structured instructions) • <strong>Chains</strong> (deterministic composition) • <strong>Indexes</strong> (retrieval + grounding) • <strong>Memory</strong> (state across turns) • <strong>Agents</strong> (dynamic tool‑using planners).</p>

We now dive into each with: <em>Purpose • When to Use • Common Pitfalls</em>.

---

### 1. Models (The Core Interface)

<p><strong>Purpose:</strong> Provide a unified interface around different LLM & embedding providers so you don’t rewrite glue code every time you switch vendors or modalities.</p>
<p><strong>When to Use:</strong> Anytime raw generation, classification, transformation, or semantic embedding is required.</p>
<p><strong>Common Pitfalls:</strong> Hard‑coding provider‑specific parameters; ignoring token cost monitoring; not normalizing error handling or retry strategy.</p>

Two broad model classes:

<ul class="feature-list">
	<li><strong>Chat / Completion Models:</strong> Input = text (possibly with system + messages), Output = text or tool/function call payload.</li>
	<li><strong>Embedding Models:</strong> Input = text / chunk, Output = dense vector enabling semantic similarity, clustering, reranking.</li>
</ul>

> <strong>Tip:</strong> Treat the model layer as a <em>pluggable power outlet</em>; everything else (prompt formatting, retrieval, parsing) should compose around it.

---

### 2. Prompts

<p><strong>Purpose:</strong> Shape model behavior through structured context, instructions, and examples—turning a general model into a task‑specific asset.</p>
<p><strong>When to Use:</strong> Anytime you want deterministic framing, persona control, or reproducible structure across multiple invocations.</p>
<p><strong>Common Pitfalls:</strong> Prompt sprawl (duplicated text), leaking sensitive instructions, overfitting to brittle few‑shot patterns.</p>

Core strategies:

<ol>
	<li><strong>Parameterized Templates:</strong> Insert runtime variables safely without ad‑hoc string concatenation.</li>
	<li><strong>Role / Instruction Blocks:</strong> Establish stable tone & guardrails early in the context window.</li>
	<li><strong>Few‑Shot Examples:</strong> Demonstrate ideal input→output mappings; prune aggressively to control token cost.</li>
</ol>

> <strong>Design Heuristic:</strong> If you edit the same wording in 3 places, extract a template.

---

### 3. Chains

<p><strong>Purpose:</strong> Compose deterministic pipelines—turning atomic steps (prompt → model → parser → scorer) into a reusable unit.</p>
<p><strong>When to Use:</strong> Stable flows with known structure: summarization, translation, retrieval+answering, evaluation passes.</p>
<p><strong>Common Pitfalls:</strong> Over‑nesting; hiding business logic inside opaque lambdas; ignoring observability (no tracing of intermediate steps).</p>

Patterns:

<ol>
	<li><strong>Sequential:</strong> Linear progression of transformations.</li>
	<li><strong>Parallel / Fan‑Out:</strong> Run model variants then merge / vote.</li>
	<li><strong>Conditional:</strong> Branch based on classification or tool detection.</li>
</ol>

<p>Modern LangChain (LCEL) lets you write `<code>prompt | llm | parser</code>` style pipelines—declarative and testable.</p>

---

### 4. Indexes

<p><strong>Purpose:</strong> Inject authoritative or up‑to‑date knowledge that the base model never saw during pretraining.</p>
<p><strong>When to Use:</strong> Proprietary documents, compliance corpora, product manuals, scientific archives, internal wikis.</p>
<p><strong>Common Pitfalls:</strong> Over‑splitting (fragmented semantics), under‑splitting (irrelevant padding), skipping evaluation of retrieval quality.</p>

Retrieval pipeline:

<ol>
	<li><strong>Load:</strong> Gather raw assets (PDF, HTML, DB rows).</li>
	<li><strong>Split:</strong> Chunk with semantic or token‑aware strategies.</li>
	<li><strong>Embed:</strong> Produce vector representations.</li>
	<li><strong>Store:</strong> Persist vectors (Chroma, Pinecone, Weaviate, FAISS).</li>
	<li><strong>Retrieve:</strong> Fetch top‑K relevant chunks (optionally rerank).</li>
</ol>

> <strong>Quality Loop:</strong> Evaluate retrieval separately from generation—improves grounded answer fidelity.

---

### 5. Memory

<p><strong>Purpose:</strong> Preserve useful context across turns or processing stages without resending everything.</p>
<p><strong>When to Use:</strong> Conversational assistants, multi‑step planning, personalization, iterative document refinement.</p>
<p><strong>Common Pitfalls:</strong> Unbounded growth leading to token bloat; storing sensitive data without redaction; replaying irrelevant history.</p>

Patterns:

<ul class="feature-list">
	<li><strong>Full Buffer:</strong> Simple; expensive at scale.</li>
	<li><strong>Sliding Window:</strong> Last <em>N</em> exchanges only.</li>
	<li><strong>Rolling Summary:</strong> Summarize older context + keep fresh turns.</li>
	<li><strong>Vector Memory:</strong> Semantic recall on demand.</li>
</ul>

> <strong>Tip:</strong> Treat memory as an index with a policy—not a dumping ground.

---

### 6. Agents

<p><strong>Purpose:</strong> Introduce controlled autonomy—letting the system pick tools or branches dynamically based on intermediate reasoning.</p>
<p><strong>When to Use:</strong> Multi‑tool workflows (search + retrieval + calculator), research bots, adaptive problem solving, task decomposition.</p>
<p><strong>Common Pitfalls:</strong> Unbounded loops, tool hallucination, latency explosion, lack of guardrails or cost ceilings.</p>

Loop pattern:

<ol>
	<li>Receive query / task.</li>
	<li>Plan next action.</li>
	<li>Call tool (or chain) with arguments.</li>
	<li>Observe result & update internal context.</li>
	<li>Stop when goal satisfied or max iterations hit.</li>
</ol>

> <strong>Governance:</strong> Add iteration limits, tool whitelists, and output validation for safety & cost control.

---

## Wrapping Up

These six primitives give you a vocabulary for intentional system design. In practice you will often layer: <em>retrieval (Indexes) + prompt template (Prompts) + model call (Models) + memory strategy (Memory) + optional dynamic routing (Agents)</em>, all glued via Chains or LCEL compositions.

In the next lesson we shift from concepts to implementation: environment setup, first runnable chains, and structured output patterns.

---

## Quick Reinforcement Quiz

<ul class="objective-list">
	<li><strong>1.</strong> Which component would you modify to ground a model in proprietary documents?</li>
	<li><strong>2.</strong> What’s a good early signal you should turn a script of manual model calls into a Chain?</li>
	<li><strong>3.</strong> Name one pitfall of naive memory usage.</li>
	<li><strong>4.</strong> When do Agents become overkill relative to Chains?</li>
	<li><strong>5.</strong> Which trio best describes a basic RAG flow? (a) Prompt→Model→Parser (b) Load→Split→Retrieve (c) Split→Embed→Retrieve + Inject</li>
</ul>

<div class="callout tip">
	<div class="callout-title">Reflection Prompts</div>
	<p>Pick one real problem you want to solve. Sketch (on paper) which of the six components you’d use and why. Circle uncertain areas—that’s where experimentation belongs.</p>
</div>

{% comment %} Converted above raw callout to include for consistency {% endcomment %}
{% include callout.html type="tip" title="Reflection Prompts" %}
Pick one real problem you want to solve. Sketch (on paper) which of the six components you’d use and why. Circle uncertain areas—that’s where experimentation belongs.
{% endinclude %}

---

{% include lesson-nav.html prev_url="/lessons/01-intro-to-generative-ai/" prev_text="Lesson 1 - Introduction to Generative AI" next_url="/lessons/03-langchain-components/" next_text="Lesson 3 - LangChain Components & Setup" %}
