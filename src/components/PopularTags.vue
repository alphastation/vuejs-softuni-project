<template>
  <div>
    <!-- <div v-if="isLoading">Loading...</div> -->
    <mdm-loading v-if="isLoading" />
    <!-- <div v-if="error">Something is broken</div> -->
    <mdm-error-message v-if="error"></mdm-error-message>
    <div class="sidebar" v-if="popularTags">
      <p>Popular Tags</p>
      <div class="tag-list">
        <router-link
          v-for="popTag in popularTags"
          :key="popTag"
          :to="{name: 'tag', params: {slug: popTag}}"
          class="tag-default tag-pill"
        >
          {{ popTag }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {actionTypes} from '@/store/modules/popularTags';
import MdmLoading from '@/components/Loading';
import MdmErrorMessage from '@/components/ErrorMessage';
export default {
  name: 'MdmPopularTags',
  components: {
    MdmLoading,
    MdmErrorMessage,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.popularTags.isLoading,
      popularTags: (state) => state.popularTags.data,
      error: (state) => state.popularTags.error,
    }),
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags);
  },
};
</script>
