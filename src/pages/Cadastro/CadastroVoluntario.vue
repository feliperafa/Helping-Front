<template>
<q-page>
    <q-form class="form-cadastro q-gutter-lg center">
      <div class="q-pa-md">
    <div class="row q-col-gutter-sm">

      <q-input type="text" class="col-12 col-md-6"
      required
      filled
      v-model="voluntarios.nome"
      label="Informe seu Nome Voluntario... *" />

      <q-input type="text" class="col-12 col-md-6"
      required
      filled
      v-model="voluntarios.endereco"
      label="Informe Seu Endereço... *" />

      <q-input type="text" class="col-12 col-md-6"
      required
      filled
      v-model="voluntarios.numero"
      label="Informe o Número do Endereço... *" />

      <q-input type="text" class="col-12 col-md-6"
      required
      filled
      v-model="voluntarios.telefone"
      label="Informe Seu Telefone... *" />

     <q-input type="text" class="col-12 col-md-6"
      required
      filled
      v-model="voluntarios.cpf"
      label="Informe Seu CPF... *" />

      <q-input type="text" class="col-12 col-md-6"
      required
      filled
      v-model="voluntarios.email"
      label="Informe Seu E-mail... *" />

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
  name: 'Voluntario',
  data () {
    return {
      voluntarios: {
        nome: '',
        endereco: '',
        numero: '',
        telefone: '',
        cpf: '',
        email: ''
      },
      ongs: []
    }
  },
  methods: {
    async save () {
      const id = localStorage.getItem('id_ong_selecionada')
      await this.$axios.post(`${process.env.API}/ongs/${id}/voluntario`, this.voluntarios).then((res) => {
        alert('você fez uma solicitação para ser vonluntario, aguarde que entraremos em contato.')
        this.reset()
        this.$router.push('/projetos')
      }).catch(err => {
        console.log(err)
        alert('Voluntario já Cadastrado para esta ONG!')
      })
    },
    reset () {
      this.voluntarios = {}
    }
  }
}
</script>
