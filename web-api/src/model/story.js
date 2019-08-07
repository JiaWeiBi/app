module.exports = class extends think.Mongo {
    async addNew(data) {
        const id = await this.add(data);
        return id;
    }
}