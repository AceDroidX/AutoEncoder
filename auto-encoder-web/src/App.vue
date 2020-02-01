<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center title">
        AutoEncoder
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/AceDroidX/AutoEncoder" target="_blank" text>
        <span class="mr-2">VIEW THIS PROJECT ON GITHUB</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
