<template>
<v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
    <v-list class="pa-1">
        <v-list-item avatar>
            <v-list-item-avatar>
                <v-img v-if="photoURL" :src="photoURL" />
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>{{ userName }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>

    <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <router-link v-for="item in items" :key="item.title" :to="item.link">
            <v-list-item>
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </router-link>
    </v-list>
</v-navigation-drawer>
</template>

<script>
import {
    mapGetters
} from 'vuex'

export default {
    data() {
        return {
            items: [{
                    title: 'ホーム',
                    icon: 'mdi-home',
                    link: '/'
                },
                {
                    title: 'サブスク一覧',
                    icon: 'mdi-format-list-bulleted',
                    link: '/subscriptions'
                },
                {
                    title: '利用規約',
                    icon: 'mdi-book-check',
                    link: '/terms'
                },
                {
                    title: 'プライバシーポリシー',
                    icon: 'mdi-fingerprint',
                    link: '/privacy'
                },
                {
                    title: '使い方',
                    icon: 'mdi-application-settings',
                    link: '/usage'
                },
            ]
        }
    },
    computed: {
        ...mapGetters(['userName', 'photoURL'])
    }
}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
}
</style>
