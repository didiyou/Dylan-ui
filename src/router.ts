import {createWebHashHistory,createRouter} from 'vue-router'
import DocDemo from './components/SwitchDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import {h} from 'vue'
const history = createWebHashHistory()
const md = filename => h("Markdown",{path:`./markdown/${filename}.md`,key:filename})
export const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,children:[
            {path:'',component:DocDemo},
            {path:'intro',component:md('intro')},
            {path:'get-started',component:md('getstart')},
            {path:'Install',component:md('Install')},
            {path:'switch',component:SwitchDemo},
            {path:'button',component:ButtonDemo},
            {path:'dialog',component:DialogDemo},
            {path:'tabs',component:TabsDemo}
        ]}
    ]})
    