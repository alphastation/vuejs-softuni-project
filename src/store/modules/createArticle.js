import articleApi from '@/api/article'

const state = {
    isSubmitting: false,
    validationErrors: null
};

export const mutationTypes = {

    createArticleStart: '[createArticle] Create article start',
    createArticleSuccess: '[createArticle] Create article success',
    createArticleFailure: '[createArticle] Create article failure',


}
export const actionTypes = {
    createArticle: '[createArticle] Create article'

}
const mutations = {
    [mutationTypes.createArticleStart](state) {
        state.isSubmitting = true;

    },
    [mutationTypes.createArticleSuccess](state) {
        state.isSubmitting = false;
    },
    [mutationTypes.createArticleFailure](state, payload) {

        state.isSubmitting = false;
        state.validationErrors = payload
    }

}
const actions = {


    [actionTypes.createArticle](context, { articleInput }) {
        return new Promise((resolve) => {
            context.commit(mutationTypes.createArticleStart);
            articleApi
                .createArticle(articleInput)
                .then((article) => {
                    context.commit(mutationTypes.createArticleSuccess, article);
                    // window.localStorage.setItem('accessToken', response.data.user.token)
                    resolve(article);
                })
                .catch(() => {
                    context.commit(mutationTypes.createArticleFailure);
                });
        });
    }


}

export default {

    state,
    actions,
    mutations
}

