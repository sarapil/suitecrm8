<a href="https://suitecrm.com">
  <img width="180px" height="41px" src="https://suitecrm.com/wp-content/uploads/2017/12/logo.png" align="right" />
</a>

# SuiteCRM 8.8.1

[![LICENSE](https://img.shields.io/github/license/suitecrm/suitecrm.svg)](https://github.com/salesagility/suitecrm/blob/hotfix/LICENSE.txt)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/salesagility/SuiteCRM-Core/issues)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/suitecrm/Lobby)
[![Twitter](https://img.shields.io/twitter/follow/suitecrm.svg?style=social&label=Follow)](https://twitter.com/intent/follow?screen_name=suitecrm)

[Website](https://suitecrm.com) | 
[Maintainers](https://salesagility.com) |
[Community & Forum](https://suitecrm.com/suitecrm/forum) |
[Code of Conduct](https://docs.suitecrm.com/community/code-of-conduct/)

[SuiteCRM](https://suitecrm.com) is the award-winning open-source, enterprise-ready Customer Relationship Management (CRM) software application.

Our vision is to be the most adopted open source enterprise CRM in the world, giving users full control of their data and freedom to own and customise their business solution.

Find out more about SuiteCRM 8 and checkout the online demo [here](https://suitecrm.com/suitecrm8/)

### Getting Started ###

Visit the [Administration Guide](https://docs.suitecrm.com/8.x/admin/) for details on getting started, system compatibility and installing SuiteCRM 8

See the [Release Notes](https://docs.suitecrm.com/8.x/admin/releases/) for more detail and known issues in the beta build


### Roadmap ###

View the [Roadmap](https://suitecrm.com/suitecrm-roadmap/) for details on what is coming in SuiteCRM 8.


### Contribute ###

We would love to have you feedback and input to help make SuiteCRM 8 Great for everyone

SuiteCRM 8 is still in active development and all current releases are not yet production ready, so be sure to check the [Release Notes and list of Known Issues](https://docs.suitecrm.com/8.x/admin/releases/) before getting involved

If you have found an issue you think we should know about, or have a suggestion/feedback, please [Submit An Issue](https://github.com/salesagility/SuiteCRM-Core/issues).

If you want to get involved or submit a Fix, fork the repo and when ready please [Submit An PR](https://github.com/salesagility/SuiteCRM-Core/pulls) - More detail for developers will be coming soon so stay tuned

### Security ###

We take security seriously here at SuiteCRM so if you have discovered a security risk report it by
emailing [security@suitecrm.com](mailto:security@suitecrm.com). This will be delivered to the product team who handle security issues.
Please don't disclose security bugs publicly until they have been handled by the security team.

Your email will be acknowledged within 24 hours during the business week (Mon - Fri), and you’ll receive a more
detailed response to your email within 72 hours during the business week (Mon - Fri) indicating the next steps in
handling your report.


### Support ###

SuiteCRM is an open-source project. If you require help with support then please use our [support forum](https://suitecrm.com/suitecrm/forum/). By using the forums the knowledge is shared with everyone in the community. Our developer and community team members answer questions on the forum daily but it also allows the other members of the community to contribute. If you would like customisations to specifically fit your SuiteCRM needs then please visit the [website](https://suitecrm.com/).

### License [![AGPLv3](https://img.shields.io/github/license/suitecrm/suitecrm.svg)](./LICENSE.txt)

SuiteCRM is published under the AGPLv3 license.

## Local Development (no Docker)

These instructions are for setting up a local development environment without using Docker.

### Prerequisites

*   PHP 8.1 or higher.
*   The following PHP extensions must be enabled:
    *   mbstring
    *   xml
    *   curl
    *   zip
    *   intl
    *   gd
    *   mysql
*   Composer (for dependency management, though this repository contains a checked-in `vendor` directory).
*   A MySQL database server.

### Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Configure your environment:**
    Copy the example environment file and edit it to match your local setup (database credentials, etc.):
    ```bash
    cp .env.example .env
    ```
    Now, open the `.env` file and configure your `DATABASE_URL` and `SITE_URL`.

3.  **Web Server:**
    The web root for the application is the `/public` directory. For local development, you can use PHP's built-in web server.

    **Note:** The built-in server is for development purposes only and is not suitable for production. For production, use a more robust web server like Apache or Nginx.

4.  **Run the application:**
    Start the PHP built-in web server from the project root:
    ```bash
    php -S localhost:8000 -t public
    ```
    You should now be able to access the application at `http://localhost:8000`. If this is a fresh installation, you will be guided through the SuiteCRM installer.

# suitecrm8
