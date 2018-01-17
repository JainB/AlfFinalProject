function AS_Button_62f2885a78d8446a86a9fbae852e5212(eventobject) {
    function MOVE_ACTION____0671dd1452394c8cadbfcb6a1c207cf7_Callback() {}
    frmHome.flxDummy.animate(kony.ui.createAnimation({
        "100": {
            "top": "70dp",
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
        "animationEnd": MOVE_ACTION____0671dd1452394c8cadbfcb6a1c207cf7_Callback
    });
    frmHome.flxDummy.setVisibility(true);
    frmHome.flxSearch.setVisibility(true);
}