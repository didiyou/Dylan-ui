<template>
    <h1>Dialog 示例</h1>
    <Demo :component="Dialog1Demo"/>
    <Demo :component="Dialog2Demo"/>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Dialog1Demo from './DialogDemo1.vue'
import Dialog2Demo from './DialogDemo2.vue'
export default{
    components:{Demo},
    setup(){
        return{
            Dialog1Demo,Dialog2Demo
        }
    }
}
</script>