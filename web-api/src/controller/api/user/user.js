const Base = require('../base.js');
module.exports = class extends Base {
    async signUpAction() {
        console.log(this.post())
        await this.model('user').addUser(this.post());
        this.success("ok");
    }

    async loginInAction() { }
}