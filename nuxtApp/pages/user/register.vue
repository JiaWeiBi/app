<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" ref="form">
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
              ref="nickname"
              :error-messages="nickMsg"
              v-model="form.nickname"
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
              ref="email"
              validate-on-blur
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="密码*"
              :rules="[rules.required, rules.password]"
              v-model="form.psw"
              ref="psw"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"
              :type="show ? 'text' : 'password'"
              validate-on-blur
              outlined
            ></v-text-field>
            <span>*密码由6-12位字母、数字组合(同时包含数字和字母)*</span>
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
    <div ref="captcha"></div>
    <v-snackbar v-model="snackbar" top color="error" :timeout="2000">{{ notice }}</v-snackbar>
    <v-dialog v-model="dialog" persistent max-width="320">
      <v-card>
        <v-card-title class="headline text-center">{{notice}}</v-card-title>
        <!-- <v-card-text class="my-auto mx-auto text-h6 text-center">{{notice}}</v-card-text> -->
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn tile outlined color="success" @click="dialog = false">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import CryptoJS from "crypto-js";
export default {
  head: {
    script: [
      { src: "https://cdn.dingxiang-inc.com/ctu-group/captcha-ui/index.js" }
    ]
  },
  data() {
    return {
      actionUrl: "/user/user/signUp",
      checkNameUrl: "/user/user/checkNickName",
      show: false,
      snackbar: false,
      dialog: false,
      notice: "",
      form: {
        nickname: "",
        email: null,
        psw: null
      },
      nickMsg: [],
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
        nickname: value => {
          if (!value) {
            return "必填项";
          }
          this.nickMsg = this.nickMsg || [];
          const that = this;
          this.$axios.$post(this.checkNameUrl, {nickname: value}).then(res => {
            if(res.errno){
              that.nickMsg.push(res.errmsg);
            }else{
              that.nickMsg=[];
            }
          })
          return true;
        }
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    register: async function() {
      let err = false;
      Object.keys(this.form).forEach(f => {
        if (!this.$refs[f].validate(true)) {
          err = true;
        }
      });
      if ((this.nickMsg && this.nickMsg.length != 0) || err) {
        return;
      }
      let params = { ...this.form };
      params.psw = CryptoJS.MD5(params.psw + "a2s3d4f").toString();

      let p = _dx.Captcha(this.$refs.captcha, {
        appId: "7345783e510f7b34b3f2b05d6bc4caa5",
        style: "popup",
        success: async token => {
          p.hide();
          params.token = token;
          const res = await this.$axios.$post(this.actionUrl, params);
          await this.handleRegister(res);
        },
        fail: function(err) {
          p.reload();
        }
      });
      p.show();
    },
    handleRegister: async function(res) {
      if (res.errno) {
        this.notice = res.errmsg;
        // this.snackbar =true;
      } else {
        this.notice = "确认邮件已发送到您的注册邮箱中，请前往邮箱点击确认。";
      }
      this.dialog = true;
    }
  }
};
</script>