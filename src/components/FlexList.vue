<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-actions>
          <v-select v-model="size" :items="items" label="Size"></v-select>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
          <v-layout row wrap>
            <v-flex
              v-for="n in 9"
              :key="n"
              xs4
            >
              
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import contentCard from  "@/components/contentCard.vue"

export default {
    data: function () {
        return {}
    }
    ,props: {
        numLimit: Number
    },
    components: {
        contentCard
    }
}
</script>