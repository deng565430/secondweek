const indexModule = require('../modules/indexModule');

const indexController = {
  index () {
    return async (ctx, next) => {
      const title = '大拇指点赞';
      await ctx.render('index', {
        title
      })
    }
  },
  update () {
    return async (ctx, next) => {
      const indexModule = new indexModule(ctx)
      ctx.body = await indexModule.updateNum();
    }
  }
}

module.exports = indexController;