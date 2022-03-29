<demo>一键打开 Dialog</demo>
<template>
<div>
    <Button @click="showDialog">打开对话框</Button>
</div>
</template>

<script lang="ts">
import Button from '../lib/Button1.vue'
import {h} from 'vue'
import {openDialog} from '../lib/openDialog'

export default{
    components:{Button},
    setup(){
        const showDialog = ()=>{
            openDialog({
                title:h('strong',null,'标题2'),
                content:'谢谢侬',
                ok(){
                    console.log('ok')
                },
                cancel(){console.log('cancel')}
            })
        }
        return {showDialog}
    }
}
</script>