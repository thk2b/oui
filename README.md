`npm install --save @thk2b/oui`

# oui
Open UI

This repository contains implementation of common features.

# scope
`oui` focuses on the dynamic aspects of user interface. This means that we render plain HTML5 elements, and apply only sructural styling to elements.

Overall, `oui` manages the layout and dynamic elements of the app, but remains unopinionated towards decoration, which should to be left to brand-designers.

# principles
- overidability: every element renderd by `oui` should be customizable. Every component has a `style` and `className` prop that can be used to add you own styles. If a component renders more than one element, each element should recieve its own `style` and `className` hook.

# Modules

- Grid ([Docs](https://github.com/thk2b/oui/blob/master/src/Grid/docs.md))
  A CSS Grid component

- Popover ([Docs](https://github.com/thk2b/oui/blob/master/src/Popover/docs.md))
  A popover component that renders its children only if the component has been clicked.

- Resizable ([Docs]( https://github.com/thk2b/oui/blob/master/src/Resizable/docs.md))
  A component that makes another component resizable.
  
- Editable ([Docs]( https://github.com/thk2b/oui/blob/master/src/Editable/docs.md))
  Displays a value and allows the user to edit it.
