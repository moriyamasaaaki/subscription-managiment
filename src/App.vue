<template>
<v-app>
    <Header />
    <SideMenu />
    <v-snackbar v-model="snackbar" :timeout="timeout" top right color="success">
        ログアウトしました！！

        <template v-slot:action="{ attrs }">
            <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>

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
                    this.snackbar = true
                    this.$router.push({
                        name: 'Home'
                    })
                })
            }
        })
    },

    data() {
        return {
            snackbar: false,
            timeout: 2000,
        }
    },

    methods: {
        ...mapActions(['setLoginUser', 'deleteLoginUser', 'fetchSubscriptions'])
    }
};
</script>

<style lang="scss" scoped>
</style>
