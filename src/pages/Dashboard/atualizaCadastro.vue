<template>
<q-page>
<q-form class="form-cadastro q-gutter-lg center">
      <div class="q-pa-md">
    <div class="row q-col-gutter-sm">
      <q-input
      class="col-12 col-md-6"
        filled
        type="text"
        v-model="ong.nome"
        label="Nome da Ong*"
      />
      <q-input
      class="col-12 col-md-6"
        filled
        type="text"
        v-model="ong.email"
        label="E-mail*"
      />
      <q-input
      class="col-12 col-md-6"
        filled
        type="text"
        v-model="ong.endereco"
        label="Endereço*"
      />
      <q-input
      class="col-12 col-md-6"
        filled
        type="text"
        v-model="ong.numero"
        label="Número*"
      />
       <q-input
       class="col-12 col-md-6"
        filled
        type="text"
        disable
        v-model="ong.cnpj"
        label="CNPJ*"
      />
       <q-input
       class="col-12 col-md-6"
        filled
        type="text"
        v-model="ong.telefone"
        label="Telefone*"
      />
      <q-input
      class="col-12 col-md-12"
        filled
        type="textarea"
        v-model="ong.descricao"
        label="Descrição*"
      />
       <q-input
       class="col-12 col-md-6"
        filled
        type="text"
        v-model="ong.senha"
        label="Senha*"
      />
</div>
</div>
      <div class="q-pa-md" style="max-width: 500px">
    <div class="q-gutter-sm">
      <q-btn color="cyan" label="Atualizar Cadastro" @click="atualizaCadastroOng"  />
    </div>
  </div>
    <div class="q-gutter-sm">
      <q-btn color="cyan" label="Voltar" to="dashboard" />
    </div>
    </q-form>
    </q-page>
    </template>
<script>
export default {
  name: 'Doadores',
  data () {
    return {
      ong: []
    }
  },
  methods: {
    carregarDoador () {
      if (localStorage.getItem('idUsuarioLogado')) {

      } else {
        alert('Para ter acesso a Rota precisa esta Logado no Sistema !')
        this.$router.push('/login')
      }
    },
    atualizaCadastroOng () {
      console.log(this.ong)
      const idUsuarioLogado = localStorage.getItem('idUsuarioLogado')
      this.$axios.put(`${process.env.API}/ongs/${idUsuarioLogado}`, this.ong).then((res) => {
        alert('Cadastro Atualizado com Sucesso!')
        this.$router.push('/dashboard')
      }).catch(err => {
        console.log(err)
      })
    },
    carregarOng () {
      const idUsuarioLogado = localStorage.getItem('idUsuarioLogado')
      this.$axios.get(`${process.env.API}/ongs/${idUsuarioLogado}`).then(res => {
        this.ong = (res.data)
      })
    }
  },
  beforeMount () {
    this.carregarOng()
  }
}
</script>
