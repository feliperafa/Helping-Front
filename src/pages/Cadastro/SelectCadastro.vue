<template>
<div class="container">
  <div class="q-pa-md">
    <q-btn-dropdown glossy color="cyan" label="Selecione o Tipo de Cadastro">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick" to="/cadastroong">
          <q-item-section>
            <q-item-label>Cadastrar Ong</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick" to="/cadastro">
          <q-item-section>
            <q-item-label>Cadastrar Doador</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</div>
</template>
<style lang="scss">
</style>
