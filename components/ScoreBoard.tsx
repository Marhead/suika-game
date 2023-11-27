import React, {useState} from "react";
import {useSelector} from "react-redux";

const ScoreBoard: React.FC = () => {
    const score = useSelector((state:any) => state.score);

    return (
        <div>
            Your Score: {score}
        </div>
    );
}

export default ScoreBoard;