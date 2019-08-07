const Base = require('../base.js');
 
module.exports = class extends Base {
    async __before(){
      
    }
    async signUpAction() {
        const params = this.post();
        const userModel = this.mongo('user');
        const data = await userModel.getUserByNickName(params.nickname);
        
        if(!think.isEmpty(data)){
            this.fail("用户名已存在")
        }else{
            userModel.add(params)
            this.success("ok");
        }
    }

    async loginAction() { 
        const params = this.post();
        const userModel = this.mongo('user');
        const data = await userModel.getUserByEmail(params.email);
        
        if(data.psw != params.psw){
            this.fail("密码错误")
        }else{
            this.session('userInfo', {...data})
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

    async checkNickNameAction(){
        const params = this.post();
        const userModel = this.mongo('user');
        const data = await userModel.getUserByNickName(params.nickname);
        
        if(!think.isEmpty(data)){
            this.fail("用户名已存在")
        }else{
            this.success("ok");
        }
    }
    
    // 更新用户信息
    async updateUserInfo(){}


}