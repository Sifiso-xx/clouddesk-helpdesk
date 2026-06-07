# Security Notes

## Security Goals

- Protect credentials and secrets.
- Validate all user input.
- Apply authorization checks before returning private data.
- Avoid leaking internal errors.
- Keep logs useful without exposing sensitive data.

## Project-Specific Considerations

Enforce RBAC, validate file uploads, restrict attachment types, protect ticket ownership, store secrets securely, and audit sensitive actions.

## Checklist

- [ ] Environment variables are not committed
- [ ] Authentication routes are rate-limited
- [ ] Passwords or tokens are never logged
- [ ] User ownership checks are implemented
- [ ] CI runs tests on pull requests
- [ ] Dependencies are reviewed before deployment
