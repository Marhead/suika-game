"use client"
import GameComponent from "@/components/GameComponent";
import {useEffect, useRef} from "react";
import * as Matter from "matter-js";

export default function Home() {
    // const canvasRef = useRef<HTMLCanvasElement | null>(null);
    //
    // useEffect(() => {
    //     const engine = Matter.Engine.create();         // Initialize Matter.js and your game logic here
    //     const render = Matter.Render.create({
    //         element: canvasRef.current!,
    //         engine: engine,
    //         options: {
    //             wireframes: true,
    //             background: "#f5efa2",
    //             width: 620,
    //             height: 850,
    //         }
    //     });        // Render the game on the canvas
    //
    //     const world = engine.world;
    //
    //
    //     const leftWall = Matter.Bodies.rectangle(15, 395, 30, 790, {
    //         isStatic: true,
    //         render: { fillStyle: "green" }
    //     });
    //
    //     const rightWall = Matter.Bodies.rectangle(605, 395, 30, 790, {
    //         isStatic: true,
    //         render: { fillStyle: "#E6B143" }
    //     });
    //
    //     const ground = Matter.Bodies.rectangle(310, 820, 620, 60, {
    //         isStatic: true,
    //         render: { fillStyle: "#E6B143" }
    //     });
    //
    //     const topLine = Matter.Bodies.rectangle(310, 150, 620, 2, {
    //         label: "topLine",
    //         isStatic: true,
    //         isSensor: true,
    //         render: { fillStyle: "#E6B143" }
    //     })
    //
    //     Matter.World.add(world, [leftWall, rightWall, ground, topLine])
    //
    //     // Start the engine
    //     Matter.Render.run(render);
    //     Matter.Runner.run(engine);
    //
    //     return () => {
    //         // Cleanup code if needed
    //     };
    // }, []);

    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <GameComponent/>
    </main>
    )
}
