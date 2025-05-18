# Security Policy

**Please do not disclose security issues publicly.**
If you discover a vulnerability, please follow the instructions in **“Reporting a Vulnerability”** below.

## Supported Versions

| Release   | Supported Until  |
| --------- | ---------------- |
| v1.0.x    | Ongoing          |
| v0.9.x    | 2025-06-30       |
| v0.8.x    | 2025-03-31       |

All **v1.0.x** releases (and later) receive security patches indefinitely.

## Reporting a Vulnerability

Please send an encrypted email to our security team:

- **Contact:** <security@cerberus-iam.com>
- **PGP Key:**

  ```pgp

-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAsvb9BeqdprD7YapjyDup
Ca69kW3gL75t6x7u0tziDemB5MxVYddiD/O4GOhgmbJWbNAZgz+NLe3a0K0xE67i
9UsznxefP/NLlEYFeimlh4PMSvSOV0eiHNpg6swI21Rb9Gsnh/iAW+pVNbAaBFPO
8BTfdgazLCrJPZtqgSXC3O79C+QYABxlasi2pSUnxaiD6wfu0Zbq6pbj2gZdVjyI
BL7tj7Gb2yORAQi362Y/9qUh9ny2exSrgaCZJEupNavWfgi/thQfKkBUhMnEE9q9
bNEm8ehHnjbwYIQ0Fb4zpDJubDWNljTj3VAlIbyNslPc6i3cjPJ7HoXG5RCAmBdR
O03ts21KLeOEch1nwpLtSsvkfKtSSkBxA7y4Rpm04uWVumW0d0Q0OPCYCaJAnIiJ
8z4seIoQWohaJuzykTXteY/T0YF+r0DsS5Wh6nfsXktuOBPCRr76qVQnUwqDqrnd
Ueod/4kQRpyldWwgD1XvI6g7XBVebWFHYUW5jJdi7QyfNyIGNV/BbVyDKctn6AuH
lV7Hwl3sO0Z6XJVIa8LP0HROdrdOpaEdg0CQl5ly8k/L2PUaNyTM48k5oMsyGZiC
UxMYIuDXUZqoPHkSnW3D/SnqAMMDUgP/EIeF7xhuJX+Wt6XzMjvOKfAJZ27f2jJu
XYgQBAnqxDkOqQodBZwXUDkCAwEAAQ==
-----END PUBLIC KEY-----

  ```

1. **Encrypt** your report with the above PGP key.
2. In the body, include:
   - A clear description of the vulnerability
   - Step-by-step reproduction instructions or a minimal proof-of-concept
   - Impact assessment (data exposed, potential impact, etc.)
3. Send the encrypted email to **<security@cerberus-iam.com>**.

You’ll receive an acknowledgment within **48 hours**, and we aim to issue a patch in **7 days** for critical issues.

## What to Include

- **Product & Version:** e.g. “Cerberus IAM API v1.0.3”
- **Component:** API, Admin UI, SDK, etc.
- **Severity:** low, medium, high, critical (your assessment)
- **Steps to Reproduce** or PoC script
- **Suggested Mitigation** (if available)

## Our Commitment

- We will **acknowledge** every valid report.
- We will maintain **confidentiality** of reporters.
- We will **patch** confirmed issues promptly and back-port fixes to all supported versions.
- We will **update** this policy as the product and team evolve.

*Last updated: 2025-04-26*
