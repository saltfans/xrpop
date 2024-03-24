"use client"
// bg.tsx
import Background from 'components/layout/background'; // Import the Background component
import React from 'react';

const BackgroundWrapper: React.FC = () => {
  return (
    <div>
      <Background /> {/* Add the Background component */}
    </div>
  );
};

export default BackgroundWrapper;
