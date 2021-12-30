"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app, config } = this;
    ctx.body = "hello world";
    console.log("config.env------", config.env);
  }
  async add() {
    const ctx = this.ctx;
    let count = ctx.cookies.get('count');
    count = count ? Number(count) : 0;
    ctx.cookies.set('count', ++count);
    ctx.session.newCount = ++count;
    ctx.body = count;
    ctx.status = 500;
  }
}

module.exports = HomeController;
