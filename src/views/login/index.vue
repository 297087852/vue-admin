<template>
  <div class="login-container">
    <el-form class="login-form" ref="form" :model="model" :rules="rules">
      <h3 class="title">Vue Admin</h3>

      <el-form-item prop="username">
        <svg-icon class="input-icon" iconClass="username"></svg-icon>
        <el-input v-model="model.username" placeholder="用户名"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <svg-icon class="input-icon" iconClass="password"></svg-icon>
        <el-input type="password" v-model="model.password" placeholder="密码"></el-input>
      </el-form-item>

      <el-button style="width: 100%" :loading="loading" @click="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data () {
    return {
      loading: false,
      model: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },

  methods: {
    async handleLogin () {
      try {
        await this.$refs.form.validate()

        try {
          this.loading = true
          await this.$store.dispatch('user/login', this.model)
          this.loading = false
          this.$router.push('/dashboard')
        } catch (err) {
          this.loading = false
          this.$message.error(err)
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login-container {
  .title {
    font-size: 36px;
    text-align: center;
  }
  .login-form {
    width: 430px;
    margin: 160px auto 0;
    .input-icon {
      position: absolute;
      left: 10px;
      top: 10px;
      z-index: 5;
    }
    input {
      padding-left: 30px;
    }
  }
}
</style>
