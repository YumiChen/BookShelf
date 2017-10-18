"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// add callback when page is changed
var index = 1;
var _ReactRouterDOM = ReactRouterDOM;
var Router = _ReactRouterDOM.Router;
var Route = _ReactRouterDOM.Route;
var Link = _ReactRouterDOM.Link;
var Switch = _ReactRouterDOM.Switch;
var BrowserRouter = _ReactRouterDOM.BrowserRouter;
var HashRouter = _ReactRouterDOM.HashRouter;
var _React = React;
var Component = _React.Component;
var _ReactDOM = ReactDOM;
var render = _ReactDOM.render;
var CSSTransitionGroup = React.addons.CSSTransitionGroup;
var thunk = ReduxThunk.default;

/*--Reducers--*/
var reducer_searched_books = function reducer_searched_books() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  if (action.type == "SEARCH" && Object.prototype.toString.call(action.payload) === '[object Array]') {
    return action.payload || state;
  } else if (action.type == "SEARCHMORE" && Object.prototype.toString.call(action.payload)) {
    var result = state;
    result = result.concat(action.payload);
    return result;
  } else {
    // return []?
    return state;
  }
};
// loadStore("readingBooks")|[]
// console.log("localstore: "+loadStore("readingBooks"));

// state=loadStore("readingBooks")===0?[]:loadStore("readingBooks")
var reducer_reading_books = function reducer_reading_books() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? loadStore("readingBooks") === 0 ? [] : loadStore("readingBooks") : arguments[0];
  var action = arguments[1];

  // console.log("readingBooks: "+state);

  var books = state;
  switch (action.type) {
    case "ADDREADING":
      books.unshift(action.payload);
      sweetAlert("Success!", "The book is added!", "success");
      return books;
    case "REMOVEREADING":
      books.splice(action.payload, 1);
      return books;
    default:
      return state;
  }
};
// state=loadStore("finishedBooks")===0?[]:loadStore("finishedBooks")
var reducer_finished_books = function reducer_finished_books() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? loadStore("finishedBooks") === 0 ? [] : loadStore("finishedBooks") : arguments[0];
  var action = arguments[1];

  var books = state;
  // save();
  switch (action.type) {
    case "ADDFINISHED":
      books.unshift(action.payload);
      sweetAlert("Success!", "The book is added!", "success");
      return books;
    case "REMOVEFINISHED":
      books.splice(action.payload, 1);
      return books;
    default:
      return state;
  }
};

// state=loadStore("wannaReadBooks")===0?[]:loadStore("wannaReadBooks")
var reducer_wanna_read_books = function reducer_wanna_read_books() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? loadStore("wannaReadBooks") === 0 ? [] : loadStore("wannaReadBooks") : arguments[0];
  var action = arguments[1];

  var books = state;
  switch (action.type) {
    case "ADDWANNAREAD":
      books.unshift(action.payload);
      sweetAlert("Success!", "The book is added!", "success");
      return books;
    case "REMOVEWANNAREAD":
      books.splice(action.payload, 1);
      return books;
    default:
      return state;
  }
};

var reducer_searched_term = function reducer_searched_term() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? "art" : arguments[0];
  var action = arguments[1];

  return action.payload || state;
};

var reducer_currentBook = function reducer_currentBook() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];

  if (action.type == "SELECT") return action.payload || state;else return state;
};

var rootReducer = Redux.combineReducers({
  searchedBooks: reducer_searched_books,
  searchedTerm: reducer_searched_term,
  readingBooks: reducer_reading_books,
  finishedBooks: reducer_finished_books,
  wannaReadBooks: reducer_wanna_read_books,
  currentBook: reducer_currentBook
});

/*--Action creators--*/
var action_searchedTerm = function action_searchedTerm(event) {
  var term = event.target.value;
  return {
    type: "SEARCH",
    payload: term
  };
};

// query books with google books api
var action_searchedBooks = function action_searchedBooks() {
  // const term = store.getState().searchedTerm,
  var term = document.getElementById("searchInput").value,
      fetch = window.fetch("https://www.googleapis.com/books/v1/volumes?q=" + term + "&maxResults=30");

  return function (dispatch) {
    fetch.then(function (data) {
      return data.json();
    }).then(function (_ref) {
      var items = _ref.items;

      dispatch({
        type: "SEARCH",
        payload: items
      });
    });
    // .catch(err,()=>{alert(err)});
  };
};

