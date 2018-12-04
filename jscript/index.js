const puppeteer = require('puppeteer');
const viewConfig = {width:1280,height:1028};//设置页面宽高

(async () => {
    try {
    const browser = await puppeteer.launch({headless:false});//初始化一个浏览器
    const page = await browser.newPage();//新建一个页面实例
    await page.setViewport(viewConfig);//设置窗口

    //开始登录
    console.log();
    await page.goto('https://inv.chinaclear.cn');
    await page.click('a.v-login');//点击“用户登录”
    await page.waitFor(2000);
    await page.type('#username','15518423555',{delay:100});//输入用户名
    await page.type('#password','wsh888518',{delay:100});//输入密码
    await page.type('#verifycode','');//输入
    await page.waitFor(10000);
    await page.screenshot({path:'./login.png'});
    await page.click('#submitBtn');//点击登录
    await page.waitFor(1000);
    await page.screenshot({path:'./loginResult.png'});

    browser.close();
    } catch (error) {
        console.log(error);
    }
    
    
})();