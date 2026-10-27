# Skills

This repository packages the project-aware development patterns originally explored in the `zloeber/complexity-eater` project.

## Included skills

- `patternmaker` — creates a lightweight `.mex/` scaffold containing a router, context files, and starter patterns for the target repo.
- `patternmaker-bootstrap` — mines an existing repository, identifies missing patterns, and only adds the ones that are genuinely high-value.

## Install

```bash
# install the main pattern scaffold skill
npx skills add zloeber/patternmaker --skill patternmaker

# optionally, install the discovery-focused bootstrap skill
npx skills add zloeber/patternmaker --skill patternmaker-bootstrap
```

## Direct adoption

If an agent or another workflow needs to consume a skill file directly, fetch it from GitHub raw:

```bash
curl -fsSL https://raw.githubusercontent.com/zloeber/patternmaker/main/.agents/skills/patternmaker/SKILL.md
```

This repository intentionally stays Markdown-only and does not depend on the `mex` binary or any external runtime.
