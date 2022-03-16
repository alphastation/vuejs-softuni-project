/* eslint-disable vue/multi-word-component-names */
<template>
  <div>Feed {{ apiUrl }}</div>
</template>
<script>
import {actionTypes} from '@/store/modules/feed';
export default {
  name: 'MdmFeed',
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },
  mounted() {
    console.log('feed is mounted');
    this.$store.dispatch(actionTypes.getFeed, {apiUrl: this.apiUrl});
  },
};
</script>
