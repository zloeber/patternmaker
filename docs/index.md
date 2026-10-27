---
layout: default
title: patternmaker skills
---

# patternmaker skills

This repository packages the project-aware development workflow skills that help an AI agent discover how a project actually works, capture reusable patterns, and keep the project knowledge current without relying on fragile chat memory.

## Why this exists

The goal is simple: give each repo a tiny, always-loaded scaffold that teaches the agent where to start, what context matters, and which reusable tasks deserve a pattern. Instead of making the agent rediscover the architecture every session, the skill installs a lightweight project memory layer that grows as real work happens.

This approach is already being used in the `zloeber/complexity-eater` project as a practical example of pattern-driven, context-aware development.

## Skill map

<section>
  <svg viewBox="0 0 820 300" width="100%" role="img" aria-label="Patternmaker skill flow diagram">
    <rect x="30" y="40" width="170" height="80" rx="10" fill="#e8f0ff" stroke="#3b82f6" stroke-width="2"/>
    <text x="115" y="87" text-anchor="middle" font-size="22" font-family="sans-serif" fill="#111827">Target repo</text>

    <path d="M200 80 H290" stroke="#3b82f6" stroke-width="4" fill="none" marker-end="url(#arrow)"/>
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto">
        <path d="M0,0 L10,4 L0,8 z" fill="#3b82f6"/>
      </marker>
    </defs>

    <rect x="290" y="40" width="220" height="80" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
    <text x="400" y="87" text-anchor="middle" font-size="22" font-family="sans-serif" fill="#111827">Install skill</text>

    <path d="M510 80 H590" stroke="#10b981" stroke-width="4" fill="none" marker-end="url(#arrowGreen)"/>
    <defs>
      <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto">
        <path d="M0,0 L10,4 L0,8 z" fill="#10b981"/>
      </marker>
    </defs>

    <rect x="590" y="40" width="200" height="80" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
    <text x="690" y="87" text-anchor="middle" font-size="22" font-family="sans-serif" fill="#111827">.mex scaffold</text>

    <rect x="170" y="170" width="220" height="80" rx="10" fill="#f3e8ff" stroke="#8b5cf6" stroke-width="2"/>
    <text x="280" y="217" text-anchor="middle" font-size="22" font-family="sans-serif" fill="#111827">Patterns</text>

    <rect x="430" y="170" width="220" height="80" rx="10" fill="#fff1f2" stroke="#ef4444" stroke-width="2"/>
    <text x="540" y="217" text-anchor="middle" font-size="22" font-family="sans-serif" fill="#111827">Session flow</text>

    <path d="M400 120 L400 170" stroke="#8b5cf6" stroke-width="4" fill="none" marker-end="url(#arrowPurple)"/>
    <defs>
      <marker id="arrowPurple" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto">
        <path d="M0,0 L10,4 L0,8 z" fill="#8b5cf6"/>
      </marker>
    </defs>

    <path d="M420 120 L420 170" stroke="#ef4444" stroke-width="4" fill="none" marker-end="url(#arrowRed)"/>
    <defs>
      <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto">
        <path d="M0,0 L10,4 L0,8 z" fill="#ef4444"/>
      </marker>
    </defs>
  </svg>
</section>

## Included skills

- `patternmaker` — creates a project-local `.mex/` routing layer and starter pattern library.
- `patternmaker-bootstrap` — discovers missing patterns in an existing repo and adds only the ones worth keeping.

## Quick install

```bash
npx skills add zloeber/patternmaker --skill patternmaker
```

To install the bootstrap flow for an existing repo that already has a `.mex/` scaffold:

```bash
npx skills add zloeber/patternmaker --skill patternmaker-bootstrap
```

If you want to consume a raw skill file directly:

```bash
curl -fsSL https://raw.githubusercontent.com/zloeber/patternmaker/main/.agents/skills/patternmaker/SKILL.md
```

## Example workflow

```text
1. Install the skill into the repo you are working in.
2. Read .mex/ROUTER.md before starting the session.
3. Open the matching pattern in .mex/patterns/INDEX.md.
4. Fix the real issue and then run the GROW step.
5. Commit the improvement back into the scaffold so future sessions inherit it.
```

## What the scaffold gives you

- fewer repeated explanations,
- faster context loading,
- higher-confidence patterns for common tasks,
- a durable project memory that grows from real work.

## Real world use case

A practical example of this pattern-based workflow is the `complexity-eater` project:

- GitHub: https://github.com/zloeber/complexity-eater

The project demonstrates how a repository can keep lightweight routing, context, and evolving patterns close to the code instead of hiding them in chat transcripts.

## Design principles

- Keep the system Markdown-only.
- Prefer evidence from the repo over generic guidance.
- Add patterns only when they reduce recurring mistakes or uncertainty.
- Maintain the scaffold with the same standards as the code itself.
