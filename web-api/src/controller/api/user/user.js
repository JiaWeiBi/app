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
        this.success(this.post());
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