//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';
import About from '../pages/About';
import Home from '../pages/Home';

import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';

//创建并默认暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'regard',
            path: '/about',
            component: About,
            meta: { isAuth: false, title: '关于'},
        },
        {
            name: 'Zhuye',
            path: '/home',
            component: Home,
            meta: { isAuth: false , title: '主页'},
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true , title: '新闻'},
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true , title: '消息'},
                    children: [
                        {
                            name: 'specifics',
                            path: 'detail',
                            component: Detail,
                            props({query: {id, title}}) {
                                return { id, title };
                            }
                        },
                    ],
                },
            ]
        },
    ]
});

//全局前置路由守卫
//初始化和在每一次路由切换之前被调用
router.beforeEach((to, from, next) => {
    // console.log('beforeEach', to, from, next);
    const {isAuth} = to.meta;
    // localStorage.setItem('shcool', "beida");
    // console.log(localStorage.getItem('shcool'));
    if (isAuth) {
        if (localStorage.getItem('shcool') === 'beida') {
            next();
        } else {
            alert('Shcool is not available')
        }
    } else {
        next();
    }
})

//全局后置路由守卫
//初始化和在每一次路由切换之后被调用
router.afterEach((to, from) => {
    console.log('afterEach', to, from);
    //点击每一个路由都切换标签document.title
    const {title} = to.meta;
    document.title = title || 'Vue基础';
})
export default router;