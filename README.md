![](./three-stacks.gif)

run example with `yarn && yarn start`

scroll wheel/device tilt to alter perspective offset, mouse wheel to alter perspective depth

`<ThreeStacks />` expects four props —

- `x` — an array of values to render across the x-axis
- `y` — an array of values to render across the y-axis
- `z` — an array of values to render across the z-axis
- `render` — a render function that takes `x`, `y`, and `z` values and returns a component
