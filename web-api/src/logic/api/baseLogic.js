module.exports = class extends think.Logic {
    async __before() {
        const list = [
            '/api/user/user/checkNickName'
            , '/api/user/user/signUp'
            , '/api/user/user/login'
        ];
        if (list.indexOf(this.ctx.path) != -1){
            return true;
        }
        const userInfo = await this.session('userInfo');
        if (think.isEmpty(userInfo)) {
            this.fail('请登录')
            return false;
        }
    }
};