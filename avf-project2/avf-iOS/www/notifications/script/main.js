//notification

// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//
function onDeviceReady() {
    // Empty
}

// alert dialog dismissed
function alertDismissed() {
    // do something
}

// Show a custom alertDismissed
//
function showAlert() {
    navigator.notification.alert(
                                 'The "Press Me!" button worked.',  // message
                                 alertDismissed,         // callback
                                 'Congradulations',            // title
                                 'Done'                  // buttonName
                                 );
}