<template>
<div class="cores">
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="https://www.roche.com.br/content/dam/rochexx/roche-com-br/roche_brazil_rwd/pt_BR/Imagens/Farmaceutica/%C3%81reas%20terap%C3%AAuticas/melanoma-brasil-teaser.png">

      <q-card-section>
        <div class="text-h4">Our Changing Planet</div>
        <div class="text-subtitle6">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
    <q-card class="my-card">
      <img src="https://www.roche.com.br/content/dam/rochexx/roche-com-br/roche_brazil_rwd/pt_BR/Imagens/Farmaceutica/%C3%81reas%20terap%C3%AAuticas/AMUCC-teaser.png">

      <q-card-section>
        <div class="text-h4">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
    <q-card class="my-card">
      <img src="https://www.engeplus.com.br/cache/noticia/0119/0119084/ong-unidos-contra-cancer-esta-com-nova-logomarca-1089495.jpg">

      <q-card-section>
        <div class="text-h4">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
    <q-card class="my-card">
      <img src="https://www.visaonoticias.com/images/noticias/0802202001445865487.jpg">

      <q-card-section>
        <div class="text-h4">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      lorem: 'O PAF – Plano de Ação Familiar, primeiro projeto realizado pelo Instituto C, tem sua metodologia licenciada pela Associação Saúde Criança e acontece desde 2011 em parceria com hospitais públicos da cidade de São Paulo. Ele tem como principal objetivo atender famílias de crianças e adolescentes que apresentem alguma doença grave ou crônica e que vivam em situação de vulnerabilidade social. A partir de 2019, o projeto inicia uma nova fase, recebendo famílias não só de hospitais parceiros, como também por meio de indicações de outros parceiros, famílias que já passaram pelo ciclo de atendimentos ou mesmo famílias que conheceram o projeto de alguma forma e que se enquadram no perfil de atendimento. A descoberta de um diagnóstico na infância traz mudanças significativas para a dinâmica das famílias, principalmente considerando-se aquelas que vivem em situação de vulnerabilidade social, com dificuldades de acesso a serviços básicos de saúde, educação, saneamento básico, trabalho, moradia etc. No PAF, buscamos proporcionar escuta atenta e atendimento qualificado às famílias em vulnerabilidade social de diferentes regiões da cidade de São Paulo e de outros municípios próximos para que alcancem a autonomia e consigam superar dificuldades. Para que esse trabalho ocorra, é fundamental o contato com todos os serviços, projetos e benefícios que a rede pública e as demais organizações oferecem para a população.'
    }
  }
}
</script>
<style>
.my-card{
  width: 48%;
  max-width: 50%;
}
.cores{
background-color:#A1CFFF;
}

</style>
