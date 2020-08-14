var formModule = (function () {
    'use strict';

    var addInputIds = [
        "inputAdd-customerName",
        "inputAdd-companyName",
        "inputAdd-email",
        "inputAdd-phone",
        "inputAdd-item",

    ]

    function _checkInputValidAndPerformAction(elementID, submitDatafunc) {

        var input = document.getElementById(elementID);

        if (!input.checkValidity()) {
            var form = input.parentElement.parentElement;
            form.className += " was-validated";
        }
        else {
            console.log("valid")
            submitDatafunc(input.value)
        }
    };

    function createValidityArray(dataObj) {
        var dataObjLength = Object.keys(dataObj).length;
        return new Array(dataObjLength).fill(false);
    }


    // get all search buttons
    // provide more documentation
    function CreateEventsWithAction(submitDetails, parseData) {

        for (var item in submitDetails) {

            var BtnSubmit = document.getElementById(submitDetails[item].buttonId);

            var submitItem = submitDetails[item];

            if (BtnSubmit) {

                (function (submitItem) {
                    BtnSubmit.addEventListener("click", function (event) {

                        event.preventDefault();

                        _checkInputValidAndPerformAction(submitItem.inputId, function (inputValue) {
                            parseData(submitItem, inputValue)
                        });
                    });
                })(submitItem)
            }
        }
    }

    function addForm(submitElementId, dataObj) {

        var submitBtn = document.getElementById(submitElementId);
        if (submitBtn) {
            submitBtn.addEventListener("click", function (event) {

                event.preventDefault();

                var formValidityArr = createValidityArray(dataObj);

                // loop inputs 
                for (var i = 0; i < addInputIds.length; i++) {

                    _checkInputValidAndPerformAction(addInputIds[i], function (inputValue) {

                        var columnName = addInputIds[i].split("-")[1]

                        // set customer obj field value
                        dataObj[columnName] = inputValue

                        // set array valid 
                        formValidityArr[i] = true;

                    })
                }

                // check data is valid
                var isDataValid = formValidityArr.every(function (value) {
                    return value === true;
                })

                console.log(isDataValid)

                if (isDataValid) {

                    createD.add(dataObj);
                }

                else {

                    // empty values
                    Object.keys(dataObj).forEach(function (key, value) {
                        return dataObj[key] = "";
                    })

                }
            })

        }

    }

    return {
        CreateEventsWithAction: CreateEventsWithAction,
        addForm: addForm

    };
})();


// fields to validate
var customerObj = {
    customerName: "",
    companyName: "",
    email: "",
    phone: "",
    item: "",
}



var submitDetails = [
    { "buttonId": "idSubmit", "inputId": "deleteByID", "columnLookup": "id" },
    { "buttonId": "customerNameSubmit", "inputId": "deleteByCustomerName", "columnLookup": "customerName" },
    { "buttonId": "companyNameSubmit", "inputId": "deleteByCompanyName", "columnLookup": "companyName" },
    { "buttonId": "emailSubmit", "inputId": "deleteByEmailKey", "columnLookup": "email" },
    { "buttonId": "phoneSubmit", "inputId": "deleteByPhone", "columnLookup": "phone" },
    { "buttonId": "itemSubmit", "inputId": "deleteByItem", "columnLookup": "item" },
    { "buttonId": "purchaseNumberSubmit", "inputId": "deleteByPurchaseNumber", "columnLookup": "purchaseNumber" }
];

formModule.CreateEventsWithAction(submitDetails, function(submitItem, inputValue){
    createD.deletecustomerByColumn(submitItem.columnLookup, inputValue);
});


formModule.addForm("addCustomer", customerObj);


var searchSubmitDetails = [
    { "buttonId": "idSearchSubmit", "inputId": "searchByID" }
];


formModule.CreateEventsWithAction(searchSubmitDetails, function(submitItem, inputValue){

    createD.searchKey(inputValue);
});