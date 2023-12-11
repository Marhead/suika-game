import React, { useState } from "react";

interface StartModalProps{
    onClick: () => void;
}

const StartModal: React.FC<StartModalProps> = ({ onClick }) => {
    const handleButtonClick = () => {
        onClick();
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-8 rounded shadow-lg">
                <img src="/Start_1.png" alt="Welcome Image" className="mb-4" />
                <button
                    onClick={handleButtonClick}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Game Start
                </button>
            </div>
        </div>
    );

}

export default StartModal;