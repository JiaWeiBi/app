const ObjectId = require('mongodb').ObjectId; 

module.exports = class extends think.Mongo {
    /*
    nickname: 昵称
    email: 邮箱
    psw: 密码
    state: 状态 0：正常 1：删除 2：未认证
     */
    async addUser(user) {
        return this.add(user);
    }

    async updateBy_ID(_id, user) {
        return this.where({_id: new ObjectId(_id)}).update(user);
    }

    async getUserByNickName(nickname) {
        const data = await this.where({nickname}).find();
        return data;
    }

    async getUserByEmail(email) {
        const data = await this.where({email}).field('nickname,email,psw').find();
        return data;
    }
} 