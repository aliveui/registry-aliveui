# @aliveui/ui

A UI component library based on shadcn components following atomic design principles. This library provides a collection of customizable, accessible, and reusable components that can be used to build modern web applications.

## Features

- Built on top of shadcn components
- Follows atomic design principles (atoms, molecules, organisms, templates, pages)
- Customizable with Tailwind CSS
- Accessible and follows best practices
- Type-safe with TypeScript
- Lightweight and tree-shakable

## Installation

```bash
npm install @aliveui/ui
```

## Usage

You can import components from the library directly:

```tsx
import { Button } from "@aliveui/ui";

function App() {
  return <Button variant="primary">Click me</Button>;
}
```

You can also import components by atomic design level:

```tsx
import { Atoms } from "@aliveui/ui";

function App() {
  return <Atoms.Button variant="primary">Click me</Atoms.Button>;
}
```

## Components

The library is organized according to atomic design principles:

### Atoms

Atoms are the basic building blocks of matter. In interfaces, they are our HTML tags like form labels, inputs, buttons.

- Button
- Avatar
- Badge
- Checkbox
- Input
- Label
- Radio
- Select
- Switch
- Textarea
- Separator
- Skeleton
- Progress
- Tooltip
- Scroll Area

### Molecules

Molecules are groups of atoms bonded together that serve as the foundation of our design systems.

- Accordion
- Alert
- Alert Dialog
- Aspect Ratio
- Card
- Collapsible
- Command
- Context Menu
- Dialog
- Dropdown Menu
- Hover Card
- Menubar
- Navigation Menu
- Popover
- Sheet
- Tabs
- Toaster

### Organisms

Organisms are complex UI components composed of groups of molecules and/or atoms and/or other organisms.

- Data Table
- Calendar
- Combobox
- Date Picker
- Form
- Carousel

### Templates

Templates consist of groups of organisms to form a page layout.

- Dashboard Layout
- Settings Layout
- Auth Layout
- Marketing Layout
- Documentation Layout

### Pages

Pages are specific instances of templates that show what a UI looks like with real content.

- Dashboard Page
- Login Page
- Settings Page
- Profile Page
- Landing Page

## Development

To contribute to this library, follow these steps:

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Run tests: `npm test`
5. Build the library: `npm run build`

## License

MIT
