import React, {useState} from "react";
import {useSelector} from "react-redux";
import DigitDisplay from "@/components/right/DigitDisplay";

const ScoreBoard: React.FC = () => {
    const score = useSelector((state:any) => state.score);

    return (
        <div className="m-4 text-emerald-500">
            <img
                src={`./YourScore.png`}
                width="300"
            />
            <div className="text-transparent">[</div>
            <DigitDisplay score={score}/>
        </div>
    );
}

export default ScoreBoard;