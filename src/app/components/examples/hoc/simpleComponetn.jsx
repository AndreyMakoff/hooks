import React from "react";
import PropTypes from "prop-types";

const simpleComponent = ({ isAuth, onLogin, onLogOut }) => {
    return (
        <button
            className="btn btn-primary"
            onClick={isAuth ? onLogOut : onLogin}
        >
            {isAuth ? "Выйти из системы" : "Войти"}
        </button>
    );
};

simpleComponent.propTypes = {
    isAuth: PropTypes.string,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};

export default simpleComponent;
