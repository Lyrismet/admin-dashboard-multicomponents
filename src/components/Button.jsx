import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Button = ({bgColor, color, size, text, borderRadius}) => {
    const {setIsClicked, initialState} = useStateContext();
    return (
        <button
            type="button"
            onClick={() => setIsClicked(initialState)}
            style={{
                backgroundColor: bgColor,
                color: color,
                borderRadius: borderRadius,
            }}
            className={`text-${size} p-3 hover:drop-shadow-xl hover:bg-light-gray text-white`}
        >
            {text}
        </button>
    );
};
export default Button;