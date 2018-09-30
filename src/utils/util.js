
function window_height() {
  var height = 0;
  wx.getSystemInfo({
    success: function (res) {
      height = res.windowHeight
    }
  })
  return height;
}

module.exports = {
  window_height: window_height,
}