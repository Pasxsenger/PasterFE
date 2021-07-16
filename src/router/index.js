import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main'
import SavePermanent from '../views/SavePermanent'
import NotFound from '../views/NotFound'
//import Form from '../views/Form.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes:[
    {
      path: '/',
      component: Main,
      props: true,
      children:[
        {path:'/post/save', name:'SavePermanent', component:SavePermanent, props: true}
      ]
            /* children:[
                {path: '/user/profile/:id', name: 'UserProfile', component: UserProfile, props: true},
                {path: '/user/list', component: UserList}
            ] */
    },
    {
      path:'/:id',
      component: SavePermanent
    },
    {
      path: '/goHome',
      /* 重定向  */
      redirect: '/'
    },
    {
      path: '*',
      component: NotFound
    }
/*         {
          path: '/form',
          component: Form
        } */
  ]
});
