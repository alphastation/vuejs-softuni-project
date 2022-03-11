<template>
  <div>
    Hello Medium project!!!!!!
    <mdm-nav-bar />
    <router-view />
  </div>
</template>
<script>
import MdmNavBar from '@/components/NavBar.vue';

export default {
  name: 'MdmApp',
  components: {
    MdmNavBar,
  },
};
</script>
<style></style>
