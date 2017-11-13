// Initialize Firebase
const config = {
    apiKey: "AIzaSyBx0hCaJuAGYLBTRglgaGBs79JQNfKsATM",
    authDomain: "bookshelf-11c79.firebaseapp.com",
    databaseURL: "https://bookshelf-11c79.firebaseio.com",
    projectId: "bookshelf-11c79",
    storageBucket: "bookshelf-11c79.appspot.com",
    messagingSenderId: "1006325441019"
},
app = firebase.initializeApp(config),
db = app.database();

function setData(data){
  const uid = sessionStorage.getItem("user");
  db.ref('/books/' + uid)
  .set(data);
}

function loadData(propName,fn){
  const uid = sessionStorage.getItem("user");
  db.ref('/books/' + uid).once('value').then(function(snapshot) {
    let result = snapshot.toJSON()===null?[]:snapshot.toJSON();
    
    if(result instanceof Array) return result;
    switch(propName){
      case "readingBooks":
        if(result.readingBooks === undefined){
          result = [];
        } 
        result = Object.values(result.readingBooks);
        fn(result);
      case "finishedBooks":
        if(result.finishedBooks === undefined){
          result = [];
          return result;
        }
        result = Object.values(result.finishedBooks);
        fn(result);
      case "wannaReadBooks":
        if(result.wannaReadBooks === undefined){
          result = [];
          return result;
        } 
        result = Object.values(result.wannaReadBooks);
        fn(result);
      default:
        return [];
    }
  });
}

module.exports = {
  setData: setData,
  loadData: loadData
};