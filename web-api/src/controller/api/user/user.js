const Base = require('../base.js');
module.exports = class extends Base {
    async signUpAction() {
        this.success(this.post());
    }

    async loginInAction() { 
        this.success(this.post());
    }

    // 更新用户信息
    async updateUserInfo(){}
}