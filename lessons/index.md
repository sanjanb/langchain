---
layout: Post
title: "All Lessons"
permalink: /lessons/
content-type: static
---

# All Lessons

Browse the full LangChain learning sequence. Lessons are listed in recommended order.

{% assign lessons = site.posts | where: "content-type", "lesson" | sort: "lesson-number" %}

<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Summary</th>
      <th>Tags</th>
    </tr>
  </thead>
  <tbody>
  {% for l in lessons %}
    <tr>
      <td>{{ l.lesson-number }}</td>
      <td><a href="{{ l.url | relative_url }}">{{ l.title }}</a></td>
      <td>
        {%- if l.excerpt -%}
          {{ l.excerpt | strip_html | truncate: 140 }}
        {%- else -%}
          Introductory material.
        {%- endif -%}
      </td>
      <td>
        {%- for t in l.tags -%}
          <code style="font-size:12px;">{{ t }}</code>{% unless forloop.last %} {% endunless %}
        {%- endfor -%}
      </td>
    </tr>
  {% endfor %}
  </tbody>
</table>

---

Need a starting point? Begin with [Lesson 1]({{ "/lessons/01-intro-to-generative-ai/" | relative_url }}) or review the [Curriculum Overview]({{ "/curriculum/" | relative_url }}).
