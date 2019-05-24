export default {
    path:'/home',
    name:'home',
    component:() => import('@/views/Home/index'),
    children:[
        {
            path: 'goBack',
            component:() => import('@/components/GoBack')
        },
        {
            path:'oneWay',
            component:() => import('@/components/OneWay')
        },
        {
            path:'moreWay',
            component:() => import('@/components/MoreWay')
        },
        {
            path:'/home',
            redirect:'/home/oneWay'
        }
    ]
}