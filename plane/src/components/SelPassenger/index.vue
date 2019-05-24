<template>
    <div class="sel-class">
        <mt-popup v-model="popupVisible" position="bottom" class="mt-popup">
            <div class="picker-box">
                <mt-picker :slots="slots" @change="onValuesChange" :showToolbar="true" valueKey="name">
                    <div class="title-box clearfix">
                        <div class="cancel">取消</div>
                        <div class="tit">乘客选择</div>
                        <div class="ok">确定</div>
                    </div>
                    <div class="clearfix passer-type">
                        <div class="fl">成人</div>
                        <div class="fr">儿童(2-12岁)</div>
                    </div>
                </mt-picker>

            </div>
        </mt-popup>
    </div>
</template>

<script>
    export default {
        name: "selPassenger",
        data() {
            return {
                popupVisible:true,
                slots: [
                    {
                        flex: 1,
                        values: [1,2,3,4],
                        className: 'slot1',
                        textAlign: 'center'
                    },{
                        flex: 1,
                        values: [0,1,2,3],
                        className: 'slot2',
                        textAlign: 'center'
                    }
                ]
            };
        },
        methods: {
            onValuesChange(picker, values) {
                //values为选中的值
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
    .passer-type{
        padding: 0.1rem 16px;
        background: #F2F3F7;
        div{
            color: #333;
            width: 50%;
            height: 0.24rem;
            text-align: center;
        }
    }
</style>