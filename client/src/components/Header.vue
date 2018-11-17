<template>
  <v-toolbar
    fixed
    dark
    color="primary">

    <v-tooltip bottom>
      <v-toolbar-side-icon
        slot="activator"
        :to="{name: 'home'}"
        active-class>
        <v-icon>home</v-icon>
      </v-toolbar-side-icon>
      <span>Home</span>
    </v-tooltip>

    <v-toolbar-title class="white--text">Tab tracker</v-toolbar-title>

    <v-spacer/>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-tooltip bottom>
      <v-btn
        slot="activator"
        :to="{name: 'login'}"
        icon
        active-class>
        <v-icon>how_to_reg</v-icon>
      </v-btn>
      <span>Login</span>
    </v-tooltip>

    <v-tooltip bottom>
      <v-btn
        slot="activator"
        :to="{name: 'register'}"
        icon
        active-class>
        <v-icon>person_add</v-icon>
      </v-btn>
      <span>Register</span>
    </v-tooltip>

  </v-toolbar>
</template>

<script>
export default {

};
</script>

<style scoped>

</style>
