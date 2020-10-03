import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login_user: null,
    drawer: false,
    subscriptions: [],
  },
  mutations: {
    setLoginUser(state, user) {
      state.login_user = user;
    },
    deleteLoginUser(state) {
      state.login_user = null;
    },
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
    addSubscription(state, { id, subscription }) {
      subscription.id = id;
      state.subscriptions.push(subscription);
    },
    updateSubscription(state, { id, subscription }) {
      const index = state.subscriptions.findIndex(
        (subscription) => subscription.id === id
      );

      state.subscriptions[index] = subscription;
    },
  },
  actions: {
    setLoginUser({ commit }, user) {
      commit("setLoginUser", user);
    },
    fetchSubscriptions({ getters, commit }) {
      firebase
        .firestore()
        .collection(`users/${getters.uid}/subscriptions`)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) =>
            commit("addSubscription", { id: doc.id, subscription: doc.data() })
          );
        });
    },
    login() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);
    },
    logout() {
      firebase.auth().signOut();
    },
    deleteLoginUser({ commit }) {
      commit("deleteLoginUser");
    },
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu");
    },
    addSubscription({ getters, commit }, subscription) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/subscriptions`)
          .add(subscription)
          .then((doc) => {
            commit("addSubscription", { id: doc.id, subscription });
          });
      }
    },
    updateSubscription({ getters, commit }, { id, subscription }) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/subscriptions`)
          .doc(id)
          .update(subscription)
          .then(() => {
            commit("updateSubscription", { id, subscription });
          });
      }
    },
  },
  getters: {
    userName: (state) => (state.login_user ? state.login_user.displayName : ""),
    photoURL: (state) => (state.login_user ? state.login_user.photoURL : ""),
    uid: (state) => (state.login_user ? state.login_user.uid : null),
    getSubscriptionById: (state) => (id) =>
      state.subscriptions.find((subscription) => subscription.id === id),
  },
});

