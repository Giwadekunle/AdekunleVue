<template >
    <div>  
      <div class="text-subtitle-2 mt-4 mb-2"><h3>Frequently Asked Questions</h3></div>
      <v-expansion-panels class="my-4" variant="inset">
        <v-expansion-panel
          v-for="i in 1"
          :key="i"
          text="We are Open Monday - Friday ."
          title="Are you open everyday " color="blue"
        ></v-expansion-panel>
        <v-expansion-panel
          v-for="i in 1"
          :key="i"
          text="342 Moi Avenue Nairobi CBD."
          title="Where are you located" color="blue"
        ></v-expansion-panel>
        <v-expansion-panel
          v-for="i in 1"
          :key="i"
          text="You can call us on 07448399289."
          title="what is your phone number " color="blue"
        ></v-expansion-panel>
        <v-expansion-panel
          v-for="i in 1"
          :key="i"
          text="Delivery are free for orders above 2000KSH."
          title="Is delivery free" color="blue"
        ></v-expansion-panel>
        

      </v-expansion-panels>
  
    </div>
  </template>
<script>
export default{

}
</script>