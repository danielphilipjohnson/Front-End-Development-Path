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

                this.displayData();


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
                objectStore.createIndex("companyName", "companyName", { unique: false });
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


        iterateCursor: function (objectStore, displayDataFunc) {

            objectStore.openCursor().onsuccess = (function (e) {

                let cursor = e.target.result;
               
                if (cursor) {
                    
                    if (typeof displayDataFunc === "function"){
                        displayDataFunc(cursor.value);
                    }
                    

                    // call notification
                    // continue on to the next item in the cursor
                    cursor.continue();
                }

            }).bind(this);
        },

        displayData: function () {

            let objectStore = this.getObjectStore("purchases", "readwrite");

            this.iterateCursor(objectStore, this.addCustomerToTable);
        },

        /* Button event */
        populateCustomers: function () {
            let objectStore = this.getObjectStore(this.DB_STORE_NAME, "readwrite");

            // populate lots of data
            this.customerData.forEach(function (customer) {
                objectStore.add(customer);
            });
            this.iterateCursor(objectStore, this.addCustomerToTable);
        },

         /* Updates DOM */
         addCustomerToTable: function (data) {
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
     
        /* Button event */
        deleteAllCustomersFromTable: function () {
            var parent = document.getElementById("purchases");
            while (parent.firstChild) {
                parent.firstChild.remove();
            }

        },
        
        clearObjectStore: function (removefromDomFunc) {
            var store = this.getObjectStore(this.DB_STORE_NAME, 'readwrite');
            var req = store.clear();
            req.onsuccess = (function (evt) {
                progress.innerHTML += '<h2>Store cleared</h2>';
                if (typeof removefromDomFunc === "function"){
                removefromDomFunc()
                }
                else {
                    console.log(removefromDomFunc)
                    console.error("didnt pass a fun");
                }
               
            }).bind(this);

            req.onerror = function (evt) {
                console.error("clearObjectStore:", evt.target.errorCode);
                progress.innerHTML += '<h2>Store didnt clear there was an error</h2>';
            };
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
        // put in object of correct fields
        deletecustomerByColumn: function (column, customerid) {
         
            var store = this.getObjectStore(this.DB_STORE_NAME, 'readwrite');
            var req;

            switch (column){
                case "id":
                case "customerName":
                case "companyName":
                case "email":
                case "phone":
                case "item":
                case "purchaseNumber":
                    req = store.index(column);
                    // stack them for existing 
                default: null
            }
 
            if(req != null){
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
            }
            else {
                console.error("IndexDB does not have this column");
            }
            
        },

    /**
     * @param {number} key
     * @param {IDBObjectStore=} store
     */
     deleteCustomer: function(key, store) {
    
        if (typeof store == 'undefined')
          store = this.getObjectStore(this.DB_STORE_NAME, 'readwrite');

        var req = store.get(key);

        req.onsuccess = function(evt) {

          var record = evt.target.result;
          console.log("record:", record);

          if (typeof record == 'undefined') {
            progress.innerHTML += '<h2>No matching record found</h2>';
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


    createD.openDB();



    var populateButton = document.getElementById("populate");

    populateButton.addEventListener("click", function () {
        console.log("clicking ");
        createD.populateCustomers()
        //createD.deletecustomerByColumn("x", "348124b3-24e4-4b50-8dad-fe92a74adc1c");
        //createD.deletecustomerByID("319-94-XXXX");
    })

    var clearButton = document.getElementById("clear");

    clearButton.addEventListener("click", function () {
        console.log("clicking ");
        
        createD.clearObjectStore(createD.deleteAllCustomersFromTable)

    })



}