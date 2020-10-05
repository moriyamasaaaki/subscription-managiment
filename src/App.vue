<template>
<v-app>
    <v-app-bar app color="primary">
        <v-app-bar-nav-icon @click.stop="toggleSideMenu" v-show="$store.state.login_user"></v-app-bar-nav-icon>
        <v-toolbar-title class="headline text-uppercase">
            <router-link to="/subscriptions">
                <span>サブスク管理</span>
            </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items v-if="$store.state.login_user">
            <v-btn color="secondary" @click="logout">ログアウト</v-btn>
        </v-toolbar-items>
    </v-app-bar>
    <SideMenu />

    <v-content>
        <router-view />
    </v-content>
</v-app>
</template>

<script>
import firebase from 'firebase';
import SideMenu from "@/components/SideMenu";
import {
    mapActions
} from 'vuex';
export default {
    name: 'App',

    components: {
        SideMenu
    },
    created() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setLoginUser(user)
                this.fetchSubscriptions()
                if (this.$router.currentRoute.name === 'home') this.$router.push({
                    name: 'subscriptions'
                })
            } else {
                this.deleteLoginUser()
                this.$router.push({
                    name: 'home'
                })
            }
        })
    },

    data: () => ({
        //
    }),
    methods: {
        ...mapActions(['toggleSideMenu', 'setLoginUser', 'logout', 'deleteLoginUser', 'fetchSubscriptions'])
    }
};
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: black;
}

span {
    display: block;
    color: white;
}
</style>
