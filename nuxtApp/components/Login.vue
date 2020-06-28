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
    <!-- <v-overlay dark="false">
      <v-container class="fill-height" fluid cols="12">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn icon large target="_blank" v-on="on" @click="close">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Login" name="login" prepend-icon="mdi-account" type="text"></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-overlay>-->
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