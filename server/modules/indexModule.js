const rpA = require('request-promise');

class indexModule {
  constructor(ctx) {
    this.ctx = ctx;
  }
  updataNum () {
    const options = {
      url: 'https://localhost/praise.php',
      method: 'GET'
    }
    return new Promise((resolve, reject) => {
      rpA(options).then(function(result) {
        const info = JSON.parse(result);
        if (info) {
          resolve({data: result})
        } else {
          reject({})
        }
      })
    })
  }
}

module.exports = indexModule;