// query books with google books api
var action_searchMoreBooks = function action_searchMoreBooks(index) {
  // const term = store.getState().searchedTerm,
  var term = document.getElementById("searchInput").value,
      fetch = window.fetch("https://www.googleapis.com/books/v1/volumes?q=" + term + "&maxResults=30" + "&startIndex=" + index);

  return function (dispatch) {
    fetch.then(function (data) {
      return data.json();
    }).then(function (_ref2) {
      var items = _ref2.items;

      dispatch({
        type: "SEARCHMORE",
        payload: items
      });
    });
    // .catch(err,()=>{alert(err)});
  };
};

// select book to show details
var action_selectBook = function action_selectBook(event) {
  window.scrollTo(0, 0);
  var id = event.target.getAttribute("name"),
      group = event.target.getAttribute("data-group");
  // accessing other state...
  switch (group) {
    case "searched":
      return {
        type: "SELECT",
        payload: store.getState().searchedBooks[id]
      };
    case "reading":
      return {
        type: "SELECT",
        payload: store.getState().readingBooks[id]
      };
    case "finished":
      return {
        type: "SELECT",
        payload: store.getState().finishedBooks[id]
      };
    case "wannaRead":
      return {
        type: "SELECT",
        payload: store.getState().wannaReadBooks[id]
      };
    default:
  }
};

// adding data
var action_addReadingBooks = function action_addReadingBooks(event) {
  var group = event.target.getAttribute("data-group"),
      id = event.target.getAttribute("name");
  switch (group) {
    case "current":
      var currentBook = store.getState().currentBook;
      return { type: "ADDREADING",
        payload: currentBook
      };
    case "reading":
      return {
        type: "ADDREADING",
        payload: store.getState().readingBooks[id]
      };
    case "finished":
      return {
        type: "ADDREADING",
        payload: store.getState().finishedBooks[id]
      };
    case "wannaRead":
      return {
        type: "ADDREADING",
        payload: store.getState().wannaReadBooks[id]
      };
  }
};

var action_addFinishedBooks = function action_addFinishedBooks(event) {
  var group = event.target.getAttribute("data-group"),
      id = event.target.getAttribute("name");
  switch (group) {
    case "current":
      var currentBook = store.getState().currentBook;
      return { type: "ADDFINISHED",
        payload: currentBook
      };
    case "reading":
      return {
        type: "ADDFINISHED",
        payload: store.getState().readingBooks[id]
      };
    case "finished":
      return {
        type: "ADDFINISHED",
        payload: store.getState().finishedBooks[id]
      };
    case "wannaRead":
      return {
        type: "ADDFINISHED",
        payload: store.getState().wannaReadBooks[id]
      };
  }
};

var action_addWannaReadBooks = function action_addWannaReadBooks(event) {
  var group = event.target.getAttribute("data-group"),
      id = event.target.getAttribute("name");
  switch (group) {
    case "current":
      var currentBook = store.getState().currentBook;
      return { type: "ADDWANNAREAD",
        payload: currentBook
      };
    case "reading":
      return {
        type: "ADDWANNAREAD",
        payload: store.getState().readingBooks[id]
      };
    case "finished":
      return {
        type: "ADDWANNAREAD",
        payload: store.getState().finishedBooks[id]
      };
    case "wannaRead":
      return {
        type: "ADDWANNAREAD",
        payload: store.getState().wannaReadBooks[id]
      };
  }
};

// remove data
var action_removeBooks = function action_removeBooks(event) {
  var group = event.target.getAttribute("data-group"),
      id = event.target.getAttribute("name");
  switch (group) {
    case "reading":
      return {
        type: "REMOVEREADING",
        payload: id
      };
    case "finished":
      return {
        type: "REMOVEFINISHED",
        payload: id
      };
    case "wannaRead":
      return {
        type: "REMOVEWANNAREAD",
        payload: id
      };
  }
};

/*--Components & containers--*/

