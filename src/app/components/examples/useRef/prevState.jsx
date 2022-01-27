import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOthersState] = useState("false");
    // useEffect(() => {
    //     setRenderCount((prevState) => prevState + 1);
    // });
    const toggleOtherState = () => {
        setOthersState((prevSate) => (prevSate === "false" ? "true" : "false"));
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <p>prev State:{prevState.current}</p>
            <p>Current State:{otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
