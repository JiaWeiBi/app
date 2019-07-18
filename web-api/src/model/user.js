module.exports = class extends think.Mongo {
    async addUser(user) {
        return this.add(user);
    }
}