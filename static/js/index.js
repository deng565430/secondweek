
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function PraiseButton() {
  _classCallCheck(this, PraiseButton);

  this.num = 0;
};

var Thumb = function (_PraiseButton) {
  _inherits(Thumb, _PraiseButton);

  function Thumb(num) {
    _classCallCheck(this, Thumb);

    var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num));

    _this.timeoutId = null;
    return _this;
  }

  _createClass(Thumb, [{
    key: "clickTenTimes",
    value: function clickTenTimes() {
      clearTimeout(this.timeoutId);
      var self = this;
      this.timeoutId = setTimeout(function () {
        self.addNum();
      }, 200);
      return this.stop();
    }
  }, {
    key: "stop",
    value: function stop() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

      return this.num < data;
    }
  }, {
    key: "addNum",
    value: function addNum() {
      this.num++;
      return this.stop();
    }
  }]);

  return Thumb;
}(PraiseButton);

var thumb = new Thumb();
