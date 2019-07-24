module.exports = class extends think.Logic {
   __before() {
      // todo
   }
   signUpAction() {
      this.allowMethods = 'post';
      this.rules = {
         nickname: {
            required: true
         },
         psw: {
            required: true
         }
      }
   }
   loginInAction() {
      this.allowMethods = 'post';
      this.rules = {
         nickname: {
            required: true
         },
         psw: {
            required: true
         }
      }
   }
}