var ShelfPage = function (_Component) {
  _inherits(ShelfPage, _Component);

  function ShelfPage(props) {
    _classCallCheck(this, ShelfPage);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  ShelfPage.prototype.componentDidMount = function componentDidMount() {};

  ShelfPage.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "shelfPage" },
      React.createElement(
        "div",
        null,
        React.createElement(
          "span",
          { className: "shelfName" },
          "Reading"
        ),
        React.createElement(Shelf, { books: this.props.readingBooks, group: "reading",
          endpoint: "reading/" })
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "span",
          { className: "shelfName" },
          "Finished"
        ),
        React.createElement(Shelf, {
          books: this.props.finishedBooks, group: "finished",
          endpoint: "finished/" })
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "span",
          { className: "shelfName" },
          "Wishlist"
        ),
        React.createElement(Shelf, { books: this.props.wannaReadBooks, group: "wannaRead",
          endpoint: "wannaRead/" })
      )
    );
  };

  return ShelfPage;
}(Component);

var ShelfPage_mapStateToProps = function ShelfPage_mapStateToProps(state) {
  return {
    readingBooks: state.readingBooks,
    finishedBooks: state.finishedBooks,
    wannaReadBooks: state.wannaReadBooks
  };
};

ShelfPage = ReactRedux.connect(ShelfPage_mapStateToProps, null)(ShelfPage);

var Shelf = function Shelf(props) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };
  var isPortrait = window.innerWidth < window.innerHeight / 1.5;
  if (isPortrait) {
    settings.slidesToShow = 2;
    settings.slidesToScroll = 2;
  }
  var books = [];
  if (Object.prototype.toString.call(props.books) === '[object Array]') {
    books = props.books.map(function (book, index) {
      return React.createElement(
        "div",
        null,
        React.createElement(Book, {
          key: index,
          name: index,
          "data-index": index,
          info: book,
          group: props.group,
          settings: true,
          endpoint: props.endpoint,
          onClick: props.select
        })
      );
    });
  }

  return React.createElement(
    "div",
    { className: "slider" },
    React.createElement(
      Slider,
      settings,
      books
    )
  );
};
// {books==[]?books:<p>There's no book here</p>}

// get searched term from search bar

var SearchPage = function (_Component2) {
  _inherits(SearchPage, _Component2);

  function SearchPage(props) {
    _classCallCheck(this, SearchPage);

    return _possibleConstructorReturn(this, _Component2.call(this, props));
    // this.state = {index: 1, phase:"NOTSEARCHED"};
  }

  SearchPage.prototype.componentWillMount = function componentWillMount() {
    window.onscroll = function (ev) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        this.searchMore();
      }
    }.bind(this);
  };

  SearchPage.prototype.componentWillUnmount = function componentWillUnmount() {
    window.onscroll = null;
  };

  SearchPage.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
    // this.setState({phase: "SEARCHING"});
    // alert("receive props");
  };

  SearchPage.prototype.componentDidUpdate = function componentDidUpdate() {
    // this.setState({phase: "SEARCHED"});
    // alert("Did receive props");
  };

  SearchPage.prototype.searchMore = function searchMore() {
    // this.setState({index: index += 30});
    this.props.searchMore(index += 30);
  };

  SearchPage.prototype.render = function render() {
    this.searchMore = this.searchMore.bind(this);
    var books = [];
    books = this.props.searchedBooks.map(function (book, index) {
      return React.createElement(Book, { key: index, name: index, info: book, group: "searched", endpoint: "" });
    });

    return React.createElement(
      "div",
      null,
      React.createElement(SearchBar, null),
      React.createElement(
        "div",
        { className: "searchedBooks" },
        books.length === 0 && this.phase == "SEARCHED" ? React.createElement(
          "p",
          null,
          "無搜尋結果"
        ) : null,
        books
      )
    );
  };

  return SearchPage;
}(Component);
// !books===[]?books:<p className="hint">No book here right now.</p>

var SearchPage_mapStateToProps = function SearchPage_mapStateToProps(state) {
  return { searchedBooks: state.searchedBooks };
};

var SearchPage_mapDispatchToProps = function SearchPage_mapDispatchToProps(dispatch) {
  return Redux.bindActionCreators({
    searchMore: action_searchMoreBooks
  }, dispatch);
};

SearchPage = ReactRedux.connect(SearchPage_mapStateToProps, SearchPage_mapDispatchToProps)(SearchPage);

