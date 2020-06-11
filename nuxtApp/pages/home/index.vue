<template>
  <div>
    <v-container>
      <v-banner >
        <v-avatar slot="icon" color="deep-purple accent-4" size="40">
          <v-icon icon="mdi-lock" color="white">mdi-lock</v-icon>
        </v-avatar>
        <span>HOME 最完美的故事，就是由你亲手写下结局</span>
        <template v-slot:actions>
          <v-btn text color="deep-purple accent-4">Action</v-btn>
          <v-btn text color="deep-purple accent-4">Action</v-btn>
        </template>
      </v-banner>
      <v-btn text small disabled>Disabled</v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "index",
  layout: "default",
  components: {},
  data: () => ({
    //
  })
};
</script>

