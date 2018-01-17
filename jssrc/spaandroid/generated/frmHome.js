function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var km9895ede100e4dd2a577b370c8cad0c6 = new kony.ui.FlexContainer({
        "isMaster": true,
        "height": "65dp",
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
    km9895ede100e4dd2a577b370c8cad0c6.setDefaultUnit(kony.flex.DP);
    var km653597b41014ffc922c3b910e446aa7 = new kony.ui.Image2({
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
    var kmbe33e4439684fb5a6f996336a26bd47 = new kony.ui.Button({
        "centerX": "90%",
        "centerY": "50%",
        "height": "60%",
        "id": "btnSearch",
        "onClick": AS_Button_62f2885a78d8446a86a9fbae852e5212,
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
    }, {});
    var km1b328499445432bb2472db53105445e = new kony.ui.Button({
        "centerX": "10%",
        "centerY": "50%",
        "height": "50dp",
        "id": "btnBack",
        "left": "0dp",
        "onClick": AS_Button_c91dadccfedf4208b16791285db50f69,
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
    }, {});
    km9895ede100e4dd2a577b370c8cad0c6.add(km653597b41014ffc922c3b910e446aa7, kmbe33e4439684fb5a6f996336a26bd47, km1b328499445432bb2472db53105445e);
    var flxScrollForData = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "75%",
        "horizontalScrollIndicator": true,
        "id": "flxScrollForData",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2.50%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox071b4019f6fcc46",
        "top": "120dp",
        "verticalScrollIndicator": true,
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    flxScrollForData.setDefaultUnit(kony.flex.DP);
    var segForDataHomeScreen = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "ID": "",
            "lblForDataHomeScreen": "Label"
        }, {
            "ID": "",
            "lblForDataHomeScreen": "Label"
        }, {
            "ID": "",
            "lblForDataHomeScreen": "Label"
        }, {
            "ID": "",
            "lblForDataHomeScreen": "Label"
        }, {
            "ID": "",
            "lblForDataHomeScreen": "Label"
        }, {
            "ID": "",
            "lblForDataHomeScreen": "Label"
        }, {
            "ID": "",
            "lblForDataHomeScreen": "Label"
        }, {
            "ID": "",
            "lblForDataHomeScreen": "Label"
        }, {
            "ID": "",
            "lblForDataHomeScreen": "Label"
        }, {
            "ID": "",
            "lblForDataHomeScreen": "Label"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segForDataHomeScreen",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_0f3ae4a1cc754adfbaaf3ab5c8ead387,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0b2adbeaa872440",
        "rowTemplate": FBox0e3aa4420b7c043,
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
            "lblForDataHomeScreen": "lblForDataHomeScreen"
        },
        "width": "100%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxScrollForData.add(segForDataHomeScreen);
    var flxForPageName = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "8%",
        "horizontalScrollIndicator": true,
        "id": "flxForPageName",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2.50%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "slFSbox",
        "top": "70dp",
        "verticalScrollIndicator": true,
        "width": "95%",
        "zIndex": 1
    }, {}, {});
    flxForPageName.setDefaultUnit(kony.flex.DP);
    var lblPageName = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblPageName",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0af136e68a6984f",
        "text": "Home",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    flxForPageName.add(lblPageName);
    var flxDummy = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "5dp",
        "clipBounds": true,
        "id": "flxDummy",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0e722902337bf4b",
        "top": "-200dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDummy.setDefaultUnit(kony.flex.DP);
    var flxSearch = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxSearch",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox02ae86f78c39a40",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSearch.setDefaultUnit(kony.flex.DP);
    var txtSearch = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerY": "50%",
        "height": "80%",
        "id": "txtSearch",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "2.50%",
        "onDone": AS_TextField_627aba1e744a4f7598721a1c199f06eb,
        "secureTextEntry": false,
        "skin": "CopyslTextBox02d01355bb58a41",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "70%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var btnCancel = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "btnCancel",
        "isVisible": true,
        "left": "75%",
        "onClick": AS_Button_35d2a171d9e74a95bc03803691f3f61a,
        "skin": "CopyslButtonGlossBlue09f50ca8c3ed04d",
        "text": "Cancel",
        "top": "0%",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSearch.add(txtSearch, btnCancel);
    flxDummy.add(flxSearch);
    frmHome.add(km9895ede100e4dd2a577b370c8cad0c6, flxScrollForData, flxForPageName, flxDummy);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "init": AS_Form_e96d28f1de4141b188a092df0da901ec,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "preShow": AS_Form_d01f697e1d1841a78acbe754c8760991,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    frmHome.info = {
        "kuid": "0d094e1bcdd44c56a5f4985c31a46d47"
    };
};