module.exports = class extends think.Mongo {
    /*
    nickname: 昵称
    email: 邮箱
    psw: 密码
    
     */
    async addUser(user) {
        return this.add(user);
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