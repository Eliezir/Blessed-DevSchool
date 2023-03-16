
import React from 'react';
import { Canvas } from "@react-three/fiber";
import {PresentationControls, Stage, useGLTF, OrbitControls} from "@react-three/drei"
/* import Hero from './Hero' */

function Model(props){
  const {scene} = useGLTF("./hero-transformed.glb")
  return <primitive object={scene} {...props}/>
}


export default function HeroImg() {
 return (
    <div className='Frame3D'>
<Canvas dpr={[1,2]}  camera={{fov:45, position: [100, 50, 50]}}>
    <Stage environment="city"  shadows="contact">
    <Model scale={0.01}/>
    </Stage>
 {/*    <OrbitControls rotateSpeed={0.75} maxPolarAngle={ Math.PI / 3} maxAzimuthAngle={50} enableZoom={false}/> */}
   </Canvas>
   </div>
 );
}
