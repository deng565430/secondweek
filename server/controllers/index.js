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
      const indexModules = new indexModule(ctx)
      ctx.body = await indexModules.updateNum();
    }
  }
}

module.exports = indexController;