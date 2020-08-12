if (!('indexedDB' in window)) {
    console.log('This browser doesn\'t support IndexedDB');

}

else {

    var createD = {
        DB_NAME: 'purchases',
        DB_VERSION: 1, 
        DB_STORE_NAME: 'purchases',
        progress: document.getElementById("progress"),
        DB: null,
        DBOpenRequest: null,
        customerData: [
            {
                id: "319-94-XXXX",
                customerName: "Thomas R. Gonzalez",
                companyName: "Wild Oats Markets",
                email: "ThomasRGonzalez@armyspy.com",
                phone: 708 - 377 - 2810,
                item: "xxxx",
                purchaseNumber: "239599c1-9f5e-41d2-8801-f3247da9928e"
            }, {
                id: "765-54-5685",
                customerName: "Karen E Keller",
                companyName: "Robinson Furniture",
                email: "95gp10jku2@temporary-mail.net",
                phone: 928 - 902 - 7969,
                item: "Textile Cutting Machine Setter, Operator, and Tender",
                purchaseNumber: "348124b3-24e4-4b50-8dad-fe92a74adc1c"
            }, {
                id: "627-88-5051",
                customerName: "Porter K Kenney",
                companyName: "Fence Erector",
                email: "jbqwnvla7y9@temporary-mail.net",
                phone: 469 - 452 - 1858,
                item: "Construction and Extraction Equipment",
                purchaseNumber: "63fb4584-09d4-47df-98b3-8361ddb5c90d"
            }],

        openDB: function () {
            this.DBOpenRequest = window.indexedDB.open(this.DB_NAME, this.DB_VERSION);

            this.DBOpenRequest.onerror = function (evt) {
                console.error("OpenDB", evt.target.errorCode);
            };

            this.DBOpenRequest.onsuccess = (function () {
                this.db = this.DBOpenRequest.result;
                console.log(this.db);
                progress.innerHTML += '<h2>Object store created.</h2>';

                //this.add();
                this.displayData();
                //this.deletecustomerByID("319-94-XXXX");


            }).bind(this),

            this.DBOpenRequest.onupgradeneeded = (function (event) {
                console.log("openDb.onupgradeneeded");
                progress.innerHTML += '<h2>Object store upgraded.</h2>'

                db = this.DBOpenRequest.result;
                let objectStore = db.createObjectStore(this.DB_STORE_NAME, { keyPath: "id" });

                // define what data items the objectStore will contain
                objectStore.createIndex("id", "id", { unique: true });
                objectStore.createIndex("customerName", "customerName", { unique: false });
                objectStore.createIndex("email", "email", { unique: true });
                objectStore.createIndex("phone", "phone", { unique: false });
                objectStore.createIndex("item", "item", { unique: false });
                objectStore.createIndex("purchaseNumber", "purchaseNumber", { unique: true });


                switch (event.oldVersion) { // existing db version
                    case 0:
                    // version 0 means that the client had no database
                    // perform initialization
                    case 1:
                    // client had version 1
                    // update
                }
            }).bind(this);
        },
        /**
        * @param {string} store_name
        * @param {string} mode either "readonly" or "readwrite"
        */
        getObjectStore: function (store_name, mode) {
            var tx = this.db.transaction(store_name, mode);
            return tx.objectStore(store_name);
        },

        // name change
        // pass in custom function
        iterateCursor: function (purchasesObjectStore, displayDataFunc) {

            purchasesObjectStore.openCursor().onsuccess = (function (e) {

                let cursor = e.target.result;
               
                if (cursor) {
               
                    displayDataFunc(cursor.value);
/*
                    this.addCustomerToTable(
                        cursor.value.id,
                        cursor.value.customerName,
                        cursor.value.companyName,
                        cursor.value.email,
                        cursor.value.phone,
                        cursor.value.item,
                        cursor.value.purchaseNumber
                    )
                */
                    // call notification
                    // continue on to the next item in the cursor
                    cursor.continue();
                }

            }).bind(this);


        },

        displayData: function () {
            let purchasesObjectStore = this.getObjectStore("purchases", "readwrite");

            this.iterateCursor(purchasesObjectStore, this.addCustomerToTable1);
        },

        /* Button event */
        populateCustomers: function () {
            let purchasesObjectStore = this.getObjectStore(this.DB_STORE_NAME, "readwrite");

            // populate lots of data
            this.customerData.forEach(function (customer) {
                purchasesObjectStore.add(customer);
            });
            this.iterateCursor(purchasesObjectStore, this.addCustomerToTable1);
        },

         /* Updates DOM */
         addCustomerToTable1: function (data) {
             console.log(data)

            var tr = document.createElement("tr");

            var idRow = document.createElement("td");
            idRow.innerHTML = data.id;
            tr.appendChild(idRow)

            var nameRow = document.createElement("td");
            nameRow.innerHTML = data.customerName;
            tr.appendChild(nameRow)

            var companyRow = document.createElement("td");
            companyRow.innerHTML = data.companyName;
            tr.appendChild(companyRow)

            var emailRow = document.createElement("td");
            emailRow.innerHTML = data.email;
            tr.appendChild(emailRow)

            var phoneRow = document.createElement("td");
            phoneRow.innerHTML = data.phone;
            tr.appendChild(phoneRow)

            var itemRow = document.createElement("td");
            itemRow.innerHTML = data.item;
            tr.appendChild(itemRow)

            var itemIdRow = document.createElement("td");
            itemIdRow.innerHTML = data.purchaseNumber;
            tr.appendChild(itemIdRow)

            var purchasesTable = document.getElementById("purchases");
            purchasesTable.appendChild(tr);

        },
        /* Updates DOM */
        addCustomerToTable: function (id, name, company, email, phone, item, purchaseNumber) {

            var tr = document.createElement("tr");

            var idRow = document.createElement("td");
            idRow.innerHTML = id;
            tr.appendChild(idRow)

            var nameRow = document.createElement("td");
            nameRow.innerHTML = name;
            tr.appendChild(nameRow)

            var companyRow = document.createElement("td");
            companyRow.innerHTML = company;
            tr.appendChild(companyRow)

            var emailRow = document.createElement("td");
            emailRow.innerHTML = email;
            tr.appendChild(emailRow)

            var phoneRow = document.createElement("td");
            phoneRow.innerHTML = phone;
            tr.appendChild(phoneRow)

            var itemRow = document.createElement("td");
            itemRow.innerHTML = item;
            tr.appendChild(itemRow)

            var itemIdRow = document.createElement("td");
            itemIdRow.innerHTML = purchaseNumber;
            tr.appendChild(itemIdRow)

            var purchasesTable = document.getElementById("purchases");
            purchasesTable.appendChild(tr);

        },
        /* Button event */
        deleteAllCustomersFromTable: function () {
            var parent = document.getElementById("purchases");
            while (parent.firstChild) {
                parent.firstChild.remove();
            }

        },

        add: function () {
            console.log(this.db)
            const customerData =
            {
                id: "319-94-XXXX",
                customerName: "Thomas R. Gonzalez",
                companyName: "Wild Oats Markets",
                email: "ThomasRGonzalez@armyspy.com",
                phone: 708 - 377 - 2810,
                item: "xxxx",
                purchaseNumber: "239599c1-9f5e-41d2-8801-f3247da9928e"
            };
            var store = this.getObjectStore("purchases", 'readwrite');

            let purchasesRequest = store.add(customerData)

            purchasesRequest.onsuccess = function () {
                progress.innerHTML += '<h3> Customer added to the store' + purchasesRequest.result + ' </h3>';
            };

            purchasesRequest.onerror = function () {
                progress.innerHTML += '<h3>' + purchasesRequest.error + '</h3>';

            };
        },


        clearObjectStore: function () {
            var store = this.getObjectStore(this.DB_STORE_NAME, 'readwrite');
            var req = store.clear();
            req.onsuccess = (function (evt) {
                progress.innerHTML += '<h2>Store cleared</h2>';
                // remove html
                // render the form

            }).bind(this);

            req.onerror = function (evt) {
                console.error("clearObjectStore:", evt.target.errorCode);
                progress.innerHTML += '<h2>Store didnt clear there was an error</h2>';
            };
        },
        /**
         * @param {string} biblioid
         * make param key 
         * then make case and switch
         */
        deletecustomerByID: function (customerid) {
            console.log("deleteCustomer:", arguments);
            var store = this.getObjectStore(this.DB_STORE_NAME, 'readwrite');
            var req = store.index('id');
            req.get(customerid).onsuccess = (function (evt) {
                if (typeof evt.target.result == 'undefined') {
                    progress.innerHTML += '<h2>No matching record found</h2>';
                    return;
                }
                this.deleteCustomer(evt.target.result.id, store);
            }).bind(this);
            req.onerror = function (evt) {
                console.error("deletecustomerByID:", evt.target.errorCode);
            };
        },

    /**
     * @param {number} key
     * @param {IDBObjectStore=} store
     */
     deleteCustomer: function(key, store) {
        console.log("deletePublication:", arguments);
    
        if (typeof store == 'undefined')
          store = this.getObjectStore(this.DB_STORE_NAME, 'readwrite');
    
        // As per spec http://www.w3.org/TR/IndexedDB/#object-store-deletion-operation
        // the result of the Object Store Deletion Operation algorithm is
        // undefined, so it's not possible to know if some records were actually
        // deleted by looking at the request result.
        var req = store.get(key);
        req.onsuccess = function(evt) {
          var record = evt.target.result;
          console.log("record:", record);
          if (typeof record == 'undefined') {
            progress.innerHTML += '<h2>No matching record found</h2>';
            displayActionFailure("No matching record found");
            return;
          }
          // Warning: The exact same key used for creation needs to be passed for
          // the deletion. If the key was a Number for creation, then it needs to
          // be a Number for deletion.
          req = store.delete(key);
          req.onsuccess = function(evt) {
            console.log("evt:", evt);
            console.log("evt.target:", evt.target);
            console.log("evt.target.result:", evt.target.result);
            console.log("delete successful");
            progress.innerHTML += '<h2>Deletion successful</h2>';
            // make notification
            //displayActionSuccess("Deletion successful");
            // redraw table
            //displayPubList(store);
          };
          req.onerror = function (evt) {
            console.error("deletePublication:", evt.target.errorCode);
          };
        };
        req.onerror = function (evt) {
          console.error("deletePublication:", evt.target.errorCode);
        };
      }




    }




    //var db = new createDB();
    //console.log(db.openDB())
    createD.openDB();
    var populateButton = document.getElementById("populate");
    populateButton.addEventListener("click", function () {
        console.log("clicking ");
        createD.populateCustomers()
    })

    var clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", function () {
        console.log("clicking ");
        createD.clearObjectStore()
        createD.deleteAllCustomersFromTable()
    })



}