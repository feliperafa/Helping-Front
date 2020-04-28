<template>
<q-page>
    <q-form class="form-cadastro q-gutter-lg center">
      <div class="q-pa-md">
    <div class="row q-col-gutter-sm">
      <q-input type="text" class="col-12 col-md-6"
      required
      filled v-model="newDoador.nome"
      label="Informe Seu Nome... *" />
      <q-input type="text" class="col-12 col-md-6"
      required
      filled v-model="newDoador.telefone"
      label="Informe Seu Telefone... *" />

     <q-input type="text" class="col-12 col-md-6"
      required
      filled v-model="newDoador.cpf"
      label="Informe Seu cpf... *" />

      <q-input type="text" class="col-12 col-md-6"
      required
      filled v-model="newDoador.endereco"
      label="Informe Seu Endereço... *" />

      <q-input type="text" class="col-12 col-md-6"
      required
      filled v-model="newDoador.numero"
      label="Informe Seu Número... *" />

      <q-input type="text" class="col-12 col-md-6"
      required
      filled v-model="newDoador.email"
      label="Informe Seu E-mail... *" />

      <q-input type="password" class="col-12 col-md-12"
      required
      filled v-model="newDoador.senha"
      label="Informe Sua Senha... *" />

       <div class="q-pa-md" style="max-width: 400px">
    <div class="q-gutter-x-xs q-gutter-y-lg">
        <q-btn @click="save"
        glossy color="cyan"
        class="full-width">Cadastra</q-btn>

        <q-btn to="/"
        glossy color="cyan"
        class="full-width q-mb-lg">Voltar</q-btn>
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
      newDoador: {
        nome: '',
        cpf: '',
        telefone: '',
        numero: '',
        email: '',
        senha: '',
        endereco: ''
      }
    }
  },
  methods: {

    async save () {
      await this.$axios.post(`${process.env.API}/doador`, this.newDoador).then((res) => {
        alert('Doador Cadastrado com sucesso !')
        this.reset()
        this.$router.push('/')
      }).catch(err => {
        console.log(err)
      })
    },
    reset () {
      this.newDoador = {}
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
  background-image: linear-gradient(to right, white, grey);
  }
</style>
