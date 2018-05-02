# oui
Open UI

# scope
`oui` focuses on the dynamic aspects of user interface. This means that we render plain HTML5 elements, and strive to apply no styling to elements. Styling should be done at the level of individual applications. `oui` only provides structural components.

Developpers using this package can apply their own modifications to the styles by targetting HTML5 elements. For instance, to customize buttons add a stylesheet with `button { color: red; }`. To add padding to sections, `section { padding: 10px; }`. 

This means that HTML5 semantic markup standards have to be carefully interpreted and respected.

Overall, `oui` does the heavy lifting. It manages the layout and dynamic elements of the app, but remains unopinionated towards decoration, which ought to be left to brand-designers. 

# principles
- overidability: every element renderd by `oui` should be customizable. Every component has a `style` and `className` prop that can be used to add you own styles. If a component renders more than one element, each element should recieve its own `style` and `className` hook.

# index

- `Grid` (`Container`,`Item`, `Area`)
- `Resizable(horizontally, vertically, minWidth, maxWidth, minHeight, maxHeight, min={{width, height}}), max={{width, height}}`
- `Editable(hasButtons)`
- `Movable(position={{x, y}} size={{w, h}} )`
- `List(Item, items)`
- `Popout(bottom, top, right, left)`
- `Menu` (`Container`, `Entry`)
- `Form`, `Input`, `InputGroup`, `ButtonGroup`, `Select`, `Ratio`, `Checkbox`, ...

# usage

```js
<List( Item ) />

<Select([ 'first', 'second' ]) value onSelect />

<Form onSubmit >
  <Inline>
      <Input label='' value onChange />
      <Button>submit</Button>
  </Inline>
</ Form>

<Inline> ...children </Inline>

<Sidebar vertical left
    xRange={[100, '*']}
    isOpen
    onResize
    Button={Button}
>

</Sidebar>


```
