<template>
    <div>
        <h1>Button 示例</h1>
        <Demo :component="Button1Demo"/>
        <Demo :component="Button2Demo"/>
        <Demo :component="Button3Demo"/>
    </div>
</template>

<script lang="ts">
import Button1Demo from "./ButtonDemo1.vue"
import Button2Demo from "./ButtonDemo2.vue"
import Button3Demo from "./ButtonDemo3.vue"
import Demo from "./Demo.vue"
export default{
    components:{Demo},
    setup(){
        return{
            Button1Demo,
            Button2Demo,
            Button3Demo
        }
    }
}
</script>