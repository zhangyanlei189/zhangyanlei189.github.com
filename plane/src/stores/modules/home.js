import axios from 'axios';
export default {
    state: {
        airportCityList:[],

    },
    mutations: {
        setAirportCityList(state,payload){
            state.airportCityList = payload.data;
        }
    },
    actions: {
        //获取机场城市
        getAirportCityList(context){
            console.log(111);
            axios.get("/BaseData/getAirportCode")
                .then((res)=>{
                    console.log('fffff');
                    console.log(context);
                    context.commit('setAirportCityList',{
                        data:res.data.data
                    });
                }).catch((res)=>{
                    console.log(res);
            })
        }
    }
}