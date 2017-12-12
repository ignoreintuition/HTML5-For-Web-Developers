//indexedDB
var dataset;
var db;
var request = new XMLHttpRequest();

//
const DB_NAME = 'episodeList';
const DB_VERSION = 1;
const DB_STORE_NAME = 'episode';

getData();

function getData() {
  request.open('GET', 'assets/ram.json', true);
  request.send(null);
  request.addEventListener("load", processData, false);
}

function processData(e) {
  dataset = JSON.parse(e.target.response);

  var req = window.indexedDB.open(DB_NAME, DB_VERSION);
  req.onsuccess = onSuccess;
  req.onerror = onError;
  req.onupgradeneeded = onUpgradeNeeded;
}

function onError(e) {
  console.log(e.target.errorCode);
};

function onSuccess(e) {
  db = e.currentTarget.result;
}

function onUpgradeNeeded(e) {
  var res = e.currentTarget.result;
  var objectStore = res.createObjectStore(DB_STORE_NAME, {
    keyPath: "id"
  })
  objectStore.createIndex("name", "name", {
    unique: false
  });
  objectStore.transaction.oncomplete = event => {
    var os = res.transaction(DB_STORE_NAME, "readwrite").objectStore(DB_STORE_NAME)
    dataset._embedded.episodes.forEach(function(ep) {
      os.add(ep);
    });
  };
};

function getObjectStore(store_name, mode) {
  var tx = db.transaction(store_name, mode);
  return tx.objectStore(store_name);
}

function test() {
  var objectStore = getObjectStore(DB_STORE_NAME, "readwrite");
  var index = objectStore.index("name");
  index.get("Get Schwifty").onsuccess = event => {
    console.log( event.target.result );
  }
}

 document.getElementById("pressMe").addEventListener("click", function(e){
   test();
 });
