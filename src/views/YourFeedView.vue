<template>
  <div class="home-page" v-if="isLoggedIn">
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
import {mapGetters} from 'vuex';
import {getterTypes} from '@/store/modules/auth';

export default {
  name: 'MdmYourFeed',
  components: {
    MdmFeed,
    MdmPopularTags,
    MdmBanner,
    MdmFeedToggler,
  },
  computed: {
    ...mapGetters({
      isLoggedIn: getterTypes.isLoggedIn,
    }),
  },
  data() {
    return {
      apiUrl: '/articles/feed',
    };
  },
};
</script>
