const Base = require('../base.js');
module.exports = class extends Base {
    async addAction() {

        this.success();
    }

    async getAction() {
        const id = this.get('id');
        const conent = this.mongo('content2');
        const data = await conent.where({_id: id}).find();
        this.success(data);
    }
}