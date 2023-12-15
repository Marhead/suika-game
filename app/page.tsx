"use client"
import {useState} from "react";
import store from "@/redux/store";
import {Provider} from "react-redux";
import GameComponent from "@/components/GameComponent";
import LeftPanel from "@/components/left/LeftPanel";
import RightPanel from "@/components/right/RightPanel";
import StartModal from "@/components/StartModal";
import * as dotenv from "dotenv";

export default function Home() {
    dotenv.config();
    // 모달 버튼 클릭 유무를 저장할 state
    const [showStartModal, setShowStartModal] = useState(true)

    // 버튼 클릭시 모달 버튼 클릭 유무를 설정하다는 state 함수
    const clickModal = () => {setShowStartModal(false);}

    return (
        <main className="flex min-h-screen items-center justify-center p-8 bg-[#4a90c4] bg-animal-pattern">
            {showStartModal && <StartModal onClick={clickModal}/>}
            <Provider store={store}>
                <LeftPanel/>
                <GameComponent/>
                <RightPanel/>
            </Provider>
        </main>
    )
}