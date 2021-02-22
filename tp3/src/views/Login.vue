<template>
  <div class="logins">
    <div class="login-screen">
      <div class="app-title">
        <h2 v-if="!isLogin">SIGN UP</h2>
        <h2 v-if="isLogin">LOGIN</h2>
      </div>
      <div class="login-form">
          <form @submit.prevent="submitForm">
              <div v-if="!isLogin" class="control-group">
                <input class="controls" type="text" id="name" placeholder="Nombre">
              </div>
              <div class="control-group">
                <input class="controls" type="email" id="email" v-model="email" placeholder="E-mail">
              </div>
              <div class="control-group">
                <input class="controls" type="password" id="password" v-model="password" placeholder="Password">
              </div>
              <div>
                <button class="btn-logsign btn-large btn-block" type="submit">
                  {{ submitButtonText }}
                  <i v-if="isLogin" class="fas fa-sign-in-alt"></i>
                  <i v-if="!isLogin" class="fas fa-check"></i>
                </button>
                <button class="btn-instead btn-large btn-block" @click.prevent="toggleLogins">
                  {{ toggleModeButtonTexts }}
                  <i class="fas fa-sync-alt"></i>
                </button>
              </div>
          </form>
      </div>
    </div>
    <div v-if="hasError" class="alert alert-danger" role="alert">
      E-mail/Password Incorrecto
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      isLogin: true
    }
  },
  computed: {
    submitButtonText () {
      if (this.isLogin) {
        return 'Login'
      } else {
        return 'Sign up'
      }
    },
    toggleModeButtonTexts () {
      if (this.isLogin) {
        return 'Sign up instead'
      } else {
        return 'Login instead'
      }
    },
    hasError () {
      return this.$store.getters.getErrorStatus
    }
  },
  methods: {
    async submitForm () {
      if (this.isLogin) {
        await this.$store.dispatch('login', { email: this.email, password: this.password })
      } else {
        await this.$store.dispatch('signUp', { email: this.email, password: this.password })
      }
      this.$router.replace('/tabla')
    },
    toggleLogins () {
      this.isLogin = !this.isLogin
    }
  }
}
</script>

<style>
.logins {
  margin: 50px auto;
  width: 300px;
}
.login-screen {
  background-color: rgba(219, 97, 76, 0.144);
  padding: 20px;
  border-radius: 5px
}

.app-title {
  text-align: center;
  color: #777;
}

.login-form {
  text-align: center;
}
.control-group {
  margin-bottom: 10px;
}

input {
  text-align: center;
  background-color: #ECF0F1;
  border: 2px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 200;
  padding: 10px 0;
  width: 250px;
  transition: border .5s;
}

input:focus {
  border: 2px solid #3498DB;
  box-shadow: none;
}

.btn-logsign {
  border: 2px solid transparent;
  background: #216cdb;
  color: #ffffff;
  font-size: 16px;
  line-height: 25px;
  padding: 10px 0;
  text-decoration: none;
  text-shadow: none;
  border-radius: 3px;
  box-shadow: none;
  transition: 0.25s;
  display: block;
  width: 250px;
  margin: 0 auto;
}

.btn-logsign:hover {
  background-color: #2f9e13;
}

.btn-instead {
  border: 2px solid transparent;
  background: #216cdb;
  color: #ffffff;
  font-size: 16px;
  line-height: 25px;
  padding: 10px 0;
  text-decoration: none;
  text-shadow: none;
  border-radius: 3px;
  box-shadow: none;
  transition: 0.25s;
  display: block;
  width: 250px;
  margin: 0 auto;
}

.btn-instead:hover {
  background-color: #10489c;
}

.login-link {
  font-size: 12px;
  color: #444;
  display: block;
  margin-top: 12px;
}
</style>
