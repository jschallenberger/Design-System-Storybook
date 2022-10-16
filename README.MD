# Design System

Design system developed during RocketSeat Ignite Lab through 12/10/22 to 12/12/22 

## Figma Design System

[Click here](https://www.figma.com/file/rMrLRISyr9UTfZlwxPwiPG/Ignite-Lab-Design-System?node-id=0%3A1)

## Storybook

[Click here](https://jschallenberger.github.io/Design-System-Storybook/?path=/story/components-heading--default)

## Tooling

- Tailwindcss
- Postcss (Bundler for css)
- Storybook (configured w/ vite) | npx sb init --builder @storybook/builder-vite --use-npm4
    - import { Meta, StoryObj } from '@storybook/react' `It helps with ESLint`
    - Decorators
    - arg & argTypes
    - a11y - Accessibility Addon that run tests in our components
    - Interactions to run automated tests w/ Jest
- CLSX - Create css conditions/variants
    - Example in Text.tsx text-sm, text-md, text-lg
- Radix UI - Slot which enables dynamics HTML Elements
- Transform.tools - Convert SVG to React Component
- Mock Service Worker (MSW)


## Pattern

- Composition Pattern in TextInput

## Deploy

- Github Action workflow
- Application deployed using Storybook-deployer to Github Pages

## Run locally

`npm i` <br>
`npm run storybook`  # To run storybook <br>
`npm run dev`  # To run React App
