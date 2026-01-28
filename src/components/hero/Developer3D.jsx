/* eslint-disable no-unused-vars */
import React from 'react';
import { SplineScene } from '../ui/SplineScene';

const Developer3D = () => {
  return (
    <div className="relative w-full h-[500px] md:h-full flex items-center justify-center">
      <SplineScene 
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
};

export default Developer3D;
