import React from 'react';
import dynamic from 'next/dynamic';

const GameComponent = dynamic(() => import('./GameComponent'), { ssr: false });

const GameClientComponent: React.FC = () => {
    return <GameComponent />;
};

export default GameClientComponent;
