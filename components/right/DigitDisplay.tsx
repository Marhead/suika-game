import React from 'react';

interface DigitDisplayProps {
    score: number;
}

const DigitDisplay: React.FC<DigitDisplayProps> = ({ score }) => {
    // Convert the score to an array of digits
    const digitArray = score.toString().split('').map(Number);

    // Render each digit using SVG
    const renderDigits = () => {
        return digitArray.map((digit, index) => (
            <img
                key={index}
                src={`./digits/${digit}.svg`}
                alt={`Digit ${digit}`}
                style={{ width: '50px', height: '50px' }}
            />
        ));
    };

    return <div className="flex">{renderDigits()}</div>;
};

export default DigitDisplay;
