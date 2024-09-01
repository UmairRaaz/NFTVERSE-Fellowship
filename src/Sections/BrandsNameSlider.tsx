import React from 'react';

interface BrandsNameSliderProps {
    companyNames: string[];
}

const BrandsNameSlider: React.FC<BrandsNameSliderProps> = ({ companyNames }) => {
    return (
        <div className="flex animate-scroll uppercase whitespace-nowrap text-4xl py-2">
            {companyNames.map((name, index) => (
                <span key={`${name}-${index}`} className="mx-4 ">
                    {name}
                </span>
            ))}
            {companyNames.map((name, index) => (
                <span key={`duplicate-${name}-${index}`} className="mx-4">
                    {name}
                </span>
            ))}
        </div>
    );
};

export default BrandsNameSlider;
