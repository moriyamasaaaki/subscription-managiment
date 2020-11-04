<template>
<v-app>
    <Header />
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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    mapActions
} from 'vuex';
export default {
    name: 'App',

    components: {
        SideMenu,
        Header,
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
                this.deleteLoginUser().then(() => {
                    this.$router.push({
                        name: 'Home'
                    })
                })
            }
        })
    },

    methods: {
        ...mapActions(['setLoginUser', 'deleteLoginUser', 'fetchSubscriptions'])
    }
};
</script>

<style lang="scss" scoped>
</style>
