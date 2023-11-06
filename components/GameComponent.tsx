"use client"
import React, {useEffect, useRef} from 'react';
import * as Matter from 'matter-js';
import {FRUITS_HLW} from "@/components/Animals";
import {Bodies, Body, Events, World} from "matter-js";

interface Fruit {
    name: string;
    radius: number;
}

const GameComponent: React.FC = () => {
    const boxRef = useRef<HTMLElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const engine = Matter.Engine.create();
        const canvas = canvasRef.current!;
        const render = Matter.Render.create({
            element: boxRef.current!,
            engine: engine,
            canvas: canvas,
            options: {
                wireframes: false,
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
            label: "topLine",
            isStatic: true,
            isSensor: true,
            render: { fillStyle: "#E6B143" }
        })

        Matter.World.add(world, [leftWall, rightWall, ground, topLine])

        // Start the engine
        Matter.Render.run(render);
        Matter.Runner.run(engine);

        let currentBody: Body | null = null;
        let currentFruit: Fruit | null = null;
        let disableAction = false;
        let interval: NodeJS.Timeout | null = null;

        function addFruit() {
            const index = Math.floor(Math.random() * 5);
            const fruit = FRUITS_HLW[index];

            const body = Bodies.circle(300, 50, fruit.radius, {
                index: index as any,
                isSleeping: true,
                render: {
                    sprite: {
                        texture: `${fruit.name}.png`,
                        xScale: 1,
                        yScale: 1,
                    }
                },
                restitution: 0.15,
            })

            currentBody = body;
            currentFruit = fruit;

            World.add(world, body);
        }

        window.onkeydown = (event) => {
            if (disableAction) {
                return;
            }
            switch (event.code) {
                case "KeyA":
                    if (interval)
                        return;
                    interval = setInterval(() => {
                        if (currentBody!.position.x - currentFruit!.radius > 30)
                            Body.setPosition(currentBody!, {
                                x: currentBody!.position.x - 1,
                                y: currentBody!.position.y,
                            });
                    }, 1)

                    break;
                case "KeyD":
                    if (interval)
                        return;
                    interval = setInterval(() => {
                        if (currentBody!.position.x + currentFruit!.radius < 590)
                            Body.setPosition(currentBody!, {
                                x: currentBody!.position.x + 1,
                                y: currentBody!.position.y,
                            });
                    }, 1)

                    break;
                case "KeyS":
                    currentBody!.isSleeping = false;
                    disableAction = true;

                    setTimeout(() => {
                        addFruit();
                        disableAction = false;
                    }, 1000);
                    break
            }
        }

        window.onkeyup = (event) => {
            switch (event.code) {
                case "KeyA":
                case "KeyD":
                    clearInterval(interval!);
                    interval = null;
            }
        }

        Events.on(engine, "collisionStart", (event) => {
            event.pairs.forEach((collision) => {
                if (collision.bodyA.index === collision.bodyB.index) {
                    const index = collision.bodyA.index;

                    if (index === FRUITS_HLW.length -1){
                        return;
                    }

                    World.remove(world, [collision.bodyA, collision.bodyB]);

                    const newFruit = FRUITS_HLW[index! + 1];

                    const newBody = Bodies.circle(
                        collision.collision.supports[0].x,
                        collision.collision.supports[0].y,
                        newFruit.radius,
                        {
                            render: {
                                sprite: {
                                    texture: `${newFruit.name}.png`,
                                    xScale: 1,
                                    yScale: 1,
                                }
                            },
                            index: index! + 1,
                        }
                    );

                    World.add(world, newBody);
                }

                if (!disableAction && ( collision.bodyA.label === "topLine" || collision.bodyB.label === "topLine"))
                    alert("Game Over");
            });
        })

        addFruit();

        return () => {
            // Cleanup code if needed
        };
    }, []);

    return (
        <div ref={boxRef}>
            <canvas ref={canvasRef} className="bg-gray-700" width={620} height={850}/>
        </div>
    );
};

export default GameComponent;
