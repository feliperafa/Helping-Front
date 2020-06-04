
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Pagina Inicial
      { path: '/', component: () => import('../pages/Page/sobreNos') },
      // Pagina de Login
      { path: '/login', component: () => import('../pages/Login/Login.vue') },
      // Pagina para Selecionar qual cadastro Criar Doador / Ong
      { path: '/selectcadastro', component: () => import('../pages/Cadastro/SelectCadastro') },
      // Pagina de Cadastro da Ong
      { path: '/cadastroong', component: () => import('../pages/Cadastro/CadastroOng') },
      // Pagina de Empresas Parceiras
      { path: '/paceiras', component: () => import('../pages/page/empresasPaceiras') },
      // Pagina Para Atualizar Cadastro
      { path: '/atualizarcadastro', component: () => import('../pages/Dashboard/atualizaCadastro') },
      // Pagina de DashBoard Para o Administrador
      { path: '/dashboard', component: () => import('../pages/Dashboard/dashboard') },
      // Pagina de Cadastro de Voluntario
      { path: '/cadastrovoluntario', component: () => import('../pages/Cadastro/CadastroVoluntario') },
      // Pagina de Comp Participar para Doação ou como ser um Parceiro Helping
      { path: '/comoparticipar', component: () => import('../pages/Page/comoParticipar') },
      // Pagina de Doação
      { path: '/doacao', component: () => import('../pages/Page/doacao') },
      // Pagina das Ongs Cadastradas no Sistema
      { path: '/projetos', component: () => import('../pages/Page/projetos') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
