<template>
<v-app>
    <v-app-bar app>
        <v-app-bar-nav-icon @click.stop="toggleSideMenu" v-show="$store.state.login_user"></v-app-bar-nav-icon>
        <v-toolbar-title class="headline text-uppercase">
            <span>サブスク管理</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items v-if="$store.state.login_user">
            <v-btn @click="logout">ログアウト</v-btn>
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
            } else {
                this.deleteLoginUser()
            }
        })
    },

    data: () => ({
        //
    }),
    methods: {
        ...mapActions(['toggleSideMenu', 'setLoginUser', 'logout', 'deleteLoginUser'])
    }
};
</script>
