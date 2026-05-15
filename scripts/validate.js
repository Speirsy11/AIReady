#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const requiredFiles = [
  'README.md',
  'templates/readiness-questionnaire.md',
  'templates/use-case-scorecard.md',
  'templates/pilot-plan.md',
  'samples/fictional-readiness-review.md',
  'docs/service-note.md',
  'docs/review-packet.md',
  'docs/externalization-preflight.md',
  'package.json',
];

const requiredPhrases = [
  'local starter artifact only',
  'Do not include secrets',
  'explicit approval',
  'Treat AI recommendations as draft work until reviewed by a human',
  'AI Adoption Readiness Questionnaire',
  'AI Use-Case Scorecard',
  'Draft-Only AI Pilot Plan',
  'Fictional AI Adoption Readiness Review',
  'Go / no-go criteria',
  'not reviewed',
  '[blocked]',
  'No private systems inspected',
  'No claims of compliance',
  'Externalization Preflight',
  'Sensitive-data check',
  'Approval gates by path',
  'Release blockers',
  'Do not create a remote',
];

let corpus = '';
const failures = [];
for (const rel of requiredFiles) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) {
    failures.push(`Missing required file: ${rel}`);
    continue;
  }
  corpus += '\n' + fs.readFileSync(full, 'utf8');
}
for (const phrase of requiredPhrases) {
  if (!corpus.includes(phrase)) failures.push(`Missing required phrase: ${phrase}`);
}
if (failures.length) {
  console.error('Validation failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log('AI adoption readiness kit validation passed.');
