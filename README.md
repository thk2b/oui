# oui
Open UI

# scope
`oui` focuses on the dynamic aspects of user interface. This means that we render plain HTML5 elements, and strive to apply no styling to elements. Styling should be done at the level of individual applications. `oui` only provides structural components.

Overall, `oui` does the heavy lifting. It manages the layout and dynamic elements of the app, but remains unopinionated towards decoration, which ought to be left to brand-designers. 

# principles
- overidability: every element renderd by `oui` should be customizable. Every component has a `style` and `className` prop that can be used to add you own styles. If a component renders more than one element, each element should recieve its own `style` and `className` hook.