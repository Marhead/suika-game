"use client"
import store from "@/redux/store";
import {Provider} from "react-redux";
import GameComponent from "@/components/GameComponent";
import LeftPanel from "@/components/left/LeftPanel";
import RightPanel from "@/components/right/RightPanel"

export default function Home() {
    return (
        <main className="flex min-h-screen items-center justify-center p-8 bg-[#4a90c4] bg-animal-pattern">
            <Provider store={store}>
                <LeftPanel/>
                <GameComponent/>
                <RightPanel/>
            </Provider>
        </main>
    )
}
