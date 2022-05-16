import React, { useState } from "react";
import "./Tooltip.scss";
const Tooltip = (props: any) => {
    let timeout: any;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, props.delay || 400);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <div
            className="tooltip-wrapper"
            // When to show the tooltip
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            {/* Wrapping */}
            {props.children}
            {active && (
                <div className={`tooltip-tip ${props?.direction || "top"}`}>
                    {props.content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;