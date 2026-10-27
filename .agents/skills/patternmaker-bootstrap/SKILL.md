---
name: patternmaker-bootstrap
description: Discover missing patterns in an existing repository and add only the ones that are high-value and genuinely evidence-backed.
---

# patternmaker-bootstrap

You are extending the project’s `.mex/` pattern library by discovery.

Do not install or use the `mex` binary. Work only with the markdown scaffold already present under `.mex/`.

## Goal

Find project-specific patterns that are currently missing, then add only the ones that are worth keeping. Prefer evidence from real code, tests, docs, and git history over speculation.

## Workflow

### Phase 1 — Inventory what already exists

1. Read `.mex/ROUTER.md` and current project state.
2. Read `.mex/patterns/INDEX.md` and `patterns/README.md`.
3. Skim existing patterns so you do not duplicate them.

### Phase 2 — Mine sources

Search for repeated tasks, failure modes, and verify steps in:

- README files and docs
- release notes and changelogs
- recent meaningful commits
- tests and validation scripts
- TODOs/comments describing project gotchas
- existing `.mex/context/*.md` files

### Phase 3 — Decide what is worth a pattern

Create a new pattern only when at least two of these are true:

- the task is common or risky,
- there are ordering constraints or non-obvious steps,
- there are project-specific gotchas,
- a short verify checklist would catch real mistakes,
- the knowledge currently lives only in prose or tribal memory.

Skip anything generic or low-value.

### Phase 4 — Author patterns

For each approved pattern:

- use the exact format from `.mex/patterns/README.md`,
- keep the guidance tight and actionable,
- end with the standard `Update Scaffold` checklist,
- name the file with a descriptive kebab-case name.

### Phase 5 — Light maintenance

- update `patterns/INDEX.md` for every new pattern,
- patch context files when the new pattern exposes a gap,
- refresh the router state only when it materially improves project navigation.

## Best practices

- Keep it concise and evidence-based.
- Prefer fewer strong patterns over many weak ones.
- Validate all suggestions against the actual repository.
- Preserve historical decisions and keep the system markdown-only.

## Install

```bash
npx skills add zloeber/patternmaker --skill patternmaker-bootstrap
```

## Direct adoption

```bash
curl -fsSL https://raw.githubusercontent.com/zloeber/patternmaker/main/.agents/skills/patternmaker-bootstrap/SKILL.md
```
