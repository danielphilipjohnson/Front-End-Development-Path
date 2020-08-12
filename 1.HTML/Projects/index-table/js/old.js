var purchasesTable = document.getElementById("purchases");

var progress = document.getElementById("progress");

var db;


// Open Database
var DBOpenRequest = window.indexedDB.open("purchases", 1);



DBOpenRequest.onerror = function () {
    console.error("Error", openRequest.error);
};

DBOpenRequest.onsuccess = function () {
    let db = DBOpenRequest.result;
    console.log("Success");
    progress.innerHTML += '<h2>Object store created.</h2>'
    progress.innerHTML += '<h3>' + db.result + '</h3>';
    // continue to work with database using db object
    //add(db);
    displayData(db);
};

DBOpenRequest.onupgradeneeded = function (event) {
    // triggers if the client had no database
    // ...perform initialization...
    console.log("Success");
    progress.innerHTML += '<h2>Object store upgraded.</h2>'




    let db = DBOpenRequest.result;

    let objectStore = db.createObjectStore("purchases", { keyPath: "id" });
    // define what data items the objectStore will contain
    /*
    objectStore.createIndex("hours", "hours", { unique: false });
    objectStore.createIndex("minutes", "minutes", { unique: false });
    objectStore.createIndex("day", "day", { unique: false });
    objectStore.createIndex("month", "month", { unique: false });
    objectStore.createIndex("year", "year", { unique: false });

    objectStore.createIndex("notified", "notified", { unique: false });
*/

    switch (event.oldVersion) { // existing db version
        case 0:
        // version 0 means that the client had no database
        // perform initialization
        case 1:
        // client had version 1
        // update
    }
};



function displayData(db) {
    let objectStore = getPurchaseObjectStore(db);

    objectStore.openCursor().onsuccess = function (e) {

        let cursor = e.target.result;

        // if there is still another cursor to go, keep runing this code
        if (cursor) {

            addCustomerToTable(
                cursor.value.id,
                cursor.value.customerName,
                cursor.value.companyName,
                cursor.value.email,
                cursor.value.phone,
                cursor.value.item,
                cursor.value.purchaseNumber
            )
            // call notification
            // continue on to the next item in the cursor
            cursor.continue();
        }
        else {
            populateTablefirstTime(db);
            let objectStore = getPurchaseObjectStore(db);
            objectStore.openCursor().onsuccess = function (e) {

                let cursor = e.target.result;

                if (cursor) {
                    console.log(cursor.value)
                    addCustomerToTable(
                        cursor.value.id,
                        cursor.value.customerName,
                        cursor.value.companyName,
                        cursor.value.email,
                        cursor.value.phone,
                        cursor.value.item,
                        cursor.value.purchaseNumber
                    )
                    // call notification
                    // continue on to the next item in the cursor
                    cursor.continue();
                }

            }

        }
    }
}


function getPurchaseObjectStore(db) {
    let transaction = db.transaction("purchases", "readwrite").objectStore("purchases"); // (1)

    // make a request
    return transaction;
}



function populateTablefirstTime(db) {

    const customerData = [
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
        }];

    var purchasesObjectStore = getPurchaseObjectStore(db);

    // populate lots of data
    customerData.forEach(function (customer) {
        purchasesObjectStore.add(customer);
    });


}

function add(db) {
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


    var purchasesObjectStore = getPurchaseObjectStore(db);

    let purchasesRequest = purchasesObjectStore.add(customerData)

    purchasesRequest.onsuccess = function () {
        progress.innerHTML += '<h3> Customer added to the store' + purchasesRequest.result + ' </h3>';
    };

    purchasesRequest.onerror = function () {
        progress.innerHTML += '<h3>' + purchasesRequest.error + '</h3>';

    };
}

// make customer ctor?
/* Maybe just pass in object */
function addCustomerToTable(id, name, company, email, phone, item, purchaseNumber) {

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

}




/* implement others*/
function deleteById() {

}

function deleteAll() {

    //books.clear(); // clear the storage.
}



