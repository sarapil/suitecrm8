# AGENTS.md — SuiteCRM 8 (code-only)

## Goal
Operate on pure SuiteCRM 8 source code. NO Docker, NO infra files, NO CI changes unless explicitly requested.

## Tech expectations (for Jules’ ephemeral VM only)
- OS: Ubuntu 24.04 (or default VM)
- PHP >= 8.1 (prefer 8.2) with: mbstring, xml, curl, zip, intl, gd, mysql
- Composer available
- MariaDB/MySQL reachable if needed for runtime checks (optional)

## Repo rules
- DO: Limit changes to application code/config/docs/tests only.
- DO: Use composer (no-dev) for dependency install.
- DO: Keep diffs minimal & aligned with SuiteCRM 8 conventions.
- DON’T: Add Dockerfiles, docker-compose, k8s, or CI workflows.
- DON’T: Commit secrets or .env (only .env.example if needed).
- DON’T: Edit /vendor directly (use composer).

## Test/Done
- `composer install --no-dev -o` runs without errors.
- App boots locally (web front controller under /public).
- If tests exist, they pass; otherwise add minimal tests only when asked.

