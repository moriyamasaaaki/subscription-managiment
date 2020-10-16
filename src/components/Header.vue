<template>
<v-app-bar app color="white" flat>
    <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
    <v-toolbar-title class="headline">
        <router-link to="/subscriptions">
            <span>Subscment</span>
        </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn class="header__button" color="primary" v-if="$store.state.login_user" @click="logout">Sign out</v-btn>
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
.header {
    &__button {
        padding: 8px 16px;
    }
}

a {
    text-decoration: none;
    color: black;
}

span {
    display: block;
    color: rgb(82, 82, 82);
    font-weight: 600;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 20px;

    @include pc {
        font-size: 32px;
    }
}
</style>
