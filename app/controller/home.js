'use strict';

const Controller = require('egg').Controller;
const RPCClient = require('@alicloud/pop-core');
class HomeController extends Controller {

  /**
   * 首页
   */
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
