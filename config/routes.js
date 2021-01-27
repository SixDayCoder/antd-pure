export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/',
        routes: [
          {
            path: '/',
            component : '../layouts/BasicLayout',
            routes: [

              {
                path: '/',
                redirect: '/home',
              },

              {
                path: '/home',
                name: '首页',
                icon: 'smile',
                component: '@/pages/HomePage',
              },
              
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },

  {
    component: './404',
  },

];
