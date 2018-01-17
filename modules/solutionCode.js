mfConfig = 
  {

  appKey:"731c276bda31fee2ed453f788ae45c38", 
  appSecret:"12a566654ca7c665bf917ef1c14dd707", 
  serviceURL:"https://100016838.auth.konycloud.com/appconfig",

  integrationServices: 
  [
    {
      service:"FinalProjectService",
      operations:["getData"]
    }
  ],
  identityServices: 
  [
    {
      service:"userstore",
      username:"alfia.iqbal@kony.com",
      password:"Cua@cloud9"
    }
  ],
  konysdkObject: null,
  authClient: null,
  integrationObj: null,
  isKonySDKObjectInitialized:false,
  isMFAuthenticated: false
};

function getIntializeData (){

  frmHome.flxMaster.btnBack.setVisibility(false);
  // Let's get the news type the user selected
  var selectedKey = "cat00000";
  kony.print ("########## Selected Key:" + selectedKey);
  // Let's first check that the user picked a valid value
  if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
   
    if (!mfConfig.isKonySDKObjectInitialized)
    {
      initializeMobileFabric();
    }
    else if (mfConfig.isKonySDKObjectInitialized)
    {
      getProductCategories();
    }
  }
  else{
  
    kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
}





function initializeMobileFabric ()
{
  kony.print (" ********** Entering into initializeMobileFabric ********** ");
  if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
  {
    kony.application.showLoadingScreen("loadskin","Initializing the app !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mfConfig.konysdkObject = new kony.sdk();
    mfConfig.konysdkObject.init(mfConfig.appKey,mfConfig.appSecret,mfConfig.serviceURL,initializeMobileFabricSuccess,initializeMobileFabricFailure);  
  }
  else
    alert ("Network unavailable. Please check your network settings. ");
  kony.print (" ********** Exiting out of initializeMobileFabric ********** ");
}

function initializeMobileFabricSuccess(response)
{
  kony.print (" ********** Entering into initializeMobileFabricSuccess ********** ");
  kony.print (" ********** Success initializeMobileFabricSuccess response : " + JSON.stringify(response) + " ********** ");
  mfConfig.isKonySDKObjectInitialized=true;
  kony.application.dismissLoadingScreen();
  authenticateMFUsingUserStore();
  kony.print (" ********** Exiting out of initializeMobileFabricSuccess ********** ");
}

function initializeMobileFabricFailure(error)
{
  kony.print (" ********** Entering into initializeMobileFabricFailure ********** ");
  kony.print (" ********** Failure in initializeMobileFabric: " + JSON.stringify(error) + " ********** ");
  kony.application.dismissLoadingScreen();
  alert (" Unable to initialize the application. Please try again. ");
  kony.print (" ********** Exiting out of initializeMobileFabricFailure ********** ");
}

function authenticateMFUsingUserStore(){
  kony.print (" ********** Entering into authenticateMFUsingUserStore ********** ");
  kony.application.showLoadingScreen("loadskin","Fetching Data !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
  mfConfig.authClient = mfConfig.konysdkObject.getIdentityService(mfConfig.identityServices[0].service);
  var authParams = {"userid": mfConfig.identityServices[0].username, "password": mfConfig.identityServices[0].password};
  mfConfig.authClient.login(authParams, loginMFSuccess, loginMFFailure);
  kony.print (" ********** Exiting out of authenticateMFUsingUserStore ********** ");

}

function loginMFSuccess(response){
  kony.print (" ********** Entering into loginMFSuccess ********** ");
  kony.print (" ********** Success loginMFSuccess response : " + JSON.stringify(response) + " ********** ");
  mfConfig.isMFAuthenticated = true;
  kony.application.dismissLoadingScreen();
  getProductCategories();
  kony.print (" ********** Exiting out of loginMFSuccess ********** ");
}

function loginMFFailure(error)
{
  kony.print (" ********** Entering into loginMFFailure ********** ");
  kony.print (" ********** Failure in loginMFFailure: " + JSON.stringify(error) + " ********** ");
  kony.application.dismissLoadingScreen();
  alert (" Unable to authenticate to Server, Login failed. Please try again. ");
  kony.print (" ********** Exiting out of loginMFFailure ********** ");
}

function getProductCategories()
{
  var selectedKey="cat00000";
  // var zzoperationname="getSubCategories";
  //          var RowIndex = frmHome.segForDataHomeScreen.selectedRowIndex;


  if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
  {
    kony.application.showLoadingScreen("loadskin","Fetching Categories !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mfConfig.integrationObj = mfConfig.konysdkObject.getIntegrationService(mfConfig.integrationServices[0].service);
    var operationName =mfConfig.integrationServices[0].operations[0];
    var headers= {};
    if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
      data= {"ID":selectedKey};
    }else{
      // The user didn't pick a value so we'll show the alert
      kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
    }
    mfConfig.integrationObj.invokeOperation(operationName, headers, data, getProductCategoriesDataSuccessCallback, getProductCategoriesDataErrorCallback);
  }
  else
    alert ("Network unavailable. Please check your network settings. ");  
}







function getProductCategoriesDataSuccessCallback (CategoriesResponse)
{
  // Check the opstatus for 0 meaning it worked
  if (CategoriesResponse !== null && CategoriesResponse.opstatus === 0){
    // Checking to make sure we DO have results
    if (CategoriesResponse.Categories !== null){
      // Making sure we have at least 1 article returned
      if (CategoriesResponse.Categories.length > 0){
        // Now we know we have results so we'll print them out to check
        kony.print ("########## Response received from service call: "+JSON.stringify(CategoriesResponse));

        //Setting the segment widgetdataMap 
        frmHome.segForDataHomeScreen.widgetDataMap={lblForDataHomeScreen:"Name",ID:"CategoryID"}; 
        // Setting the data to the segment
        alfFormPath.push(frmHome.lblPageName.text);
        frmHome.segForDataHomeScreen.setData(CategoriesResponse.Categories);
        kony.application.dismissLoadingScreen();

      }
    }
  }
  else{
    kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    kony.ui.Alert({ message: "Service call failed with opstatus " + CategoriesResponse.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
}

function getProductCategoriesDataErrorCallback (error)
{
  kony.print (" ********** Entering into getProductCategoriesDataErrorCallback ********** ");
  kony.print (" ********** Failure in getProductCategoriesDataErrorCallback: " + JSON.stringify(error) + " ********** ");
  kony.application.dismissLoadingScreen();
  alert (" Failed to fetch the Categories. Please try again. ");
  kony.print (" ********** Exiting out of getProductCategoriesDataErrorCallback ********** ");
}












var ButtonType ="";

;
var RowData;
var lblName;
////////////////////////
function getSubCategories()
{


  var Newoperationname="getData";

  RowData=frmHome.segForDataHomeScreen.selectedItems[0];

 
  var selectedKey=RowData.CategoryID;
  alfFormObjects.push({CategoryID: RowData.CategoryID, Name:RowData.Name});
//  alert(JSON.stringify(alfFormObjects));
  
//   lblName=frmHome.lblPageName.text + " -> " +RowData.Name;
//   alfFormPath.push(lblName);
//   if(lblName!=="Home")
//   {
    frmHome.flxMaster.btnBack.setVisibility(true);
//   }

  if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
  {
    kony.application.showLoadingScreen("loadskin","Fetching SubCategories !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mfConfig.integrationObj = mfConfig.konysdkObject.getIntegrationService(mfConfig.integrationServices[0].service);
   
    var headers= {};
    if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
      data= {"ID":selectedKey};
    }else{
      // The user didn't pick a value so we'll show the alert
      kony.ui.Alert({ message: "Please select a valid  type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
    }
    mfConfig.integrationObj.invokeOperation(Newoperationname, headers, data, getSubCatSuccessCallback, getSubCatErrorCallback);
  }
  else
    alert ("Network unavailable. Please check your network settings. ");  
}

function getSubCatSuccessCallback (SubCategoriesResponse)
{
  // Check the opstatus for 0 meaning it worked
  // alert(JSON.stringify(SubCategoriesResponse));
  if (SubCategoriesResponse !== null && SubCategoriesResponse.opstatus === 0){
    // Checking to make sure we DO have results
    if (SubCategoriesResponse.Categories !== null){
      // Making sure we have at least 1 article returned
      if (SubCategoriesResponse.Categories.length > 0){
        // Now we know we have results so we'll print them out to check
        kony.print ("########## Response received from service call: "+JSON.stringify(SubCategoriesResponse));

        //Setting the segment widgetdataMap 
        frmHome.segForDataHomeScreen.widgetDataMap={lblForDataHomeScreen:"Name",ID:"CategoryID"}; 
        // Setting the data to the segment
        frmHome.segForDataHomeScreen.setVisibility(true);
        //frmHome.segForDataHomeScreen.setData([]);
        frmHome.segForDataHomeScreen.setData(SubCategoriesResponse.Categories);
        kony.application.dismissLoadingScreen();
        frmHome.lblPageName.text=lblName;

      }
      else
      {

        getAllProducts(ButtonType);
      }
    }
  }
  else{
    alert("SubCategoriesCompleted");
    //Code to navigate to second foerm


    kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    kony.ui.Alert({ message: "Service call failed with opstatus " + SubCategoriesResponse.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
}

function getSubCatErrorCallback (error)
{
  kony.print (" ********** Entering into getNewsErrorCallback ********** ");
  kony.print (" ********** Failure in getNewsErrorCallback: " + JSON.stringify(error) + " ********** ");
  kony.application.dismissLoadingScreen();
  alert (" Failed to fetch SubCategories. Please try again. ");
  kony.print (" ********** Exiting out of getNewsErrorCallback ********** ");
}


var CurrentPageNO;
var TotalPages;
var SearchType;




function getAllProducts (ButtonType)
{

  onRowDisplayFunction();

  // alert(ButtonType);
  if(ButtonType==="Next")
  {

    CurrentPageNO = CurrentPageNO+1;
  }
  else if(ButtonType==="Prev")
  {

    CurrentPageNO = CurrentPageNO-1;
  }
  else
  {
    CurrentPageNO="1";
  }
  // alert(CurrentPageNO);
  var ProductOperationName="getProducts";
  var RowData=frmHome.segForDataHomeScreen.selectedItems[0];
  var selectedKey=RowData.CategoryID;
  if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
  {
    kony.application.showLoadingScreen("loadskin","Fetching Products !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mfConfig.integrationObj = mfConfig.konysdkObject.getIntegrationService(mfConfig.integrationServices[0].service);

    var headers= {};
    if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
      data= {"ID":selectedKey,"PageNo":CurrentPageNO};
    }else{
      // The user didn't pick a value so we'll show the alert
      kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
    }
    mfConfig.integrationObj.invokeOperation(ProductOperationName, headers, data, getAllProductsuccessCallback, getProductErrorCallback);
  }
  else
    alert ("Network unavailable. Please check your network settings. ");  
}



function getAllProductsuccessCallback (ProductResponse)
{
  SearchType="Category";

  if (ProductResponse !== null && ProductResponse.opstatus === 0){
    // Checking to make sure we DO have results
    if (ProductResponse.ProductCollection !== null){
      // Making sure we have at least 1 article returned
      if (ProductResponse.ProductCollection.length > 0){
        // Now we know we have results so we'll print them out to check
        kony.print ("########## Response received from service call: "+JSON.stringify(ProductResponse));


        var productslist = ProductResponse.ProductCollection;
        var segProductListData = [];
        for (i=0;i<productslist.length;i++){
          if(productslist[i].SalePrice==="" ||productslist[i].SalePrice===undefined)
          {

          }


          var showLabel;
          var skinName;
          var Price;
          if(productslist[i].OnSale==="true"){

            Price="OnSale Price: $"+productslist[i].SalePrice;
            skinName = "sknRed";
          }
          else
          {
            Price= "Price: $"+productslist[i].SalePrice;
            skinName = "sknBlack";
          }

          var Rating;
          if(productslist[i].CustomerAvgReview===""){

            showLabel=false;
          }
          else
          {
            Rating="Avg Reviews: "+productslist[i].CustomerAvgReview;
            showLabel=true;
          }


         // alert(JSON.stringify(productslist[i]));

          var record = {"ProductID":productslist[i].ProductID,
                       "SKUID":productslist[i].SKUID,
                        "lblDescription":productslist[i].Description,
                        "imgProduct":productslist[i].Image,
                        "lblPrice":{"text":Price,"skin":skinName},
                        "lblRating":{"text":Rating,"isVisible":showLabel}
                       };

          segProductListData.push(record);
        }
        // alert(frmProducts.lblNo.text);
        //   alert(frmProducts.lblNo2.text);
        //  alert(ProductResponse.CurrentPage);
        //  alert(ProductResponse.TotalPages);

        // alert(ProductResponse.CurrentPage);
        frmProducts.lblNo.text=ProductResponse.CurrentPage;
        frmProducts.lblNo2.text=ProductResponse.TotalPages;


        CurrentPageNO=ProductResponse.CurrentPage;
        TotalPages=ProductResponse.TotalPages;


        //  alert(ProductResponse.CurrentPage);

        // alert(ProductResponse.TotalPages);
        if(ProductResponse.CurrentPage===1.0 ||ProductResponse.CurrentPage===1 ||ProductResponse.CurrentPage==="1"||ProductResponse.CurrentPage==="1.0" )
        {
          frmProducts.btnPrevious.setVisibility(false);
        }
        else
        {
          frmProducts.btnPrevious.setVisibility(true);
        }
        //          if(ProductResponse.CurrentPage!==1.0 ||ProductResponse.CurrentPage!==1 ||ProductResponse.CurrentPage!=="1"||ProductResponse.CurrentPage!=="1.0" )
        //           {
        //            frmProducts.btnPrevious.setVisibility(false);
        //          }
        if(ProductResponse.TotalPages===ProductResponse.CurrentPage)
        {
          frmProducts.btnNext.setVisibility(false);
        }
        var RowData=frmHome.segForDataHomeScreen.selectedItems[0];
        //frmProducts.lblCategoryName.text=RowData.Name;

        // alert("Before setting segments data");
        // alert(JSON.stringify(segProductListData));
        frmProducts.segProducts.data = segProductListData;
        frmProducts.lblCategory.text="Category : ";
        frmProducts.show();

        //frmProducts.btnSearch.setVisibility(false);
        //frmProducts.btnBack.setVisibility(true);

        animate();
        kony.application.dismissLoadingScreen(); 
      }
      else
      {
        alert("There are no products");
        kony.application.dismissLoadingScreen();
      }
    }
  }
  else{


    kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    kony.ui.Alert({ message: "Service call failed with opstatus " + ProductResponse.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
}

function getProductErrorCallback (error)
{
  kony.print (" ********** Entering into getNewsErrorCallback ********** ");
  kony.print (" ********** Failure in getNewsErrorCallback: " + JSON.stringify(error) + " ********** ");
  kony.application.dismissLoadingScreen();
  alert (" Failed to get Products. Please try again. ");
  kony.print (" ********** Exiting out of getNewsErrorCallback ********** ");
}



/////////




function getProductDetails()
{


  // alert("entered Product Details");
  var OperationName="getProducts";
  //          var RowIndex = frmHome.segForDataHomeScreen.selectedRowIndex;
  //var alfia =frmHome.segForDataHomeScreen.data[0][RowIndex];
  var RowData=frmProducts.segProducts.selectedItems[0];
  //alert(JSON.stringify(alfia));
  var selectedKey=RowData.ProductID;
// alert(RowData);
// alert(selectedKey);
  // var selectedSKUID=RowData.SKUID;

  // getProductReviews();

  //alert(selectedKey);
  // frmHome.lblPageName.text=frmHome.lblPageName.text + " > " +RowData.Name;
  //if(frmHome.lblPageName.text!=="Home")
  // {
  //     frmHome.flxMaster.btnBack.setVisibility(true);
  // }
  if(selectedKey=="null"||selectedKey==undefined||selectedKey==""){
    alert("No reviews available for this product");
  }
  else
  {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
    {
      kony.application.showLoadingScreen("loadskin","Fetching Product Details !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
      mfConfig.integrationObj = mfConfig.konysdkObject.getIntegrationService(mfConfig.integrationServices[0].service);
      //      var operationName =zzoperationname;
      var headers= {};
      if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
        data= {"ID":selectedKey};
      }else{
        // The user didn't pick a value so we'll show the alert
        kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
      }
      mfConfig.integrationObj.invokeOperation(OperationName, headers, data, getProductDetailsSuccessCallback, getProductDetailsErrorCallback);
    }
    else
    {
      alert ("Network unavailable. Please check your network settings. ");  
    }
  }
}

function getProductDetailsSuccessCallback (ProductDetailsResponse)
{
// alert("emnte");
  // Check the opstatus for 0 meaning it worked
  //alert(JSON.stringify(ProductDetailsResponse));
  if (ProductDetailsResponse !== null && ProductDetailsResponse.opstatus === 0){
    // Checking to make sure we DO have results
    if (ProductDetailsResponse.ProductCollection !== null){
      // Making sure we have at least 1 article returned
      if (ProductDetailsResponse.ProductCollection.length > 0){
        // Now we know we have results so we'll print them out to check
        kony.print ("########## Response received from service call: "+JSON.stringify(ProductDetailsResponse));

        //Setting the segment widgetdataMap 
        //frmHome.segForDataHomeScreen.widgetDataMap={lblForDataHomeScreen:"Name",ID:"CategoryID"}; 
        // Setting the data to the segment
        //  frmHome.segForDataHomeScreen.setVisibility(true);
        //frmHome.segForDataHomeScreen.setData([]);
        // frmHome.segForDataHomeScreen.setData(ProductDetailsResponse.ProductCollection);
        var productdetails=ProductDetailsResponse.ProductCollection;
        frmProductDetails.imgProduct.src=productdetails[0].Image;
        frmProductDetails.lblProductName.text=productdetails[0].ShortDescription;
        frmProductDetails.lblProductCost.text="Price: $"+productdetails[0].SalePrice;
        frmProductDetails.lblAverageReview.text= "Avg Review : "+productdetails[0].CustomerAvgReview;
        frmProductDetails.lblProductDescription.text=productdetails[0].LongDescription;
        if(productdetails[0].CustomerAvgReview>0 && productdetails[0].CustomerAvgReview<1.5)
        {
          //alert("1st true");
          frmProductDetails.imgAverageReview.src="ratings_star_1.png";
        }
        if(productdetails[0].CustomerAvgReview>1.5 &&productdetails[0].CustomerAvgReview<2.5)
        {
          // alert("2 true");
          frmProductDetails.imgAverageReview.src="ratings_star_2.png";
        }
        if(productdetails[0].CustomerAvgReview>2.5 &&productdetails[0].CustomerAvgReview<3.5)
        {
          //alert("3 true");
          frmProductDetails.imgAverageReview.src="ratings_star_3.png";
        }
        if(productdetails[0].CustomerAvgReview>3.5 &&productdetails[0].CustomerAvgReview<4.5)
        {
          // alert("4 true");
          frmProductDetails.imgAverageReview.src="ratings_star_4.png";
        }
        if(productdetails[0].CustomerAvgReview>4.5 &&productdetails[0].CustomerAvgReview<=5)
        {
          // alert("5 true");
          frmProductDetails.imgAverageReview.src="ratings_star_5.png";
        }

        //  frmProductDetails.imgProduct.src=productdetails[0].Image;
        kony.application.dismissLoadingScreen();
        getProductReviews();


      }
      else
      {

        alert("Some Thing went wrong");
      }
    }
  }
  else{
    //   alert("SubCategoriesCompleted");
    //Code to navigate to second foerm


    kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    kony.ui.Alert({ message: "Service call failed with opstatus " + ProductDetailsResponse.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
}

function getProductDetailsErrorCallback (error)
{
  kony.print (" ********** Entering into getProductDetailsErrorCallback ********** ");
  kony.print (" ********** Failure in getProductDetailsErrorCallback: " + JSON.stringify(error) + " ********** ");
  kony.application.dismissLoadingScreen();
  alert (" Failed to fetch the Product Details. Please try again. ");
  kony.print (" ********** Exiting out of getProductDetailsErrorCallback ********** ");
}




/////////////////////












function getProductReviews()
{

  //// alert("entered getProductReviews");
  var OperationName="getProductReviews";
  //          var RowIndex = frmHome.segForDataHomeScreen.selectedRowIndex;
  //var alfia =frmHome.segForDataHomeScreen.data[0][RowIndex];
  var RowData=frmProducts.segProducts.selectedItems[0];
  //alert(JSON.stringify(alfia));
  //var selectedKey=RowData.ProductID;
  var selectedKey=RowData.SKUID;
  //alert(selectedKey);

  // alert(selectedKey);
  // var selectedKey="4330304";

  //alert(selectedKey);
  // frmHome.lblPageName.text=frmHome.lblPageName.text + " > " +RowData.Name;
  //if(frmHome.lblPageName.text!=="Home")
  // {
  //     frmHome.flxMaster.btnBack.setVisibility(true);
  // }

  if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
  {
    kony.application.showLoadingScreen("loadskin","Fetching Reviews !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mfConfig.integrationObj = mfConfig.konysdkObject.getIntegrationService(mfConfig.integrationServices[0].service);
    //var operationName =zzoperationname;
    var headers= {};
    if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
      data= {"ID":selectedKey};
    }else{
      // The user didn't pick a value so we'll show the alert
      kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
    }
    mfConfig.integrationObj.invokeOperation(OperationName, headers, data, getProductReviewsSuccessCallback, getProductReviewsErrorCallback);
  }
  else
    alert ("Network unavailable. Please check your network settings. ");  
}

function getProductReviewsSuccessCallback (ProductReviewsResponse)
{
  // alert(JSON.stringify(ProductReviewsResponse));
  // Check the opstatus for 0 meaning it worked
  //  alert(JSON.stringify(ProductReviewsResponse));
  if (ProductReviewsResponse !== null && ProductReviewsResponse.opstatus === 0){
    // Checking to make sure we DO have results
    if (ProductReviewsResponse.ReviewCollection !== null){
      // Making sure we have at least 1 article returned
      if (ProductReviewsResponse.ReviewCollection.length > 0){
        // Now we know we have results so we'll print them out to check
        kony.print ("########## Response received from service call: "+JSON.stringify(ProductReviewsResponse));


        var productdetails=ProductReviewsResponse.ReviewCollection;
        frmProductDetails.lblReviewsNo.text=ProductReviewsResponse.ReviewsCount;






        var segReviews = [];
        for (i=0;i<productdetails.length;i++){ 

          var imgPath;

          if(productdetails[i].ReviewRating>0 && productdetails[i].ReviewRating<1.5)
          {
            //alert("img");
            imgPath="ratings_star_1.png";
          }
          if(productdetails[i].ReviewRating>1.5 &&productdetails[i].ReviewRating<2.5)
          {
            // alert("img2");
            imgPath="ratings_star_2.png";
          }
          if(productdetails[i].ReviewRating>2.5 &&productdetails[i].ReviewRating<3.5)
          {
            //alert("img3");
            imgPath="ratings_star_3.png";
          }
          if(productdetails[i].ReviewRating>3.5 &&productdetails[i].ReviewRating<4.5)
          {
            // alert("img4");
            imgPath="ratings_star_4.png";
          }
          if(productdetails[i].ReviewRating>4.5 &&productdetails[i].ReviewRating<=5)
          {
            // alert("img5");
            imgPath="ratings_star_5.png";
          }







          var record = {"ReviewID":productdetails[i].ReviewID,
                        "ReviewSKU":productdetails[i].ReviewSKU,
                        "lblReview1":productdetails[i].ReviewTitle,
                        "lblSubmittedBy":"Submitted By: "+productdetails[i].ReviewerName,
                        "lblDescription":productdetails[i].ReviewComment,
                        "imgStars":imgPath
                       };

          segReviews.push(record);
        }


        //alert(segReviews);
        frmProductDetails.segReviewDescription.data = segReviews;
         frmProductDetails.segReviewDescription.setVisibility(true);
      
        frmProductDetails.lblNoReviews.setVisibility(flase);
        kony.application.dismissLoadingScreen();
        frmProductDetails.show();
        frmProductDetails.flxMaster.btnSearch.setVisibility(false);

      }
      else
      {


        //  alert("Else condition");
        frmProductDetails.segReviewDescription.setVisibility(false);
        frmProductDetails.lblReviewsNo.text="0";
        frmProductDetails.lblNoReviews.setVisibility(true);

        kony.application.dismissLoadingScreen();
        frmProductDetails.show();
        frmProductDetails.flxMaster.btnSearch.setVisibility(false);
      }
    }
  }
  else{
    //   alert("SubCategoriesCompleted");
    //Code to navigate to second foerm


    kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    kony.ui.Alert({ message: "Service call failed with opstatus " + ProductReviewsResponse.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }
}

function getProductReviewsErrorCallback (error)
{
  kony.print (" ********** Entering into getProductReviewsErrorCallback ********** ");
  kony.print (" ********** Failure in getProductReviewsErrorCallback: " + JSON.stringify(error) + " ********** ");
  kony.application.dismissLoadingScreen();
  alert (" Failed to fetch the getProductReviewsErrorCallback. Please try again. ");
  kony.print (" ********** Exiting out of getProductReviewsErrorCallback ********** ");
}











//////////////////////









function getAllProductsOnNextButtonClick()
{
  ButtonType="Next";
  if(SearchType==="Category")
  {
    getAllProducts(ButtonType);
  }
  else
  {
    getSearchProducts(ButtonType);
  }
}
function getAllProductsOnPrevButtonClick()
{
  ButtonType="Prev";
  if(SearchType==="Category")
  {

    getAllProducts(ButtonType);
  }
  else
  {

    getSearchProducts(ButtonType);
  }
}




/////////////////////////////







function getSearchProducts (ButtonType)
{
  var searchValue=frmHome.txtSearch.text;
  if(searchValue===""||searchValue===null)
  {
    alert("Enter Some Text");
  }
  else
  {
 
    if(ButtonType==="Next")
    {

      CurrentPageNO = parseInt(CurrentPageNO)+1;
    }
    else if(ButtonType==="Prev")
    {

      CurrentPageNO =parseInt(CurrentPageNO) -1;
    }
    else
    {
      CurrentPageNO="1";
    }
    ////  alert(CurrentPageNO);
    var SearchOperationName="getSearch";
  
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
    {
      kony.application.showLoadingScreen("loadskin","Fetching Products !!!",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
      mfConfig.integrationObj = mfConfig.konysdkObject.getIntegrationService(mfConfig.integrationServices[0].service);

      var headers= {};
      //if (!kony.string.equalsIgnoreCase(selectedKey, "none")){
      data= {"Search":searchValue,"PageNo":CurrentPageNO};
      //}else{
      // The user didn't pick a value so we'll show the alert
      //kony.ui.Alert({ message: "Please select a valid news type",alertType:constants. ALERT_TYPE_INFO, alertTitle:"Fox News",yesLabel:"OK"}, {});
      // }
      mfConfig.integrationObj.invokeOperation(SearchOperationName, headers, data, getSearchSuccessCallback, getSearchErrorCallback);
    }
    else{
      alert ("Network unavailable. Please check your network settings. ");  
    }
  }

}



function getSearchSuccessCallback (ProductResponse)
{
  SearchType="Search";
  //  alert("Entered");

  if (ProductResponse !== null && ProductResponse.opstatus === 0){
    // Checking to make sure we DO have results
    if (ProductResponse.ProductCollection !== null){
      // Making sure we have at least 1 article returned
      if (ProductResponse.ProductCollection.length > 0){
        // Now we know we have results so we'll print them out to check
        kony.print ("########## Response received from service call: "+JSON.stringify(ProductResponse));


        var productslist = ProductResponse.ProductCollection;
        // alert(productslist);
        var segProductListData = [];
        for (i=0;i<productslist.length;i++){


          var showLabel;
          var skinName;
          var Price;
          if(productslist[i].OnSale==="true"){

            Price="OnSale Price: $"+productslist[i].SalePrice;
            skinName = "sknRed";
          }
          else
          {
            Price= "Price: $"+productslist[i].SalePrice;
            skinName = "sknBlack";
          }

          var Rating;
          if(productslist[i].CustomerAvgReview===""){

            showLabel=false;
          }
          else
          {
            Rating="Avg Reviews: "+productslist[i].CustomerAvgReview;
            showLabel=true;
          }




          var record = {"ProductID":productslist[i].ProductID,
                        "SKUID":productslist[i].SKUID,
                        "lblDescription":productslist[i].Description,
                        "imgProduct":productslist[i].Image,
                        "lblPrice":{"text":Price,"skin":skinName},
                        "lblRating":{"text":Rating,"isVisible":showLabel}
                       };

          segProductListData.push(record);
        }
         alert("alf=="+frmProducts.lblNo.text);
         alert("alf=="+frmProducts.lblNo2.text);
         alert("alf=="+ProductResponse.CurrentPage);
         alert("alf=="+ProductResponse.TotalPages);

        frmProducts.lblNo.text=ProductResponse.CurrentPage;
    
        frmProducts.lblNo2.text=ProductResponse.TotalPages;


        CurrentPageNO=ProductResponse.CurrentPage;
        TotalPages=ProductResponse.TotalPages;

        if(ProductResponse.CurrentPage===1.0 || ProductResponse.CurrentPage===1 || ProductResponse.CurrentPage==="1" || ProductResponse.CurrentPage==="1.0" )
        {
          frmProducts.btnPrevious.setVisibility(false);
        }
        else
        {
          frmProducts.btnPrevious.setVisibility(true);
        }
        if(ProductResponse.TotalPages===ProductResponse.CurrentPage)
        {
          frmProducts.btnNext.setVisibility(false);
        }
      
      //  frmProducts.lblCategoryName.text=frmHome.txtSearch.text;

        alert("Before setting segments data");
      
        frmProducts.segProducts.data = segProductListData;
     
        frmHome.flxDummy.setVisibility(false);
        frmProducts.lblCategory.text="Results for : ";
        frmProducts.show();
        frmProducts.btnSearch.setVisibility(false);
        frmProducts.btnBack.setVisibility(true);
        animate();

        kony.application.dismissLoadingScreen(); 
      }
      else
      {
        alert("There are no products");
        kony.application.dismissLoadingScreen();
      }
    }
  }
  else{


    kony.application.dismissLoadingScreen();
    // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
    kony.ui.Alert({ message: "Service call failed with opstatus " + ProductResponse.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Fox News",yesLabel:"OK"}, {});
  }

}

function getSearchErrorCallback (error)
{
  kony.print (" ********** Entering into getSearchErrorCallback ********** ");
  kony.print (" ********** Failure in getSearchErrorCallback: " + JSON.stringify(error) + " ********** ");
  kony.application.dismissLoadingScreen();
  alert (" Failed to getSearchErrorCallback . Please try again. ");
  kony.print (" ********** Exiting out of getSearchErrorCallback ********** ");
}


function onClickBack() {
//  alert("inside onClickBack=="+alfFormObjects.length);
  if (alfFormObjects.length >= 1) {
    //frmHome.btnBack.setVisibility(true);
    frmHome.lblPageName.text = "";
    var row;
  //  kony.print("initial value of row=="+row);
    var formpath;
   // kony.print("initial value of formpath=="+formpath);
    kony.print("alfFormObjects=="+alfFormObjects);
  //  if (alfIsBackClicked === false) {
      
      //kony.print("row value is popped=="+row);
      row = alfFormObjects.pop();
      alert(JSON.stringify(row));
//       formpath = alfFormPath.pop();
//       formpath = alfFormPath.pop();
//       kony.print("row when alfIsBackClicked is false=="+row);
//       kony.print("formpath=="+formpath);
  //  } else {
//       row = alfFormObjects.pop();
//       formpath = alfFormPath.pop();
//       kony.print("row=="+row);
//       kony.print("formpath=="+formpath);
 //   }
  
//     frmHome.lblPageName.text = formpath;
    OprtnName="getData";
//     kony.print("row while clicking back is : " + JSON.stringify(row));
    var selectedKey = row.CategoryID;
 
//     var currPath = "";
//     if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
//       kony.application.showLoadingScreen("loadskin", "Fetching SubCategories !!!", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true, {
//         enableMenuKey: true,
//         enableBackKey: true,
//         progressIndicatorColor: "ffffff77"
//       });
      mfConfig.integrationObj = mfConfig.konysdkObject.getIntegrationService(mfConfig.integrationServices[0].service);

      var headers = {};
    //  if (!kony.string.equalsIgnoreCase(selectedKey, "none")) {
        data = {
          "ID": selectedKey
        };
      //} 
    
//     else {

//         kony.ui.Alert({
//           message: "Please select a valid  type",
//           alertType: constants.ALERT_TYPE_INFO,
//           alertTitle: "Best Buy",
//           yesLabel: "OK"
//         }, {});
//       }
//       frmHome.show();
      alfIsBackClicked = true;
      mfConfig.integrationObj.invokeOperation(OprtnName, headers, data, getSubCatSuccessCallback, getSubCatErrorCallback);
//     } else {
//       alert("Network unavailable. Please check your network settings. ");
//     }
//   } else {
//     frmHome.btnBack.setVisibility(true);
//     getProductCategories();
//   }
  }
}


///////////


function getProductDetailsOnClickBack() {
  if (alfProdSearchText === "") {
    getProductDetails();
  } else {
    getSearchProducts();
  }
}

function getProductListOnClickBack() {
  if (alfProdSearchText === "" || alfFormObjects.length > 1) {
    onClickBack();
  } else {
    frmHome.txtSearch.text = "";
    getProductCategories();
  }
}
