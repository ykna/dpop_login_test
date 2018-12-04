class login {
    
    //登录
    static async gotoLogin(page,userName,password){
        let uloginlabel = "body > div > div.v-head.clearfix > div > a.v-login";//用户登录 按钮标签
        let userlabel ="#username";//登录用户input标签 需输入username
        let passlabel = "#password";//登录密码input标签 需输入password
        let sublabel = "#submitBtn";//登录 按钮标签
        let checklabel="#verifycode";//校验码input标签 

        await page.goto('https://inv.chinaclear.cn');
        await page.waitFor(1000);
        await page.click(uloginlabel, {delay:1000});
        await page.waitFor(1000);
        await page.type(userlabel,userName,{delay:100});//输入用户名
        await page.type(passlabel,password,{delay:100});//输入密码
        await page.type(checklabel,'');//输入校验码
        await page.waitFor(10000);
        await page.click(sublabel,{delay:1000});
        await page.waitFor(1000);
        await page.screenshot({path:"1-loginSuccess.png"});
        //返回‘业务预约’按钮DOM是否存在
        return await page.waitForSelector('#nav > li:nth-child(4) > a', { timeout:1000 });
    }

};

module.exports = login;
