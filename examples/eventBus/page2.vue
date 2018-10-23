<template>
    <div>
        <h1>{{title}}</h1>
        <div class="btn" @click="click_btn">点我</div>
        <p>点击状态{{status}}</p>
        <p>{{msg}}</p>
    </div>
</template>

<script>
import bus from "./bus.js"
export default {
    data(){
        return{
            title: 'page2',
            msg: '',
            status: false
        }
    },
    methods:{
        clickChage(){
            this.status = !this.status
            bus.$emit('click_btn', this.status)
        }
    }
    
}
</script>

