import {ButtonProps} from "./button.model";
import React from "react";
import "./button.css";

export const Button = (props: ButtonProps) => {
    return (
        <button
            className={`${props.type} ${props.emphasis}`}
        >
            {!props.progress && props.children}
        </button>
    );
};
