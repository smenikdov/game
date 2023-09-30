import React from "react";

interface EmailItemProps {
    name: string;
    time: string;
    text: string;
    cost: number;
    isNew?: boolean,
}

const EmailItem: React.FC<EmailItemProps> = ({ name, time, text, cost, isNew, }) => {
    return (
        <div className="bg-gray-200 p-4 rounded mb-4 flex flex-wrap items-center">
            <div className="w-2/12 font-semibold flex items-center">
                {
                    <div className={`w-4 h-4 mr-2 rounded-full ${ isNew ? 'bg-green-600' : ''}`}/>
                }
                { name }
            </div>
            <div className="w-8/12">
                { text }
            </div>
            <div className="w-1/12 text-green-600 font-bold">
                { cost } $
            </div>
            <div className="w-1/12 text-gray-500 text-sm">
                { time }
            </div>
        </div>
    );
};

export default EmailItem;
