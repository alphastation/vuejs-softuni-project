<template>
  <div class="home-page">
    BANNER Global feed is here!!!
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <mdm-feed :api-url="apiUrl"></mdm-feed>
        </div>
        <div class="col-md-3">popular tags</div>
      </div>
    </div>
  </div>
</template>

<script>
import MdmFeed from '@/components/Feed.vue';
export default {
  name: 'MdmGlobalFeed',
  components: {
    MdmFeed,
  },
  data() {
    return {
      apiUrl: '/articles',
    };
  },
};
</script>
