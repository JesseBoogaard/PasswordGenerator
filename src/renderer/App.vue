<template>
  <v-app dark>
    <v-toolbar dark fixed app>
      <v-toolbar-title>Password Generator 2.0</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-card width="33%" style="min-width: 300px; max-width: 400px;" height="130px">
            <v-card-text><span class="headline font-weight-bold"><p class="text-xs-center">{{ password }}</p></span></v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn depressed @click.native="getPassword()">New</v-btn>
              <v-btn depressed @click="copy()">{{ copyState }}</v-btn>
            </v-card-actions>
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
