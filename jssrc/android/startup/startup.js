//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "FinalProject",
    appName: "FinalProject",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "169.254.80.80",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "FinalProject",
    isturlbase: "https://cua-dev.konycloud.com/services",
    isMFApp: true,
    appKey: "731c276bda31fee2ed453f788ae45c38",
    appSecret: "12a566654ca7c665bf917ef1c14dd707",
    serviceUrl: "https://100016838.auth.konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100016838.auth.konycloud.com/appconfig",
        "identity_meta": {},
        "integsvc": {
            "FinalProjectService": "https://cua-dev.konycloud.com/services/FinalProjectService"
        },
        "appId": "338aa3d0-eb91-40f3-81c8-b9b9ad131a17",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "FinalProjectAlf",
        "reportingsvc": {
            "session": "https://cua-dev.konycloud.com/services/IST",
            "custom": "https://cua-dev.konycloud.com/services/CMS"
        },
        "baseId": "1d261aa3-68d0-47d6-a7e6-db607a7ac302",
        "login": [{
            "alias": "userstore",
            "type": "basic",
            "prov": "userstore",
            "url": "https://100016838.auth.konycloud.com"
        }],
        "services_meta": {
            "FinalProjectService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://cua-dev.konycloud.com/services/FinalProjectService"
            }
        },
        "Webapp": {
            "url": "https://cua-dev.konycloud.com/FinalProject"
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "https://cua-dev.konycloud.com/FinalProject/MWServlet",
    secureurl: "https://cua-dev.konycloud.com/FinalProject/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeFBox0e3aa4420b7c043();
    initializetempSegment();
    initializetempSegmentForReviews();
    frmHomeGlobals();
    frmProductDetailsGlobals();
    frmProductsGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7000
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;