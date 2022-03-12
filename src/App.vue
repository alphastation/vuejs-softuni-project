<template>
  <div>
    Hello Medium project!!!!!!
    <mdm-nav-bar />
    <router-view />
  </div>
</template>
<script>
import MdmNavBar from '@/components/NavBar.vue';
import {actionTypes} from '@/store/modules/auth';
export default {
  name: 'MdmApp',
  components: {
    MdmNavBar,
  },
  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser);
  },
};
</script>
<style></style>
