<template>
  <v-app>
  

    <v-app-bar
      color="secondary"
      dark
      app
      fixed
      :clipped-left="$vuetify.breakpoint.lgAndUp"
    >
      <v-toolbar-title class="ml-0 pl-3">   
        <span class="hidden-sm-and-down">MENV STACK</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer align="end" color="secondary" height="auto">
      <v-layout>
        <v-flex>
          <v-card flat tile color="secondary" class="white--text">
            <v-card-text class="white--text pt-2 pb-2">
              <v-row justify="end" align="end">&copy;MENV STACK</v-row>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'App',

 

  data: () => ({
    //
  }),
};
</script>
