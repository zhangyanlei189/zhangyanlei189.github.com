<template>
    <div class="sel-class">
        <mt-popup v-model="popupVisible" position="bottom" class="mt-popup">
            <div class="picker-box">
                <mt-picker :slots="slots" @change="onValuesChange" :showToolbar="true" valueKey="name">
                    <div class="title-box clearfix">
                        <div class="cancel">取消</div>
                        <div class="tit">请选择舱等</div>
                        <div class="ok">确定</div>
                    </div>
                </mt-picker>

            </div>
        </mt-popup>
    </div>
</template>

<script>
    export default {
        name: "selClass",
        data() {
            return {
                popupVisible:true,
                slots: [
                    {
                        flex: 1,
                        values: [{name:'舱位不限',value:0},{name:'经济舱',value:1},{name:'经济舱',value:2},{name:'经济舱',value:1}],
                        className: 'slot1',
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
</style>