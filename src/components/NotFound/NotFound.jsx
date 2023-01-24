import React from "react";
import "./NotFound.scss"

function NotFound({ errorCode = '404' }) {
    return (
        <div className="NotFoundPage">
            <h1 className="NotFoundPage__title">Not Found {errorCode}</h1>
        </div>
    );
}

export default NotFound;