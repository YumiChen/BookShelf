webpackHotUpdate(0,{

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(349)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n* {\n  box-sizing: border-box;\n  position: relative;\n  font-family: Ubuntu, 微軟正黑體;\n  text-decoration: none;\n  color: #634130;\n  transition: all .4s; }\n\nhtml, body {\n  margin: 0;\n  min-height: 100vh;\n  overflow-x: hidden; }\n\nbody {\n  padding: 3em 0 2em 0;\n  background-image: url(https://s26.postimg.org/4v95smc95/fog-1535201_1920.jpg);\n  background-size: cover;\n  background-repeat: no-repeat; }\n  body::-webkit-scrollbar-track {\n    border: 1px solid rgba(76, 206, 224, 0.7);\n    background-color: rgba(255, 255, 255, 0.2); }\n  body::-webkit-scrollbar {\n    width: 6px;\n    background-color: rgba(255, 255, 255, 0.2); }\n  body::-webkit-scrollbar-thumb {\n    background-color: rgba(76, 206, 224, 0.7); }\n\np {\n  margin: 0;\n  text-align: center; }\n\n.searchedBooks {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around; }\n  .searchedBooks .clear {\n    background-color: rgba(76, 206, 224, 0.7);\n    color: white;\n    border-radius: .5em;\n    cursor: pointer;\n    padding: .2em .5em;\n    margin: 0 .5em; }\n    .searchedBooks .clear:hover {\n      background-color: #f9af39; }\n  .searchedBooks .scrollToTop {\n    z-index: 10;\n    position: fixed;\n    bottom: .5em;\n    right: .5em;\n    color: rgba(76, 206, 224, 0.7);\n    font-size: 3.5em;\n    cursor: pointer; }\n    .searchedBooks .scrollToTop:hover {\n      color: #f9af39; }\n  .searchedBooks .searchHint {\n    width: 100vw;\n    margin: .5em 0; }\n  .searchedBooks .book {\n    width: 15vw;\n    overflow: hidden;\n    height: 22vw;\n    margin: 1vw 1vw;\n    min-height: 15em;\n    background-color: rgba(255, 255, 255, 0.5);\n    border-radius: 10px; }\n    .searchedBooks .book:hover {\n      box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1); }\n    .searchedBooks .book p {\n      font-size: .5em;\n      width: 70%;\n      margin: 0 auto; }\n    .searchedBooks .book .bookdes {\n      transform: translateY(-20%); }\n    .searchedBooks .book .cover {\n      margin: 0 auto;\n      box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);\n      width: 70%;\n      height: 60%;\n      background-size: 100% 100%;\n      background-repeat: no-repeat; }\n\n.searchBar {\n  margin: 1em auto;\n  text-align: center;\n  width: 50%;\n  padding: 0.5em;\n  background-color: rgba(76, 206, 224, 0.7);\n  white-space: nowrap;\n  border-radius: 5px;\n  box-shadow: 0px 1px 5px 1.5px rgba(0, 0, 0, 0.1); }\n  .searchBar i {\n    width: 10%; }\n  .searchBar form {\n    transform: translateX(-5%);\n    width: 80%; }\n  .searchBar i, .searchBar form {\n    color: white;\n    display: inline-block;\n    margin: 0.2em;\n    vertical-align: middle; }\n    .searchBar i input[type=\"text\"], .searchBar form input[type=\"text\"] {\n      width: 70%;\n      border: 0;\n      border-radius: 5px;\n      padding: 0.25em 0.5em;\n      box-shadow: inset 0px 1px 3px 1.5px rgba(0, 0, 0, 0.1); }\n    .searchBar i input[type=\"submit\"], .searchBar form input[type=\"submit\"] {\n      width: 25%;\n      vertical-align: middle;\n      cursor: pointer;\n      margin: 0 .3em;\n      background-color: white;\n      border: none;\n      border-radius: 5px;\n      padding: 0.2em 1em;\n      color: rgba(76, 206, 224, 0.7); }\n      .searchBar i input[type=\"submit\"]:hover, .searchBar form input[type=\"submit\"]:hover {\n        background-color: #f9af39;\n        color: white; }\n\n.shelfPage .options {\n  text-align: right;\n  margin: 0 5vw; }\n  .shelfPage .options .logout {\n    cursor: pointer;\n    color: #634130;\n    text-decoration: underline; }\n    .shelfPage .options .logout:hover {\n      color: #e24724; }\n\n.shelfName {\n  color: skyblue;\n  position: absolute;\n  background-color: white;\n  margin-left: 5vw;\n  z-index: 1;\n  padding: .1em 1em;\n  border-radius: 10px 0 10px 0;\n  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.025); }\n\n.slick-slider {\n  height: 30vh;\n  border: solid 2px white;\n  margin: .5em 5vw;\n  border-radius: 10px; }\n  .slick-slider .slick-list {\n    height: 100%;\n    padding: .2em 2.5em; }\n    .slick-slider .slick-list .slick-track {\n      height: 100%; }\n      .slick-slider .slick-list .slick-track .slick-slide {\n        height: 90%; }\n        .slick-slider .slick-list .slick-track .slick-slide .book {\n          top: 0.8em;\n          width: 60%;\n          height: 100%;\n          font-size: .5em; }\n          .slick-slider .slick-list .slick-track .slick-slide .book .settings .cog {\n            font-size: 3em;\n            z-index: 1;\n            position: absolute;\n            cursor: pointer;\n            right: 0; }\n            .slick-slider .slick-list .slick-track .slick-slide .book .settings .cog:hover {\n              color: blue; }\n          .slick-slider .slick-list .slick-track .slick-slide .book .settings div {\n            position: absolute;\n            top: 2.2em;\n            width: 90%;\n            z-index: 2;\n            right: 0em;\n            background-color: rgba(255, 255, 255, 0.9);\n            border: solid 1px; }\n            .slick-slider .slick-list .slick-track .slick-slide .book .settings div p {\n              cursor: pointer;\n              padding: .2em .5em;\n              border-top: 1px dashed; }\n              .slick-slider .slick-list .slick-track .slick-slide .book .settings div p:hover {\n                background-color: skyblue;\n                color: white;\n                border-color: #634130; }\n            .slick-slider .slick-list .slick-track .slick-slide .book .settings div p:nth-child(1) {\n              border-top: 0px solid; }\n          .slick-slider .slick-list .slick-track .slick-slide .book .cover {\n            box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);\n            top: 1em;\n            width: 100%;\n            height: 80%;\n            background-position: 50% 50%;\n            background-size: 100% 100%;\n            background-repeat: no-repeat; }\n\n.bookInfo {\n  padding: 1.5em; }\n  .bookInfo .bookinfo_summary {\n    background-color: rgba(255, 255, 255, 0.5);\n    padding: 1em;\n    border-radius: .5em; }\n  .bookInfo .bookInfo_top {\n    display: flex; }\n    .bookInfo .bookInfo_top .bookinfo_detail {\n      padding: 1em;\n      width: 60%;\n      font-weight: bold; }\n      .bookInfo .bookInfo_top .bookinfo_detail p {\n        margin: 0.2em auto .2em auto; }\n      .bookInfo .bookInfo_top .bookinfo_detail .previewLink {\n        background-color: #e24724;\n        color: white;\n        padding: .2em 1em;\n        border-radius: .7em; }\n      .bookInfo .bookInfo_top .bookinfo_detail .bookinfo_title {\n        color: #e24724;\n        font-size: 1.3em; }\n    .bookInfo .bookInfo_top .bookinfo_book {\n      width: 40%;\n      height: 33vw; }\n      .bookInfo .bookInfo_top .bookinfo_book .bookInfo_cover {\n        position: absolute;\n        box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);\n        top: 5%;\n        left: 50%;\n        transform: translateX(-50%);\n        width: 50%;\n        height: 77%;\n        background-size: 100% 100%;\n        background-repeat: no-repeat;\n        background-position: 50% 50%; }\n\n.nav {\n  font-size: 1.2em;\n  background-color: rgba(76, 206, 224, 0.7);\n  padding: .5em;\n  position: fixed;\n  z-index: 2;\n  width: 100%;\n  top: 0;\n  box-shadow: 0px 0px 3px 1.5px rgba(0, 0, 0, 0.1); }\n  .nav a {\n    color: white;\n    text-decoration: none;\n    font-family: Lobster; }\n  .nav .title i {\n    color: white;\n    margin: 0 0.2em; }\n  .nav .search {\n    position: absolute;\n    right: .5em; }\n    .nav .search i {\n      color: white;\n      margin: 0 0.2em; }\n\n.menu {\n  text-align: right;\n  position: fixed;\n  right: 2em;\n  bottom: 2em;\n  z-index: 2; }\n  .menu p {\n    cursor: pointer;\n    background-color: #f9af39;\n    color: white;\n    border-radius: 1em;\n    text-align: right;\n    padding: 0.5em 1em .5em 2em;\n    margin: .5em 0 !important;\n    box-shadow: 2.5px 2.5px 5px 1px rgba(0, 0, 0, 0.2); }\n    .menu p:hover {\n      background-color: #ff3270; }\n  .menu .plus {\n    cursor: pointer;\n    color: white;\n    font-size: 2em;\n    background-color: #ff3270;\n    border-radius: 10em;\n    padding: .25em .35em;\n    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);\n    box-shadow: 2.5px 2.5px 5px 1px rgba(0, 0, 0, 0.5); }\n  .menu span a {\n    color: white; }\n\n.status {\n  background-color: #f9af39;\n  border-radius: 2em;\n  color: white;\n  padding: .2em 0em;\n  width: 90%;\n  margin: auto; }\n\n.menu-enter {\n  transform: translateX(2em);\n  opacity: 0; }\n\n.menu-enter-active {\n  opacity: 1;\n  transform: translateX(0em); }\n\n.menu-leave {\n  opacity: 1; }\n\n.menu-leave-active {\n  opacity: 0;\n  transform: translateX(1em); }\n\n.sign {\n  font-size: 1.2em;\n  text-align: center;\n  display: inline-block;\n  left: 50%;\n  transform: translateX(-50%); }\n  .sign h2 {\n    background-color: rgba(76, 206, 224, 0.7);\n    color: white;\n    padding: 0.1em 0;\n    border-radius: .3em; }\n  .sign div {\n    text-align: right;\n    margin: .4em auto; }\n  .sign label {\n    display: inline-block;\n    width: 5em;\n    text-align: left; }\n  .sign input {\n    border: solid 1px #c4c8ce;\n    border-radius: .3em;\n    padding: 0.3em; }\n  .sign input[type=\"submit\"] {\n    background-color: #f9af39;\n    border: none;\n    color: white;\n    padding: .2em 1em;\n    margin: .5em 0;\n    font-size: .9em;\n    cursor: pointer; }\n    .sign input[type=\"submit\"]:hover {\n      background-color: #e24724; }\n  .sign p span {\n    color: #e24724;\n    cursor: pointer;\n    text-decoration: underline; }\n    .sign p span:hover {\n      color: #f9af39; }\n  .sign .hint {\n    color: #e24724;\n    font-size: .7em;\n    text-align: right;\n    animation: fadeIn 1s 1 both; }\n    .sign .hint i {\n      color: #e24724; }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.dotContainer {\n  width: 1vw;\n  height: 1vw;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.dot:nth-child(1) {\n  width: .5em;\n  height: .5em;\n  border-radius: 10em;\n  background-color: white;\n  position: absolute;\n  transform-origin: -400% -400%;\n  transform: rotate(36deg);\n  animation: opa1 1s infinite both; }\n\n@keyframes opa1 {\n  0% {\n    opacity: .5; }\n  0% {\n    opacity: .5; }\n  10% {\n    opacity: 1; }\n  20% {\n    opacity: .5; } }\n\n.dot:nth-child(2) {\n  width: .5em;\n  height: .5em;\n  border-radius: 10em;\n  background-color: white;\n  position: absolute;\n  transform-origin: -400% -400%;\n  transform: rotate(72deg);\n  animation: opa2 1s infinite both; }\n\n@keyframes opa2 {\n  0% {\n    opacity: .5; }\n  10% {\n    opacity: .5; }\n  20% {\n    opacity: 1; }\n  30% {\n    opacity: .5; } }\n\n.dot:nth-child(3) {\n  width: .5em;\n  height: .5em;\n  border-radius: 10em;\n  background-color: white;\n  position: absolute;\n  transform-origin: -400% -400%;\n  transform: rotate(108deg);\n  animation: opa3 1s infinite both; }\n\n@keyframes opa3 {\n  0% {\n    opacity: .5; }\n  20% {\n    opacity: .5; }\n  30% {\n    opacity: 1; }\n  40% {\n    opacity: .5; } }\n\n.dot:nth-child(4) {\n  width: .5em;\n  height: .5em;\n  border-radius: 10em;\n  background-color: white;\n  position: absolute;\n  transform-origin: -400% -400%;\n  transform: rotate(144deg);\n  animation: opa4 1s infinite both; }\n\n@keyframes opa4 {\n  0% {\n    opacity: .5; }\n  30% {\n    opacity: .5; }\n  40% {\n    opacity: 1; }\n  50% {\n    opacity: .5; } }\n\n.dot:nth-child(5) {\n  width: .5em;\n  height: .5em;\n  border-radius: 10em;\n  background-color: white;\n  position: absolute;\n  transform-origin: -400% -400%;\n  transform: rotate(180deg);\n  animation: opa5 1s infinite both; }\n\n@keyframes opa5 {\n  0% {\n    opacity: .5; }\n  40% {\n    opacity: .5; }\n  50% {\n    opacity: 1; }\n  60% {\n    opacity: .5; } }\n\n.dot:nth-child(6) {\n  width: .5em;\n  height: .5em;\n  border-radius: 10em;\n  background-color: white;\n  position: absolute;\n  transform-origin: -400% -400%;\n  transform: rotate(216deg);\n  animation: opa6 1s infinite both; }\n\n@keyframes opa6 {\n  0% {\n    opacity: .5; }\n  50% {\n    opacity: .5; }\n  60% {\n    opacity: 1; }\n  70% {\n    opacity: .5; } }\n\n.dot:nth-child(7) {\n  width: .5em;\n  height: .5em;\n  border-radius: 10em;\n  background-color: white;\n  position: absolute;\n  transform-origin: -400% -400%;\n  transform: rotate(252deg);\n  animation: opa7 1s infinite both; }\n\n@keyframes opa7 {\n  0% {\n    opacity: .5; }\n  60% {\n    opacity: .5; }\n  70% {\n    opacity: 1; }\n  80% {\n    opacity: .5; } }\n\n.dot:nth-child(8) {\n  width: .5em;\n  height: .5em;\n  border-radius: 10em;\n  background-color: white;\n  position: absolute;\n  transform-origin: -400% -400%;\n  transform: rotate(288deg);\n  animation: opa8 1s infinite both; }\n\n@keyframes opa8 {\n  0% {\n    opacity: .5; }\n  70% {\n    opacity: .5; }\n  80% {\n    opacity: 1; }\n  90% {\n    opacity: .5; } }\n\n.dot:nth-child(9) {\n  width: .5em;\n  height: .5em;\n  border-radius: 10em;\n  background-color: white;\n  position: absolute;\n  transform-origin: -400% -400%;\n  transform: rotate(324deg);\n  animation: opa9 1s infinite both; }\n\n@keyframes opa9 {\n  0% {\n    opacity: .5; }\n  80% {\n    opacity: .5; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: .5; } }\n\n.dot:nth-child(10) {\n  width: .5em;\n  height: .5em;\n  border-radius: 10em;\n  background-color: white;\n  position: absolute;\n  transform-origin: -400% -400%;\n  transform: rotate(360deg);\n  animation: opa10 1s infinite both; }\n\n@keyframes opa10 {\n  0% {\n    opacity: .5; }\n  90% {\n    opacity: .5; }\n  100% {\n    opacity: 1; }\n  110% {\n    opacity: .5; } }\n\n.clickable {\n  cursor: pointer; }\n  .clickable:hover {\n    color: #f9af39; }\n\n@media only screen and (min-width: 1248px) {\n  .bookInfo {\n    padding: 1.5em 8em; }\n  .bookInfo .bookInfo_top .bookinfo_book .bookInfo_cover {\n    height: 70%; }\n  .searchedBooks {\n    width: 80vw;\n    margin: 0 auto; }\n    .searchedBooks .book {\n      width: 14vw; }\n  .shelfPage {\n    padding: 0 7em;\n    min-height: 40em;\n    min-width: 45em; }\n    .shelfPage .shelves .book {\n      padding: 0 .5em; }\n    .shelfPage .options {\n      width: 65vw;\n      margin: 0 auto; }\n  .slick-slider .slick-list .slick-track .slick-slide .book {\n    width: 50%;\n    min-width: 10em; } }\n\n@media only screen and (max-width: 399px) {\n  body, html {\n    min-height: calc(100vw * 1.7);\n    min-width: 100vw;\n    height: 100vh; }\n  #container .searchBar {\n    width: 90%; }\n    #container .searchBar input[type=\"text\"] {\n      width: 60%; }\n  #container .slick-slide .book {\n    width: 60%; }\n  #container .searchedBooks .book {\n    width: 40%;\n    height: 37vh; }\n    #container .searchedBooks .book p {\n      font-size: .7em; }\n  #container .bookInfo .bookInfo_top {\n    display: block; }\n    #container .bookInfo .bookInfo_top .bookinfo_detail, #container .bookInfo .bookInfo_top .bookInfo_cover {\n      width: 100%; }\n    #container .bookInfo .bookInfo_top .bookinfo_book {\n      width: 35vw;\n      height: calc(35vw * 1.8);\n      margin: 0 auto; }\n      #container .bookInfo .bookInfo_top .bookinfo_book .bookInfo_cover {\n        min-width: 40vw;\n        height: 85%; }\n  #container .status {\n    left: 50%;\n    transform: translateX(-50%);\n    width: 110%; } }\n\n.swal2-buttonswrapper button {\n  border: 0px;\n  margin: 0 1em;\n  padding: 0.5em 1.2em;\n  background-color: #f9af39;\n  border-radius: 1em;\n  color: white; }\n  .swal2-buttonswrapper button:hover {\n    background-color: #e24724; }\n", ""]);

// exports


/***/ })

})