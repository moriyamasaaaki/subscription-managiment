<template>
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
</template>

<script>
import {
    mapActions
} from 'vuex';

export default {
    methods: {
        ...mapActions(['toggleSideMenu', 'logout'])
    }

}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: black;
}

span {
    display: block;
    color: white;
    font-size: 20px;

    @include pc {
        font-size: 24px;
    }
}
</style>
