<template>
<q-page pedding class="flex flex-center row">
        <div class="q-pa-md" style="max-width: 600px">
  <q-form class="q-gutter-lg center">
    <div class="col-12 text-center">
  <div class="text-h4">Bem Vindo</div>
</div>
        <q-input type="email"
        standout="bg-info text-white"
        outlined
        requiered
        filled v-model="form.email"
         label="Informe Seu E-mail... *" />

        <q-input class="q-pt-md"
        standout="bg-info text-white"
        requiered
        outlined
        filled v-model="form.senha"
        type="password"
        label="Informe Sua Senha... *" />

        <div>
        <q-btn
        @click="loginNow()"
        glossy color="cyan"
        class="full-width">Entrar</q-btn>

        <a class="text-body-2 q-mt-lg" href="/selectcadastro"> Não tem uma conta? Cadastre-se</a>
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
      form: { email: '', senha: '' },
      errors: []
    }
  },
  methods: {
    async loginNow () {
      await this.$axios.post(`${process.env.API}/ongs/auth`, this.form).then((res) => {
        window.localStorage.idUsuarioLogado = res.data.id
        alert('Credencias Autorizada!')
        this.$router.push('/dashboard')
      }).catch(err => {
        alert('Verifique suas Credencias!')
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
