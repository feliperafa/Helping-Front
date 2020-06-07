<template>
<q-page>
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
      <q-carousel-slide :name="1" img-src="../../assets/Helping.jpeg" />
      <q-carousel-slide :name="3" img-src="../../assets/help.jpeg" />
    </q-carousel>

  <div class="q-ma-md logo text-center">
        <h4>QUEM SOMOS</h4>
      <div class="L">
        Fundado em 2020, o Instituto Helping é uma organização social sem fins lucrativos, que atua na cidade de Pernambuco, junto a famílias que tenham crianças e adolescentes em situação de vulnerabilidade social, para que construam sua autonomia, tendo consciência sobre seus direitos e deveres, e assim, possam oferecer um ambiente saudável para o pleno desenvolvimento de suas crianças e adolescentes.

O Instituto Helping atua na área da assistência social, seguindo os princípios e diretrizes desta política. Nosso trabalho, complementa a ação desenvolvida por serviços públicos ou filantrópicos em diferentes áreas, como por exemplo a área da saúde (hospitais) e da educação (escolas e CEIs – Centro de Educação Infantil).

Atuamos especificamente na proteção social básica, uma das classificações da Política de Assistência Social que antecede as ações da proteção social especial. Buscamos fortalecer os vínculos familiares e prevenir situações de risco por meio do desenvolvimento das potencialidades de cada uma das famílias.

Todos os projetos desenvolvidos pelo Instituto Helping tem o acolhimento, a escuta qualificada e o trabalho multidisciplinar e em rede como valores fundamentais.

Nossa atuação é dividida em projetos que têm objetivos, público-alvo e atividades diferentes, mas com uma missão única de trabalhar com famílias em risco social para que promovam um ambiente em que crianças e adolescentes possam desenvolver todo seu potencial. Nossos projetos são: PAF - Plano de Ação Familiar, Primeira Infância, Educação em Rede e Atelier C.

Os projetos são executados em nossa sede localizada no bairro de Recife, região central da cidade de Pernambuco, onde atendemos famílias de diferentes bairros da cidade de Pernambuco e de outros munícipios da região metropolitana de Pernambuco.
      </div>
        <h4>NOSSA HISTÓRIA</h4>
      <div class="L">
       Desde 2020, inicialmente com o nome de Saúde Criança Pernambuco, trabalhamos com  a metodologia Plano de Ação Familiar - PAF, licenciada pela Associação Saúde Criança, atuando com famílias que tenham uma criança com alguma doença crônica e vivam em vulnerabilidade social, encaminhadas por hospitais públicos de Pernambuco.

Ao longo dos tempos, trabalhando em parceria com a rede socioassistencial, percebemos que poderíamos ampliar o nosso escopo de atuação. A partir de 2020, por meio de diferentes projetos, passamos a atender não apenas famílias com crianças doentes, mas também famílias que tenham crianças que por algum motivo não tenham seus direitos básicos sendo plenamente atendidos. Como essa ampliação do escopo de atuação mudamos o nome da organização para Instituto Helping SomeBody.

Desde a fundação, já atendemos mais de 670 famílias e impactamos mais de 2.800 pessoas com os nossos projetos.
      </div>
      <div>
        <h4>MISSÃO</h4>
      Estimular famílias com crianças e adolescentes em risco social a alcançar  o pleno exercício de sua autonomia e cidadania.
      </div>
        <h4>VALORES</h4>
       <div class="L">
      <strong>Valorização da infância:</strong> acreditamos que nessa fase o desenvolvimento físico, intelectual e psicossocial da criança e do adolescente é fundamental para se tornarem adultos capazes de conduzir sua vida com autonomia;<br>
      <strong>Importância da família:</strong> consideramos a família um dos principais agentes para garantir os direitos básicos e a construção de vínculos afetivos duradouros para o desenvolvimento pleno da criança e do adolescente;<br>
      <strong>Compartilhamento de conhecimento:</strong> disponibilizamos informação para que famílias possam promover o desenvolvimento de todo o potencial da criança e do adolescente;<br>
      <strong>Transparência e Gestão Responsável:</strong> agimos com clareza e objetividade na condução da instituição, prestamos contas à sociedade, parceiros e doadores sobre a gestão dos recursos captados e resultados das nossas ações;<br>
      <strong>Trabalho voluntário:</strong> valorizamos a participação ativa da sociedade civil no dia a dia da instituição, trazendo novas ideias que nos auxiliem a cumprir a nossa missão.<br>
      </div>
  </div>
  </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      slide: 1
    }
  }
}
</script>
