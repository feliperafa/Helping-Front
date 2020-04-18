<template>
<q-page>
    <q-form class="form-cadastro q-gutter-lg center">
      <div class="card">
<div class="card-header text-center">
  <h4>Novo Cadastro</h4>
  </div>
      <q-input type="text"
      required
      filled v-model="newOngs.nome"
      label="Informe Seu Nome... *" /><br>
      <q-input type="text"
      required
      filled v-model="newOngs.telefone"
      label="Informe Seu Telefone... *" /><br>

     <q-input type="text"
      required
      filled v-model="newOngs.cnpj"
      label="Informe Seu cnpj... *" /><br>

      <q-input type="text"
      required
      filled v-model="newOngs.email"
      label="Informe Seu E-mail... *" /><br>

      <q-input type="password"
      required
      filled v-model="newOngs.senha"
      label="Informe Sua Senha... *" /><br>

      <div>
        <q-btn @click="save"
        glossy color="primary"
        class="full-width">Cadastra</q-btn>
      </div>
      <br>
      <div>
        <q-btn to="/"
        glossy color="primary"
        class="full-width q-mb-lg">Voltar</q-btn>
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
        senha: ''
      }
    }
  },
  methods: {

    async save () {
      await this.$axios.post(`${process.env.API}/ongs`, this.newOngs).then((res) => {
        alert('Usúario Cadastrado com sucesso !')
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
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  }
.card {
    width: 25%;
    color: #111;
  }
</style>
