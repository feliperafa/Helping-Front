<template>
<q-page>
    <q-form class="q-gutter-lg center">
      <div class="q-pa-md">
    <div class="row q-col-gutter-sm">

      <q-input type="text" class="col-12 col-md-6"
      standout="bg-info text-white"
      required
      filled v-model="newOngs.nome"
      label="Informe o Nome da sua Ong... *"
      :rules="[ val => val && val.length > 0 || 'Campo Obrigatorio' ]"/>

      <q-input type="text" class="col-12 col-md-6"
      standout="bg-info text-white"
      required
      filled v-model="newOngs.endereco"
      label="Informe Seu Endereço... *"
      :rules="[ val => val && val.length > 0 || 'Campo Obrigatorio' ]"/>

      <q-input type="number" class="col-12 col-md-6"
      standout="bg-info text-white"
      required
      filled v-model="newOngs.numero"
      label="Informe Seu Número de Endereço... *" />

      <q-input type="text" class="col-12 col-md-6"
      standout="bg-info text-white"
      required
      :mask="mask"
      filled v-model="newOngs.telefone"
      label="Telefone DDD + Número"
      :rules="[ val => val && val.length > 0 || 'Campo Obrigatorio' ]" />

     <q-input type="text" class="col-12 col-md-6"
     standout="bg-info text-white"
      required
      filled v-model="newOngs.cnpj"
      label="Informe Seu cnpj... *"
      :rules="[ val => val && val.length > 0 || 'Campo Obrigatorio' ]"
      mask="##.###.###/####-##" />

      <q-input type="text" class="col-12 col-md-6"
      standout="bg-info text-white"
      required
      filled v-model="newOngs.email"
      label="Informe Seu E-mail... *"
      :rules="[ val => val && val.length > 0 || 'Campo Obrigatorio' ]" />

      <q-input type="password" class="col-12 col-md-12"
      standout="bg-info text-white"
      required
      filled v-model="newOngs.senha"
      label="Informe Sua Senha... *"
      :rules="[ val => val && val.length > 0 || 'Campo Obrigatorio']" />

      <q-input type="textarea" class="col-12 col-sm-12"
      standout="bg-info text-white"
      required
      filled v-model="newOngs.descricao"
      label="Informe um breve texto sobre a causa que a Ong Apoia... *"
      :rules="[ val => val && val.length > 0 || 'Campo Obrigatorio' ]" />

        </div>
        </div>
    </q-form>
    <q-tabs class="text-teal q-mb-ex">
    <q-tab name="updatedados" icon="save" label="Participar" @click="save" color="cyan" />
    <q-tab name="logout" icon="arrow_back_ios" label="Voltar" @click="vai" color="cyan" />
  </q-tabs>
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
  watch: {
    mask () {
      const input = this.$refs.telefone.$refs.input
      requestAnimationFrame(() => {
        input.selectionStart = input.value.length
      })
    }
  },
  computed: {
    mask () {
      switch (true) {
        case this.newOngs.telefone.length <= 8: return '####-#####'
        case this.newOngs.telefone.length === 9: return '#####-#####'
        case this.newOngs.telefone.length === 10: return '(##) ####-#####'
        default: return '(##) #####-####'
      }
    }
  },
  methods: {

    async save () {
      console.log(this.newOngs)
      await this.$axios.post(`${process.env.API}/ongs`, this.newOngs).then((res) => {
        alert('ONG Cadastrada com sucesso !')
        this.reset()
        this.$router.push('/')
      }).catch(err => {
        console.log(err)
      })
    },
    vai () {
      this.$router.push('/')
    },
    reset () {
      this.newOngs = {}
    }
  }
}

</script>
