function addWidgetsfrmProductDetails() {
    frmProductDetails.setDefaultUnit(kony.flex.DP);
    var km25bc782aa5e463ba52d757ed7a30649 = new kony.ui.FlexContainer({
        "isMaster": true,
        "height": "10%",
        "id": "flxMaster",
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0aa6deee6a9c54c"
    }, {}, {});
    km25bc782aa5e463ba52d757ed7a30649.setDefaultUnit(kony.flex.DP);
    var km4045b226ba347aa85725df762576358 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "50dp",
        "id": "imgBestBuy",
        "src": "bestbuylogo.png",
        "width": "100dp",
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var km5e46486a28a4237b57675aab79d07c3 = new kony.ui.Button({
        "centerX": "90%",
        "centerY": "50%",
        "height": "60%",
        "id": "btnSearch",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1,
        "focusSkin": "slButtonGlossRed",
        "isVisible": true,
        "skin": "CopyslButtonGlossBlue037479e935c5e44"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var kmd3518789ae34ad29ced0a552989cd44 = new kony.ui.Button({
        "centerX": "10%",
        "centerY": "50%",
        "height": "50dp",
        "id": "btnBack",
        "left": "0dp",
        "onClick": AS_Button_18997a87a7694c90aab3f7132e8dc297,
        "top": "0dp",
        "width": "10%",
        "zIndex": 1,
        "focusSkin": "slButtonGlossRed",
        "isVisible": true,
        "skin": "CopyslButtonGlossBlue03deddf365cbc48"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    km25bc782aa5e463ba52d757ed7a30649.add(km4045b226ba347aa85725df762576358, km5e46486a28a4237b57675aab79d07c3, kmd3518789ae34ad29ced0a552989cd44);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "88%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "70dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var flxSub1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxSub1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "1dp",
        "width": "50%"
    }, {}, {});
    flxSub1.setDefaultUnit(kony.flex.DP);
    var imgProduct = new kony.ui.Image2({
        "height": "100%",
        "id": "imgProduct",
        "isVisible": true,
        "left": "2%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "2%",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSub1.add(imgProduct);
    var flxSub2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
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
    var lblProductCost = new kony.ui.Label({
        "id": "lblProductCost",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0bf3d190233df49",
        "text": "On Sale !!! $35",
        "top": "35dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblAvgReviewDummy = new kony.ui.Label({
        "id": "lblAvgReviewDummy",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0639193c5f2d441",
        "text": "Avg Review:",
        "top": "55dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblAverageReview = new kony.ui.Label({
        "id": "lblAverageReview",
        "isVisible": true,
        "left": "84dp",
        "skin": "CopyslLabel0e30a8208261548",
        "text": "4.5",
        "top": "55dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgAverageReview = new kony.ui.Image2({
        "height": "20%",
        "id": "imgAverageReview",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "ratings_star_5.png",
        "top": "75dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxProductName = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "30%",
        "horizontalScrollIndicator": true,
        "id": "flxProductName",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_BOTH,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxProductName.setDefaultUnit(kony.flex.DP);
    var lblProductName = new kony.ui.Label({
        "id": "lblProductName",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel098f06588f44e49",
        "text": "Product Name",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxProductName.add(lblProductName);
    flxSub2.add(lblProductCost, lblAvgReviewDummy, lblAverageReview, imgAverageReview, flxProductName);
    var flxSub3Empty = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "0.50%",
        "id": "flxSub3Empty",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox085710cad2dc647",
        "top": "30%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSub3Empty.setDefaultUnit(kony.flex.DP);
    flxSub3Empty.add();
    var flxReviewsNo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "6%",
        "id": "flxReviewsNo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "31%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxReviewsNo.setDefaultUnit(kony.flex.DP);
    var lblReviews = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblReviews",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel051630170f00d49",
        "text": "No Of Reviews:",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblReviewsNo = new kony.ui.Label({
        "centerY": "51.70%",
        "id": "lblReviewsNo",
        "isVisible": true,
        "left": "99dp",
        "skin": "CopyslLabel0ba290982306e41",
        "text": "25",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxReviewsNo.add(lblReviews, lblReviewsNo);
    var flxSub4 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "10%",
        "horizontalScrollIndicator": true,
        "id": "flxSub4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "slFSbox",
        "top": "20%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSub4.setDefaultUnit(kony.flex.DP);
    var lblProductDescription = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblProductDescription",
        "isVisible": true,
        "left": "2.50%",
        "skin": "CopyslLabel0b21fa8fc729641",
        "text": "Description",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxSub4.add(lblProductDescription);
    flxMain.add(flxSub1, flxSub2, flxSub3Empty, flxReviewsNo, flxSub4);
    var flxReviewsDisplay = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "52%",
        "horizontalScrollIndicator": true,
        "id": "flxReviewsDisplay",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2.50%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox05de8262915554b",
        "top": "250dp",
        "verticalScrollIndicator": true,
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    flxReviewsDisplay.setDefaultUnit(kony.flex.DP);
    var segReviewDescription = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgStars": "ratings_star_5.png",
            "lblDescription": "Hello How are you wat are you doing???",
            "lblReview1": "Thanks you Its a good Product!!!",
            "lblSubmittedBy": "ReviewerName"
        }, {
            "imgStars": "ratings_star_5.png",
            "lblDescription": "Hello How are you wat are you doing???",
            "lblReview1": "Thanks you Its a good Product!!!",
            "lblSubmittedBy": "ReviewerName"
        }, {
            "imgStars": "ratings_star_5.png",
            "lblDescription": "Hello How are you wat are you doing???",
            "lblReview1": "Thanks you Its a good Product!!!",
            "lblSubmittedBy": "ReviewerName"
        }],
        "groupCells": false,
        "height": "300%",
        "id": "segReviewDescription",
        "isVisible": true,
        "left": "0%",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxMainProducts,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxEmpty": "flxEmpty",
            "flxMainProducts": "flxMainProducts",
            "imgStars": "imgStars",
            "lblDescription": "lblDescription",
            "lblReview1": "lblReview1",
            "lblSubmittedBy": "lblSubmittedBy"
        },
        "width": "100%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    var lblNoReviews = new kony.ui.Label({
        "id": "lblNoReviews",
        "isVisible": false,
        "left": "0dp",
        "skin": "CopyslLabel08899bb08db6246",
        "text": "No Reviews are there for this product!!!",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    flxReviewsDisplay.add(segReviewDescription, lblNoReviews);
    frmProductDetails.add(km25bc782aa5e463ba52d757ed7a30649, flxMain, flxReviewsDisplay);
};

function frmProductDetailsGlobals() {
    frmProductDetails = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmProductDetails,
        "enabledForIdleTimeout": false,
        "id": "frmProductDetails",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "button",
            "labelRightSideView": "Edit"
        },
        "titleBarSkin": "slTitleBar"
    });
    frmProductDetails.info = {
        "kuid": "e2a047a2aca74afea74677d609d4072d"
    };
};