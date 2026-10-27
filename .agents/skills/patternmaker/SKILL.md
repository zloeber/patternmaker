---
name: patternmaker
description: Create a lightweight .mex router, context files, and reusable project patterns for any repository.
---

# patternmaker

Install a self-updating development pattern router into this existing project.
Use only ordinary Markdown. Do not install or depend on the mex binary or any external CLI.

## Goal

Agents start every session from a tiny always-loaded surface, route through a single high-signal router, load only the context and patterns needed for the current task, then grow the scaffold from real work so future sessions inherit the knowledge.

Create this structure (merge carefully if anything similar already exists):

```text
.mex/
├── AGENTS.md
├── ROUTER.md
├── context/
│   ├── architecture.md
│   ├── stack.md
│   ├── conventions.md
│   ├── decisions.md
│   └── setup.md
└── patterns/
    ├── INDEX.md
    ├── README.md
    └── <starter patterns>
```

Also ensure the root always-loaded file used by this repo’s AI tools (AGENTS.md, CLAUDE.md, .cursorrules, etc.) contains the instruction:

> Start every session by reading .mex/ROUTER.md before any other work.

## Workflow

### Pass 1 — Explore

Read the real codebase: README, dependency files, entry points, folder structure, and a few representative files from each major layer. Prefer primary sources over documentation.

### Pass 2 — Populate context

Write five concise files with frontmatter and project-specific content:

- `architecture.md` — major components, boundaries, and request/data flows
- `stack.md` — languages, frameworks, libraries, and runtime/build tools
- `conventions.md` — naming, layout, testing, logging, and error-handling patterns in the repo
- `decisions.md` — historical and current architectural decisions; keep old entries and mark superseded ones
- `setup.md` — install, run, test, lint, and common environment variables

### Pass 3 — Write the anchors

Create `.mex/AGENTS.md` and `.mex/ROUTER.md` with a short project summary, non-negotiables, real commands, and the GROW contract.

### Pass 4 — Pattern system

Write `.mex/patterns/README.md` and `.mex/patterns/INDEX.md` with a small set of project-specific starter patterns. Each pattern should include frontmatter and sections for Context, Steps, Gotchas, Verify, Debug, and Update Scaffold.

### Pass 5 — Finish and maintain

Make sure the scaffold remains concise and accurate, with useful edges and minimal invented facts. Update the router after meaningful work so the next session starts from a current project state.

## Best practices

- Prefer evidence from the real repo over assumptions.
- Keep the scaffold small, specific, and maintainable.
- Add patterns only when they solve a real repeated problem.
- Preserve historical decisions and update the current state after real work.
- Keep the whole system markdown-only.

## Install

```bash
npx skills add zloeber/patternmaker --skill patternmaker
```

## Direct adoption

```bash
curl -fsSL https://raw.githubusercontent.com/zloeber/patternmaker/main/.agents/skills/patternmaker/SKILL.md
```
