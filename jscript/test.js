`use strict`

const assert = require('assert');
const puppeteer = require('puppeteer');
const data = require('../../dataTemp/popdate.json');
// const longin = require('../jscript/login.js');
const weiBoLogin = require('../jscript/WeiBoLogin.js')

let browser;
let page;
let viewConfig;

before(async function() {
    //打开浏览器
    browser = await puppeteer.launch({
        timeout: 15000, //最大超时间为15秒.
        ignoreHTTPSErrors: true,//忽略https请求错误
        // true不会打开浏览器.
        headless: false
    });
    //新开标签页
    viewConfig = {width:1280,height:1024};//设置页面宽高
    page = await browser.newPage();
    await page.setViewport(viewConfig);//设置窗口

});
after(async function() {
    await browser.close();
});
describe('公共测试',function() {
    this.timeout(0);
    // it('网厅登录测试',async function() {
    //     //断言是否登录成功
    //     assert.ok(await longin.gotoLogin(page,data.parameterData[0].userName,data.parameterData[0].password),'登录失败！');
    // });

    it('微博登录测试',async function() {
        //断言是否登录成功
        assert.ok(await weiBoLogin.queryBD(page,data.parameterData[0].userName,data.parameterData[0].password),'登录失败！');
    });

});