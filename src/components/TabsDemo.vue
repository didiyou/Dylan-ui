
<template>
    <div>
        <Demo :component="Tabs1Demo"/>
    </div>
</template>

<script>
import TabsDemo1 from './TabsDemo1.vue'
import Demo from './Demo.vue'
export default {
    components:{Demo},
    setup() {
        return{
            TabsDemo1
        }
    },
}
</script>
