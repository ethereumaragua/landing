import React from "react";

const InsightRoll = ({ insights }) => {
    return (
        <div className="w-full overflow-hidden bg-dark dark:bg-white text-light dark:text-dark whitespace-nowrap">
            <div className="flex items-center w-full py-2 text-sm font-semibold tracking-wider sm:py-3 sm:text-base sm:animate-rollMobile animate-roll">
                {insights.map((text, index) => (
                    <div key={index}>
                        {text} <span className="px-4"></span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InsightRoll;
