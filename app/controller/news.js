'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    console.log(this.config.api);
    let list = await this.ctx.service.news.getList;
    await this.ctx.render("new", {
      context: '欢迎来到egg！',
      list: list
    });
  }

  async get() {
    const query = this.ctx.query;
    console.log("get val :" + query.id);
    this.ctx.body = 'GET 传值';
  }

  async params() {
    const params = this.ctx.params
    console.log("params val :" + params.id)
    this.ctx.body = "路径传值";
  }

}

module.exports = NewsController;
