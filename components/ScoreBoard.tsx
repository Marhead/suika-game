import React, {useState} from "react";
import {useSelector} from "react-redux";

const ScoreBoard: React.FC = () => {
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