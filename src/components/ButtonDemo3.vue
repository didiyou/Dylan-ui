<demo>支持 level</demo>
<template>
    <div>
        <div>
            <Button level="main">主要按钮</Button>
            <Button>普通按钮</Button>
            <Button level="danger">危险按钮</Button>
        </div>
    <div>
        <Button theme="link" level="main">主要链接按钮</Button>
        <Button theme="link">普通按钮链接</Button>
        <Button theme="text" level="danger">危险文本按钮</Button>
    </div>
    </div>
</template>

<script>
import Button from '../lib/Button1.vue'

export default {
    components:{
        Button
    }
}
</script>
