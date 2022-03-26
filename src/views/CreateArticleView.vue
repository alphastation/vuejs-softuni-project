<template>
  <div>
    Create article

    <mdm-article-form
      :initialValues="initialValues"
      :errors="validationErrors"
      :isSubmitting="isSubmitting"
      @articleSubmit="onSubmit"
    ></mdm-article-form>
  </div>
</template>

<script>
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
      validationErrors: null,
      isSubmitting: false,
    };
  },
  methods: {
    onSubmit(data) {
      console.log('onSubmit', data);
    },
  },
};
</script>
