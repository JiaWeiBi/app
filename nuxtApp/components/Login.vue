<template>
  <v-card>
    <v-col v-model="tab" fixed-tabs>
      <v-tab class="ml-0">登录</v-tab>
      <v-tab>注册</v-tab>
    </v-col>

    <v-col-items v-model="tab">
      <v-tab-item :key="'login'">
        <v-card flat>
          <v-form ref="form" v-model="valid" :lazy-validation="lazy">
            <v-text-field v-model="email" :rules="emailRules" label="邮箱" required></v-text-field>
            <v-text-field
              v-model="psw"
              label="密码"
              required
              :append-icon="showPsw ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPsw ? 'text' : 'password'"
              @click:append="showPsw = !showPsw"
            ></v-text-field>
            <v-btn color="warning" dark block>
              <v-icon>mdi-account-circle</v-icon>登录
            </v-btn>
          </v-form>
        </v-card>
      </v-tab-item>
      <v-tab-item :key="'signIn'">
        <v-card flat>
          <v-form ref="form" v-model="valid" :lazy-validation="lazy">
            <v-text-field v-model="name" :counter="10" :rules="nameRules" label="用户名" required></v-text-field>

            <v-text-field v-model="email" :rules="emailRules" label="邮箱" required></v-text-field>
            <v-text-field
              v-model="psw"
              label="密码"
              required
              :append-icon="showPsw ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPsw ? 'text' : 'password'"
              @click:append="showPsw = !showPsw"
            ></v-text-field>
            <v-text-field
              v-model="psw"
              label="确认密码"
              required
              :append-icon="showPsw ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPsw ? 'text' : 'password'"
              @click:append="showPsw = !showPsw"
            ></v-text-field>
            <v-btn color="warning" dark block>
              <v-icon>mdi-account-circle</v-icon>注册
            </v-btn>
          </v-form>
        </v-card>
      </v-tab-item>
    </v-col-items>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      showPsw: false,
      tab: null,
      valid: true,
      lazy: false,
      name: "",
      nameRules: [
        v => !!v || "用户名为必填",
        v => (v && v.length <= 10) || "用户名长度限制为10"
      ],
      email: "",
      emailRules: [
        v => !!v || "邮箱为必填",
        v => /.+@.+\..+/.test(v) || "请输入正确的邮箱"
      ]
    };
  }
};
</script>