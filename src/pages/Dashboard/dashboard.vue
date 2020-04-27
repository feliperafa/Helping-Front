<template>
<div class="q-px-xl q-py-md" style="max-width: 1500px">
    <div class="row">
      <div class="col">
        <div class="row q-col-gutter-lg">
          <div class="col-3">
            <q-btn class="full-width" color="cyan" label="Button" />
          </div>
        </div>
      </div>
    </div>
   </div>
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
