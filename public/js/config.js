/* Constants */
var c = {
    "DEBUG"     : false,

    "WIDTH"     : 480, //960,
    "HEIGHT"    : 320, //640,

    "MOBILE"    : navigator.userAgent.match(/Android|iPhone|iPad|iPod/i),
    "GUID"      : (function () {
        function S4() {
            return ("0000" + Math.floor(Math.random() * 0x10000).toString(16)).slice(-4);
        };

        return (
            S4() + S4() + "-" +
            S4() + "-" +
            S4() + "-" +
            S4() + "-" +
            S4() + S4() + S4()
        );
    })()
};

// Helper to enable debug by setting a special hash in the URL.
if (document.location.hash === "#debug") {
    c.DEBUG = true;
    enableDebug(true);
}

window.addEventListener("hashchange", function onHashChange(e) {
    var debug = (document.location.hash === "#debug");
    enableDebug(debug);
    c.__defineGetter__("DEBUG", function () {
        return debug;
    });
});

// Turn the `c` object into a hash of constants.
try {
    Object.keys(c).forEach(function eachKey(key) {
        if (typeof(c[key]) === "function") {
            return;
        }

        c.__defineGetter__(
            key,
            (function getterFactory(value) {
                return function returnValue() {
                    return value
                };
            })(c[key])
        );
    });
}
catch (e) {
    // No getters? FAKE CONSTANTS!
}


// Game engine settings.
me.sys.gravity = 0;
//me.sys.dirtyRegion = true; // Be fast!
me.sys.preRender = true; // Be faster!
me.sys.useNativeAnimFrame = true; // Be fastest!
me.sys.stopOnAudioError = false;

function enableDebug(enable) {
    me.debug.renderHitBox = enable;
    //me.debug.renderCollisionMap = enable;
}

// Game states.
me.state.BLIPJOY = me.state.USER + 0;
