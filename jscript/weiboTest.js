class WeiBoLogin {
    
    //登录
    static async queryBD(page,username,password){
        let userInput = "#loginname";//网易邮箱登陆用户框 
        let passInput = "#pl_login_form > div > div:nth-child(3) > div.info_list.password > div > input";
        let sublabel ="#pl_login_form > div > div:nth-child(3) > div.info_list.login_btn > a"; 
        

        await page.goto('https://weibo.com/');
        await page.waitFor(1000);
        await page.type(userInput,username,{delay:100});//输入用户名
        await page.type(passInput,password,{delay:100});//输入密码
        await page.waitFor(1000);
        await page.click(sublabel, {delay:100});
        await page.waitFor(10000);

        //返回‘业务预约’按钮DOM是否存在
        return await page.waitForSelector('#skin_cover_s', { timeout:1000 });
    }

};

module.exports = login;
