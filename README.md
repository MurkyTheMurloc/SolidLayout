# Solid Layout Library

## Motivation
From the perspective of a backend developer who is not a CSS wizard, layouting is often one of my most challenging and time-consuming aspects of web development. It can be frustrating to spend hours trying to get the layout just right. That's where the Solid Layout Library comes in.

The goal of this library is to provide a solution to this pain point by offering minimal, lightweight, and highly customizable layout components. These components are designed to simplify the process of creating nasic layouts and user interfaces, allowing backend developers like me to focus on the core functionality of their applications when they need to do some Frontend stuff ore just like to tinker around.


## Components

### FlexibleGrid

The `FlexibleGrid` component allows you to create a flexible grid layout using the CSS `flex` property. It provides options for setting the gap and padding between grid items. Here is an example of how to use the `FlexibleGrid` component:
```tsx
import { FlexibleGrid } from 'solid-layout';

const MyComponent = () => (
<FlexibleGrid gap="1rem" padding="1rem">
<div>Item 1</div>
<div>Item 2</div>
<div>Item 3</div>
</FlexibleGrid>
);
```

### ReelGrid

The `ReelGrid` component is designed for creating horizontal scrolling grids. It uses CSS `grid` properties to define the grid layout and scrolling behavior. Here is an example of how to use the `ReelGrid` component:
```tsx
import { ReelGrid } from 'solid-layout';

const MyComponent = () => (
<ReelGrid>
<div>Item 1</div>
<div>Item 2</div>
<div>Item 3</div>
</ReelGrid>
);



### Stack

The `Stack` component is used for creating vertical or horizontal stacks of elements. It uses CSS `flexbox` properties to control the direction and spacing of the stack. Here is an example of how to use the `Stack` component:
jsx
import { Stack } from 'solid-layout';

const MyComponent = () => (
<Stack direction="vertical" spacing="1rem">
<div>Item 1</div>
<div>Item 2</div>
<div>Item 3</div>
</Stack>
);

```
### AutoGrid

The `AutoGrid` component automatically adjusts the number of columns based on the available space. It uses CSS `grid-template-columns` property with the `auto-fit` function to create a responsive grid layout. Here is an example of how to use the `AutoGrid` component:
```tsx
import { AutoGrid } from 'solid-layout';

const MyComponent = () => (
<AutoGrid minColumnWidth="200px">
<div>Item 1</div>
<div>Item 2</div>
<div>Item 3</div>
</AutoGrid>
);
```


### Center

The `Center` component is used to horizontally and vertically center its child elements. It uses CSS `flexbox` properties to achieve the centering effect. Here is an example of how to use the `Center` component:
```tsx
import { Center } from 'solid-layout';

const MyComponent = () => (
<Center>
<div>Centered Content</div>
</Center>
);
```