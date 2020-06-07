<template>
<q-page class="flex-center">
  <q-tabs class="text-teal">
    <q-tab name="updatedados" icon="edit" label="Atualizar Dados" @click="vai" color="cyan" />
    <q-tab name="logout" icon="logout" label="Logout" @click="removeSesion" color="cyan" />
  </q-tabs>
  <div>
<tr v-for="(ong, index) in ong" :key="index">
  <td class="text-left">{{ ong.nome }}</td>
</tr>
</div>
  <div class="q-pa-lg" style="padding-top:0px;">
  <h5>Doações</h5>
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
    <h5>Voluntarios</h5>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">Nome Voluntario</th>
          <th class="text-left">E-mail Voluntario</th>
          <th class="text-left">telefone Voluntario</th>
          <th class="text-left">Endereço Voluntario</th>
          <th class="text-left">Data da Cadastro</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(voluntario, index) in voluntario" :key="index">
          <td class="text-left">{{ voluntario.nome }}</td>
          <td class="text-left">{{ voluntario.email }}</td>
          <td class="text-left">{{ voluntario.telefone }}</td>
          <td class="text-left">{{ voluntario.endereco }}</td>
          <td class="text-left">{{ new Date(voluntario.createdAt).toLocaleDateString('pt-BR') }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
  </q-page>
</template>
<script>
export default {
  name: 'Doadores',
  data () {
    return {
      ong: [],
      voluntario: [],
      doador: [],
      atualizaOng: {
        nome: '',
        email: '',
        endereco: '',
        numero: '',
        cnpj: '',
        telefone: '',
        descricao: '',
        senha: ''
      }
    }
  },
  methods: {
    async carregarDoador () {
      if (localStorage.getItem('idUsuarioLogado')) {
        const idUsuarioLogado = localStorage.getItem('idUsuarioLogado')
        await this.$axios.get(`${process.env.API}/doacao/${idUsuarioLogado}`).then(response => {
          this.doador = (response.data)
        })
      } else {
        alert('Para ter acesso a Rota precisa esta Logado no Sistema !')
        this.$router.push('/login')
      }
    },
    async atualizaCadastroOng () {
      const idUsuarioLogado = localStorage.getItem('idUsuarioLogado')
      await this.$axios.put(`${process.env.API}/ongs/${idUsuarioLogado}`, this.atualizaOng).then((res) => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
    },
    removeSesion () {
      localStorage.clear()
      this.$router.push('/login')
    },
    async carregarVoluntario () {
      const idUsuarioLogado = localStorage.getItem('idUsuarioLogado')
      await this.$axios.get(`${process.env.API}/ongs/${idUsuarioLogado}/voluntario`).then(res => {
        this.voluntario = (res.data)
      })
    },
    async carregarOng () {
      const idUsuarioLogado = localStorage.getItem('idUsuarioLogado')
      await this.$axios.get(`${process.env.API}/ongs/${idUsuarioLogado}`).then(res => {
        this.ong = (res.data)
      })
    },
    vai () {
      this.$router.push('/atualizarcadastro')
    }
  },
  beforeMount () {
    this.carregarDoador()
    this.carregarVoluntario()
  }
}
</script>
