<template>
<v-app>
    <v-app-bar app color="primary">
        <v-app-bar-nav-icon @click.stop="toggleSideMenu" v-show="$store.state.login_user"></v-app-bar-nav-icon>
        <v-toolbar-title class="headline">
            <router-link to="/subscriptions">
                <span>Subscment</span>
            </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="pa-5" v-if="$store.state.login_user" @click="logout">Sign out</v-btn>
    </v-app-bar>
    <SideMenu />

    <v-content>
        <router-view />
    </v-content>
    <Footer />
</v-app>
</template>

<script>
import firebase from 'firebase';
import SideMenu from "@/components/SideMenu";
import Footer from "@/components/Footer";
import {
    mapActions
} from 'vuex';
export default {
    name: 'App',

    components: {
        SideMenu,
        Footer
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
                    name: 'Home'
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
    font-size: 24px;
}
</style>
