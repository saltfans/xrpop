"use client"
import React from 'react';

const RandomAnimatedLinesBackground: React.FC = () => {
  const lines = Array.from({ length: 137 }).map((_, index) => ({
    key: index,
    color: `rgb(${Math.floor(Math.random() * 180)},  ${(80)}, 
  ${(250)})`,
    length: `${Math.random() * 137}px`,
    thickness: `${Math.random() * 2}px`,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    rotation: `${Math.random() * 360}deg`,
    duration: `${Math.random() * 2 + 1}s`,
    delay: `${Math.random() * 7}s`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {lines.map(line => (
        <div
          key={line.key}
          className="absolute"
          style={{
            left: line.x,
            top: line.y,
            width: line.length,
            height: line.thickness,
            backgroundColor: line.color,
            transform: `rotate(${line.rotation})`,
            animation: `animate-line ${line.duration} ease-in-out ${line.delay} infinite alternate`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes animate-line {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default RandomAnimatedLinesBackground;
