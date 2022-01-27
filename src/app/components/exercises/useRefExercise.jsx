import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const InputRef = useRef();
    // const [otherState, setOthersState] = useState("Блок");
    // const toggleOtherState = () => {
    //     setOthersState((prevState) =>
    //         prevState === "Блок" ? "Текст" : "Текст"
    //     );
    // };
    const handleClicWidth = () => {
        InputRef.current.style.width = "80px";
        InputRef.current.style.height = "150px";
        InputRef.current.textContent = "text";
    };

    // const prevState = useRef();
    // const toggleOtherState = () => {
    //     setOthersState((prevSate) => (prevSate === "Блок" ? "text" : "Блок"));
    // };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                ref={InputRef}
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <div>
                <button
                    className="btn btn-primary mt-3"
                    onClick={handleClicWidth}
                >
                    изменение ширины и текста
                </button>
            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
