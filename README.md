<div align="center">

![GitHub package.json version](https://img.shields.io/github/package-json/v/nolindnaidoo/enterprise-react-components) ![Node](https://img.shields.io/badge/node%20-8-yellow.svg) ![Travis (.org)](https://img.shields.io/travis/nolindnaidoo/enterprise-react-components) ![GitHub repo size](https://img.shields.io/github/repo-size/nolindnaidoo/enterprise-react-components?color=g) ![GitHub](https://img.shields.io/github/license/nolindnaidoo/enterprise-react-components)

</div>

<h1 align="center">Enterprise React Components</h1>

Enterprise React Components is a library of reusable UI components built with [React 16](https://reactjs.org) and [Semantic UI React](https://react.semantic-ui.com/introduction). Package Management via [Yarn](https://yarnpkg.com/en/). Lint and Beautification handled by [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), and [Airbnb Config](https://www.npmjs.com/package/eslint-config-airbnb). Unit Testing executed by [Jest](https://facebook.github.io/jest/) with [Enzyme](https://github.com/airbnb/enzyme). Seamless Continuous Integration with [Travis-CI](https://travis-ci.com/) and [Github](https://github.com/).

### Core Libraries

- [React](https://facebook.github.io/react) React makes it painless to create interactive, scale-able UIs.
- [Semantic UI React](https://react.semantic-ui.com/introduction) User Interface is the language of the web.
- [Video-React](https://video-react.js.org) The web video player built from the ground up for an HTML5 world using React library.
- [Airbnb/rheostat](https://github.com/airbnb/rheostat) Rheostat is a www, mobile, and accessible slider component built with React.
- [Jest](https://facebook.github.io/jest/) is a delightful JavaScript Testing Framework with a focus on simplicity.
- [Yarn](https://yarnpkg.com/en/) Fast, reliable and secure dependency management.

<h2 align="center">Quick Start</h2>

### Install

- `yarn add enterprise-react-components` - Install package from private [NPM Registry](https://docs.npmjs.com/getting-started)

### Usage Example

- Import Button component:

  ```
  import React, { Component } from 'react';
  import { Button } from 'enterprise-react-components';

  export default class App extends Component {
    render() {
      return (
        <Button />
      )
    }
  ```

<h1 align="center">Development Setup</h1>

## Scripts

- `yarn start` - Install dependencies, run lint, run verbose tests, and deploy development server.
- `yarn run build` - Install dependencies, run lint, run silent tests, and create production bundle
- `yarn run storybook` - Build and deploy Storybook

## Environment

- Install [NVM](https://github.com/nvm-sh/nvm) (Optional)
- Install [Node 8](https://nodejs.org/dist/latest-v8.x/)
- Install [YarnPKG](https://yarnpkg.com/en/docs/install)
- Install [Git](https://git-scm.com/downloads) and run these commands to configure it:
  - `> git config --global user.name "{FULL_NAME}"`
  - `> git config --global user.email {EMAIL}`
  - `> git config --global core.autocrlf false`.
  - Refer to [Advanced Git Configuration](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration) for additional information
- Setup [SSH](https://help.github.com/articles/connecting-to-github-with-ssh/)
- Clone Repository `git clone git@github.com:nolindnaidoo/enterprise-react-components.git`
- Setup & Publish [NPM Registry](https://docs.npmjs.com/getting-started)

## Git

The Git Feature Branch Workflow is a composable workflow that can be leveraged by other high-level Git workflows. This project utilizes the [Github Flow](https://guides.github.com/introduction/flow/), which allows for fast-paced and high-quality parallel development.

#### Github Flow:

- Create the branch. Make sure it begins with the `feature/`, `hotfix/`, `bugfix/`, `semver/` prefix.
- Add commits
- Open a Pull Request
- Review & Collaborate changes
- Deploy and Test
- Merge

#### Merging from Master

A best practice is to perform merging when the working tree is clean. Use caution, first commit any unfinished work still desired, or reset the Git working tree. Choose `> git stash` and save the working tree until ready. Alternatively, reset the working tree. `> git reset --hard`

Staying up-to-date with the latest from `master` is beneficial to parallel development. Remote `master` represents the most stable and approved iteration of the product. In Parallel Development, updates to `master` may affect current implementation. Work with the latest from `master` by merging the latest from `master` into `feature/{name}` as frequently as possible, but only when necessary.

#### Merging from Master Procedure

- `> git reset --hard` or `> git stash`
- `> git checkout master`
- `> git pull`
- `> git checkout "feature/{name}"`
- `> git merge master`
- No Conflicts: Auto-merge Successful
- Conflicts: Resolve Conflicts and run:
  - `> git add .`
  - `> git commit -m "merge master, resolved conflicts"`
  - `> git push`

#### Merging to Master

- Make sure your feature branch is not behind the master. You can view it from the [Branch Status](https://github.com/nolindnaidoo/enterprise-react-components/branches) view in the Behind/Ahead column.
- Verify that your feature branch builds successfully on [TravisCI](https://travis-ci.org/github/nolindnaidoo/enterprise-react-components/branches).
- Check your coverage against master. The Feature Branch should be greater than or equal to the master.
- Resolve or reply to all Pull Request comments.
- Use the Merge button on the Pull Request to merge back to master.
- Once the test is successful and no further changes are needed for sign off delete the original feature branch.

## Unit Testing

- [Jest](https://facebook.github.io/jest/) is a delightful JavaScript Testing Framework with a focus on simplicity.
- [EnzymeComponent](https://github.com/airbnb/enzyme) is a JavaScript testing utility for [React](https://facebook.github.io/react).

## Continuous Integration & Deployment

The following links provide enhanced awareness throughout the Agile SDLC process. Save as bookmarks for rapid development.

- [Branch Status](https://github.com/nolindnaidoo/enterprise-react-components/branches)
- [Pull Request Status](https://github.com/nolindnaidoo/enterprise-react-components/pulls)
- [TravisCI Repo Dashboard](https://travis-ci.org/github/nolindnaidoo/enterprise-react-components)

## ESLint

Enterprise React Components uses [Airbnb ESLint rules](https://github.com/airbnb/javascript) for lint/syntax errors, along with [Prettier](https://github.com/prettier/prettier) for automated formatting and lint error fixing.

#### Exceptions

- [class-methods-use-this](http://eslint.org/docs/rules/class-methods-use-this) is not always needed in lifecycle/render methods.
- [react/no-unescaped-entities](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md) prevents characters that were meant as JSX escape characters.
- [react/jsx-filename-extension](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md) forces .js as the extension for files with JSX.
- [react/no-unused-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md) fixes a bug when using `PropTypes.shape`.
- [react/require-default-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md) was allowed to be undefined early on.

## IDE's

Take advantage of advanced workflow features by using supported IDE's with the appropriate plugins.

### Atom

- Install [Atom](https://atom.io)
- Install Packages
  - atom-css-clean
  - autoclose-html
  - autocomplete-json
  - autocomplete-modules
  - busy-signal
  - file-icons
  - highlight-selected
  - html-escaper
  - intentions
  - language-babel
  - linter
  - linter-eslint
  - linter-htmlhint
  - linter-ui-default
  - markdown-preview-enhanced
  - pigments
  - prettier-atom
  - sort-lines
  - terminal-panel-uoa

### Visual Studio Code

- Install [Visual Studio Code](https://code.visualstudio.com)
- Install Packages
  - christian-kohler.path-intellisense
  - dbaeumer.vscode-eslint
  - donjayamanne.githistory
  - emmanuelbeziat.vscode-great-icons
  - esbenp.prettier-vscode
  - formulahendry.auto-close-tag
  - vstirbu.vscode-mermaid-preview
  - wayou.vscode-todo-highlight
  - zhuangtongfa.Material-theme
