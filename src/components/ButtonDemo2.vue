<demo>字体大小可调</demo>
<template>
<div>
<div>
    <Button size="big">大大卷</Button>
    <Button>正常</Button>
    <Button size="small">小小酥</Button>
</div>
<div>
    <Button theme="link" size="big">大大卷</Button>
    <Button theme="link">正常</Button>
    <Button size="small" theme="link">小小酥</Button>
</div>
<div>
    <Button size="big" theme="text">大大卷</Button>
    <Button theme="text">正常</Button>
    <Button size="small" theme="text">小小酥</Button>
</div>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button1.vue"
export default{
    components:{
        Button
    }
}
</script>