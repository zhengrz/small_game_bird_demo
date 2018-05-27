
export class ApiExamples {


  static getUserInfo() {
    const params = {
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {

      },
      complete: function(res) {

      }
    }
    wx.getUserInfo(params);
  }

  static login() {
    const params = {
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {

      },
      complete: function(res) {

      }
    }
    wx.login(params);
  }

  static getSetting() {
    const params = {
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {

      },
      complete: function(res) {

      }
    }
    wx.getSetting(params);
  }


  static httpExample() {
    wx.request({
      url: 'http://localhost:3000',
      method: 'POST',
      data: 'MyData',
      success: function(response) {
        console.log(response);
      }
    })
  }

  static socketExample() {
    wx.connectSocket({
      url: 'ws://127.0.0.1:3001',
      success: function() {
        console.log('客户端连接成功')
      }
    })

    wx.onSocketOpen(function() {
      wx.sendSocketMessage({
        data: '我是客户端',
        success: function(res) {
          console.log(res)
        }
      })

      wx.onSocketMessage(function(res){
        console.log(res)
      })

    })


  }

}
