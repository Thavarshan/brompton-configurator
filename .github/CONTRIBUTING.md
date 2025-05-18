# Cerberus IAM – How We Contribute

Welcome to Cerberus IAM! This document describes our in‐house workflow and conventions so every team member can contribute code consistently and safely.

## 1. Ownership & Code Domains

| Area            | Owners                        | Primary Contacts             |
| --------------- | ----------------------------- | ---------------------------- |
| API Core        | @backend-team                 | <alice@cerberus-iam.com>            |
| Authentication  | @security-team                | <bob@cerberus-iam.com>              |
| UI Components   | @frontend-team                | <carol@cerberus-iam.com>            |
| DevOps & Infra  | @platform-team                | <dave@cerberus-iam.com>             |
| Documentation   | @docs-team                    | <eve@cerberus-iam.com>              |

Before you start, make sure you know which team “owns” the code area you’re touching; they’ll be your primary reviewers.

## 2. Branching Model

We use a **trunk-based** workflow on `main` with short-lived feature branches:

1. **Sync** your local `main`:

   ```bash
   git checkout main
   git pull origin main
   ```

2. **Create** a new branch:

   ```bash
   git checkout -b feature/<team-prefix>/<short-desc>
   # e.g. feature/backend/jwt-refresh
   ```

3. **Develop**, commit often, and **rebase** before pushing:

   ```bash
   git add .
   git commit -m "feat(auth): support token refresh"
   git fetch origin
   git rebase origin/main
   ```

4. **Push** your branch and open a Pull Request against `main`.

## 3. Pull Request Checklist

When creating or updating a PR:

- [ ] **Title & Description**
  - Use the format: `<type>(<area>): <short summary>`
    Types: `feat`, `fix`, `refactor`, `docs`, etc.
  - Reference the JIRA ticket or issue ID: e.g. `CERB-123`.
- [ ] **Branch Policies**
  - Target branch `main`.
  - Assign the appropriate **code owner** (see section 1).
- [ ] **CI & Tests**
  - All builds must pass.
  - Add or update **unit**, **integration**, or **API** tests as needed.
- [ ] **Code Review**
  - Request reviews from at least **one** owner of the affected area.
  - Address comments promptly; rebase and force-push to keep history clean.
- [ ] **Documentation**
  - Update inline PHPDoc / JSDoc for new or changed public methods.
  - Modify **architecture docs** / OpenAPI spec (`docs/`) if endpoints change.

## 4. Commit Message Guidelines

We follow a lightweight Conventional Commits style:

```
<type>(<scope>): <summary>
[optional blank line]
[optional body]
[optional footer — e.g. “Closes CERB-123”]
```

- **type**: `feat` (new feature), `fix` (bug), `refactor`, `chore`, `docs`, `test`.
- **scope**: logical area: `auth`, `users`, `ui`, `db`, etc.
- **summary**: imperative, ≤50 chars.
- **footer**: link tickets or breaking changes.

**Example**:

```
feat(auth): support rotating client secrets

Closes CERB-852
```

## 5. Testing Standards

- **PHPUnit**
  - Unit: `tests/Unit`
  - Feature/API: `tests/Feature`
  - Aim for ≥80 % coverage in critical areas.
- **Static Analysis**
  - PHPStan level 7: `vendor/bin/phpstan analyse`.
  - Psalm (if enabled): `vendor/bin/psalm`.
- **Frontend**
  - Jest/Vitest for component tests.
  - Cypress for end-to-end flows.

## 6. CI / GitHub Actions

Our pipeline (in `.github/workflows/ci.yml`):

1. **Lint** PHP (`phpcs` / `phpstan`)
2. **Run** PHPUnit
3. **Build & Test** JS (install, lint, test, build)
4. **Security Scan** (e.g. `composer audit`)
5. **Publish** code coverage & quality reports

Commits that break CI will be blocked from merging until fixed.

## 7. Versioning & Releases

We adhere to [SemVer](https://semver.org/):

- **MAJOR**: incompatible API changes
- **MINOR**: new backwards-compatible functionality
- **PATCH**: backwards-compatible bug fixes

**Release process**:

1. Merge PRs to `main`.
2. Tag the `main` branch:

   ```bash
   git tag -a vX.Y.Z -m "Release vX.Y.Z"
   git push origin vX.Y.Z
   ```

3. **GitHub Action** will build artifacts and publish release notes.

Keep `CHANGELOG.md` up to date with each release section.

## 8. Developer Etiquette

- **Pair reviews**: welcome pairing sessions for complex changes.
- **Be timely**: aim to review assigned PRs within 24 hours.
- **Respect** teammates—focus on the code, not the coder.

For anything unclear, ping the relevant **code owner** or post in `#dev` Slack.

Thank you for helping make Cerberus IAM robust and maintainable! 🎉
