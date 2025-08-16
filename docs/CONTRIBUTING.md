# Contributing to ArkoCRM

Thank you for your interest in contributing to the ArkoCRM project. To ensure a smooth development process, please follow these guidelines.

## Development Philosophy

Our current focus is on enhancing the application's functionality with minimal, targeted changes. We are intentionally avoiding infrastructure changes at this stage.

## Contribution Guidelines

*   **No Docker or CI/CD Changes:** Please do not add, modify, or remove any files related to Docker, Docker Compose, CI/CD pipelines, or other infrastructure-as-code. All changes should be focused on the application's PHP codebase.

*   **No Secrets in the Repository:** Never commit any sensitive information, such as API keys, passwords, or other credentials. All secrets should be managed through environment variables. Use the `.env.example` file as a template and create a local `.env` file for your development environment.

*   **Keep Pull Requests Small and Focused:** Each pull request should address a single, specific issue or feature. Avoid bundling multiple unrelated changes into one PR. This makes the review process faster and more effective.

*   **Follow SuiteCRM 8 Conventions:** Adhere to the existing coding standards and architectural patterns of the SuiteCRM 8 codebase. Aim to make your changes upgrade-safe by using the `custom/` directory where appropriate.

## Getting Started

Before you start, please make sure you have read the local development setup instructions in the `README.md` file.

By following these guidelines, you help us maintain a clean, secure, and manageable codebase. We appreciate your contributions!
