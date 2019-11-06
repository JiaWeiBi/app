const Base = require('../base.js');
module.exports = class extends Base {
    async addAction() {

        this.success();
    }

    async getAction() {
        const params = this.get();
        const conent = this.mongo('content2');
        
        const data = await conent.where({commentId: params.id}).find();

        const followData = await conent.where({
            beReplied:{
                $elemMatch: {
                    beRepliedCommentId: parseInt(params.id)
                }
            }
        }).page(
            params.page,params.perPage
        ).countSelect();
        this.success({data, followData});
    }
}