 Layout Builder
Layout "View"
l
h
h
H
r
h
l
L
Page
r
R
l
f
f
F
r
f
Header
Header Reaveal
Elevated
Separator type
Footer
Footer Reveal
Elevated
Separator type
Quasar
<template>
  <q-layout view="hHh lpR fff">

    <q-header elevated class="bg-cyan text-White" height-hint="98">

      <q-tabs align="center">
        <q-route-tab to="/" label="Início" />
        <q-route-tab to="/projetos" label="Projetos" />
        <q-route-tab to="/paceiras" label="Paceiros" />
        <q-route-tab to="/comoparticipar" label="Como Participar" />
        <q-route-tab to="/login" label="Login" />
        <q-route-tab to="/selectcadastro" label="Cadastro" />

      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- <q-footer elevated class="bg-cyan text-White">
      <q-toolbar>
        <q-toolbar-title class="bottom-right">
          Todos os direitos reservados Helping SomeBody &copy;
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus">
  body{
    background-color :#E5E5E5;
  }
</style>
