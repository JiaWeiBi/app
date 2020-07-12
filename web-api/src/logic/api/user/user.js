const baseLogic = require('../baseLogic');
module.exports = class extends baseLogic {
   async signUpAction() {
      this.allowMethods = 'post';
      const rules = {
         nickname: {
            required: true
            , string: true
         },
         psw: {
            required: true
            , string: true
            , byteLength: { min: 6 }
         },
         email: {
            required: true
            , email: true
         },
         token: {
            required: true
            , string: true
         }
      }

      const msgs = {
         required: '{name} 不能为空'
         , email: {
            email: '{name} 不是合法邮件地址'
         }
      }
      const flag = this.validate(rules, msgs);
      if (!flag) {
         return this.fail('validate error', this.validateErrors);
      }
      if (!(await this.ctx.checkCaptchaToken(this.post('token')))) {
         return this.fail('validate error', 'token校验失败');
      }
   }
   loginAction() {
      this.allowMethods = 'post';
      this.rules = {
         email: {
            required: true
            , email: true
         },
         psw: {
            required: true
            , string: true
            , byteLength: { min: 6 }
         }
      }
   }
   logoutAction() { }
   emailCheckAction() {
      this.allowMethods = 'get';
      this.rules = {
         token: {
            required: true,
            string: true
         }
      }
   }
}