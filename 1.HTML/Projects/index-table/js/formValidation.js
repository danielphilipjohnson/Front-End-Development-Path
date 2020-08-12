var formModule = (function () {
    'use strict';

    // make an array
    var BtnSubmitBtnEmailSubmit = document.getElementById("emailSubmit");
    // makje an object
    var submits = [
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
    // pass in event handler
    function CreateEvents(func) {
        // for the ids
        // create element 
        // then add submit Button events
        for (var item in submits) {
  
            var BtnSubmit = document.getElementById(submits[item].buttonId);
            var submitItem = submits[item];

            (function(submitItem){
                BtnSubmit.addEventListener("click", function () {
                    console.log(submitItem)
       
                    _submitButtonEvents(submitItem.inputId, submitItem.columnLookup)
                });
              })(submitItem)

              /*
            BtnSubmit.addEventListener("click", function () {
                console.log("clicked: ",submits[item].inputId)
                // change
                _submitButtonEvents(submits[item].inputId, submits[item].columnLookup)
            });
            */
        }
        /*
        for (var i = 0; i < submitIds.length; i++) {
            var BtnSubmit = document.getElementById(submitIds[i]);

            BtnSubmit.addEventListener("click", function () {
                // change
                _submitButtonEvents("deleteByEmailKey", "email")
            });
        }
*/

    }

    return {
        CreateEvents: CreateEvents,

    };
})();


formModule.CreateEvents();