<template>
<q-page Container class="flex flex-center">
      <div class="q-pa-md" style="max-width: 600px">
    <q-form  @submit.prevent="loginNow()" class="q-gutter-lg center">

        <h4>Helping SomeBody</h4>
        <q-input type="email"
        requiered
        filled v-model="form.email"
         label="Informe Seu E-mail... *" />

        <q-input class="q-pt-md"
        requiered
        filled v-model="form.senha"
        type="password"
        label="Informe Sua Senha... *" />

        <div>
        <q-btn
        @click="loginNow"
        glossy color="cyan"
        class="full-width">Entrar</q-btn>

        <a class="a" href="/selectcadastro">Não tem uma conta? Cadastre-se</a>
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
      form: { email: '', senha: '' }
    }
  },
  methods: {
    async loginNow () {
      await this.$axios.post(`${process.env.API}/ongs/auth`, this.form).then((res) => {
        console.log(res)
        alert('Credencia Autorizadas com Sucesso!')
        window.localStorage.idUsuarioLogado = res.data.id
        this.$router.push('/dashboard')
      }).catch(err => {
        alert('Verifique sua Credencia ou Crie um Conta!')
        console.log(err)
      })
    },
    verifica () {
      if (localStorage.getItem('idUsuarioLogado')) {
        this.$router.push('/dashboard')
      }
    }
  },
  beforeMount () {
    this.verifica()
  }
}

</script>
