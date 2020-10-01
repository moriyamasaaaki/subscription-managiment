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

        <v-list-item v-for="item in items" :key="item.title" :to='item.link'>
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
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
                    icon: 'home',
                    link: {
                        name: '/'
                    }
                },
                {
                    title: '連絡先一覧',
                    icon: 'list',
                    link: {
                        name: 'About'
                    }
                }
            ]
        }
    },
    computed: {
        ...mapGetters(['userName', 'photoURL'])
    }
}
</script>
