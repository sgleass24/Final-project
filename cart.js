<body onload="doShowAll()">

window.load=doShowAll();

/*
=====> Checking browser support.
 //This step might not be required because most modern browsers do support HTML5.
 */
 //Function below might be redundant.
function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        // We can use localStorage object to store data.
        return true;
    } else {
            return false;
    }
}
