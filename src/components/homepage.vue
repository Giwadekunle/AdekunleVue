<template :color="black">
<v-card
    class="mx-auto"
    width="1500"
  >
<v-carousel show-arrows="hover"
cycle
interval ="3000"
hide-delimiter-background
:show-arrows="false"
:pauseOnHover="true">

  <v-carousel-item
    src="../image/pizza.jpg"
    cover ></v-carousel-item>

  <v-carousel-item
    src="../image/pizza2.jpg"
    cover > </v-carousel-item>

    <v-carousel-item
    src="../image/pizza3.jpg"
    cover ></v-carousel-item>
</v-carousel>

</v-card>

<v-footer
    height="auto"
    color="primary lighten-1"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
      >
        {{ link }}
      </v-btn>
      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2024 — <strong>Adekunle</strong>
      </v-flex>
    </v-layout>
  </v-footer>

</template>





<script>

  export default {
    data() {
      return {
       
        }
    },
  }
</script>