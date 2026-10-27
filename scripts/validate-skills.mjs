import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const skillsRoot = path.join(root, '.agents', 'skills');

function listSkillDirs(dir) {
  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

function read(file) {
  return readFileSync(file, 'utf8');
}

const issues = [];
const skillDirs = listSkillDirs(skillsRoot);

if (skillDirs.length === 0) {
  issues.push('No skills found under .agents/skills');
}

for (const dir of skillDirs) {
  const skillFile = path.join(skillsRoot, dir, 'SKILL.md');
  if (!existsSync(skillFile)) {
    issues.push(`Missing SKILL.md for skill directory: ${dir}`);
    continue;
  }

  const source = read(skillFile);
  if (!source.startsWith('---\n')) {
    issues.push(`${dir}/SKILL.md is missing YAML frontmatter`);
  }

  for (const token of ['name:', 'description:']) {
    if (!source.includes(token)) {
      issues.push(`${dir}/SKILL.md is missing ${token.trim()}`);
    }
  }

  for (const section of ['# ', '## Goal', '## Workflow', '## Best practices']) {
    if (!source.includes(section)) {
      issues.push(`${dir}/SKILL.md is missing section: ${section}`);
    }
  }

  if (!source.includes('npx skills')) {
    issues.push(`${dir}/SKILL.md should document the npx skills install flow`);
  }
}

const rootReadme = path.join(root, 'README.md');
if (!existsSync(rootReadme)) {
  issues.push('README.md is missing');
} else {
  const readme = read(rootReadme);
  if (!readme.includes('npx skills')) {
    issues.push('README.md should include npx skills installation instructions');
  }
  if (!readme.includes('complexity-eater')) {
    issues.push('README.md should mention the complexity-eater use case');
  }
}

const docsIndex = path.join(root, 'docs', 'index.md');
if (!existsSync(docsIndex)) {
  issues.push('docs/index.md is missing');
} else {
  const docs = read(docsIndex);
  if (!docs.includes('complexity-eater')) {
    issues.push('docs/index.md should reference complexity-eater');
  }
  if (!docs.includes('<svg') && !docs.includes('```mermaid')) {
    issues.push('docs/index.md should include a diagram');
  }
}

if (issues.length > 0) {
  console.error('Patternmaker skill validation failed:');
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exit(1);
}

console.log(`Validated ${skillDirs.length} skill(s) and generated project docs.`);
