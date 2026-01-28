/* eslint-disable no-unused-vars */
import React from 'react';
import { SplineScene } from '../ui/SplineScene';

const Developer3D = ({ onLoad }) => {
  return (
    <div className="relative w-full h-[500px] md:h-full flex items-center justify-center">
      <SplineScene 
        scene="/models/scene.splinecode"
        className="w-full h-full"
        onLoad={onLoad}
      />
    </div>
  );
};

export default Developer3D;
