"use client"
import GameComponent from "@/components/GameComponent";
import ScoreBoard from "@/components/ScoreBoard";
import KeyAlarm from "@/components/KeyAlarm";
import {Provider} from "react-redux";
import store from "@/redux/store";
import Modal from "@/components/Modal";

export default function Home() {
    return (
        <main className="flex min-h-screen items-center justify-between p-24 bg-[#4a90c4] bg-animal-pattern">
            <Provider store={store}>
                <KeyAlarm/>
                <GameComponent/>
                <ScoreBoard/>
            </Provider>
        </main>
    )
}
