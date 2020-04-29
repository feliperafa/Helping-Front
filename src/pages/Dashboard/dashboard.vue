<template>
<h1>Dash Board Teste</h1>
</template>

<script>
const idUsuarioLogado = localStorage.getItem('idUsuarioLogado')
if (idUsuarioLogado) {
  console.log(idUsuarioLogado)
}
</script>

<style lang="sass">
.semi-transparent
  opacity: .7
</style>