var SearchBar = function SearchBar(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      { className: "searchBar" },
      React.createElement("i", { className: "fa fa-search", "aria-hidden": "true" }),
      React.createElement(
        "form",
        { onSubmit: function onSubmit(event) {
            event.preventDefault();index = 1;
            props.search();
          } },
        "     ",
        React.createElement("input", { type: "text", id: "searchInput", placeholder: "Find your next favorote..." }),
        React.createElement("input", { type: "submit", value: "SEND" })
      )
    )
  );
};
// onChange={props.changeTerm}
// onChange={debounce(props.search,900)}
// value={props.searchedTerm}

// const SearchPage_mapStateToProps_searchedTerm=(state)=>{
//   return {searchedTerm: state.searchedTerm};
// }

var mapDispatchToProps_searchedTerm = function mapDispatchToProps_searchedTerm(dispatch) {
  return Redux.bindActionCreators({
    search: action_searchedBooks,
    changeTerm: action_searchedTerm }, dispatch);
};

SearchBar = ReactRedux.connect(null, mapDispatchToProps_searchedTerm)(SearchBar);

var Book = function (_Component3) {
  _inherits(Book, _Component3);

  function Book(props) {
    _classCallCheck(this, Book);

    return _possibleConstructorReturn(this, _Component3.call(this, props));
  }

  Book.prototype.render = function render() {
    var props = this.props,
        info = props.info.volumeInfo,
        isbn = info.industryIdentifiers ? info.industryIdentifiers[0].identifier : "-1",
        cover = info.imageLinks ? {
      backgroundImage: 'url(' + info.imageLinks.smallThumbnail + ')'
    } : null,
        group = props.group,
        name = props.name,
        title = info.title,
        isPortrait = window.innerWidth < window.innerHeight;

    var author = info.authors;
    author = author ? author.toString() : "";
    return React.createElement(
      "div",
      { className: "book", name: name, "data-group": group },
      props.settings ? React.createElement(Settings, {
        group: group, name: name }) : "",
      "   ",
      React.createElement(
        Link,
        { to: "/" + props.endpoint + isbn, onClick: props.select, name: name, "data-group": group },
        React.createElement("div", { className: "cover", style: cover, name: name, "data-group": group }),
        "     ",
        props.settings ? "" : React.createElement(
          "div",
          { className: "bookdes" },
          React.createElement(
            "p",
            { name: name, "data-group": group },
            title ? title.length > 20 ? title.substring(0, 20) + "..." : title : null
          ),
          React.createElement(
            "p",
            { name: name, "data-group": group },
            author ? author.length > 20 ? author.substring(0, 20) + "..." : author : null
          )
        ),
        "   "
      )
    );
  };

  return Book;
}(Component);
// &&isPortrait

var mapDispatchToProps_selectBook = function mapDispatchToProps_selectBook(dispatch) {
  return Redux.bindActionCreators({ select: action_selectBook }, dispatch);
};

Book = ReactRedux.connect(null, mapDispatchToProps_selectBook)(Book);

