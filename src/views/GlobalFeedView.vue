<template>
  <div class="home-page">
    BANNER Global feed is here!!!
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <mdm-feed :api-url="apiUrl"></mdm-feed>
        </div>
        <div class="col-md-3">
          <mdm-popular-tags></mdm-popular-tags>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MdmFeed from '@/components/Feed.vue';
import MdmPopularTags from '@/components/PopularTags.vue';
export default {
  name: 'MdmGlobalFeed',
  components: {
    MdmFeed,
    MdmPopularTags,
  },
  data() {
    return {
      apiUrl: '/articles',
    };
  },
};
</script>
