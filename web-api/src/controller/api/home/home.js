const Base = require('../base.js');
module.exports = class extends Base {
    async indexAction() {
        const conent = this.mongo('content2');
        const data = await conent.page(1, 20).select();
        this.body = {data};
    }

    async testAction() {
        const conent = this.mongo('content2');
        const data = await conent.where({commentId: "235471322"}).select();
        this.success(data)
    }
}