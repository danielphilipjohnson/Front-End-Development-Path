if (!('indexedDB' in window)) {
    console.log('This browser doesn\'t support IndexedDB');

}

else {

    function createNotification(title, body, icon) {
        new Notification(title, {
            body: body,
            icon: icon,
        })
    }


    var createIndexedDB = {
        DB_NAME: 'purchases',
        DB_VERSION: 1,
        DB_STORE_NAME: 'purchases',
        DB: null,
        DBOpenRequest: null,

        customerData: [{ "id": "abec9ff2-0ece-440b-b2b5-b4cce7a831fd", "customerName": "Jay Hulse", "companyName": "Upton-Kuphal", "email": "jhulse0@amazon.co.uk", "item": "Alteryx, Inc.", "purchaseNumber": "3ea8ca06-8d1f-4148-a869-0be5609c6127", "phone": "263-331-2669" },
        { "id": "8dabbebf-91fb-4fdc-94f7-97b9aea3dba2", "customerName": "Vin Bennellick", "companyName": "Weissnat, Cummerata and Schiller", "email": "vbennellick1@phpbb.com", "item": "bluebird bio, Inc.", "purchaseNumber": "6b8939f5-7474-46fd-86c1-067c100491cd", "phone": "450-461-3588" },
        { "id": "d1c58d1a-ab22-4fa1-b7cb-748e47607f5b", "customerName": "Rea Haskell", "companyName": "Herzog-Raynor", "email": "rhaskell2@squarespace.com", "item": "Jack Henry & Associates, Inc.", "purchaseNumber": "a9e7fcfd-1764-4c3b-913b-23b84ea7858a", "phone": "549-843-0576" },
        { "id": "5ef86d0b-2ade-4dcb-9dd6-12aa4af1bb4c", "customerName": "Rod Lindsell", "companyName": "Spencer LLC", "email": "rlindsell3@pen.io", "item": "Duff & Phelps Utilities Income, Inc.", "purchaseNumber": "30b91066-d277-4c46-88b2-c2e00d7e6fb0", "phone": "263-372-2983" },
        { "id": "0f06a390-827b-4323-8a53-3eaf2b59c4a8", "customerName": "Lesya Wedlock", "companyName": "Abernathy Group", "email": "lwedlock4@sohu.com", "item": "Total System Services, Inc.", "purchaseNumber": "8d659648-f7ca-4379-88fc-40f1c863010b", "phone": "833-925-4515" },
        { "id": "4b21f5b1-e33e-428b-bcbf-18d7917299a2", "customerName": "Sid Wannes", "companyName": "Kulas, Botsford and Rippin", "email": "swannes5@1und1.de", "item": "Zebra Technologies Corporation", "purchaseNumber": "89bdb016-5e9d-43f6-952c-36bca3beeb5a", "phone": "214-462-0294" },
        { "id": "508f5b53-9883-4c0f-872c-bfb009097b54", "customerName": "Benoite Tolson", "companyName": "Mohr-Dickinson", "email": "btolson6@exblog.jp", "item": "PVH Corp.", "purchaseNumber": "b3dee30f-4fac-4a5d-8f79-aebed54087e2", "phone": "143-991-1283" },
        { "id": "964a1fe7-0583-4384-93ee-3c02d8298fda", "customerName": "Celestia Screase", "companyName": "Harber-Nitzsche", "email": "cscrease7@phoca.cz", "item": "Credit Suisse Group", "purchaseNumber": "f4466102-b426-444b-83d5-70b7ad9284d2", "phone": "829-230-9709" },
        { "id": "683b4e46-3a45-4d9f-9d17-ca8d4524a079", "customerName": "Cherilynn Calcraft", "companyName": "Kuhlman Group", "email": "ccalcraft8@nydailynews.com", "item": "Eagle Bancorp Montana, Inc.", "purchaseNumber": "4fe50fb6-40fb-4562-8744-eab3b5ddfd58", "phone": "313-809-7157" },
        { "id": "2bb0c9bb-6ce2-4b77-85d7-66503064ee94", "customerName": "Garik Blamphin", "companyName": "Murray, Yundt and Lebsack", "email": "gblamphin9@photobucket.com", "item": "Walter Investment Management Corp.", "purchaseNumber": "cf63f7f6-7575-4ac1-aaf1-44d66a5aee11", "phone": "803-400-6884" },
        { "id": "e2de20d1-d668-40ae-a693-730e6079ec54", "customerName": "Floyd Linacre", "companyName": "O'Connell Group", "email": "flinacrea@nifty.com", "item": "CBL & Associates Properties, Inc.", "purchaseNumber": "dcc37031-4fea-40c7-accf-5cdb19a63f50", "phone": "310-385-9878" },
        { "id": "1fea7b1d-ec79-43a1-bbfb-c2e5e14d85ec", "customerName": "Babara Hurford", "companyName": "Barrows and Sons", "email": "bhurfordb@stumbleupon.com", "item": "Select Bancorp, Inc.", "purchaseNumber": "2112c5b3-d838-499b-8169-738fc0a2bbff", "phone": "542-192-6445" },
        { "id": "fb5e96a1-841d-442c-999f-0488d99e2ce8", "customerName": "Dreddy Conklin", "companyName": "Skiles Group", "email": "dconklinc@theguardian.com", "item": "Southern First Bancshares, Inc.", "purchaseNumber": "04204712-5588-44df-9659-21eb2b2f617c", "phone": "330-851-3685" },
        { "id": "69e99827-016f-4421-b76f-cf30ad9758e1", "customerName": "Clemmy Aldwich", "companyName": "Koch, Quitzon and Walsh", "email": "caldwichd@wiley.com", "item": "Preformed Line Products Company", "purchaseNumber": "5e68d7df-d951-46ff-81eb-283aed00260b", "phone": "681-336-5395" },
        { "id": "38f05488-dedb-472b-bc25-174e32b87512", "customerName": "Stirling Kitcherside", "companyName": "Strosin-Hamill", "email": "skitchersidee@shinystat.com", "item": "iShares Nasdaq Biotechnology Index Fund", "purchaseNumber": "ec5f8c6a-8767-43fc-9b7e-8228cf5cfea8", "phone": "350-193-1537" },
        { "id": "6770185a-f9d5-4dfe-a5ef-ebf325768825", "customerName": "Beilul Winspurr", "companyName": "Toy-Schmitt", "email": "bwinspurrf@addtoany.com", "item": "Sensus Healthcare, Inc.", "purchaseNumber": "d4f656fe-9a30-45c5-a5b5-92e1cb93a93a", "phone": "810-944-8825" },
        { "id": "1f444949-8180-4c3d-91cd-72985b331143", "customerName": "Stormy Bramo", "companyName": "Grady, Feest and Mosciski", "email": "sbramog@google.it", "item": "Taiwan Fund, Inc. (The)", "purchaseNumber": "595b8590-eb9f-484c-a85b-f82225b471c0", "phone": "945-102-9040" },
        { "id": "1b787c7c-290e-4343-894a-19fcaf38872f", "customerName": "Clementia McGreary", "companyName": "Walsh, Hegmann and Johns", "email": "cmcgrearyh@1und1.de", "item": "UnitedHealth Group Incorporated", "purchaseNumber": "a0e75d3b-f8c3-41df-9ee0-bed71ae3309c", "phone": "367-982-0260" },
        { "id": "dea72193-4f9f-4ae1-b19f-1d188f37c728", "customerName": "Ric Antonognoli", "companyName": "Vandervort Inc", "email": "rantonognolii@elegantthemes.com", "item": "Lehman ABS Corporation", "purchaseNumber": "dc604131-c74b-4327-a48c-c345f6724c19", "phone": "202-257-3093" },
        { "id": "e91939e4-3f57-4625-880a-f20898883f55", "customerName": "Jeane Pearcehouse", "companyName": "Medhurst-Farrell", "email": "jpearcehousej@friendfeed.com", "item": "The Providence Service Corporation", "purchaseNumber": "950d4ead-4e75-4648-94a3-564d9572c8e7", "phone": "861-534-6966" },
        { "id": "667c4469-958e-42ff-be88-74950d4cc672", "customerName": "Desmund Lotwich", "companyName": "Hintz and Sons", "email": "dlotwichk@flavors.me", "item": "Industrias Bachoco, S.A. de C.V.", "purchaseNumber": "bcea9e00-dd4b-425c-a24f-907675ebb0e0", "phone": "475-574-3333" },
        { "id": "4e725338-1111-48d9-8294-9b78c463450e", "customerName": "Amelita Penddreth", "companyName": "Johnson Group", "email": "apenddrethl@tinypic.com", "item": "United States Cellular Corporation", "purchaseNumber": "385ec2a2-b398-4a77-8a99-0ef635be3de5", "phone": "533-899-5559" },
        { "id": "1a3cc42f-8cbf-4f6e-bca8-34ebb231926f", "customerName": "Mischa Huitson", "companyName": "Considine, Hettinger and Zemlak", "email": "mhuitsonm@house.gov", "item": "SAP SE", "purchaseNumber": "a8d4deaf-b119-4247-9621-55dadcc7d6f4", "phone": "839-120-2366" },
        { "id": "0dcde831-0bb5-49b2-88e4-e922f742de0f", "customerName": "Cornelle Doley", "companyName": "Willms, Lueilwitz and Von", "email": "cdoleyn@amazonaws.com", "item": "CBRE Group, Inc.", "purchaseNumber": "bc58b76d-eced-4166-82af-7a39b79fe04d", "phone": "517-646-3000" },
        { "id": "60f1418e-d1f0-4d6c-9cc6-5470a86258ce", "customerName": "Haydon Pettingill", "companyName": "Prohaska-Roberts", "email": "hpettingillo@nps.gov", "item": "Freightcar America, Inc.", "purchaseNumber": "d89149ba-b711-4235-9a48-8a20b579100f", "phone": "598-666-1669" },
        { "id": "91e570b0-4815-4122-8751-22478934121a", "customerName": "Rhona Maryska", "companyName": "Hyatt, Reilly and Conroy", "email": "rmaryskap@globo.com", "item": "First Trust Hong Kong AlphaDEX Fund", "purchaseNumber": "0665f5a8-9e39-4ae5-a750-412f06d89c9c", "phone": "679-341-3135" },
        { "id": "86406e16-577b-4152-80df-a77f98cd6a47", "customerName": "Thorny Keveren", "companyName": "Upton-Lockman", "email": "tkeverenq@epa.gov", "item": "Lennar Corporation", "purchaseNumber": "1aee2dde-2e96-4a9a-9e69-c830828cba97", "phone": "423-942-2440" },
        { "id": "3c6660c9-c3bd-4507-abb6-cb1d2689a48c", "customerName": "Jocelyne Djakovic", "companyName": "Walsh, Muller and Gerlach", "email": "jdjakovicr@flickr.com", "item": "Jagged Peak Energy Inc.", "purchaseNumber": "4d78f146-5fea-4152-99d2-b2e5d791c0c9", "phone": "760-916-6711" },
        { "id": "4a3ab785-06d5-4a72-9399-2690768e52ad", "customerName": "Jammal Dunlap", "companyName": "Oberbrunner-Paucek", "email": "jdunlaps@nps.gov", "item": "Coherus BioSciences, Inc.", "purchaseNumber": "088f3139-7200-433e-b154-efb210ceadf3", "phone": "559-552-2551" },
        { "id": "63c6a040-2635-4001-9076-0cf80df594b6", "customerName": "Price Gartell", "companyName": "Marvin, Ritchie and Moen", "email": "pgartellt@storify.com", "item": "Halliburton Company", "purchaseNumber": "c0310b61-2dc3-482e-a481-82bddb21085d", "phone": "178-344-1302" },
        { "id": "5e22b98d-f6b9-4486-ad2d-6d9353bc58a0", "customerName": "Lauren Sent", "companyName": "Kub, Bins and Collier", "email": "lsentu@51.la", "item": "Compania Cervecerias Unidas, S.A.", "purchaseNumber": "fffc2f1a-d004-4b63-a581-13117be52d6b", "phone": "291-774-5326" },
        { "id": "25c87b27-b0ee-45f5-94de-13200eefa271", "customerName": "Bobby Chinnick", "companyName": "Gulgowski LLC", "email": "bchinnickv@xinhuanet.com", "item": "Wells Fargo & Company", "purchaseNumber": "3653f029-a922-4f22-bcb5-220a27211e5e", "phone": "230-822-5837" },
        { "id": "60839d94-1676-4fc0-9b18-4543e60b0613", "customerName": "Kermie Wainer", "companyName": "Nienow, Bartoletti and Marks", "email": "kwainerw@ycombinator.com", "item": "Hudson Pacific Properties, Inc.", "purchaseNumber": "19e91aa0-31d4-40a8-8cc5-3f0772e31ff4", "phone": "563-154-0867" },
        { "id": "e87ab030-c959-4512-97e3-ea67c3cc4bac", "customerName": "Diann Bagg", "companyName": "Carter Inc", "email": "dbaggx@cdbaby.com", "item": "Simon Property Group, Inc.", "purchaseNumber": "4830daa4-8d7a-4141-a98b-2f74d47cb25c", "phone": "667-281-0295" },
        { "id": "1cc5d8e9-5251-49e9-8e52-3ce8d996f018", "customerName": "Rudd Jameson", "companyName": "Barton and Sons", "email": "rjamesony@t.co", "item": "NextEra Energy, Inc.", "purchaseNumber": "bb33c8da-a61f-4e3c-9ceb-3c1a134c6cb5", "phone": "689-173-1589" },
        { "id": "8e7b7017-4449-4c73-9fdf-3c1017811e02", "customerName": "Inger Tremlett", "companyName": "Lindgren-Watsica", "email": "itremlettz@biblegateway.com", "item": "Lennox International, Inc.", "purchaseNumber": "049e0f70-f16e-4cca-b835-ec58a5528e91", "phone": "830-947-8799" },
        { "id": "c1a6354f-32be-429f-a77a-0771d3930907", "customerName": "Marian Kuhl", "companyName": "Ondricka and Sons", "email": "mkuhl10@yolasite.com", "item": "iShares MSCI Emerging Markets Asia Index Fund", "purchaseNumber": "565b7893-8270-43a8-a085-27561ea7fba6", "phone": "312-532-2068" },
        { "id": "fcbf43d5-ff5d-44e9-a59e-e67fd61e6461", "customerName": "Marcie Volkes", "companyName": "Glover Group", "email": "mvolkes11@gnu.org", "item": "Interpace Diagnostics Group, Inc.", "purchaseNumber": "5da8b3dc-61ab-4539-b86a-7910da3b1e7f", "phone": "730-537-1738" },
        { "id": "a3d8b7d9-c6a9-43ad-8a36-3ccc15e5c122", "customerName": "Fielding Somerton", "companyName": "Friesen, Reinger and Hessel", "email": "fsomerton12@yelp.com", "item": "M III Acquisition Corp.", "purchaseNumber": "abfabc33-103e-4dd1-a6c9-930c7d1ea082", "phone": "117-831-3178" },
        { "id": "e30d00f6-11a3-48fe-8b48-abbbd06ff8ac", "customerName": "Kalinda Kimber", "companyName": "Ondricka Inc", "email": "kkimber13@mail.ru", "item": "Belden Inc", "purchaseNumber": "f657e3d5-2e05-4d2c-b5ba-b1936ad6b8e7", "phone": "423-859-5350" },
        { "id": "34854cbe-d489-4a71-bf64-078fc0ca7232", "customerName": "Ceil Durkin", "companyName": "Reynolds and Sons", "email": "cdurkin14@blogger.com", "item": "Allied Motion Technologies, Inc.", "purchaseNumber": "c40f00e2-db50-446b-aa45-0935f3ae4826", "phone": "791-687-1325" },
        { "id": "464b25d0-d640-4fd3-8ddc-da07de864dc4", "customerName": "Kendrick Pusey", "companyName": "Dare-White", "email": "kpusey15@blogtalkradio.com", "item": "TrustCo Bank Corp NY", "purchaseNumber": "75c7720a-ba0b-4ecd-b874-27138fdc4cb2", "phone": "556-218-5890" },
        { "id": "e3df8878-7a52-4dbc-aa0d-a3dedeef92c1", "customerName": "Guillermo Simkiss", "companyName": "Steuber, Lehner and Kassulke", "email": "gsimkiss16@unc.edu", "item": "China Lodging Group, Limited", "purchaseNumber": "3c15d33a-cfc2-40d9-b551-6bb07a779cf2", "phone": "782-816-0199" },
        { "id": "62c9fc32-9769-4f5b-8bb9-ea8b6e9e9827", "customerName": "Beau Jedryka", "companyName": "Dickinson, Konopelski and Fahey", "email": "bjedryka17@flickr.com", "item": "Casella Waste Systems, Inc.", "purchaseNumber": "a4b41746-90db-48d1-b958-8d80ae14f1b0", "phone": "538-564-6234" },
        { "id": "2e6b5ffc-a477-4ad1-95b8-f846cdd5d6f8", "customerName": "Christye Grimbaldeston", "companyName": "Ernser, Runolfsson and Lesch", "email": "cgrimbaldeston18@biglobe.ne.jp", "item": "Catalyst Pharmaceuticals, Inc.", "purchaseNumber": "8581bb76-3236-493e-9cc7-f4f17ef467c1", "phone": "646-835-7746" },
        { "id": "252461bc-9953-4478-b43a-470d207b98df", "customerName": "Harlin Macieiczyk", "companyName": "Carroll-Barrows", "email": "hmacieiczyk19@prnewswire.com", "item": "Columbia Property Trust, Inc.", "purchaseNumber": "a01f3ec8-4d79-4038-b6cb-d76454b257b7", "phone": "417-307-7492" },
        { "id": "102d025a-7aee-4ab2-b344-9453fc3e67c5", "customerName": "Elwin Hought", "companyName": "Swaniawski LLC", "email": "ehought1a@cisco.com", "item": "Span-America Medical Systems, Inc.", "purchaseNumber": "c40c89c2-4d30-4857-a5fe-b8fccfc8b699", "phone": "675-102-3188" },
        { "id": "2224c3ff-33e4-42c5-ad1c-240ad1f79d75", "customerName": "Gilberto Yeld", "companyName": "Torphy, Hoppe and Yundt", "email": "gyeld1b@spiegel.de", "item": "DST Systems, Inc.", "purchaseNumber": "f4da0f67-29da-48d3-8282-1c009eb79ea5", "phone": "402-557-0056" },
        { "id": "e5f00554-d544-4762-b02d-92004cb968a0", "customerName": "Cordy Legon", "companyName": "Gislason, Mertz and Smitham", "email": "clegon1c@huffingtonpost.com", "item": "AmTrust Financial Services, Inc.", "purchaseNumber": "4f53517f-f589-4dac-8933-9025254451f0", "phone": "515-936-7510" },
        { "id": "8e33f606-b90c-46f6-a628-cebda8bf4fa3", "customerName": "Maurita Pilpovic", "companyName": "West-Streich", "email": "mpilpovic1d@pagesperso-orange.fr", "item": "Marathon Oil Corporation", "purchaseNumber": "b6e574f5-6a2d-463e-b14d-978dede7f589", "phone": "872-244-2548" },
        { "id": "f28871a1-0e96-41e9-8b68-93177d1cb244", "customerName": "Adlai Jiroutka", "companyName": "Stanton and Sons", "email": "ajiroutka1e@phpbb.com", "item": "TCF Financial Corporation", "purchaseNumber": "8b341feb-7b1f-402a-a79e-58e0494586cc", "phone": "777-599-6416" },
        { "id": "f06bdfbe-d7ea-4bb6-8bb9-fc8707c63af3", "customerName": "Melinde Laffoley-Lane", "companyName": "Schoen, Fay and Weimann", "email": "mlaffoleylane1f@mlb.com", "item": "Flaherty & Crumrine Preferred Income Fund Incorporated", "purchaseNumber": "1671a224-5c98-4f03-9e55-7092ce14546d", "phone": "794-970-5895" },
        { "id": "d533a81b-393a-440a-bf36-ca945aebbd25", "customerName": "Ramon MacPaik", "companyName": "Weber-Kassulke", "email": "rmacpaik1g@quantcast.com", "item": "Qwest Corporation", "purchaseNumber": "f043f824-247e-45aa-95ed-82efb9b4c0f2", "phone": "769-949-6336" },
        { "id": "7f23a068-1942-4514-a2cd-a6afbf2d6285", "customerName": "Miller Denford", "companyName": "Franecki, Mante and Bechtelar", "email": "mdenford1h@skype.com", "item": "Cabela's Inc", "purchaseNumber": "a092e478-89e9-495e-9bd4-d0c4a7c6cfc5", "phone": "313-377-4246" },
        { "id": "11d7f6ae-4efe-4acc-b988-fe718f91817f", "customerName": "Biddy McGrotty", "companyName": "Conn-Raynor", "email": "bmcgrotty1i@scientificamerican.com", "item": "Healthcare Services Group, Inc.", "purchaseNumber": "bb68bdb8-086d-44bd-b977-2020f81d821c", "phone": "486-635-3085" },
        { "id": "0ef4ac99-4eba-44d3-8937-860966274cba", "customerName": "Linnie Ducker", "companyName": "Hermann-Braun", "email": "lducker1j@webmd.com", "item": "Acxiom Corporation", "purchaseNumber": "b762e501-0a8d-4ebc-b3fe-2181d51032f5", "phone": "605-436-5881" },
        { "id": "f912083c-3acd-4800-b048-b9d023af5293", "customerName": "Cazzie Cleve", "companyName": "Dickens, Mohr and Stoltenberg", "email": "ccleve1k@sogou.com", "item": "FS Investment Corporation", "purchaseNumber": "97da1594-ce7b-449c-8877-63377751a987", "phone": "210-582-6479" },
        { "id": "e550c5fc-ed6f-497b-9d8c-ec7bdde00bcc", "customerName": "Lucina Fibbens", "companyName": "Boehm-Bins", "email": "lfibbens1l@nba.com", "item": "Universal Stainless & Alloy Products, Inc.", "purchaseNumber": "28502c75-968f-420f-99d8-d2c5b63db4a4", "phone": "339-696-4226" },
        { "id": "abb494c6-ec67-4ea7-b780-443ab01a4c79", "customerName": "Drona Simo", "companyName": "Lebsack and Sons", "email": "dsimo1m@shinystat.com", "item": "Peregrine Pharmaceuticals Inc.", "purchaseNumber": "5c075ae1-dc7c-449d-b693-79d1bfc5186f", "phone": "328-679-2073" },
        { "id": "1c580457-1a02-44f9-934e-7f0ecae0cd15", "customerName": "Darryl McBeath", "companyName": "Kilback-Hoeger", "email": "dmcbeath1n@gizmodo.com", "item": "SiteOne Landscape Supply, Inc.", "purchaseNumber": "751e3f05-930e-4a7a-a99f-cceb2a0d3fc9", "phone": "950-211-0910" },
        { "id": "a70f1996-e8ed-4d7b-bdea-3bf8b16ac72f", "customerName": "Carson Hoggetts", "companyName": "Bradtke and Sons", "email": "choggetts1o@spotify.com", "item": "Blackrock Capital and Income Strategies Fund Inc", "purchaseNumber": "554d5610-744d-4b36-8e35-6013b6cddf99", "phone": "293-373-4536" },
        { "id": "c70a7069-85a8-4b44-90a3-a08a6d40927f", "customerName": "Domini Bellwood", "companyName": "Rau Group", "email": "dbellwood1p@taobao.com", "item": "KLX Inc.", "purchaseNumber": "4990a4c9-b576-40da-8e68-ac09c858e247", "phone": "448-136-4725" },
        { "id": "8216c38b-4448-47d4-9bb7-d034141a90c0", "customerName": "Barbette Lamberts", "companyName": "Beier, Wisozk and Brakus", "email": "blamberts1q@typepad.com", "item": "Vedanta  Limited", "purchaseNumber": "8170ce6e-7196-4682-9bcc-714dbfc865e9", "phone": "508-260-5027" },
        { "id": "f4fff540-e0b3-4ee2-8a5b-0f1b591e780c", "customerName": "Juliet Brixey", "companyName": "Stehr, Gislason and Hilll", "email": "jbrixey1r@privacy.gov.au", "item": "Monmouth Real Estate Investment Corporation", "purchaseNumber": "f3c78d4a-ff30-41e6-975e-689252cd16df", "phone": "784-431-9010" },
        { "id": "f5dfb558-a6c0-45e1-a890-714b188d8cd6", "customerName": "Lorilee Adiscot", "companyName": "Corkery LLC", "email": "ladiscot1s@netscape.com", "item": "Magellan Midstream Partners L.P.", "purchaseNumber": "ff04a54a-38f7-4623-aad3-4b5eafbe62dc", "phone": "116-942-9621" },
        { "id": "17e81323-213c-4df1-84ba-5ced11d1b630", "customerName": "Tristam Kenrack", "companyName": "Wisozk, Schuppe and Hackett", "email": "tkenrack1t@hud.gov", "item": "Genetic Technologies Ltd", "purchaseNumber": "bbb22ce5-8661-4396-a77d-187785e79388", "phone": "646-994-5171" },
        { "id": "1f2ab8d5-e82f-4c9f-9dc4-0930a0f29a9d", "customerName": "Abraham Frill", "companyName": "Schmeler-Halvorson", "email": "afrill1u@hao123.com", "item": "Modine Manufacturing Company", "purchaseNumber": "c9c24b24-7704-41c2-8c64-1754098e254c", "phone": "478-595-5220" },
        { "id": "4f63ee59-5dfe-4a42-95ee-b6eff6d4537d", "customerName": "Milli Pacquet", "companyName": "Aufderhar Inc", "email": "mpacquet1v@cloudflare.com", "item": "Proteon Therapeutics, Inc.", "purchaseNumber": "29182e52-60b9-47eb-b8eb-0a083c8cdd01", "phone": "325-731-1596" },
        { "id": "194e9d1c-929e-42fa-8904-e64b0c5d7b66", "customerName": "Mohammed Litster", "companyName": "VonRueden Inc", "email": "mlitster1w@tripod.com", "item": "QUALCOMM Incorporated", "purchaseNumber": "9e56b63d-5d38-46b1-bbb8-36afe6bf8a04", "phone": "352-845-6420" },
        { "id": "d8caafd9-adc6-4a06-ba2c-22a35d280f3a", "customerName": "Claudina Smiz", "companyName": "Wintheiser-Kemmer", "email": "csmiz1x@rakuten.co.jp", "item": "Crescent Point Energy Corporation", "purchaseNumber": "87c38870-3e7c-4dca-851d-3fa0ca04908e", "phone": "726-663-4775" },
        { "id": "69b9cd56-1247-469e-95bb-3e3caa74be5e", "customerName": "Gawain Guthrum", "companyName": "Windler-Larson", "email": "gguthrum1y@toplist.cz", "item": "Triangle Capital Corporation", "purchaseNumber": "dd0e0090-fe17-41fb-9aec-fdcbe817a45b", "phone": "322-349-1390" },
        { "id": "98acdba9-9504-4f21-ba01-a87d05533794", "customerName": "Sarine Cremin", "companyName": "Hartmann, Champlin and Heathcote", "email": "scremin1z@gmpg.org", "item": "Clear Channel Outdoor Holdings, Inc.", "purchaseNumber": "68ee4b5c-3d13-4ca8-a2cc-e694bbc04c77", "phone": "902-274-3482" },
        { "id": "7487f62a-daa9-4f3d-9370-0153181c8da8", "customerName": "Pietro Gosz", "companyName": "Dibbert Group", "email": "pgosz20@earthlink.net", "item": "Kronos Worldwide Inc", "purchaseNumber": "e26ad084-caef-496e-8e29-151dcda344c4", "phone": "134-890-8161" },
        { "id": "3646a8ab-5601-4eeb-9c89-fa18aa8cf39e", "customerName": "Lesley Wise", "companyName": "Torphy and Sons", "email": "lwise21@google.com", "item": "Stonegate Bank", "purchaseNumber": "d29db242-33ce-45b1-8f1f-010c49ea4234", "phone": "189-867-6140" },
        { "id": "0c9048dd-d6b5-4b20-9922-014489bbdcab", "customerName": "Lorelei Alven", "companyName": "Hahn, Jakubowski and Runte", "email": "lalven22@ox.ac.uk", "item": "Copa Holdings, S.A.", "purchaseNumber": "6c2a0b4a-d810-4fd3-821a-7edca85146c0", "phone": "943-239-1550" },
        { "id": "adc7e9cd-15e3-4db5-a544-553bb9e461ec", "customerName": "Sonnie Heyball", "companyName": "Kirlin and Sons", "email": "sheyball23@gizmodo.com", "item": "ClearBridge Energy MLP Total Return Fund Inc.", "purchaseNumber": "00036c87-7250-47d7-a77a-740475dc796f", "phone": "698-630-1106" },
        { "id": "5dc79305-25d0-4c10-851e-fea805834cf4", "customerName": "Margit Ruddy", "companyName": "Mann and Sons", "email": "mruddy24@youku.com", "item": "Banc of California, Inc.", "purchaseNumber": "2d749bd8-9452-43b4-91ff-88b0d842dde9", "phone": "108-473-2382" },
        { "id": "05e9bb59-a656-417a-98d1-838075295b03", "customerName": "Jolie Waltering", "companyName": "Schmeler, Wilderman and Erdman", "email": "jwaltering25@wp.com", "item": "Gardner Denver Holdings, Inc.", "purchaseNumber": "d350645e-2bb4-4335-934e-695d5cf6abd1", "phone": "539-417-2208" },
        { "id": "b2877a76-ecdc-42f2-8675-495a72fa75b3", "customerName": "Rachel Livezley", "companyName": "Kautzer, Hudson and Feest", "email": "rlivezley26@mlb.com", "item": "Duke Energy Corporation", "purchaseNumber": "59b8f2f1-611c-4b8e-8b36-ece915a49009", "phone": "407-498-3270" },
        { "id": "24ca2797-845b-4b4c-ae1e-5da84c6a98bc", "customerName": "Gaby Bertelet", "companyName": "Stroman LLC", "email": "gbertelet27@upenn.edu", "item": "CVB Financial Corporation", "purchaseNumber": "ea91fcc4-1e99-4601-b759-8749ee693767", "phone": "819-173-5911" },
        { "id": "a5077b46-37ee-4306-b46c-fe0548df2a45", "customerName": "Byram Hansel", "companyName": "Witting Group", "email": "bhansel28@trellian.com", "item": "Ambev S.A.", "purchaseNumber": "edb19434-a31a-4b71-85fc-94b1cbfcd5bb", "phone": "215-556-0800" },
        { "id": "767450d6-d4bc-46d2-bc59-6b96c63fbb4c", "customerName": "Rayshell Dzenisenka", "companyName": "Tillman, Borer and Rutherford", "email": "rdzenisenka29@cpanel.net", "item": "The Ensign Group, Inc.", "purchaseNumber": "fc03b6a1-2de1-4bfa-9799-0138d7cd515f", "phone": "923-932-9567" },
        { "id": "e05ec2fc-add1-4f32-993e-cd7f528ccb8b", "customerName": "Freddy Sorrill", "companyName": "Moore, Durgan and O'Conner", "email": "fsorrill2a@tmall.com", "item": "Allied World Assurance Company Holdings, AG", "purchaseNumber": "98f1bdda-b80b-4251-b7a6-d001afced4c2", "phone": "747-421-2280" },
        { "id": "d14db556-68e0-4f39-adc7-c8498917db61", "customerName": "Bron Casburn", "companyName": "Brekke, Mills and Boehm", "email": "bcasburn2b@jimdo.com", "item": "Vitamin Shoppe, Inc", "purchaseNumber": "e55df1c0-435f-4bb2-a2c1-2762986f77f0", "phone": "280-135-0484" },
        { "id": "3dd5a90a-267b-413e-93bd-8295acd335cc", "customerName": "Dolli Polfer", "companyName": "Murazik LLC", "email": "dpolfer2c@google.com.au", "item": "Aegon NV", "purchaseNumber": "43d763e0-cd8b-457d-9902-7e9b572b3950", "phone": "694-611-5922" },
        { "id": "8a7f8f86-00e3-4902-9150-84956c036ee6", "customerName": "Rhonda Mertel", "companyName": "Dickinson-Reynolds", "email": "rmertel2d@weather.com", "item": "New America High Income Fund, Inc. (The)", "purchaseNumber": "8de145af-2c6e-4920-9b28-930741c4957c", "phone": "494-665-9816" },
        { "id": "35af3f50-4315-4253-87a0-98b86b1663a4", "customerName": "Sallee Ledson", "companyName": "Witting-Morar", "email": "sledson2e@amazon.co.uk", "item": "Lehman ABS Corporation", "purchaseNumber": "ad5d5160-ef5c-4e65-8c03-ed86730846d1", "phone": "532-287-8801" },
        { "id": "49d127e7-08a6-4157-8a9d-148d2a083163", "customerName": "Whittaker Tebbe", "companyName": "Kautzer, Pacocha and Marks", "email": "wtebbe2f@devhub.com", "item": "Waters Corporation", "purchaseNumber": "5af9e80d-37e6-40b5-83df-0ab214d4336a", "phone": "918-591-4646" },
        { "id": "6f99de23-3ef1-4971-9548-fd3ea0129442", "customerName": "Pippy Prawle", "companyName": "Wilkinson, Raynor and Smith", "email": "pprawle2g@mozilla.com", "item": "AmTrust Financial Services, Inc.", "purchaseNumber": "01282eec-6d3e-436b-a6d3-e5569afbca01", "phone": "823-701-7611" },
        { "id": "1f24926e-ac4c-4c94-8f93-b60dc0e1ab62", "customerName": "Adele Pieche", "companyName": "Zieme Inc", "email": "apieche2h@pagesperso-orange.fr", "item": "Home Federal Bancorp, Inc. of Louisiana", "purchaseNumber": "5def130b-7738-4afa-ac16-ef161eb442e2", "phone": "583-501-1655" },
        { "id": "ee773763-fb8b-47ed-9a19-cc09bf01400e", "customerName": "Julian Pie", "companyName": "Heidenreich and Sons", "email": "jpie2i@ft.com", "item": "SK Telecom Co., Ltd.", "purchaseNumber": "1c667796-14ee-49a2-911b-e5db08653512", "phone": "399-134-1415" },
        { "id": "d43fb4dc-f69e-4669-9e36-10c602e64769", "customerName": "Addie O'Duggan", "companyName": "Treutel, Barrows and Kunde", "email": "aoduggan2j@irs.gov", "item": "Ovid Therapeutics Inc.", "purchaseNumber": "1e87912d-f67f-438f-b9e3-bd881154616c", "phone": "477-296-7335" },
        { "id": "96de8e90-5b51-4c27-a881-0ef891696f45", "customerName": "Kimberlyn McGirl", "companyName": "Rohan, Russel and Lockman", "email": "kmcgirl2k@flavors.me", "item": "Ritter Pharmaceuticals, Inc.", "purchaseNumber": "a0c21e3e-c466-4637-9e16-5538e04f5d06", "phone": "352-529-4851" },
        { "id": "b641fc98-54b7-461a-84aa-5c591519a10f", "customerName": "Jandy Huntley", "companyName": "Little-Fay", "email": "jhuntley2l@booking.com", "item": "Unifi, Inc.", "purchaseNumber": "13368117-bd68-4ee3-841b-2ae716cb7d2f", "phone": "515-976-2982" },
        { "id": "46a105f5-7706-4360-9bf4-45a18e8cc838", "customerName": "Link Ingre", "companyName": "DuBuque Inc", "email": "lingre2m@yelp.com", "item": "Rennova Health, Inc.", "purchaseNumber": "cf2a628d-438e-42d7-af11-192143eb78c5", "phone": "962-177-5608" },
        { "id": "74488041-b54b-4179-b845-42f838e12fb0", "customerName": "Archibold Mustchin", "companyName": "Treutel Inc", "email": "amustchin2n@globo.com", "item": "NRG Yield, Inc.", "purchaseNumber": "f0caf414-c372-49cd-84c3-6634f9e7d5a6", "phone": "359-626-0417" },
        { "id": "76d2719d-1107-43c1-b88d-7e2ee9cb2b46", "customerName": "Lexy Bille", "companyName": "Cartwright LLC", "email": "lbille2o@creativecommons.org", "item": "Natural Alternatives International, Inc.", "purchaseNumber": "966d1edc-f75b-4cd7-8f77-5acbc6131b22", "phone": "794-453-0639" },
        { "id": "ae25cbfc-227e-4bb6-b2e6-09dbca65cabc", "customerName": "Sophie O'Hickey", "companyName": "Hyatt-Torphy", "email": "sohickey2p@is.gd", "item": "Horizons NASDAQ-100 Covered Call ETF", "purchaseNumber": "5a4d2d9f-741e-46d0-97c5-0b471617fecd", "phone": "401-955-3058" },
        { "id": "bb19bb74-516c-4b59-838f-cfde5287c7a0", "customerName": "Richard Hakes", "companyName": "Auer Group", "email": "rhakes2q@twitter.com", "item": "Esterline Technologies Corporation", "purchaseNumber": "f63b2b7b-60f5-4b09-84e8-c25d9cac50c4", "phone": "326-853-6730" },
        { "id": "abe4b270-de3c-4261-8418-0d79413052ba", "customerName": "Bunnie Bryett", "companyName": "Heller, Feest and Simonis", "email": "bbryett2r@google.pl", "item": "Citigroup Inc.", "purchaseNumber": "4696fae2-671d-4a70-bd4d-9f2bce1f27ba", "phone": "798-200-8592" }],
        icon: './icons/favicon-32x32.png',

        //  add function into it
        openDB: function () {
            this.DBOpenRequest = window.indexedDB.open(this.DB_NAME, this.DB_VERSION);

            this.DBOpenRequest.onerror = function (evt) {
                console.error("OpenDB", evt.target.errorCode);
            };

            this.DBOpenRequest.onsuccess = (function () {
                this.db = this.DBOpenRequest.result;

                var body = "Object store createIndexedDB.";
                createNotification("Indexed DB", body, this.icon);
                var purchasesTable = document.getElementById("purchases");
                let objectStore = this.getObjectStore("purchases", "readwrite");

                // Determine if there is a table to display data to
                if (purchasesTable) {
                    this.displayData(objectStore);

                }
            }).bind(this),

                this.DBOpenRequest.onupgradeneeded = (function (event) {

                    createNotification("Indexed DB", "Object store upgraded.", this.icon);

                    db = this.DBOpenRequest.result;

                    let objectStore = db.createObjectStore(this.DB_STORE_NAME, { keyPath: "id" });

                    // define what data items the objectStore will contain
                    objectStore.createIndex("id", "id", { unique: true });
                    objectStore.createIndex("customerName", "customerName", { unique: false });
                    objectStore.createIndex("email", "email", { unique: false });
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

        iterateCursorThenRender: function (objectStore, displayDataFunc, trId) {

            objectStore.openCursor().onsuccess = (function (e) {

                let cursor = e.target.result;

                if (cursor) {
                    if (typeof displayDataFunc === "function") {
                        displayDataFunc(trId, cursor.value);
                    }

                    // call notification
                    // continue on to the next item in the cursor
                    cursor.continue();
                }

            }).bind(this);
        },

        displayData: function (objectStore) {


            this.iterateCursorThenRender(objectStore, this.addCustomerToTable, "purchases");
        },

        /* Button event */
        // maybe add func to populate data and make generic
        populateCustomers: function () {

            let objectStore = this.getObjectStore(this.DB_STORE_NAME, "readwrite");
  

            this.customerData.forEach(function (customer) {
                objectStore.add(customer);
            });

            var body = "Populating with default data."
            createNotification("Indexed DB", body, this.icon);
            this.iterateCursorThenRender(objectStore, this.addCustomerToTable, "purchases");

        },

        /**
        * @description Updates DOM table element by adding tr with data
        * @param {string} trID table id to attach data
        * @param {string} data to display into the chosen table
        * TODO make it generic
        */
        addCustomerToTable: function (trId, data) {
            var table = document.getElementById(trId);
            if (table) {
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

                table.appendChild(tr);

            }
        },

        /* Button event */
        deleteAllCustomersFromTable: function (tableId) {
            var parent = document.getElementById(tableId);
            while (parent.firstChild) {
                parent.firstChild.remove();
            }
        },

        clearObjectStore: function (removefromDomFunc, tableId) {
            var store = this.getObjectStore(this.DB_STORE_NAME, 'readwrite');
            var req = store.clear();
            req.onsuccess = (function (evt) {

                var body = '<h2>Store cleared</h2>';
                createNotification("Indexed DB", body, this.icon);

                if (typeof removefromDomFunc === "function") {
                    var parent = document.getElementById(tableId);
                    if (parent) {
                        removefromDomFunc(tableId);
                    }

                }
                else {
                    console.error("clearObjectStore() requires a function as a parameter");
                }

            }).bind(this);

            req.onerror = function (evt) {
                var body = "Store didnt clear there was an error";
                createNotification("Indexed DB", body, this.icon);

                console.error("clearObjectStore:", evt.target.errorCode);

            };
        },
        // need to refactor
        add: function (customer) {

            function _uuidv4() {
                return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
                );
            }

            const customerData =
            {
                id: _uuidv4(),
                customerName: customer.customerName,
                companyName: customer.companyName,
                email: customer.email,
                phone: customer.phone,
                item: customer.item,
                purchaseNumber: _uuidv4()
            };
     
            var store = this.getObjectStore("purchases", 'readwrite');

            let purchasesRequest = store.add(customerData)

            purchasesRequest.onsuccess = (function () {
                var body = 'Customer added to the store ' + purchasesRequest.result + '.';
                createNotification("Indexed DB", body, this.icon);

            }).bind(this);

            purchasesRequest.onerror = (function () {

                var body = "Error adding :" + purchasesRequest.error
                createNotification("Indexed DB", body, this.icon);

            }).bind(this);
        },


        // add function to draw results
        searchKey: function (key) {

            var store = this.getObjectStore(this.DB_STORE_NAME, 'readonly');

            var request = store.get(key);

            request.onerror = function (event) {
                // Handle errors!
                console.log("error")
            };

            request.onsuccess = (function (event) {

                // draw table
                if (request.result) {

                    this.addCustomerToTable("search-result", request.result);
                    var body = "Search result found ...." + request.result.customerName;
                    createNotification("Indexed DB", body, this.icon);

                }
                else {

                    var body = "No search result found ";
                    createNotification("Indexed DB", body, this.icon);
                }


            }).bind(this);

        },

        /**
         * @param {string} biblioid
         * make param key 
         * then make case and switch
         */
        deletecustomerByID: function (customerid) {

            var store = this.getObjectStore(this.DB_STORE_NAME, 'readwrite');
            var req = store.index('id');
            req.get(customerid).onsuccess = (function (evt) {
                if (typeof evt.target.result == 'undefined') {

                    var body = "No matching record found";
                    createNotification("Indexed DB", body, this.icon);
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

            switch (column) {
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

            if (req != null) {
                req.get(customerid).onsuccess = (function (evt) {
                    if (typeof evt.target.result == 'undefined') {
                        var body = "No matching record found";
                        createNotification("Indexed DB", body, this.icon);
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
        deleteCustomer: function (key, store) {

            if (typeof store == 'undefined')
                store = this.getObjectStore(this.DB_STORE_NAME, 'readwrite');

            var req = store.get(key);

            req.onsuccess = function (evt) {

                var record = evt.target.result;
                console.log("record:", record);

                if (typeof record == 'undefined') {
                    var body = "No matching record found";
                    createNotification("Indexed DB", body, this.icon);
                    return;
                }
                // Warning: The exact same key used for creation needs to be passed for
                // the deletion. If the key was a Number for creation, then it needs to
                // be a Number for deletion.

                req = store.delete(key);

                req.onsuccess = function (evt) {

                    var body = "Deletion successful " + evt.target.result;

                    createNotification("Indexed DB", body, this.icon);

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


    createIndexedDB.openDB();

    document.querySelectorAll('.populate-customers').forEach(item => {
        item.addEventListener('click', event => {
            createIndexedDB.populateCustomers();
        })
    })


    document.querySelectorAll('.clear-customer').forEach(item => {
        item.addEventListener('click', event => {
            createIndexedDB.clearObjectStore(createIndexedDB.deleteAllCustomersFromTable, "purchases");
        })
    })
}



// https://www.freecodecamp.org/news/a-quick-but-complete-guide-to-indexeddb-25f030425501/



Notification.requestPermission()

//createNotification(title, body, icon)