var Settings = function (_Component4) {
  _inherits(Settings, _Component4);

  function Settings(props) {
    _classCallCheck(this, Settings);

    var _this4 = _possibleConstructorReturn(this, _Component4.call(this, props));

    _this4.state = { showDrop: false };
    return _this4;
  }

  Settings.prototype.showDrop = function showDrop() {
    this.setState({ showDrop: !this.state.showDrop });
  };

  Settings.prototype.updateReadingBooks = function updateReadingBooks(event) {
    this.props.addReadingBooks(event);
    this.props.removeBooks(event);
    document.getElementsByClassName('title')[0].click();
    // this.forceUpdate();
    // promptAlert("Confirmation","Do you want to move this book to readings section?","Your bookshelf is updated :)!","The action is canceled!",()=>{
    // this.props.addReadingBooks(event);
    // this.props.removeBooks(event);
    // });
  };

  Settings.prototype.updateFinishedBooks = function updateFinishedBooks(event) {
    this.props.addFinishedBooks(event);
    this.props.removeBooks(event);
    document.getElementsByClassName('title')[0].click();
    // this.forceUpdate();
    // promptAlert("Confirmation","Do you want to move this book to finished section?","Your bookshelf is updated :)!","The action is canceled!",()=>{     this.props.addFinishedBooks(event);
    // this.props.removeBooks(event);
    // });
  };

  Settings.prototype.updateWannaReadBooks = function updateWannaReadBooks(event) {
    this.props.addWannaReadBooks(event);
    this.props.removeBooks(event);
    document.getElementsByClassName('title')[0].click();
    //this.forceUpdate();
    // promptAlert("Confirmation","Do you want to move this book to wishlist section?","Your bookshelf is updated :)!","The action is canceled!",()=>{         this.props.addWannaReadBooks(event);
    // this.props.removeBooks(event);
    // });
  };

  Settings.prototype.removeBooks = function removeBooks(event) {
    this.props.removeBooks(event);
    document.getElementsByClassName('title')[0].click();
    // this.forceUpdate();
    // promptAlert("Are you sure?","This action can't be reverted!","The book is deleted!","Your book is still safe!",()=>{
    // this.props.removeBooks(event);
    // });
  };

  Settings.prototype.render = function render() {
    var group = this.props.group,
        name = this.props.name,
        showDrop = this.showDrop.bind(this);
    this.updateReadingBooks = this.updateReadingBooks.bind(this);
    this.updateFinishedBooks = this.updateFinishedBooks.bind(this);
    this.updateWannaReadBooks = this.updateWannaReadBooks.bind(this);this.removeBooks = this.removeBooks.bind(this);
    return React.createElement(
      "div",
      { className: "settings" },
      React.createElement("i", { className: "fa fa-cog cog", "aria-hidden": "true", onClick: showDrop }),
      this.state.showDrop ? React.createElement(
        "div",
        { "data-group": group },
        "      ",
        group == "reading" ? "" : React.createElement(
          "p",
          { "data-group": group, "data-target": "reading", name: name, onClick: this.updateReadingBooks },
          "Move to reading"
        ),
        "      ",
        group == "finished" ? "" : React.createElement(
          "p",
          { "data-group": group, "data-target": "finished", name: name, onClick: this.updateFinishedBooks },
          "Move to finished"
        ),
        "      ",
        group == "wannaRead" ? "" : React.createElement(
          "p",
          { "data-group": group, "data-target": "finished", name: name, onClick: this.updateWannaReadBooks },
          "Move to wannaRead"
        ),
        React.createElement(
          "p",
          { "data-group": group, name: name, onClick: this.removeBooks },
          "Delete"
        ),
        "     "
      ) : ""
    );
  };

  return Settings;
}(Component);

// 將刪除修改的action creators綁上去

var mapDispatchToProps_Settings = function mapDispatchToProps_Settings(dispatch) {
  return Redux.bindActionCreators({
    addReadingBooks: action_addReadingBooks,
    addFinishedBooks: action_addFinishedBooks,
    addWannaReadBooks: action_addWannaReadBooks,
    removeBooks: action_removeBooks
  }, dispatch);
};

Settings = ReactRedux.connect(null, mapDispatchToProps_Settings)(Settings);

