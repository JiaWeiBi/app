module.exports = class extends think.Mongo {
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