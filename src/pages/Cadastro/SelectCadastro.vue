<template>
  <div class="q-pa-md">
    <q-btn-group spread>
      <q-btn glossy color="cyan" label="Cadastro Ong" icon="star" class="full-width" @click="cadastro" />
    </q-btn-group>
  </div>

</template>
<script>
export default {
  name: 'Index',
  data () {
    return {

    }
  },
  methods: {
    cadastro () {
      if (localStorage.getItem('idUsuarioLogado')) {
        alert('Usuario já logado, caso deseja criar uma nova ong deslogar do sistema e criar uma Nova Ong!')
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/cadastroong')
      }
    }
  }
}
</script>
