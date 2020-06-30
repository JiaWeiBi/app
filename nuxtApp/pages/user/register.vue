<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-row>
          <v-col cols="12">
            <v-alert
              text
              prominent
              color="deep-orange"
              icon="mdi-exclamation"
            >首先欢迎您来到本站，由于本站目前处于试运营阶段，有些地方还有待完善，使用过程中遇到任何问题或者有任何意见和建议都欢迎您通过站内反馈，或者发送邮件到961595030@qq.com，也可以直接联系QQ 961595030 并注明来意</v-alert>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="昵称*"
              :rules="[rules.required, rules.nickname]"
              v-model="form.nickName"
              outlined
              counter
              maxlength="20"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="邮箱*"
              :rules="[rules.required, rules.email]"
              v-model="form.email"
              validate-on-blur
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="密码*"
              :rules="[rules.required, rules.password]"
              v-model="form.psw"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"
              :type="show ? 'text' : 'password'"
              validate-on-blur
              outlined
            ></v-text-field>
            <span>*密码由6-12位字母、数字组合*</span>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-btn color="warning" @click="register">注册</v-btn>
              <v-spacer></v-spacer>
              <span>
                注册即代表同意
                <nuxt-link to="/user/term">用户使用条款</nuxt-link>
              </span>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      form: {
          nickName: '',
          email: null,
          psw: null
      },
      rules: {
        required: value => !!value || "必填项.",
        counter: value => value.length <= 20 || "最多20个字符",
        password: value => {
          if (!value) {
            return "必填项";
          }
          let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
          if (!reg.test(value)) {
            return "密码不符合要求";
          }
          return true;
        },
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "非法邮箱地址";
        },
        nickname: async value => {
          return true;
        }
      }
    };
  },
  methods: {
    register: async function() {
      console.log(this.form)
    }
  }
};
</script>