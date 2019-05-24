<template>
    <div class="sel-class">
        <mt-popup v-model="popupVisible" position="bottom" class="mt-popup">
            <div class="picker-box">
                <div class="title-box">
                    <div>取消</div>
                    <div>清空筛选</div>
                    <div>确定</div>
                </div>
            </div>
            <div class="tab-box">
                <div class="tabs">
                    <div class="start-time" :class="filterShow==1?'act':''" @click="checkTab(1)">出发时间</div>
                    <div class="end-time" :class="filterShow==2?'act':''" @click="checkTab(2)">到达时间</div>
                    <div class="airline">航空公司</div>
                    <div class="trains-city">中转城市</div>
                    <div class="ari-time">飞行时长</div>
                </div>
                <div class="tabs-cont">
                    <div class="check-list" v-if="filterShow == 1">
                        <mt-checklist align="right"
                                      class="page-part last"
                                      v-model="value1"
                                      :options="startTime">
                        </mt-checklist>
                    </div>
                    <div class="check-list" v-else-if="filterShow == 2">
                        <mt-checklist align="right"
                                      class="page-part last"
                                      v-model="value2"
                                      :options="endTime">
                        </mt-checklist>
                    </div>
                </div>
            </div>
        </mt-popup>
    </div>
</template>

<script>
    export default {
        name: "filterData",
        data() {
            return {
                popupVisible:true,
                value1:[],
                value2:[],
                value3:[],
                value4:[],
                filterShow:1
            };
        },
        created(){
            this.startTime=["不限","00:00-11:59","12:00-17:59","18:00-23:59"];
            this.endTime = [{label:"闲不闲",value:"a"},{label:"01:00-11:59",value:"b"},{label:"12:00-17:59",value:"c"},{label:"18:00-23:59",value:"d"}]
        },
        methods: {
            checkTab(val) {
                this.filterShow = val;
            }
        },
    }
</script>

<style scoped lang="less">
    .mt-popup{
        width: 100%;
    }
    .picker-box{
        width: 100%;
        height: 100%;
    }
    .slot1{width: 100%;}
    .title-box{
        display: flex;
        padding: 0.09rem 16px;
        div{
            flex: 1;
            text-align: center;
            color: #333333;
            &.cancel{text-align: left;color: #999;}
            &.ok{text-align: right;color: #0185F5}
        }
    }
    .tab-box{
        display: flex;
        .tabs{
            flex: 1;
            >div{
                padding: 0.1rem 0.15rem;
                border-right: 1px solid #DBDCDB;
                &.act{
                    border-left: 2px solid #FEDC00;
                    border-bottom: 1px solid #DBDCDB;
                    border-top: 1px solid #DBDCDB;
                    border-right: none;
                }
            }
        }
        .tabs-cont{
            flex: 2;
        }
    }
</style>