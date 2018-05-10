import React from 'react';
import ThreeStacks from './ThreeStacks';

const Button = ({ style }) => (
  <a
    style={{
      position: 'absolute',
      left: -45,
      top: -20,
      padding: '8px 16px',
      fontWeight: 600,
      backgroundColor: 'white',
      borderRadius: 3,
      borderStyle: 'solid',
      fontFamily: 'BlinkMacSystemFont, -apple-system',
      ...style
    }}
  >
    Button
  </a>
);

const colors = [
  '#da304c',
  '#f4a15d',
  '#f4a929',
  '#79c698',
  '#66c3d1',
  '#479ad1',
  '#8794c7',
  '#b683c3'
].reverse();
// const fontWeights = [200, 400, 600, 800];
const borderWidths = [1, 3, 5, 7, 9];
const borderStyles = ['solid', 'dashed', 'dotted'];

const App = () => (
  <ThreeStacks
    x={borderWidths}
    y={borderStyles}
    z={colors}
    render={(x, y, z) => (
      <Button
        style={{
          borderStyle: y,
          borderWidth: x,
          borderColor: z,
          color: z
        }}
      />
    )}
  />
);

export default App;
