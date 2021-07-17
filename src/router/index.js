import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main'
import Comment from '../views/Comment'
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
        {path:'/post/save', name:'SavePermanent', component:SavePermanent, props: true},
        {path:'/comment', name:'Comment', component:Comment, props:true}
      ]
    },
    {
      path:'/:id',
      component: SavePermanent
    },
    {
      path:'/comment',
      component:Comment,
      props:true
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
