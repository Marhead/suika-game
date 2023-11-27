import React, {useState} from "react";
import Score from "@/components/Score";
import {useSelector} from "react-redux";

interface ScoreBoardProps {
    updateScore: (inputScore: Score) => void;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({updateScore}) => {
    const score = useSelector((state:any) => state.score);

    return (
        <div>
            This is score box
            <h2>
                Score: {score}
            </h2>
        </div>
    );
}

export default ScoreBoard;