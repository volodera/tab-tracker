<template>
  <div id="app">
    <v-app id="inspire">
      <v-content>
        <v-container
          fluid
          fill-height>
          <v-layout
            align-center
            justify-center>
            <v-flex
              xs12
              sm8
              md4>
              <v-card class="elevation-12">
                <v-toolbar
                  dark
                  color="primary">
                  <v-toolbar-title>Register form</v-toolbar-title>
                  <v-spacer/>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      v-model="email"
                      prepend-icon="person"
                      name="login"
                      label="Login"
                      type="text"/>
                    <v-text-field
                      id="password"
                      v-model="password"
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                      type="password"/>
                  </v-form>
                </v-card-text>
                <v-alert
                  v-model="showError"
                  type="error"
                  icon="warning"
                  outline
                  v-html="error"
                />
                <v-card-actions>
                  <v-spacer/>
                  <v-btn
                    color="primary"
                    @click="register">Register</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  data() {
    return {
      email: 'abc',
      password: '1234',
      showError: false,
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.showError = false;
      } catch (error) {
        this.showError = true;
        this.error = typeof error.response !== 'undefined' ? error.response.data.error : 'No server response!';
      }
    },
  },
};
</script>

<style scoped>

</style>
