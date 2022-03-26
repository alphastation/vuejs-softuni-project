import articleApi from '@/api/article';

const state = {
    isSubmitting: false,
    validationErrors: null,
    isLoading: false,
    article: null,
};

export const mutationTypes = {
    updateArticleStart: '[editArticle] Update article start',
    updateArticleSuccess: '[editArticle] Update article success',
    updateArticleFailure: '[editArticle] Update article failure',

    getArticleStart: '[editArticle] Get article start',
    getArticleSuccess: '[editArticle] Get article success',
    getArticleFailure: '[editArticle] Get article failure',
};
export const actionTypes = {
    updateArticle: '[editArticle] Update article',
    getArticle: '[editArticle] Get article',
};
const mutations = {
    [mutationTypes.updateArticleStart](state) {
        state.isSubmitting = true;
    },
    [mutationTypes.updateArticleSuccess](state) {
        state.isSubmitting = false;
    },
    [mutationTypes.updateArticleFailure](state, payload) {
        state.isSubmitting = false;
        state.validationErrors = payload;
    },
    [mutationTypes.getArticleStart](state) {
        state.isLoading = true;
    },
    [mutationTypes.getArticleSuccess](state, payload) {
        state.isLoading = false;
        state.article = payload;
    },
    [mutationTypes.getArticleFailure](state) {
        state.isLoading = false;
    },
};
const actions = {
    [actionTypes.updateArticle](context, { articleInput }) {
        return new Promise((resolve) => {
            context.commit(mutationTypes.updateArticleStart);
            articleApi
                .updateArticle(articleInput)
                .then((article) => {
                    context.commit(mutationTypes.updateArticleSuccess, article);
                    // window.localStorage.setItem('accessToken', response.data.user.token)
                    resolve(article);
                })
                .catch(() => {
                    context.commit(mutationTypes.updateArticleFailure);
                });
        });
    },
    [actionTypes.getArticle](context, { slug }) {
        return new Promise((resolve) => {
            context.commit(mutationTypes.getArticleStart);
            articleApi
                .getArticle(slug)
                .then((article) => {
                    context.commit(mutationTypes.getArticleSuccess, article);
                    // window.localStorage.setItem('accessToken', response.data.user.token)
                    resolve(article);
                })
                .catch(() => {
                    context.commit(mutationTypes.getArticleFailure);
                });
        });
    },
};

export default {
    state,
    actions,
    mutations,
};
