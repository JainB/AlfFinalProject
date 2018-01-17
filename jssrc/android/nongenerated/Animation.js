function Animations(translate) {
    var transformObject1 = kony.ui.makeAffineTransform();
    var transformObject2 = kony.ui.makeAffineTransform();
    transformObject1.translate(300, 0);
    transformObject2.translate(0, 0);
    var animationObject = kony.ui.createAnimation({
        "0": {
            "transform": transformObject1,
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        },
        "100": {
            "transform": transformObject2,
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    });
    var animationConfig = {
        duration: 0.5,
        fillMode: kony.anim.FILL_MODE_FORWARDS
    };
    var animationCallbacks = {
        "animationEnd": function() {
            kony.print("animation END")
        }
    };
    var animationDefObject = {
        definition: animationObject,
        config: animationConfig,
        callbacks: animationCallbacks
    };
    frmHome.segForDataHomeScreen.setAnimations({
        visible: animationDefObject
    });
}

function animate() {
    var rotAnm = kony.ui.makeAffineTransform();
    rotAnm.rotate3D(180, 0, 1, 0);
    var animationObj = {
        "100": {
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "transform": rotAnm
        }
    }
    var animationConfig = {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_NONE,
        "duration": 2
    }
    frmProducts.flxSub2.animate(kony.ui.createAnimation(animationObj), animationConfig, {});
}

function onRowDisplayFunction() {
    var animConfig = {
        "duration": 0.3,
        "iterationCount": 1,
        "delay": 0,
        "fillMode": kony.anim.FORWARDS
    };
    //scale
    var transformProp1 = kony.ui.makeAffineTransform();
    transformProp1.scale(0.0, 0.0);
    var transformProp2 = kony.ui.makeAffineTransform();
    transformProp2.scale(0.5, 0.5);
    var transformProp3 = kony.ui.makeAffineTransform();
    transformProp3.scale(1, 1);
    var animDefinitionOne = {
        0: {
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
            "transform": transformProp1
        },
        100: {
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
            "transform": transformProp3
        }
    };
    var animDefinition = kony.ui.createAnimation(animDefinitionOne);
    var finalAnimation = {
        definition: animDefinition,
        config: animConfig
    };
    frmProducts.segProducts.setAnimations({
        visible: finalAnimation
    });
}