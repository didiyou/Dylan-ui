<template>
<div class="dylan-tabs">
  <div class="dylan-tabs-nav" ref="container">
    <div
      class="dylan-tabs-nav-item"
      v-for="(t, index) in titles"
      :class="{ selected: t === selected }"
      @click="select(t)"
      :ref="el=>{if (t === selected) selectedItems = el}"
      :key="index">
      {{ t }}
    </div>
    <div class="dylan-tabs-nav-indicator" ref="indicator"></div>
  </div>
  <div class="dylan-tabs-content">
      <component :is="current" :key="current"/>
  </div>
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
import {watchEffect, ref, computed, onMounted} from "vue";
export default {
  props: {
    selected: {
      type: String
    },
  },
  setup(props, context) {
    const selectedItems = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    onMounted(()=>{
      watchEffect(()=>{
      const {width} = selectedItems.value.getBoundingClientRect()
      indicator.value.style.width = width + 'px'
      const {left:left1} = container.value.getBoundingClientRect()
      const {left:left2} = selectedItems.value.getBoundingClientRect()
      const left = left2 - left1
      indicator.value.style.left = left + 'px'
    })
    })
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
    const current = computed(()=>{
      console.log(defaults)
      return defaults.find(tag=>{tag.props.title === props.selected})
    })
    
    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    return { defaults, titles,  select , current, selectedItems, indicator, container};
  },
};
</script>
<style lang="scss">
$blue:#40a9ff;
$color:#333;
$border-color:#d9d9d9;
.dylan-tabs{
  &-nav{
    display:flex;
    color:$color;
    border-bottom:1px solid $border-color;
    position:relative;
    &-item{
      padding:8px 0;
      margin:0 16px;
      cursor:pointer;
      &:first-child{margin-left:0;}
      &.selected{
        color:$blue;
      }
    }
    &-indicator{
      position:absolute;
      height:3px;
      background:$blue;
      left:0;
      bottom:-1px;
      width:100px;
      transition:all 250ms;
    }
  }
  &-content{
    padding:8px 0;
  }
}
</style>
