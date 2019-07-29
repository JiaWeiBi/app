const Base = require('../base.js');
 
module.exports = class extends Base {
    async signUpAction() {
        const params = this.post();
        const userModel = this.mongo('user');
        console.log(params)
        const data = await userModel.getUserByNickName(params.nickname);
        console.log(data, !!data)
        if(data.nickname){
            this.fail("用户名已存在")
        }else{
            userModel.add(params)
            this.success("ok");
        }
    }

    async loginInAction() { 
        this.success(this.post());
    }

    // 更新用户信息
    async updateUserInfo(){}


}