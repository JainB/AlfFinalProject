function addWidgetsfrmProducts() {
    frmProducts.setDefaultUnit(kony.flex.DP);
    var km1374337291044c488df9ea93790adae = new kony.ui.FlexContainer({
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
    km1374337291044c488df9ea93790adae.setDefaultUnit(kony.flex.DP);
    var kmcf1db7d7dcc42ddae757778bc8ad23b = new kony.ui.Image2({
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
    var kma42948f79ab4e619ba5a96c031d74e4 = new kony.ui.Button({
        "centerX": "90%",
        "centerY": "50%",
        "height": "60%",
        "id": "btnSearch",
        "onClick": AS_Button_b41504cf4e0d40bf9c38b3a0f6a8031d,
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
    var km1d98f86dbd34cca9eb349684a0951ac = new kony.ui.Button({
        "centerX": "10%",
        "centerY": "50%",
        "height": "50dp",
        "id": "btnBack",
        "left": "0dp",
        "onClick": AS_Button_72799d978f2c4b569a3ccdd5aff8e60e,
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
    km1374337291044c488df9ea93790adae.add(kmcf1db7d7dcc42ddae757778bc8ad23b, kma42948f79ab4e619ba5a96c031d74e4, km1d98f86dbd34cca9eb349684a0951ac);
    var lblCategory = new kony.ui.Label({
        "height": "3%",
        "id": "lblCategory",
        "isVisible": true,
        "left": "2.50%",
        "skin": "CopyslLabel071173b89f8b34b",
        "text": "Category:",
        "top": "11%",
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
    var flxProducts = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "75%",
        "horizontalScrollIndicator": true,
        "id": "flxProducts",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2.50%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox0cbc872ceb8f84a",
        "top": "15%",
        "verticalScrollIndicator": true,
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    flxProducts.setDefaultUnit(kony.flex.DP);
    var segProducts = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgProduct": "imagedrag.png",
            "lblDescription": "Description",
            "lblPrice": "Price",
            "lblRating": "Avg Rating:"
        }, {
            "imgProduct": "imagedrag.png",
            "lblDescription": "Description",
            "lblPrice": "Price",
            "lblRating": "Avg Rating:"
        }, {
            "imgProduct": "imagedrag.png",
            "lblDescription": "Description",
            "lblPrice": "Price",
            "lblRating": "Avg Rating:"
        }, {
            "imgProduct": "imagedrag.png",
            "lblDescription": "Description",
            "lblPrice": "Price",
            "lblRating": "Avg Rating:"
        }, {
            "imgProduct": "imagedrag.png",
            "lblDescription": "Description",
            "lblPrice": "Price",
            "lblRating": "Avg Rating:"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segProducts",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_7fde29c25dfc45a4a1266546b9e86032,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxMain,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxMain": "flxMain",
            "flxSub": "flxSub",
            "flxSub2": "flxSub2",
            "imgProduct": "imgProduct",
            "lblDescription": "lblDescription",
            "lblPrice": "lblPrice",
            "lblRating": "lblRating"
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
    flxProducts.add(segProducts);
    var flxPagination = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "7%",
        "id": "flxPagination",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2.46%",
        "skin": "CopyslFbox07af4c1d3164d44",
        "top": "91%",
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    flxPagination.setDefaultUnit(kony.flex.DP);
    var flxSub1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxSub1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "25%"
    }, {}, {});
    flxSub1.setDefaultUnit(kony.flex.DP);
    var btnPrevious = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "80%",
        "id": "btnPrevious",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_fd0ead37702846579f6f022b788fe605,
        "skin": "CopyslButtonGlossBlue089759192914b46",
        "text": "<< Prev",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    flxSub1.add(btnPrevious);
    var flxSub2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxSub2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "25%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    flxSub2.setDefaultUnit(kony.flex.DP);
    var lblPage = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblPage",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslLabel0e35aed0631c54f",
        "text": "Page",
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
    var lblNo = new kony.ui.Label({
        "centerY": "51.28%",
        "id": "lblNo",
        "isVisible": true,
        "left": "60dp",
        "skin": "CopyslLabel0da4d9a5ace8041",
        "text": "1",
        "top": "7dp",
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
    var lblOf = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblOf",
        "isVisible": true,
        "left": "100dp",
        "skin": "CopyslLabel0a0a9094f856845",
        "text": "of",
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
    var lblNo2 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblNo2",
        "isVisible": true,
        "left": "135dp",
        "skin": "CopyslLabel0d7ddb6cf0daa41",
        "text": "3",
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
    flxSub2.add(lblPage, lblNo, lblOf, lblNo2);
    var flxSub3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxSub3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "75%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    flxSub3.setDefaultUnit(kony.flex.DP);
    var btnNext = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "80%",
        "id": "btnNext",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_ae215312665c48a49d7bc07e72167606,
        "skin": "CopyslButtonGlossBlue086d2ced3db6f44",
        "text": "Next >>",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    flxSub3.add(btnNext);
    flxPagination.add(flxSub1, flxSub2, flxSub3);
    frmProducts.add(km1374337291044c488df9ea93790adae, lblCategory, flxProducts, flxPagination);
};

function frmProductsGlobals() {
    frmProducts = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmProducts,
        "enabledForIdleTimeout": false,
        "id": "frmProducts",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "preShow": AS_Form_6c6f831379674d31bd0d030d40d917cb,
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
    frmProducts.info = {
        "kuid": "77d4a1c0b9bd42c3ba6e3979e55348b7"
    };
};