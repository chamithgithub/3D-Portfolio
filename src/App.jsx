import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'; // Add controls for interacting with the scene

const ThreeDScene = () => {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 60 }} style={{ height: '100vh', background: '#000' }}>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* 3D Objects */}
      <mesh position={[-1.5, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>

      <mesh position={[1.5, 0.5, 0]}>
        <sphereGeometry args={[0.75, 32, 32]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="lightgrey" />
      </mesh>

      {/* Camera Controls */}
      <OrbitControls />
    </Canvas>
  );
};

const App = () => {
  return (
    <div>
      <h1 style={{ color: '#ffffff', textAlign: 'center', paddingTop: '20px' }}>My 3D Web Developer Portfolio</h1>
      <ThreeDScene />
    </div>
  );
};

export default App;
