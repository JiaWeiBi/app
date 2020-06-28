<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-row>
          <v-col cols="12">
            <v-text-field label="邮箱*" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="密码*" type="password" required></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>