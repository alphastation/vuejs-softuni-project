<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link :to="{name: 'login'}"> Need an account? </router-link>
          </p>
          <mdm-validation-errors
            v-if="validationErrors"
            :validation-errors="validationErrors"
          ></mdm-validation-errors>

          <form @submit.prevent="onSignUpButtonClicked">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Username"
                v-model="username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                v-model="email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="password"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              :disabled="isSubmitting"
            >
              Sign Up
            </button>
            <!-- {{ count }} -->
          </form>
          <!-- <button @click="increaseCounter">Increase</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MdmValidationErrors from '@/components/ValidationErrors';
export default {
  name: 'MdmRegister',
  components: {
    MdmValidationErrors,
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting;
    },
    validationErrors() {
      return this.$store.state.auth.validationErrors;
    },
  },
  methods: {
    onSignUpButtonClicked() {
      this.$store
        .dispatch('register', {
          email: this.email,
          username: this.username,
          password: this.password,
        })
        .then((result) => {
          console.log('result from register action:', result);
          this.$router.push({name: 'home'});
        });
    },
  },
};
</script>
