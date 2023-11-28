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
                src={`./digits/${digit}.svg`} // Adjust the path based on your project structure
                alt={`Digit ${digit}`}
                style={{ width: '50px', height: '50px' }} // Adjust the size as needed
            />
        ));
    };

    return <div className="flex">{renderDigits()}</div>;
};

export default DigitDisplay;
