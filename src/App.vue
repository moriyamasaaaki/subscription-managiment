<template>
<v-app>
    <v-app-bar app color="primary" dark>
        <div class="d-flex align-center">
            <h1>サブスク管理</h1>
        </div>
        <v-spacer></v-spacer>
    </v-app-bar>
    <SideMenu />
    <v-content>
        <router-view></router-view>
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
            }
        })
    },

    data: () => ({
        //
    }),
    methods: {
        ...mapActions(['setLoginUser'])
    }
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 40px;
}
</style>
