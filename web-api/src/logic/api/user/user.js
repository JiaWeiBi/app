const baseLogic = require('../baseLogic');
module.exports = class extends baseLogic {
   signUpAction() {
      this.allowMethods = 'post';
      const rules = {
         nickname: {
            required: true
            ,string: true
         },
         psw: {
            required: true
            ,string: true
            ,byteLength: {min: 6}
         },
         email: {
            required: true
            ,email: true
         }
      }
      
      const msgs = {
         required: '{name} 不能为空'
         ,email: {
            email: '{name} 不是合法邮件地址'
         }
      }
      const flag = this.validate(rules, msgs);
      if(!flag){
         return this.fail('validate error', this.validateErrors);
       }
   }
   loginAction() {
      this.allowMethods = 'post';
      this.rules = {
         email: {
            required: true
            ,email: true
         },
         psw: {
            required: true
            ,string: true
            ,byteLength: {min: 6}
         }
      }
   }
   logoutAction() {}
}