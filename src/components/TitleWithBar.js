import React from "react";

const TitleWithBar = ({ title }) => {
    return (
        <div className="mb-4">
            <div className="h-1 w-16 bg-blue-600 mb-2 bg-fvTopHeader"></div>
            <h2 className="text-left text-2xl font-bold text-fvTopHeader">
                {title}
            </h2>
        </div>
    );
};

export default TitleWithBar;
