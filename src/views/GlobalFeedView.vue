<template>
  <div class="home-page">
    <mdm-banner></mdm-banner>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <mdm-feed-toggler></mdm-feed-toggler>
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
import MdmBanner from '@/components/Banner.vue';
import MdmFeedToggler from '@/components/FeedToggler.vue';
export default {
  name: 'MdmGlobalFeed',
  components: {
    MdmFeed,
    MdmPopularTags,
    MdmBanner,
    MdmFeedToggler,
  },
  data() {
    return {
      apiUrl: '/articles',
    };
  },
};
</script>
