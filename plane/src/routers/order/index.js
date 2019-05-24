export default {
    path:'/order/:id',
    name:'order',
    component:() => import('@/views/Order'),
    "meta": {
        keepAlive: false
    },
    children:[
        {
            path:'/order',
            redirect:'/order/1'
        }
    ]
}