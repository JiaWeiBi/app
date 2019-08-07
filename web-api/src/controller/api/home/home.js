const Base = require('../base.js');
module.exports = class extends Base {
    async storyListAction() {
        const conent = this.mongo('content2');
        const data = await conent.page(1, 20).select();
        this.body = {data};
    }

    async testAction() {
        const conent = this.mongo('content2');
        const data = await conent.where({commentId: "235471322"}).select();
        const se = await this.session('userInfo')
        console.log(this.cookie('thinkjs'))
        if(se){
            console.log('========', se)
        }else{
            this.session('userInfo', {id: 'test'})
        }
        this.success(data)
    }
}