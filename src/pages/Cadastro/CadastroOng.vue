<template>
<q-page class="img">
    <q-form class="form-cadastro q-gutter-lg center">
      <div class="card">
<div class="card-header text-center" />
      <h4>Cadastro Ong</h4>
      <q-input type="text"
      required
      filled v-model="newOngs.nome"
      label="Informe o Nome da sua Ong... *" /><br>

      <q-input type="text"
      required
      filled v-model="newOngs.endereco"
      label="Informe Seu Endereço... *" /><br>

      <q-input type="text"
      required
      filled v-model="newOngs.numero"
      label="Informe Seu Número... *" /><br>

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

      <q-input type="textarea"
      required
      filled v-model="newOngs.descricao"
      label="Informe um breve texto sobre a causa que a Ong Apoia... *" /><br>

        <q-btn @click="save"
        glossy color="primary"
        class="full-width">Cadastra</q-btn><br><br>

        <q-btn to="/"
        glossy color="primary"
        class="full-width q-mb-lg">Voltar</q-btn>

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
.card {
    width: 25%;
    color: #111;
  }
  .img {
  background-image: linear-gradient(to right, cyan, yellow);
  }
</style>
