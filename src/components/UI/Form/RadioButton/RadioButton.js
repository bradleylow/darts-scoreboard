import React from 'react';

const radioButton = (props) => {
    return (
        <label className={props.classList}>
            {props.label}
            <input
                type="radio"
                name={props.name}
                value={props.value}
            />
        </label>
    );
};

export default radioButton;
