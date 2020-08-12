var formModule = (function () {
    'use strict';

    var submitDetails = [
        { "buttonId": "idSubmit", "inputId": "deleteByEmailKey", "columnLookup": "id" },
        { "buttonId": "customerNameSubmit", "inputId": "deleteByCustomerName", "columnLookup": "customerName" },
        { "buttonId": "companyNameSubmit", "inputId": "deleteByCompanyName", "columnLookup": "companyName" },
        { "buttonId": "emailSubmit", "inputId": "deleteByEmailKey", "columnLookup": "email" },
        { "buttonId": "phoneSubmit", "inputId": "deleteByPhone", "columnLookup": "phone" },
        { "buttonId": "itemSubmit", "inputId": "deleteByItem", "columnLookup": "item" },
        { "buttonId": "purchaseNumberSubmit", "inputId": "deleteByPurchaseNumber", "columnLookup": "purchaseNumber" }
    ]
    

    function _submitButtonEvents(elementID, columnLookup) {
        var input = document.getElementById(elementID);
        console.log(input)
        if (!input.checkValidity()) {
            var form = input.parentElement.parentElement;
            form.className = "was-validated";
        }
        else {
            createD.deletecustomerByColumn(columnLookup, input.value);
        }

    }


    function CreateEvents() {

        for (var item in submitDetails) {
  
            var BtnSubmit = document.getElementById(submitDetails[item].buttonId);
            
            var submitItem = submitDetails[item];

            (function(submitItem){
                BtnSubmit.addEventListener("click", function () {
                    console.log(submitItem)
       
                    _submitButtonEvents(submitItem.inputId, submitItem.columnLookup)
                });
              })(submitItem)
        }
    }

    return {
        CreateEvents: CreateEvents,

    };
})();


formModule.CreateEvents();