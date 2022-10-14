# Design System

Design system developed during RocketSeat Ignite Lab through 12/10/22 to 12/12/22 

## Figma Design System

[Click here](https://www.figma.com/file/rMrLRISyr9UTfZlwxPwiPG/Ignite-Lab-Design-System?node-id=0%3A1)

## Tooling

- Tailwindcss
- Postcss (Bundler for css)
- Storybook (configured w/ vite) | npx sb init --builder @storybook/builder-vite --use-npm4
    - import { Meta, StoryObj } from '@storybook/react' `It helps with ESLint`
    - Decorators
    - arg & argTypes
- CLSX - Create css conditions/variants
    - Example in Text.tsx text-sm, text-md, text-lg
- Radix UI - Slot which enables dynamics HTML Elements

## Pattern

- Composition Pattern in TextInput
