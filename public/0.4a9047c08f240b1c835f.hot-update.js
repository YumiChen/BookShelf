webpackHotUpdate(0,{

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _reactRedux = __webpack_require__(17);

var _Shelf = __webpack_require__(319);

var _Shelf2 = _interopRequireDefault(_Shelf);

var _redux = __webpack_require__(14);

var _action_currentUid = __webpack_require__(131);

var _action_currentUid2 = _interopRequireDefault(_action_currentUid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShelfPage = function (_Component) {
  _inherits(ShelfPage, _Component);

  function ShelfPage(props) {
    _classCallCheck(this, ShelfPage);

    return _possibleConstructorReturn(this, (ShelfPage.__proto__ || Object.getPrototypeOf(ShelfPage)).call(this, props));
  }

  _createClass(ShelfPage, [{
    key: "componentWillmount",
    value: function componentWillmount() {
      var _this2 = this;

      window.removeEventListener("resize", debounce(function () {
        _this2.forceUpdate();
      }, 500));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      document.body.scrollTop = document.documentElement.scrollTop = 0;
      window.addEventListener("resize", debounce(function () {
        _this3.forceUpdate();
      }, 500));
    }
  }, {
    key: "logout",
    value: function logout() {
      var self = this;
      // logout from firebase
      firebase.auth().signOut().then(function () {
        sessionStorage.removeItem("user");
        self.props.setCurrentUid("logout");
      }, function (error) {
        // An error happened.
      });
    }
  }, {
    key: "render",
    value: function render() {
      this.logout = this.logout.bind(this);
      return React.createElement(
        "div",
        { className: "shelfPage" },
        React.createElement(
          "div",
          { className: "shelves" },
          React.createElement(
            "p",
            { className: "options" },
            React.createElement(
              "span",
              { className: "logout", onClick: this.logout },
              "log out"
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "span",
              { className: "shelfName" },
              "Reading"
            ),
            React.createElement(_Shelf2.default, { books: this.props.readingBooks, group: "reading",
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
            React.createElement(_Shelf2.default, {
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
            React.createElement(_Shelf2.default, { books: this.props.wannaReadBooks, group: "wannaRead",
              endpoint: "wannaRead/" })
          )
        )
      );
    }
  }]);

  return ShelfPage;
}(_react.Component);

var ShelfPage_mapStateToProps = function ShelfPage_mapStateToProps(state) {
  return {
    readingBooks: state.readingBooks,
    finishedBooks: state.finishedBooks,
    wannaReadBooks: state.wannaReadBooks
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    setCurrentUid: _action_currentUid2.default
  }, dispatch);
};

ShelfPage = (0, _reactRedux.connect)(ShelfPage_mapStateToProps, mapDispatchToProps)(ShelfPage);

module.exports = ShelfPage;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

})