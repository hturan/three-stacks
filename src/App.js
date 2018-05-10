import React, { Component } from 'react';

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
const fontWeights = [200, 400, 600, 800];
const borderWidths = [1, 3, 5, 7, 9];
const borderStyles = ['solid', 'dashed', 'dotted'];

class ThreeStacks extends Component {
  state = {
    mouseX: 0.5,
    mouseY: 0.5,
    perspective: 2000
  };

  handleMouseMove = e => {
    const x = e.clientX / this.ref.clientWidth;
    const y = e.clientY / this.ref.clientHeight;

    this.setState({ mouseX: x, mouseY: y });
  };

  componentDidMount = () => {
    window.addEventListener('wheel', e => {
      const diff = e.deltaY;
      const newPerspective = this.state.perspective + diff;

      if (newPerspective > 0) {
        this.setState({
          perspective: newPerspective
        });
      }
    });

    // Spring
    // window.addEventListener('devicemotion', e => {
    //   const x = e.acceleration.x / 5;
    //   const y = e.acceleration.y / 5;

    //   this.setState({ mouseX: x, mouseY: y });
    // })

    window.addEventListener('deviceorientation', e => {
      const x = e.gamma / 30 + 0.5;
      const y = e.beta / 30 + 0.5;

      this.setState({ mouseX: x, mouseY: y });
    });
  };

  render() {
    const { mouseX, mouseY, perspective } = this.state;
    const { x, y, z, render } = this.props;

    return (
      <div
        style={{
          height: '100%',
          display: 'grid',
          gridTemplateColumns: x
            .map((_, index) => 1 / x.length * 100 + '%')
            .join(' '),
          gridTemplateRows: y
            .map((_, index) => 1 / y.length * 100 + '%')
            .join(' '),
          placeItems: 'center',
          placeContent: 'stretch',
          perspective: `${perspective}px`,
          transformStyle: 'preserve-3d',
          perspectiveOrigin: `${mouseX * 100}% ${mouseY * 100}%`
        }}
        onMouseMove={this.handleMouseMove}
        ref={ref => (this.ref = ref)}
      >
        {y.map(yv =>
          x.map(xv => (
            <div style={{ position: 'relative' }}>
              {z.map((zv, index) => {
                const comp = render(xv, yv, zv);

                return React.cloneElement(comp, {
                  style: {
                    ...(comp.props.style || {}),
                    transform: `translateZ(${index * 40}px)`,
                    zIndex: index + 1
                  }
                });
              })}
            </div>
          ))
        )}
      </div>
    );
  }
}

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
