<template>
  <div>
    <mdm-article-form
      :initialValues="initialValues"
      :errors="validationErrors"
      :isSubmitting="isSubmitting"
      @articleSubmit="onSubmit"
    ></mdm-article-form>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {actionTypes} from '@/store/modules/createArticle';
import MdmArticleForm from '@/components/ArticleForm.vue';
export default {
  name: 'MdmCreateArticle',
  components: {
    MdmArticleForm,
  },
  data() {
    return {
      initialValues: {
        title: '',
        description: '',
        body: '',
        tagList: [],
      },
      //   validationErrors: null,
      //   isSubmitting: false,
    };
  },
  computed: {
    ...mapState({
      isSubmitting: (state) => state.createArticle.isSubmitting,
      validationErrors: (state) => state.createArticle.validationErrors,
    }),
  },
  methods: {
    onSubmit(articleInput) {
      //   console.log('onSubmit', data);
      this.$store
        .dispatch(actionTypes.createArticle, {articleInput})
        .then((article) => {
          this.$router.push({name: 'article', params: {slug: article.slug}});
        });
    },
  },
};
</script>
