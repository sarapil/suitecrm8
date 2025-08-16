# AGENTS.md — ArkoCRM (SuiteCRM 8, code-only)

## Scope
- Code-only modifications to SuiteCRM 8. **No Docker/CI/infra** in this phase.
- Upgrade-safe: put custom code under `custom/` when applicable; do not edit `/vendor`.

## Repo Map (key)
- `/`           : SuiteCRM 8 app
- `custom/`     : upgrade-safe modules & overrides
- `docs/`       : TELEPHONY.md, OPENMEETINGS.md, SOFTPHONE.md, SETTINGS.md
- `scripts/`    : (optional) jules-setup.sh for agent env only

## Tech
- PHP 8.2 with mbstring, xml, curl,soap,ldap,imap, zip, intl, gd, mysql; Composer.
- Web root under `/public`.

## Secrets
- Use env vars only (e.g., `ARKO_AMI_SECRET`, `ARKO_OM_PASS`). No secrets in repo.

## Prompts Pattern
- Context → Do → Constraints → Acceptance Criteria → Test Plan.
- Keep diffs small; focus on one concern per PR.

## Definition of Done
- `composer install --no-dev -o` clean.
- Tests (when present) pass.
- Docs updated for any new feature.

