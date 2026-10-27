# patternmaker

`patternmaker` is a dedicated `npx skills` repository for installing a lightweight project-memory scaffold into any target repository. It packages a pair of markdown-first skills that help AI agents start from the right context, follow useful project patterns, and grow the knowledge base from real work instead of memory drift.

## Why this repo exists

Large repos often fail not because the code is wrong, but because each new session starts from scratch. This skill repo fixes that by installing a tiny `.mex/` system:

- a quick bootstrap router (`.mex/ROUTER.md`),
- a short always-loaded anchor (`.mex/AGENTS.md`),
- exported context files (`.mex/context/*.md`),
- a starter pattern library (`.mex/patterns/`),
- a maintainable workflow that updates itself after meaningful work.

This is the same style of project-aware workflow being used in `zloeber/complexity-eater`, where the repository grows from real work and keeps future sessions aligned with the actual codebase.

## Included skills

### `patternmaker`

Creates or upgrades a repository-local `.mex/` scaffold with:

- routing and session bootstrap,
- project context files,
- a discoverable pattern library,
- instructions that tell agents to read the router before starting work.

### `patternmaker-bootstrap`

Designed for repos that already have a `.mex/` scaffold. It mines the codebase, identifies missing patterns, and adds only the patterns that are genuinely valuable.

## Install into a target repository

Use the Vercel Skills CLI:

```bash
# install the main scaffold skill
npx skills add zloeber/patternmaker --skill patternmaker

# install the bootstrap skill for a repo that already has .mex/
npx skills add zloeber/patternmaker --skill patternmaker-bootstrap
```

If you need a direct raw-file install or a custom agent integration, you can also fetch the skill files from GitHub:

```bash
curl -fsSL https://raw.githubusercontent.com/zloeber/patternmaker/main/.agents/skills/patternmaker/SKILL.md
curl -fsSL https://raw.githubusercontent.com/zloeber/patternmaker/main/.agents/skills/patternmaker-bootstrap/SKILL.md
```

## What the skills do

Once installed, the project gains a small working system that does three things well:

1. Vets project context before a task starts.
2. Gives the agent a narrow routing path to the right files.
3. Creates or updates project patterns after the work is done.

That means future sessions inherit the repo's standards, architectural decisions, and task-specific lessons instead of forcing the agent to rediscover them each time.

## Skill quality bar

The skills in this repo are intentionally refined to be useful, not generic. They favor:

- real repository evidence,
- compact project memory,
- maintainable context files,
- high-value patterns over generic advice,
- markdown-only compatibility with the agent ecosystem.

## GitHub Pages site

The project site is published from the `docs/` directory and explains the skill set with a diagram, examples, and links to the real-world `complexity-eater` use case.

## Local validation

This repository includes a validation script so the skill metadata and docs remain in a consistent, high-quality state:

```bash
npm test
```

## Repository structure

```text
.agents/
  skills/
    README.md
    patternmaker/
      SKILL.md
    patternmaker-bootstrap/
      SKILL.md
.github/
  workflows/
    validate-skills.yml
docs/
  index.md
  _config.yml
scripts/
  validate-skills.mjs
```

## Recommended usage

Use this skill pattern when you want your development agent to:

- start from a stable routing file,
- avoid reading too much context,
- keep the project’s patterns and decisions in a durable location,
- grow the structure organically from real work,
- keep future sessions aligned with how the repo actually operates.
