# oui
Open UI

# scope
`oui` focuses on the dynamic aspects of user interface. This means that we render plain HTML5 elements, and strive to apply no styling to elements. Styling should be done at the level of individual applications. `oui` only provides structural components.

Developpers using this package can apply their own modifications to the styles by targetting HTML5 elements. For instance, to customize buttons add a stylesheet with `button { color: red; }`. To add padding to sections, `section { padding: 10px; }`. 

This means that HTML5 semantic markup standards have to be carefully interpreted and respected.

Overall, `oui` does the heavy lifting. It manages the layout and dynamic elements of the app, but remains unopinionated towards decoration, which ought to be left to brand-designers. 

# principles
- overidability: every element renderd by `oui` should be customizable. Every component has a `style` and `className` prop that can be used to add you own styles. If a component renders more than one element, each element should recieve its own `style` and `className` hook.