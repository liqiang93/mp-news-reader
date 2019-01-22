/*
  封装网络请求方法，适配controller接口.
*/
var API_URL_BASE = 'https://www.easy-mock.com/mock/5c25e73fb2138d188c467663/test';

var requestObject = {
  params: {},
  success: function (res) { },
  fail: function () { },
  complete: function () { }
}

var headersForSystem = null

function getHeaders() {
  if (!headersForSystem) {
    try {
      var res = wx.getSystemInfoSync();
      var version = res.version;
      var system = res.system;
      var platform = res.platform;
      var SDKVersion = res.SDKVersion;
      headersForSystem = {
        'version': version,
        'system': system,
        'platform': platform,
        'SDKVersion': SDKVersion,
        'content-type': "application/x-www-form-urlencoded",
      }
    } catch (e) {
      headersForSystem = {}
    }
  }

  return headersForSystem
}

function mock(method, apiName, requestObject, counter) {
  var res = require("../mock/" + apiName + ".js")

  if (requestObject.success) {
    requestObject.success(res.data)
  }

  if (requestObject.complete) {
    requestObject.complete()
  }
}

function request(method, apiName, requestObject, counter) {
  if (typeof counter == 'undefined') {
    var counter = 0;
  }

  if (requestObject.params.mock) {
    return mock(method, apiName, requestObject, counter)
  }

  if (counter > 3) {
    var message = "请求失败，检查网络"
    return requestObject.fail(message)
  }

  return wx.request({
    url: API_URL_BASE + apiName,
    data: requestObject.params,
    method: method,
    header: getHeaders(),
    success: function (res) {
      // console.log(res)
      if (res.statusCode == 200 && res.data.code == 200 && requestObject.success) {
        var res = res.data;
        requestObject.success(res.data);
      } else if (res.data.code == 403) {
        requestObject.fail(res.data.code)
      } else {
        if (counter < 0) {
          setTimeout(function () {
            counter++
            request(method, apiName, requestObject, counter)
          }, 1000)
        } else {
          var message = res.data.message || "请求失败，请稍后重试"
          requestObject.fail(message)
        }
      }
    },
    fail: function (res) {
      if (counter < 3) {
        setTimeout(function () {
          counter++
          request(method, apiName, requestObject, counter)
        }, 1000)
      } else if (requestObject.fail) {
        requestObject.fail("请求失败，检查网络")
      }
    },
    complete: function () {
      if (requestObject.complete) {
        requestObject.complete()
      }
    }
  })
}

module.exports = {
  request: request
}