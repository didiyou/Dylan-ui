<template>
  <div class="topnav">
    <router-link to="/" class="logo" @click="toggleMenu">
      <svg class="icon">
        <use xlink:href="#icon-pingpang"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
          <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
        <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props:{
      toggleMenuButtonVisible:{
          type:Boolean,
          default:false
      }
  },
  setup(props) {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
$color: #0b958e;
.topnav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  color: $color;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    >svg{
        width:32px;
        height:32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    > .li {
      margin: 0 auto;
    }
  }

  > .toggleAside {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    background: fade-out(black, 0.9);
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>