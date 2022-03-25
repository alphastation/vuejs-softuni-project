<template>
  <div>
    <!-- <div v-if="isLoading">Loading...</div> -->
    <mdm-loading v-if="isLoading" />
    <!-- <div v-if="error">Something unwanted had happened</div> -->
    <mdm-error-message v-if="error"></mdm-error-message>
    <div v-if="feed">
      <div
        class="article-preview"
        v-for="(article, index) in feed.articles"
        :key="index"
      >
        <div class="article-meta">
          <router-link
            :to="{name: 'userProfile', params: {slug: article.author.username}}"
          >
            <img :src="article.author.image" />
          </router-link>
          <div class="info">
            <router-link
              :to="{
                name: 'userProfile',
                params: {slug: article.author.username},
              }"
            >
              {{ article.author.username }}
            </router-link>
            <span class="date">{{ article.createdAt }}</span>
            <div class="pull-xs-right">ADD TO FAVORITES</div>
          </div>
        </div>
        <router-link
          :to="{name: 'article', params: {slug: article.slug}}"
          class="preview-link"
        >
          <h1>{{ article.title }}</h1>
          <p>{{ article.description }}</p>
          <span>Read more...</span>
          <mdm-tag-list :tags="article.tagList"></mdm-tag-list>
        </router-link>
      </div>

      <mdm-pagination
        :total="feed.articlesCount"
        :limit="limit"
        :url="baseUrl"
        :current-page="currentPage"
      ></mdm-pagination>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex';
import {stringify, parseUrl} from 'query-string';

import {actionTypes} from '@/store/modules/feed';
import MdmPagination from '@/components/Pagination';
import {limit} from '@/helpers/projectVariables';

import MdmLoading from '@/components/Loading';
import MdmErrorMessage from '@/components/ErrorMessage';
import MdmTagList from '@/components/TagList';

export default {
  name: 'MdmFeed',
  components: {
    MdmPagination,
    MdmLoading,
    MdmErrorMessage,
    MdmTagList,
  },
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },
  // data() {
  //   return {
  //     total: 500,
  //     limit,
  //     currentPage: 10,
  //     url: '/tags/dragons',
  //   };
  // },

  computed: {
    ...mapState({
      isLoading: (state) => state.feed.isLoading,
      feed: (state) => state.feed.data,
      error: (state) => state.feed.error,
    }),
    limit() {
      return limit;
    },
    baseUrl() {
      // console.log('baseUrl:', this.$route);
      return this.$route.path;
    },
    currentPage() {
      return Number(this.$route.query.page || '1');
    },
    offset() {
      return this.currentPage * limit - limit;
    },
  },
  watch: {
    currentPage() {
      // console.log('Current page just changed!!!');
      this.fetchFeed();
    },
  },
  mounted() {
    // console.log('feed is mounted');
    this.fetchFeed();
    // this.$store.dispatch(actionTypes.getFeed, {apiUrl: this.apiUrl});
  },
  methods: {
    fetchFeed() {
      const parsedUrl = parseUrl(this.apiUrl);
      // console.log('thisparsedUrl:', parsedUrl);
      const stringifiedParams = stringify({
        limit,
        offset: this.offset,
        ...parsedUrl.query,
      });
      const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
      console.log(apiUrlWithParams);
      this.$store.dispatch(actionTypes.getFeed, {
        apiUrl: apiUrlWithParams,
      });
    },
  },
};
</script>
