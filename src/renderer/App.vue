<template>
  <v-app dark>
    <v-toolbar dark fixed app>
      <v-toolbar-title>Password Generator 2.0</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
          <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer dark app>
      <span class="white--text">Jesse Boogaard &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
    })
  }
</script>
