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

    mounted: function () {
        var routeInstance = this.$route;
        this.createTitleDesc(routeInstance);
    },
    watch: {
        '$route'(routeInstance) {
            this.createTitleDesc(routeInstance);
        }
    },

    methods: {
        createTitleDesc: function (routeInstance) {
            // タイトルを設定
            if (routeInstance.meta.title) {
                var setTitle = routeInstance.meta.title + ' | Subscment';
                document.title = setTitle;
            } else {
                document.title = 'title is not set'
            }

            // メタタグdescription設定
            if (routeInstance.meta.desc) {
                var setDesc = routeInstance.meta.desc + ' | Subscment';
                document.querySelector("meta[name='description']").setAttribute('content', setDesc)
            } else {
                document.querySelector("meta[name='description']").setAttribute('content', 'description is not set')
            }
        },
        ...mapActions(['setLoginUser', 'deleteLoginUser', 'fetchSubscriptions'])
    }
};
</script>

<style lang="scss" scoped>
</style>
