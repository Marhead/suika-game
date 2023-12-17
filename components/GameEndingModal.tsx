import React, { useState } from 'react';
import {useSelector} from "react-redux";

interface GameEndingModalProps {
    onClose: () => void;
}

const GameEndingModal: React.FC<GameEndingModalProps> = ({ onClose }) => {
    const [nickname, setNickname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const score = useSelector((state:any) => state.score);

    const handleSubmit = async () => {
        alert(`Nickname: ${nickname}\nPhone Number: ${phoneNumber}\nScore: ${score}`);

        console.log("Before request: ", {nickname, phoneNumber, score});

        await fetch('/api/end', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Nickname: nickname,
                PhoneNumber: phoneNumber,
                Score: score.toString(),
            })
        });

        // After handling the data, close the modal
        onClose();

        location.reload();
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-8 rounded shadow-lg">
                <h2 className="text-2xl mb-4">Game Over!</h2>
                <label className="block mb-2">Nickname:</label>
                <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <label className="block mb-2">Phone Number:</label>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                >
                    Submit
                </button>
                <button
                    onClick={onClose}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default GameEndingModal;