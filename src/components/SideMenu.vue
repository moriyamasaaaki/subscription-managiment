<template>
<v-sheet height="100vh" class="overflow-hidden">
    <v-container class="fill-height">
        <v-row align="center" justify="center">
            <v-btn color="pink" dark @click.stop="drawer = !drawer">
                Toggle
            </v-btn>
        </v-row>
    </v-container>

    <v-navigation-drawer v-model="drawer" absolute temporary class="side-menu">
        <v-list-item>
            <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>

            <v-list-item v-for="item in items" :key="item.title" link>
                <router-link :to="item.link">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </router-link>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</v-sheet>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
            items: [{
                    title: 'Home',
                    icon: 'mdi-home-city',
                    link: '/'
                },
                {
                    title: 'My List',
                    icon: 'mdi-account',
                    link: '/MyList'
                },
                {
                    title: 'Profile',
                    icon: 'mdi-account-group-outline',
                    link: '/'
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
