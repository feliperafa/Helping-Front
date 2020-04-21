
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('../pages/Page/sobreNos') },
      { path: '/cadastro', component: () => import('../pages/Cadastro/Cadastro') },
      { path: '/login', component: () => import('../pages/Login/Login.vue') },
      { path: '/selectcadastro', component: () => import('../pages/Cadastro/SelectCadastro') },
      { path: '/cadastroong', component: () => import('../pages/Cadastro/CadastroOng') },
      { path: '/paceiras', component: () => import('../pages/page/ongsPaceiras') },
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
