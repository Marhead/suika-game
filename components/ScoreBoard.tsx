import React, {useState} from "react";
import {useSelector} from "react-redux";
import DigitDisplay from "@/components/DigitDisplay";

const ScoreBoard: React.FC = () => {
    const score = useSelector((state:any) => state.score);

    return (
        <div className="m-4 bg-yellow-400 text-emerald-500">
            Your Score:
            <DigitDisplay score={score}/>
        </div>
    );
}

export default ScoreBoard;