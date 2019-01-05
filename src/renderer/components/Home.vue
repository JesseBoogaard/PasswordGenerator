<template>
  <v-layout justify-center align-center>
    <v-card width="33%" style="min-width: 300px; max-width: 400px;" height="130px">
      <v-card-text><span class="headline font-weight-bold"><p class="text-xs-center">{{password}}</p></span></v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn depressed @click.native="getPassword()"><v-icon>cached</v-icon></v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
  const {remote} = require("electron")
  import Generator from '../../../src/classes/Generator.js'
  export default {
    name: 'PasswordGenerator',
    generator: this.GeneratorInstance,
    data: () => ({
      password: 'Password'
    }),
    methods: {
      getPassword(){
        let a = new Generator()
        this.password = a.getPassword()
        // remove instance after generating new password
        a = null
      }
    }
    }
</script>

<style>

</style>