var BookInfo = function BookInfo(props) {
  var info = props.currentBook.volumeInfo;
  var cover = props.currentBook.volumeInfo.imageLinks ? { backgroundImage: 'url(' + props.currentBook.volumeInfo.imageLinks.thumbnail + ')'
  } : null,
      group = props.match.params.group,
      eltoshow = undefined;
  if (group) {
    switch (group) {
      case "reading":
        eltoshow = React.createElement(
          "p",
          { className: "status" },
          "You're reading this book"
        );
        break;
      case "finished":
        eltoshow = React.createElement(
          "p",
          { className: "status" },
          "You've finished reading this book"
        );
        break;
      case "wannaRead":
        eltoshow = React.createElement(
          "p",
          { className: "status" },
          "This book's in your wishlist"
        );
        break;
    }
  } else {
    (function () {
      var isbn = props.match.params.isbn;
      if (!eltoshow) {
        props.readingBooks.forEach(function (book) {
          if (isbn == book.volumeInfo.industryIdentifiers[0].identifier) {
            eltoshow = React.createElement(
              "p",
              { className: "status" },
              "You're reading this book"
            );
          }
        });
        if (!eltoshow) {
          props.finishedBooks.forEach(function (book) {
            if (isbn == book.volumeInfo.industryIdentifiers[0].identifier) {
              eltoshow = React.createElement(
                "p",
                { className: "status" },
                "You've finished reading this book"
              );
            }
          });
          if (!eltoshow) {
            props.wannaReadBooks.forEach(function (book) {
              if (isbn == book.volumeInfo.industryIdentifiers[0].identifier) {
                eltoshow = React.createElement(
                  "p",
                  { className: "status" },
                  "This book's in your wishlist"
                );
              }
            });
            if (!eltoshow) {
              eltoshow = React.createElement(Menu, {
                addReadingBooks: props.addReadingBooks,
                addFinishedBooks: props.addFinishedBooks,
                addWannaReadBooks: props.addWannaReadBooks
              });
            } // end if(!eltoshow) 4
          } // end if(!eltoshow) 3
        } // end if(!eltoshow) 2
      } // end if(!eltoshow) 1
    })();
  }

  return React.createElement(
    "div",
    { className: "bookInfo" },
    React.createElement(
      "div",
      { className: "bookInfo_top" },
      React.createElement(
        "div",
        { className: "bookinfo_book" },
        React.createElement("div", { className: "bookInfo_cover", style: cover })
      ),
      React.createElement(
        "div",
        { className: "bookinfo_detail" },
        React.createElement(
          "p",
          { className: "bookinfo_title" },
          info.title
        ),
        React.createElement(
          "p",
          { className: "bookinfo_subtitle" },
          info.subtitle
        ),
        eltoshow,
        React.createElement(
          "p",
          null,
          info.authors ? info.authors.join(",") : null
        ),
        React.createElement(
          "p",
          null,
          "分類:",
          info.categories ? info.categories.join(",") : null
        ),
        React.createElement(
          "p",
          null,
          info.industryIdentifiers ? "ISBN: " + info.industryIdentifiers[0].identifier : ""
        ),
        React.createElement(
          "p",
          null,
          info.language ? "語言: " + info.language : ""
        ),
        React.createElement(
          "p",
          null,
          info.pageCount ? "頁數: " + info.pageCount : null
        ),
        React.createElement(
          "p",
          null,
          info.publishedDate ? "出版日期: " + info.publishedDate : null
        ),
        React.createElement(
          "p",
          null,
          info.publisher ? "出版商: " + info.publisher : null
        ),
        info.previewLink ? React.createElement(
          "p",
          null,
          React.createElement(
            "a",
            { href: info.previewLink },
            "試閱連結"
          )
        ) : null,
        React.createElement("p", null),
        React.createElement("p", null)
      )
    ),
    React.createElement(
      "div",
      { className: "bookinfo_summary" },
      " Description:",
      React.createElement("br", null),
      props.currentBook.volumeInfo.description
    )
  );
};

var BookInfo_mapStateToProps = function BookInfo_mapStateToProps(state) {
  return { currentBook: state.currentBook,
    readingBooks: state.readingBooks,
    finishedBooks: state.finishedBooks,
    wannaReadBooks: state.wannaReadBooks
  };
};
var mapDispatchToProps_bookInfo = function mapDispatchToProps_bookInfo(dispatch) {
  return Redux.bindActionCreators({
    addReadingBooks: action_addReadingBooks,
    addFinishedBooks: action_addFinishedBooks,
    addWannaReadBooks: action_addWannaReadBooks
  }, dispatch);
};

BookInfo = ReactRedux.connect(BookInfo_mapStateToProps, mapDispatchToProps_bookInfo)(BookInfo);

var Menu = function (_Component5) {
  _inherits(Menu, _Component5);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this5 = _possibleConstructorReturn(this, _Component5.call(this, props));

    _this5.state = { showMenu: false,
      style: { transformOrigin: "50% 50%",
        transform: "rotate(0deg)" } };
    return _this5;
  }

  Menu.prototype.showMenu = function showMenu() {
    var flag = this.state.showMenu;
    this.setState({ showMenu: !flag });
    if (!flag) {
      this.setState({ style: {
          transformOrigin: "50% 50%",
          transform: "rotate(45deg)" } });
    } else {
      this.setState({ style: {
          transformOrigin: "50% 50%",
          transform: "rotate(0deg)" }
      });
    }
  };

  Menu.prototype.render = function render() {
    var props = this.props;
    this.showMenu = this.showMenu.bind(this);

    return React.createElement(
      "div",
      { className: "menu" },
      React.createElement(
        CSSTransitionGroup,
        {
          transitionName: "menu",
          transitionEnterTimeout: 1000,
          transitionLeaveTimeout: 1000
        },
        this.state.showMenu ? React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            { onClick: props.addReadingBooks, "data-group": "current" },
            "I'm reading this!"
          ),
          React.createElement(
            "p",
            { onClick: props.addFinishedBooks, "data-group": "current" },
            "I've read this!"
          ),
          React.createElement(
            "p",
            { onClick: props.addWannaReadBooks, "data-group": "current" },
            "I want to read this!"
          )
        ) : ""
      ),
      React.createElement("i", { className: "fa fa-plus plus", "aria-hidden": "true", style: this.state.style, onClick: this.showMenu })
    );
  };

  return Menu;
}(Component);

