---
layout: default
title: "Home"
---

# Welcome to D3adshot’s Blog

This blog documents my journey from networking fundamentals to elite-level offensive security.

## What You’ll Find Here

- **CCNA** — Notes, labs, and gotchas as I prep for certification.
- **TryHackMe Walkthroughs** — Step-by-step pwns with clear logic.
- **CCNP Security** — Diving deeper into network defense and architecture.
- **OSCP Grind** — My road to becoming a certified Red Teamer.

## Why This Blog?

I'm not here to flex. I'm here to track my growth, help others avoid my mistakes, and build a solid presence in the cyber community.

---

## Latest Posts

<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a> — <small>{{ post.date | date: "%b %-d, %Y" }}</small>
  </li>
{% endfor %}
</ul>

> *"Learn. Hack. Repeat."*
