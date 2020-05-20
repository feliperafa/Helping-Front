<template>

   <div class="q-pa-lg img" style="padding-top: 48px; padding-bottom: 220px">
         <div class="q-pa-md">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">Nome Doador</th>
          <th class="text-left">Valor Recebido Ong</th>
          <th class="text-left">Valor Arecadado Sistema</th>
          <th class="text-left">Data Doação</th>
          <th class="text-left">E-mail Doador</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(doador, index) in doador" :key="index">
          <td class="text-left">{{ doador.nome }}</td>
          <td class="text-left">R$ {{ doador.valor_doacao }},00</td>
          <td class="text-left">R$ {{ doador.valor_doacao_sistema }},00</td>
          <td class="text-left">{{ new Date(doador.createdAt).toLocaleDateString('pt-BR') }}</td>
          <td class="text-left">{{ doador.email }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
  <div class="q-pa-md" style="max-width: 500px">
    <div class="q-gutter-sm">
      <q-btn color="cyan" label="Atualizar Dados" />
    </div>
  </div>
  <div class="q-pa-md" style="max-width: 500px">
    <div class="q-gutter-sm">
      <q-btn color="cyan" label="Logout" @click="removeSesion"/>
    </div>
  </div>
  </div>

</template>
<script>

export default {
  name: 'Doadores',
  data () {
    return {
      doador: []
    }
  },
  methods: {
    carregarDoador () {
      if (localStorage.getItem('idUsuarioLogado')) {
        const idUsuarioLogado = localStorage.getItem('idUsuarioLogado')
        this.$axios.get(`${process.env.API}/doacao/${idUsuarioLogado}`).then(response => {
          this.doador = (response.data)
        })
      } else {
        this.$router.push('/login')
      }
    },
    removeSesion () {
      localStorage.clear()
      this.$router.push('/login')

      // this.localStorage = {}
    }
  },
  beforeMount () {
    this.carregarDoador()
  },
  formatarData () {
    new Date(this.doador.createdAt).toLocaleDateString('pt-BR')
    const dataCriacao = new Date(this.doador.createdAt).toLocaleDateString('pt-BR')
    console.log(dataCriacao)
    console.log('data: ', this.doador.createdAt)
  }
}
</script>
<style>

</style>
