# Solid Layout Library

## Motivation
From the perspective of a backend developer who is not a CSS wizard, layouting is often one of my most challenging and time-consuming aspects of web development. It can be frustrating to spend hours trying to get the layout just right. That's where the Solid Layout Library comes in.

The goal of this library is to provide a solution to this pain point by offering minimal, lightweight, and highly customizable layout components. These components are designed to simplify the process of creating basic layouts and user interfaces, allowing backend developers like me to focus on the core functionality of their applications when they need to do some Frontend stuff ore just like to tinker around.


## Features

- Minimal, lightweight, and highly customizable
- Built with TypeScript and SolidJS
- requiring just one dependencie
- Works with any CSS framework or no framework at all
- Supports responsive layouts
- Fully type safe


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
```


### Stack

The `Stack` component is used for creating vertical or horizontal stacks of elements. It uses CSS `flexbox` properties to control the direction and spacing of the stack. Here is an example of how to use the `Stack` component:
```jsx
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

### Right
The Right component is used to align content to the right. It utilizes CSS flexbox properties to achieve the alignment effect. Here is an example of how to use the Right component:
```tsx
import { Right } from 'solid-layout';

const MyComponent = () => (
  <Right>
    <div>Right-aligned content</div>
  </Right>
);
```
### Left
The Left component is used to align content to the left. It utilizes CSS flexbox properties to achieve the alignment effect. Here is an example of how to use the Left component:
```tsx
import { Left } from 'solid-layout';
const MyComponent = () => (
  <Left>
    <div>Left-aligned content</div>
  </Left>
);
```

### Apart 
The Apart component is used to align content to the left and right. It utilizes CSS flexbox properties to achieve the alignment effect. Here is an example of how to use the Apart component:
```tsx
import { Apart } from 'solid-layout';
const MyComponent = () => (
  <Apart>
    <div>Left-aligned content</div>
  </Apart>
```

### Spacer
The Space component allows you to adjust the spacing between elements in a container. You can control the size of the spacing with the size prop by specifying a size value such as "1rem" or "20px".
```tsx
import { Space } from 'solid-layout';

const MyComponent = () => (
  <div>
    <div>Element 1</div>
    <Space size="1rem" />
    <div>Element 2</div>
    <Space size="1rem" />
    <div>Element 3</div>
  </div>
);
```

### ScrollArea

The ScrollArea component is used to create a scrollable area for its child elements. It provides options for hiding the scrollbar if needed. Here is an example of how to use the ScrollArea component:

```tsx
import { ScrollArea } from 'solid-layout';

const MyComponent = () => (
<ScrollArea hideScrollbar={true}>
<div>Item 1</div>
<div>Item 2</div>
<div>Item 3</div>
</ScrollArea>
);
```



### DualPanel

The DualPanel component is used to create a two-column layout with a resizable divider between the columns. It provides options for setting the initial sizes of the columns and controlling the resizing behavior. Here is an example of how to use the DualPanel component:
```tsx
import { DualPanel } from 'solid-layout';

const MyComponent = () => (
  <DualPanel>
    <div>Left Panel</div>
    <div>Right Panel</div>
  </DualPanel>
);
```

### Cluster
The Cluster component is used to group and arrange a set of elements horizontally or vertically. It utilizes CSS flexbox properties to control the alignment and spacing of the elements. Here is an example of how to use the Cluster component:
```tsx
import { Cluster } from 'solid-layout';

const MyComponent = () => (
  <Cluster spacing="1rem">
    <div>Element 1</div>
    <div>Element 2</div>
    <div>Element 3</div>
  </Cluster>
);
```

### AppShell
The AppShell component is used to create a basic application shell layout with a header, left bar, and main content area.
You can use AutoBreakpoints for responsive layouts.

```tsx
import {AppShell,BREAKPOINT_POSITION} from 'solid-layout';


const MyComponent = () => (
    <AppShell leftBarBreakPoint={BREAKPOINT_POSITION.TOP_LEFT} leftBarComponent={<MyNavBar/>} headerComponent={<MyHeaderComponent/>} footerComponent={<MyFooter/>}
              burgerMenuComponent={<Burger/>}>
        <MyMainContent/>
    </AppShell>
);
```

### SmallContainer
The SmallContainer component is used to create a container with a fixed width. It provides options for setting the width and padding of the container.
Default width is 200px.
Default height is 200px
 Here is an example of how to use the SmallContainer component:
```tsx
import { SmallContainer } from 'solid-layout';

const MyComponent = () => (
  <SmallContainer>
    <div>Inhalt des SmallContainers</div>
  </SmallContainer>
);
```
### MediumContainer
The MediumContainer component is used to create a container with a fixed width. It provides options for setting the width and padding of the container. 
Default width is 300px.
Default height is 400px
Here is an example of how to use the MediumContainer component:
```tsx
import { MediumContainer } from 'solid-layout';

const MyComponent = () => (
  <MediumContainer>
    <div>Inhalt des MediumContainers</div>
  </MediumContainer>
);
```

### LargeContainer
The LargeContainer component is used to create a container with a fixed width. It provides options for setting the width and padding of the container.
Default width is 500px.
Default height is 600px.
 Here is an example of how to use the LargeContainer component:
```tsx
import { LargeContainer } from 'solid-layout';

const MyComponent = () => (
  <LargeContainer>
    <div>Inhalt des LargeContainers</div>
  </LargeContainer>
);
```

### AutoContainer
The AutoContainer component is used to create a container with a dynamic width and height. It provides options for setting the width and padding of the container.

Here is an example of how to use the AutoContainer component:
```tsx
import { AutoContainer } from 'solid-layout';

const MyComponent = () => (
  <AutoContainer>
    <div>Inhalt des AutoContainers</div>
  </AutoContainer>
);
```




### Support Me

if you like my work feel free to hydrate me so I always stay caffiend
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-%E2%98%95-yellow?style=flat-square)](https://www.buymeacoffee.com/MurkyTheMurloc)


### License

MIT License

Copyright (c) 2022 MurkyTheMurloc

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

