<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
            <v-toolbar color="primary" dark flat>
            <v-toolbar-title>邮箱登陆</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="邮箱*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="密码*" type="password" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <!-- <small>*indicates required field</small> -->
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="close">登陆</v-btn>
            <v-btn color="primary" @click="close">取消</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: true,
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
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>