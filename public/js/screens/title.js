game.TitleScreen = me.ScreenObject.extend({
    // TODO

    "onDestroyEvent" : function () {
        var gamemix = document.getElementById("gamemix");
        if (gamemix) {
            document.body.removeChild(gamemix);
        }
    }
});