var Nav = function Nav(props) {
  return React.createElement(
    "div",
    { className: "nav" },
    React.createElement(
      Link,
      { to: "/bookshelf", className: "title" },
      React.createElement("i", { className: "fa fa-book", "aria-hidden": "true" }),
      "BookShelf"
    ),
    React.createElement(
      Link,
      { to: "/", className: "search" },
      "Search",
      React.createElement("i", { className: "fa fa-search", "aria-hidden": "true" })
    )
  );
};

// function thunkMiddleware(store) {
//   return function(next) {
//     return function(action) {
//       if (typeof action === "function") {
//         return action(store.dispatch, store.getState);
//       } else {
//         return next(action);
//       }
//     }
//   }
// }

var Provider = ReactRedux.Provider;
var store = Redux.createStore(rootReducer, Redux.applyMiddleware(thunk));

store.subscribe(function () {
  saveStore(store.getState());
});

var App = function (_Component6) {
  _inherits(App, _Component6);

  function App(props) {
    _classCallCheck(this, App);

    var _this6 = _possibleConstructorReturn(this, _Component6.call(this, props));

    window.addEventListener("resize", debounce(function () {
      _this6.forceUpdate();
    }, 500));
    return _this6;
  }

  App.prototype.reset = function reset() {
    window.scrollTo(0, 0);
    window.onscroll = null;
    alert("reset");
  };

  App.prototype.render = function render() {
    this.reset = this.reset.bind(this);
    return React.createElement(
      Provider,
      { store: store },
      React.createElement(
        "div",
        null,
        React.createElement(
          HashRouter,
          null,
          React.createElement(
            "div",
            null,
            React.createElement(Nav, null),
            React.createElement(
              Switch,
              null,
              "             ",
              React.createElement(Route, { path: "/:group/:isbn", component: BookInfo, onChange: this.reset }),
              "             ",
              React.createElement(Route, { path: "/bookshelf", component: ShelfPage, onChange: this.reset }),
              "             ",
              React.createElement(Route, { path: "/:isbn", component: BookInfo, onChange: this.reset }),
              "             ",
              React.createElement(Route, { path: "/", component: SearchPage, onChange: this.reset })
            )
          )
        )
      )
    );
  };

  return App;
}(Component);

render(React.createElement(App, null), document.querySelector("#container"));

var promptAlert = function promptAlert(title, text, success, cancel, fn) {
  sweetAlert({
    title: title,
    text: text,
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, do it!',
    cancelButtonText: 'No, cancel!',
    confirmButtonClass: 'btn btn-success',
    cancelButtonClass: 'btn btn-danger',
    buttonsStyling: false
  }).then(function () {

    fn();

    sweetAlert('Success!', success, 'success');
  }, function (dismiss) {
    // dismiss can be 'cancel', 'overlay',
    // 'close', and 'timer'
    if (dismiss === 'cancel') {
      sweetAlert('Cancelled', cancel, 'error');
    }
  });
};

function loadStore(propName) {
  try {
    var _store = localStorage.getItem("books");
    if (_store === null) return [];
    _store = JSON.parse(_store);
    switch (propName) {
      case "readingBooks":
        return _store.readingBooks;
      case "finishedBooks":
        return _store.finishedBooks;
      case "wannaReadBooks":
        return _store.wannaReadBooks;
      default:
        return [];
    }
  } catch (err) {
    return [];
  }
}

function saveStore(state) {
  var books = { readingBooks: state.readingBooks,
    finishedBooks: state.finishedBooks,
    wannaReadBooks: state.wannaReadBooks };
  books = JSON.stringify(books);
  try {
    localStorage.setItem("books", books);
  } catch (err) {}
}

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;
    var later = function later() {
      timeout = null;if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};