//actions.js file 
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

function AS_Button_43ed6f07b25b405cb4fde484887f06ac(eventobject) {
    frmHome.show();
}

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

function AS_Button_72799d978f2c4b569a3ccdd5aff8e60e(eventobject) {
    frmHome.show();
}

function AS_Button_ae215312665c48a49d7bc07e72167606(eventobject) {
    return getAllProductsOnNextButtonClick.call(this);
}

function AS_Button_b41504cf4e0d40bf9c38b3a0f6a8031d(eventobject) {}

function AS_Button_c91dadccfedf4208b16791285db50f69(eventobject) {
    onClickBack();
}

function AS_Button_fd0ead37702846579f6f022b788fe605(eventobject) {
    return getAllProductsOnPrevButtonClick.call(this);
}

function AS_Form_6c6f831379674d31bd0d030d40d917cb(eventobject) {}

function AS_Form_d01f697e1d1841a78acbe754c8760991(eventobject) {
    return Animations.call(this, null);
}

function AS_Form_e96d28f1de4141b188a092df0da901ec(eventobject) {
    frmHome.flxDummy.setVisibility(false);
    getIntializeData.call(this);
}

function AS_Label_553e02e4a6ea49e0ad66ea500d0acf7a(eventobject, x, y) {}

function AS_Segment_0f3ae4a1cc754adfbaaf3ab5c8ead387(eventobject, sectionNumber, rowNumber) {
    return getSubCategories.call(this);
}

function AS_Segment_7fde29c25dfc45a4a1266546b9e86032(eventobject, sectionNumber, rowNumber) {
    return getProductDetails.call(this);
}

function AS_TextField_627aba1e744a4f7598721a1c199f06eb(eventobject, changedtext) {
    return getSearchProducts.call(this, null);
}

function backAction(eventobject) {
    return AS_Button_18997a87a7694c90aab3f7132e8dc297(eventobject);
}

function AS_Button_18997a87a7694c90aab3f7132e8dc297(eventobject) {
    frmProducts.show();
}