function createDB() {
    var DB_NAME = 'purchases';
    var DB_VERSION = 1; // Use a long long for this value (don't use a float)
    var DB_STORE_NAME = 'purchases';


    var progress = document.getElementById("progress");

    const customerData = [
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
        }];

    var db;

    var openDB = function () {
        // Open Database
        var DBOpenRequest = window.indexedDB.open(DB_NAME, DB_VERSION);

        DBOpenRequest.onerror = function (evt) {
            console.error("OpenDB", evt.target.errorCode);
        };

        DBOpenRequest.onsuccess = function () {
            db = this.result;
            console.log("Success");
            progress.innerHTML += '<h2>Object store created.</h2>'
            //add(db);

            displayData(db, populateTablefirstTime);
        };

        DBOpenRequest.onupgradeneeded = function (event) {
            console.log("openDb.onupgradeneeded");
            progress.innerHTML += '<h2>Object store upgraded.</h2>'

            db = this.result;

            let objectStore = db.createObjectStore(DB_STORE_NAME, { keyPath: "id" });

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
        };
    }

    /**
     * @param {string} store_name
     * @param {string} mode either "readonly" or "readwrite"
     */
    function getObjectStore(db, store_name, mode) {

        var tx = db.transaction(store_name, mode);
        return tx.objectStore(store_name);
    }

    function populateTable(cursor) {

        if (cursor) {
            console.log(cursor.value)
            addCustomerToTable(
                cursor.value.id,
                cursor.value.customerName,
                cursor.value.companyName,
                cursor.value.email,
                cursor.value.phone,
                cursor.value.item,
                cursor.value.purchaseNumber
            )
            // call notification
            // continue on to the next item in the cursor
            cursor.continue();
        }


    }
    // repeative how to fix
    function displayData(db, populatefunc) {
        let objectStore = getObjectStore(db, "purchases", "readwrite");

        objectStore.openCursor().onsuccess = function (e) {

            let cursor = e.target.result;

            // if there is still another cursor to go, 
            // keep runing this code
            if (cursor) {

                addCustomerToTable(
                    cursor.value.id,
                    cursor.value.customerName,
                    cursor.value.companyName,
                    cursor.value.email,
                    cursor.value.phone,
                    cursor.value.item,
                    cursor.value.purchaseNumber
                )
                // call notification
                // continue on to the next item in the cursor
                cursor.continue();
            }
            else {

                populatefunc(db, customerData);


            }
        }
    }


    // CRUD

    function add(db) {
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
        var store = getObjectStore(db, "purchases", 'readwrite');

        let purchasesRequest = store.add(customerData)

        purchasesRequest.onsuccess = function () {
            progress.innerHTML += '<h3> Customer added to the store' + purchasesRequest.result + ' </h3>';
        };

        purchasesRequest.onerror = function () {
            progress.innerHTML += '<h3>' + purchasesRequest.error + '</h3>';

        };
    }



    function clearObjectStore(db) {
        var store = getObjectStore(db, DB_STORE_NAME, 'readwrite');
        var req = store.clear();
        req.onsuccess = function (evt) {
            displayActionSuccess("Store cleared");
            displayPubList(store);
        };
        req.onerror = function (evt) {
            console.error("clearObjectStore:", evt.target.errorCode);
            displayActionFailure(this.error);
        };
    }


    /* Maybe just pass in object */
    function addCustomerToTable(id, name, company, email, phone, item, purchaseNumber) {

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

    }


    function populateTablefirstTime(db, customerData) {

        let purchasesObjectStore = getObjectStore(db, "purchases", "readwrite");

        // populate lots of data
        customerData.forEach(function (customer) {
            purchasesObjectStore.add(customer);
        });


        purchasesObjectStore.openCursor().onsuccess = function (e) {

            let cursor = e.target.result;

            if (cursor) {
                console.log(cursor.value)
                addCustomerToTable(
                    cursor.value.id,
                    cursor.value.customerName,
                    cursor.value.companyName,
                    cursor.value.email,
                    cursor.value.phone,
                    cursor.value.item,
                    cursor.value.purchaseNumber
                )
                // call notification
                // continue on to the next item in the cursor
                cursor.continue();
            }

        }

    }


    return {
        openDB: openDB
    }

}
