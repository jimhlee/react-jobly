import React from "react";

/**
* Alert: Alerts user of success or failure
*
* state: none
*
* props: messageData
*
* App -> RoutesList -> {..., Login} -> Alert
*
*/

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