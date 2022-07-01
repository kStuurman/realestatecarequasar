
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/ToegewezenRapportages',
    component: () => import('pages/ToegewezenRapportages.vue')
  },
  {
    path: '/UitgevoerdeRapportages',
    component: () => import('pages/UitgevoerdeRapportages.vue')
  },
  {
    path: '/DocumentatiePage',
    component: () => import('src/pages/DocumentatiePage.vue')
  },
  {
    path: '/InstellingenPage',
    component: () => import('src/pages/InstellingenPage.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
