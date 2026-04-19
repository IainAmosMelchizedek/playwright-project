\# Playwright Website Monitor



Automated cross-browser website checks for solo practitioners and small firms.



This repository uses Playwright + GitHub Actions to test a live website on an hourly schedule and on demand. It is designed to catch website failures before they become business problems.



\## What this project does



This project checks that key website pages load successfully across the three major browser engines:



\- Chromium

\- Firefox

\- WebKit



It is currently configured to test these pages for `https://safepassagestrategies.com/`:



\- Home

\- Services

\- What We Build

\- Contact



\## Why this exists



A live website can appear to work in one browser and fail silently in another. This setup helps solo practitioners and small businesses detect:



\- broken page loads

\- browser-specific rendering problems

\- missing headings or failed page content

\- outages or regressions after website changes



\## Current test behavior



The Playwright tests:



\- visit each configured page

\- wait for `domcontentloaded`

\- verify the page has a title

\- verify a visible `h1` exists



The GitHub Actions workflow runs:



\- on push

\- on pull request

\- on manual dispatch

\- every hour on a schedule



\## Repository structure



\- `.github/workflows/playwright.yml`

\- `tests/example.spec.js`

\- `playwright.config.js`



\## Local setup



\### 1. Clone the repository

```bash

git clone https://github.com/IainAmosMelchizedek/playwright-project.git

cd playwright-project

```



\### 2. Install dependencies

```bash

npm ci

npx playwright install --with-deps

```



\### 3. Run the tests locally

```bash

npx playwright test

```



\### 4. Open the local report

```bash

npx playwright show-report

```



\## How to adapt this for your own website



Edit `tests/example.spec.js` and replace the page list with your own pages.



\## Example: newsletter signup monitoring



Playwright can:

\- fill an email field

\- submit a form

\- verify a success message appears



\## GitHub Actions automation



Runs automatically on schedule and on demand.



\## Alerts



GitHub can send email notifications for failed workflows.



\## Who this is for



\- Solo practitioners

\- Small firms

\- Service-based businesses



\## License / reuse



You can clone and adapt this setup for your own website monitoring needs.



