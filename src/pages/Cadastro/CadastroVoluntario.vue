<template>
<q-page class="flex-center row">
  <div class="q-pa-md">
    <q-form class="q-gutter-sm">
    <div class="col-12 text-center">
  <div class="text-h5">Seja a mudança que quer ver no mundo.</div>
  <div class="text-h5">Voluntarie-se e ajude quem precisa !</div>
</div>

      <q-input type="text" class="col-12 col-md-6"
      standout="bg-info text-white"
      required
      :rules="[ val => val && val.length > 0 || 'Campo Obrigatorio' ]"
      filled
      v-model="voluntarios.nome"
      label="Informe seu Nome Voluntario... *" />

      <q-input type="text" class="col-12 col-md-6"
      standout="bg-info text-white"
      required
      :rules="[ val => val && val.length > 0 || 'Campo Obrigatorio' ]"
      filled
      v-model="voluntarios.telefone"
      label="Informe Seu Telefone... *" />

     <q-input type="text" class="col-12 col-md-6"
     standout="bg-info text-white"
      required
      :rules="[ val => val && val.length > 0 || 'Campo Obrigatorio' ]"
      filled
      v-model="voluntarios.cpf"
      mask="###.###.###-##"
      label="Informe Seu CPF... *" />

      <q-input type="text" class="col-12 col-md-6"
      standout="bg-info text-white"
      required
      :rules="[ val => val && val.length > 0 || 'Campo Obrigatorio' ]"
      filled
      v-model="voluntarios.email"
      label="Informe Seu E-mail... *" />
      <q-input type="text" class="col-12 col-md-6"
      standout="bg-info text-white"
      required
      :rules="[ val => val && val.length > 0 || 'Campo Obrigatorio' ]"
      filled
      v-model="voluntarios.endereco"
      label="Informe Seu Endereço... *" />

      <q-input type="number" class="col-12 col-md-6"
      standout="bg-info text-white"
      required
      filled
      v-model="voluntarios.numero"
      label="Endereço Número..." />

    </q-form>
    <q-tabs class="text-teal q-mb-ex">
    <q-tab name="updatedados" icon="save" label="Participar" @click="save" color="cyan" />
    <q-tab name="logout" icon="arrow_back_ios" label="Voltar" @click="vai" color="cyan" />
  </q-tabs>
</div>
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
    vai () {
      this.$router.push('/projetos')
    },
    reset () {
      this.voluntarios = {}
    }
  }
}
</script>
