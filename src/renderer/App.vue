<template>
  <v-app dark>
    <v-toolbar dark fixed app>
      <v-toolbar-title>Password Generator 2.0</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-card width="90%" style="max-width: 1000px;" color="grey darken-4">
            <v-card-text><span class="headline font-weight-bold"><h1 class="text-xs-center display-4">{{ password }}</h1></span></v-card-text>
            <v-layout align-end justify-end>
              <v-btn depressed @click.native="getPassword()" color="green">New</v-btn>
              <v-btn depressed @click="copy()" color="blue">{{ copyState }}</v-btn>
            </v-layout>
          </v-card>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer dark app>
      <span class="white--text" style="margin-left: 6px">Jesse Boogaard &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Generator from '../../src/classes/Generator.js'
import { setInterval } from 'timers';
  export default {
    name: 'PasswordGenerator',
    generator: this.GeneratorInstance,
    data: () => ({
      password: 'Password',
      copyState: 'Copy'
    }),
    methods: {
      getPassword(){
        this.copyState = 'Copy'
        let a = new Generator()
        this.password = a.getPassword()
        // remove instance after generating new password
        a = null
      },
      copy(){
        this.$copyText(this.password).then((e) => {
          this.copyState = 'Copied!'
        }, (e) => {
          alert('Copying failed.')
        })
      }
    }
  }
</script>
