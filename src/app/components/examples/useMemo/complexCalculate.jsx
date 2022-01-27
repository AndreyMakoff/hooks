import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function runFactoral(n) {
    console.log("runFactorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    useEffect(() => {
        console.log("render");
    });
    const fact = useMemo(() => runFactoral(value), [value]);
    const [otherState, setOtherState] = useState(false);

    const buttonColor = otherState ? "primary" : "secodary";

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value:{value}</p>
                <p>Retrurn fact:{fact}</p>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => setValue((prevSate) => prevSate + 10)}
                >
                    Increment
                </button>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => setValue((prevSate) => prevSate - 10)}
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn  ms-md-2 btn-" + buttonColor}
                    onClick={() => setOtherState((prevState) => !prevState)}
                >
                    смена цвета
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
