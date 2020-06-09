<template>
  <q-page class="img">
    <div class="q-pa-md img">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      autoplay
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide :name="1" img-src="../../assets/imgdoa.jpeg" />
      <q-carousel-slide :name="2" img-src="../../assets/imgdoa2.jpg" />
      <q-carousel-slide :name="3" img-src="../../assets/imgdoa3.jpg" />
      <q-carousel-slide :name="4" img-src="../../assets/imgdoa4.jpg" />
    </q-carousel>
    </div>

<q-form class="q-gutter-lg center">
  <div class="q-pa-md">
    <div class="row q-col-gutter-sm">
      <div class="text-h5">Com a sua ajuda, impulsionamos famílias em vulnerabilidade social a conquistarem um futuro digno!
Cada família que atendemos tem um custo mensal de R$ 800,00. Veja o quanto você pode transformar em apenas um clique.</div>

      <q-input type="text" class="col-6 col-md-3"
      standout="bg-info text-white"
      required
      filled
      v-model="newDoador.nome"
      label="Informe Seu Nome... *"
      :rules="[ val => val && val.length > 0 || 'Campo Obrigatorio' ]"/>

       <q-input type="text" class="col-6 col-md-3"
      standout="bg-info text-white"
      required
      filled
      v-model="newDoador.cpf"
      label="Informe Seu CPF... *"
      mask="###.###.###-##"
      :rules="[ val => val && val.length > 0 || 'Campo Obrigatorio' ]"/>

       <q-input type="text" class="col-6 col-md-3"
      standout="bg-info text-white"
      required
      filled
      v-model="newDoador.email"
      label="Informe Seu E-mail... *"
      :rules="[ val => val && val.length > 0 || 'Campo Obrigatorio' ]"/>

      <q-select type="text" class="col-6 col-md-3"
      standout="bg-info text-white"
      required
      :options="opcao"
      filled
      v-model="newDoador.valor_doacao"
      label="Informe Seu Valor Doação... *"
      :rules="[ val => val && val.length > 0 || 'Campo Obrigatorio' ]"/>

      </div>
    </div>
  </q-form>
  <q-tabs class="text-teal">
    <q-tab name="updatedados" icon="save" label="Participar" type="submit" @click="save" color="cyan" />
    <q-tab name="logout" icon="arrow_back_ios" label="Voltar" @click="vai" color="cyan" />
  </q-tabs>
  </q-page>
</template>
<script>
export default {
  name: 'newDoacao',
  data () {
    return {
      newDoador: {
        nome: '',
        cpf: '',
        email: '',
        valor_doacao: ''
      },
      opcao: ['10.00', '20.00', '30.00', '40.00', '50.00'],
      slide: 1
    }
  },
  methods: {
    async save () {
      const id = localStorage.getItem('id_ong_selecionada')
      await this.$axios.post(`${process.env.API}/doacao/${id}`, this.newDoador).then((res) => {
        console.log(res.dta)
        alert('Doação Realizada com Sucesso!')
        this.reset()
        this.$router.push('/projetos')
      }).catch(err => {
        console.log(err)
        alert('Erro na Doação, Reveja os dados e Refaça a Operação')
      })
    },
    vai () {
      this.$router.push('/projetos')
    },
    reset () {
      this.voluntarios = {}
    },
    computed: {
      isValid: function () {
        return this.name !== '' && this.email !== ''
      }
    }
  }
}
</script>
<style>
.txt {
text-emphasis-position: initial;
color: black;
}
</style>
