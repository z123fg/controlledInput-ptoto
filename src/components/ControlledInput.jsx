import React, { useState } from "react";

const ControlledInput = () => {
    const [value, setValue] = useState("");

    const handleInput = (e) => {
        const selection = window.getSelection();
        console.log(selection);
    };
    return (
        <div>
            <div className="controlledInput" contentEditable onInput={handleInput}>
                {value}
            </div>
        </div>
    );
};

export default ControlledInput;
