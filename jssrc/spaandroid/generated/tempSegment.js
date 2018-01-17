function initializetempSegment() {
    flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox068f05aa34d1240"
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var flxSub = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "95%",
        "id": "flxSub",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%"
    }, {}, {});
    flxSub.setDefaultUnit(kony.flex.DP);
    var imgProduct = new kony.ui.Image2({
        "height": "100%",
        "id": "imgProduct",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSub.add(imgProduct);
    var flxSub2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "95%",
        "id": "flxSub2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "50%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    flxSub2.setDefaultUnit(kony.flex.DP);
    var lblDescription = new kony.ui.Label({
        "id": "lblDescription",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0163f4b5df1b948",
        "text": "Description",
        "top": "0%",
        "width": "300%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblPrice = new kony.ui.Label({
        "id": "lblPrice",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknRed",
        "text": "On Sale $555",
        "top": "50%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblRating = new kony.ui.Label({
        "id": "lblRating",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel00fc8889f884f47",
        "text": "Avg Rating",
        "top": "75%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxSub2.add(lblDescription, lblPrice, lblRating);
    flxMain.add(flxSub, flxSub2);
}