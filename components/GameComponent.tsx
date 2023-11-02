import React, {useEffect, useRef} from 'react';
import * as Matter from 'matter-js';

const GameComponent: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);


    useEffect(() => {
        // Initialize Matter.js and your game logic here
        const engine = Matter.Engine.create();

        // Define your game logic here using Matter.js

        // Render the game on the canvas
        const canvas = canvasRef.current;
        const render = Matter.Render.create({
            // element: ctx?.canvas,
            element: canvas,
            engine: engine,
            options: {
                wireframes: true,
                background: "#f5efa2",
                width: 620,
                height: 850,
            }
        });
        const world = engine.world;


        const leftWall = Matter.Bodies.rectangle(15, 395, 30, 790, {
            isStatic: true,
            render: { fillStyle: "#E6B143" }
        });

        const rightWall = Matter.Bodies.rectangle(605, 395, 30, 790, {
            isStatic: true,
            render: { fillStyle: "#E6B143" }
        });

        const ground = Matter.Bodies.rectangle(310, 820, 620, 60, {
            isStatic: true,
            render: { fillStyle: "#E6B143" }
        });

        const topLine = Matter.Bodies.rectangle(310, 150, 620, 2, {
            // name: "topLine",
            isStatic: true,
            isSensor: true,
            render: { fillStyle: "#E6B143" }
        })

        Matter.World.add(world, [leftWall, rightWall, ground, topLine])

        // Start the engine
        Matter.Render.run(render);
        Matter.Runner.run(engine);

        return () => {
            // Cleanup code if needed
        };
    }, []);

    return <canvas ref={canvasRef} width={620} height={850}/>;
};

export default GameComponent;
