<template>
<v-app>
    <v-app-bar app color="primary" dark>
        <v-toolbar-title>サブスク管理</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn text @click="logout">ログアウト</v-btn>
        </v-toolbar-items>
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

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 40px;
}
</style>
