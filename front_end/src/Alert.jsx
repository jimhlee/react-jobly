import React from "react";

// Takes an object
function Alert(messageData) {
    // {text: '', success: false/true}
    let successClass = null;
    messageData.success
        ? successClass = 'success'
        : successClass = 'failure';

    return (
        <div className={successClass}>
            <p> {messageData.text} </p>
        </div>
    );
}

export default Alert;