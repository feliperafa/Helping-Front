<template>
<q-page>
    <q-form class="form-cadastro q-gutter-lg center">
      <div class="q-pa-md">
    <div class="row q-col-gutter-sm">

      <q-input type="text" class="col-12 col-md-6"
      required
      filled v-model="newOngs.nome"
      label="Informe o Nome da sua Ong... *" />

      <q-input type="text" class="col-12 col-md-6"
      required
      filled v-model="newOngs.endereco"
      label="Informe Seu Endereço... *" />

      <q-input type="text" class="col-12 col-md-6"
      required
      filled v-model="newOngs.numero"
      label="Informe Seu Número... *" />

      <q-input type="text" class="col-12 col-md-6"
      required
      filled v-model="newOngs.telefone"
      label="Informe Seu Telefone... *" />

     <q-input type="text" class="col-12 col-md-6"
      required
      filled v-model="newOngs.cnpj"
      label="Informe Seu cnpj... *" />

      <q-input type="text" class="col-12 col-md-6"
      required
      filled v-model="newOngs.email"
      label="Informe Seu E-mail... *" />

      <q-input type="password" class="col-12"
      required
      filled v-model="newOngs.senha"
      label="Informe Sua Senha... *" />

      <q-input type="textarea" class="col-12"
      required
      filled v-model="newOngs.descricao"
      label="Informe um breve texto sobre a causa que a Ong Apoia... *" />

       <div class="q-pa-md" style="max-width: 400px">
    <div class="q-gutter-x-xs q-gutter-y-lg">
       <q-btn @click="save"
        glossy color="cyan"
        class="full-width">Cadastra</q-btn>
        <q-btn to="/"
        glossy color="cyan"
        class="full-width">Voltar</q-btn>
        </div>
        </div>
        </div>
        </div>
    </q-form>
</q-page>
</template>
<script>
export default {
  name: 'newUser',
  data () {
    return {
      newOngs: {
        nome: '',
        cnpj: '',
        telefone: '',
        descricao: '',
        email: '',
        endereco: '',
        numero: '',
        senha: ''
      }
    }
  },
  methods: {

    async save () {
      await this.$axios.post(`${process.env.API}/ongs`, this.newOngs).then((res) => {
        alert('ONG Cadastrada com sucesso !')
        this.reset()
        this.$router.push('/')
      }).catch(err => {
        console.log(err)
      })
    },
    reset () {
      this.newOngs = {}
    }
  }
}
</script>
<style>
.form-cadastro {
  display: flex;
  align-items: center;
  justify-content: center;
  }
  .img {
  background-image:linear-gradient(to right, white, grey);
  }
</style>
