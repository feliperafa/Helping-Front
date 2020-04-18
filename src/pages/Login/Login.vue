<template>
<q-page Container class="flex flex-center">
      <div class="q-pa-md" style="max-width: 600px">
    <q-form  @submit.prevent="loginNow()" class="q-gutter-lg center">

        <h4>Helping SomeBody</h4>
        <q-input type="text"
        requiered filled v-model="form.cpf"
         label="Informe Seu Cpf... *" />

        <q-input class="q-pt-md"
        requiered filled v-model="form.senha"
        type="password"
        label="Informe Sua Senha... *" />

        <div>
        <q-btn
        @click="loginNow"
        glossy color="cyan"
        class="full-width">Entrar</q-btn>

        <a class="a" href="/cadastro">Não tem uma conta? Cadastre-se</a>
        </div>
 </q-form>
</div>
</q-page>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: { cpf: '', senha: '' }
    }
  },
  methods: {
    async loginNow () {
      await this.$axios.post(`${process.env.API}/auth`, this.form).then((res) => {
        console.log(res)
        alert('Credencia Autorizadas com Sucesso!')
        this.$router.push('/dashboard')
      }).catch(err => {
        alert('Verifique sua Credencia ou Crie um Conta!')
        console.log(err)
      })
      // this.$axios.post(`${process.env.API}/auth`, this.login).then((res, user) => {
      //   window.uid = user ? user.uid : null
      //   if (window.uid) {
      //     this.$router.push('/dashboard')
      //   } else {
      //     this.$router.push('/')
      //   }
      // }).catch(err => {
      //   console.log(err)
      // })
    }
  }
}

</script>

<style>
.logo {
background:#A1CFFF;
}
</style>
