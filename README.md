# oui
Open UI

# principles

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
