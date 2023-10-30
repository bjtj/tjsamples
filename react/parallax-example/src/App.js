import { ParallaxProvider, useParallax } from 'react-scroll-parallax';

const Component = ({ style, speed }) => {
  const { ref } = useParallax({
    rotateZ: [0, 360],
    speed,
  });
  return (
    <div
      ref={ref}
      className="my-thing"
      style={{ ...style, width: '100px', height: '100px', background: 'red' }}
    />);
};

function App() {
  return (
    <ParallaxProvider>
      <div style={{ width: '100%', height: '5000px', background: 'white' }}>
        <div style={{ display: 'flex', marginTop: '500px' }}>
          <Component speed={-30} />
          <Component speed={-10} />
        </div>

      </div>
    </ParallaxProvider>
  );
}


export default App;
