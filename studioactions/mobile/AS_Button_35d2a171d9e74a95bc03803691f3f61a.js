function AS_Button_35d2a171d9e74a95bc03803691f3f61a(eventobject) {
    function ___ide_onClick_b9f55d9d05384518929a6967e6ee5443_Callback() {}
    frmHome.flxDummy.animate(kony.ui.createAnimation({
        "100": {
            "top": "-200px",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": ___ide_onClick_b9f55d9d05384518929a6967e6ee5443_Callback
    });
    frmHome.flxDummy.setVisibility(false);
}