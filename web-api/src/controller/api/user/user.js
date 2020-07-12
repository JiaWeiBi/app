const uuid = require('uuid');
const Base = require('../base.js');

module.exports = class extends Base {
    async __before() {

    }
    async signUpAction() {
        const params = this.post();
        const userModel = this.mongo('user');
        const data = await userModel.getUserByNickName(params.nickname);

        if (!think.isEmpty(data)) {
            this.fail("用户名已存在")
        } else {

            let id = await userModel.add({
                nickname: params.nickname,
                email: params.email,
                psw: params.psw,
                state: 2
            });
            let token = uuid.v4();
            // 发送确认邮件
            await this.$redis.set(`email_check_token:${token}`, id, 'EX', 60 * 60);
            console.log(this.helper)
            await this.helper.emailer.send({
                to: params.email,
                title: '用户注册邮箱确认',
                content: `<h3> 您刚刚在文豪野犬使用此邮箱进行注册，请<a href="${think.config('localhost')}/api/user/user/emailCheck?token=${token}"> 点击此处</a>进行确认，如非本人操作请忽略此邮件</h3>`
            });
            this.success("ok");
        }
    }

    async loginAction() {
        const params = this.post();
        const userModel = this.mongo('user');
        const data = await userModel.getUserByEmail(params.email);

        if (data.psw != params.psw) {
            this.fail("密码错误")
        } else {
            this.session('userInfo', { ...data })
            delete data.psw;
            delete data._id;
            this.success(data);
        }
    }

    async logoutAction() {
        const userInfo = this.session('userInfo');
        if (think.isEmpty(userInfo)) {
            this.success('已退出登录')
        }
    }

    async checkNickNameAction() {
        const params = this.post();
        const userModel = this.mongo('user');
        const data = await userModel.getUserByNickName(params.nickname);

        if (!think.isEmpty(data)) {
            this.fail("用户名已存在")
        } else {
            this.success("ok");
        }
    }

    //验证email
    async emailCheckAction() { 
        const token = this.get('token');
        let id = await this.$redis.get(`email_check_token:${token}`);
        if(id){
            await this.mongo('user').updateBy_ID(id, {state: 0});
            return this.redirect('http://localhost:3000');
        }else{
            this.fail('token已过期');
        }
    }

    // 更新用户信息
    async updateUserInfo() { }


}