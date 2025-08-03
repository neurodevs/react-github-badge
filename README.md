# react-github-badge
A React badge displaying GitHub repo and test counts.

## Table of Contents
- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
  - [TestCounterBadge](#testcounterbadge)

## Overview

This package provides a simple React component for embedding a GitHub-style badge that displays the number of public repositories and tests for a given organization or project. It uses [Shields.io](https://shields.io) under the hood to generate the badge image and is useful for dashboards, documentation sites, and project overviews.

## Installation

Install the package with your preferred package manager (make sure to be in the right directory for your Node project):

`npm install @neurodevs/react-github-badge` 

Or, for example with yarn:

`yarn add @neurodevs/react-github-badge`

## Usage

### TestCounterBadge

The TestCounterBadge component accepts a GitHub display title and link, along with counts for repositories and tests, and renders a styled badge linking to the GitHub page. It optionally accepts inline styles.

```tsx
import { TestCounterBadge } from '@neurodevs/react-github-badge'

<TestCounterBadge
    title="Neurodevs"
    githubUrl="https://github.com/neurodevs"
    numRepos={22}
    numTests={540}
    style={{ marginTop: '1rem', marginBottom: '0.5rem' }}
/>
```

This will render a clickable badge that looks like this:

<img src="./assets/badge-screenshot.png" alt="Badge screenshot showing 22 repos and 540 tests for Neurodevs." width="300" />
