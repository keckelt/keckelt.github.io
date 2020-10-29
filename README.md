
# Prerequisites

* Node: https://nodejs.org/

# Usage

1. Clone git repo: `git clone ...`
2. `cd` into folder
3. `npm install`
4. `npm start`
5. Open URL (.e.g http://localhost:8080/) in browser


# GitHub Actions
The `./github/`folder contains two workflows. One for testing the code with different Node.js versions and one to build the project and pushing the built files to the `gh-pages` branch for deployment. See: https://keckelt.github.io/Boilerplate/

[The action needs a Personal Access Token (PAT)](https://github.com/marketplace/actions/github-pages#warning-limitation) which is stored in the repo settings.
