function initializetempSegmentForReviews() {
    flxMainProducts = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "18%",
        "id": "flxMainProducts",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox"
    }, {}, {});
    flxMainProducts.setDefaultUnit(kony.flex.DP);
    var lblReview1 = new kony.ui.Label({
        "id": "lblReview1",
        "isVisible": true,
        "left": "2dp",
        "skin": "CopyslLabel0bc17d7fa251f49",
        "text": "Thanks you Its a good Product!!!",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var lblSubmittedBy = new kony.ui.Label({
        "id": "lblSubmittedBy",
        "isVisible": true,
        "left": "2dp",
        "skin": "CopyslLabel09eb634a6712942",
        "text": "Mani Sankar",
        "top": "30dp",
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
    var lblDescription = new kony.ui.Label({
        "id": "lblDescription",
        "isVisible": true,
        "left": "2dp",
        "skin": "CopyslLabel0930c7ff5a0094d",
        "text": "Hello How are you wat are you doing???",
        "top": "90dp",
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
    var imgStars = new kony.ui.Image2({
        "height": "20%",
        "id": "imgStars",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "ratings_star_5.png",
        "top": "60dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxEmpty = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "flxEmpty",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0d2561eb4cf374f",
        "top": "99%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxEmpty.setDefaultUnit(kony.flex.DP);
    flxEmpty.add();
    flxMainProducts.add(lblReview1, lblSubmittedBy, lblDescription, imgStars, flxEmpty);
}