<template>
<q-page class="container img">
  <div class="row">
    <div class="col">
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card  class="my-card bg-cyan text-white" v-for="(ong, index) in ongs" :key="index">
      <q-card-section>
        <div class="text-h6">{{ ong.nome }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Email: {{ ong.email }}<br>
        Telefone: {{ ong.telefone }}<br>
        Endereço: {{ ong.endereco }}<br>
        Descrição: {{ ong.descricao }}<br>
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat @click="doa(ong.id)">Doe Agora</q-btn>
        <q-btn flat @click="vai(ong.id)">Quero ser voluntariar</q-btn>
      </q-card-actions>
    </q-card>
  </div>
   </div>
  </div>
  </q-page>
</template>
<script>
export default {
  name: 'Ongs',
  data () {
    return {
      ongs: []
    }
  },
  methods: {
    carregarOngs () {
      this.$axios.get(`${process.env.API}/ongs`).then(response => {
        this.ongs = (response.data)
      })
    },
    vai: function (id) {
      window.localStorage.id_ong_selecionada = id
      this.$router.push('/cadastrovoluntario')
    },
    doa: function (id) {
      window.localStorage.id_ong_selecionada = id
      this.$router.push('/doacao')
    }
  },
  beforeMount () {
    this.carregarOngs()
  }
}
</script>
<style>
.my-card{
  width: 100%;
  max-width: 320px;
}
</style>
