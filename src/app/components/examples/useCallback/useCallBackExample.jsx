import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallBAck = useRef(0);
    const withCallBAck = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    // setData((prevState) => {
    //             return (prevState = { ...prevState, [target.name]: target.value });
    //         });

    // without Callback
    const validateWithOutCallBack = (data) => {
        console.log(data);
    };

    useEffect(() => {
        withOutCallBAck.current++;
    }, [validateWithOutCallBack]);

    // with Callback
    const validateWithCallBack = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallBAck.current++;
    }, [validateWithCallBack]);

    // общий
    useEffect(() => {
        validateWithOutCallBack(data);
        validateWithCallBack(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>render withOutCallback:{withOutCallBAck.current}</p>
            <p>render withCallback:{withCallBAck.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                value={data.email || ""}
                name="email"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};
export default UseCallBackExample;
