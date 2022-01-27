import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const InputRef = useRef();
    const handleClick = () => {
        console.log(InputRef.current);
        InputRef.current.focus();
    };
    const handleClicWidth = () => {
        InputRef.current.style.width = "100px";
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="" className="form-label">
                Email
            </label>
            <input
                ref={InputRef}
                type="email"
                className="form-control"
                id="email"
            ></input>
            <button className="btn btn-primary" onClick={handleClick}>
                focus
            </button>
            <button className="btn btn-secondary" onClick={handleClicWidth}>
                изменение ширины
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
