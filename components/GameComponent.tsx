"use client"
import React, {useEffect, useRef, useState} from 'react';
import * as Matter from 'matter-js';
import {FRUITS_HLW, ANIMAL_3D} from "@/components/Animals";
import {Bodies, Body, Events, World} from "matter-js";
import "@/matter-extended.d";
import {useDispatch, useSelector} from "react-redux";
import {setScore} from "@/redux/scoreActions";

interface Fruit {
    name: string;
    radius: number;
}

const GameComponent: React.FC = () => {
    const dispatch = useDispatch();
    let currentScore = 0;
    const score = useSelector((state: any) => state.score);

    const handleUpdateScore = (index: number) => {
        currentScore = index * 2 + currentScore;
        dispatch(setScore(currentScore));
    };

    const boxRef = useRef<HTMLElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const engine = Matter.Engine.create();

        // Define your game logic here using Matter.js

        const canvas = canvasRef.current!;
        const render = Matter.Render.create({
            element: boxRef.current!,
            engine: engine,
            canvas: canvas,
            options: {
                wireframes: false,
                background: "#f7ef84",
                width: 620,
                height: 850,
            }
        });        // Render the game on the canvas

        const world = engine.world;


        const leftWall = Matter.Bodies.rectangle(15, 395, 30, 850, {
            isStatic: true,
            render: { fillStyle: "#e4e642" }
        });

        const rightWall = Matter.Bodies.rectangle(605, 395, 30, 850, {
            isStatic: true,
            render: { fillStyle: "#e4e642" }
        });

        const ground = Matter.Bodies.rectangle(310, 840, 620, 40, {
            isStatic: true,
            render: { fillStyle: "#e4e642" }
        });

        const topLine = Matter.Bodies.rectangle(310, 150, 620, 2, {
            label: "topLine",
            isStatic: true,
            isSensor: true,
            render: { fillStyle: "#e08610" }
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
            const fruit = ANIMAL_3D[index];

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
                restitution: 0.25,
                friction: 0.4
            })

            currentBody = body;
            currentFruit = fruit;

            World.add(world, body);
        }

        // "S" 버튼을 눌러 과일을 내리기 시작할 때
        window.onkeydown = (event) => {
            if (disableAction) {
                return;
            }
            switch (event.code) {
                case "ArrowLeft":
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
                case "ArrowRight":
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
                case "ArrowDown":
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
                case "ArrowLeft":
                case "ArrowRight":
                case "KeyA":
                case "KeyD":
                    clearInterval(interval!);
                    interval = null;
            }
        }

        // 충돌 시작 (합치기 or 안합치기 판단)
        Events.on(engine, "collisionStart", (event) => {
            event.pairs.forEach((collision) => {
                
                // 충돌 합체 조건문
                if (collision.bodyA.index === collision.bodyB.index) {
                    const index = collision.bodyA.index;

                    if (index === ANIMAL_3D.length -1){
                        return;
                    }

                    World.remove(world, [collision.bodyA, collision.bodyB]);

                    const newFruit = ANIMAL_3D[index! + 1];

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
                    
                    // 점수 추가
                    handleUpdateScore(index+1);
                    
                    // 새 동물 추가
                    World.add(world, newBody);
                }
                
                // 게임 종료 판별
                if (!disableAction && ( collision.bodyA.label === "topLine" || collision.bodyB.label === "topLine"))
                    location.reload();
            });
        })

        addFruit();

        return () => {
            // Cleanup code if needed
        };
    }, []);

    return (
        <div ref={boxRef as React.RefObject<HTMLDivElement>}>
            <canvas ref={canvasRef} className="bg-gray-700" width={620} height={850}/>
        </div>
    );
};

export default GameComponent;
