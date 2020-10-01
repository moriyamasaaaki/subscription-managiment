<template>
<div class="home">
    <v-container text-center justify-center>
        <v-layout row wrap>
            <v-flex xs>
                <h1>ログイン</h1>
                <p>サブスク管理をご利用の方は、Googleアカウントでログインしてください。</p>
            </v-flex>

            <v-flex xs12 mt-5>
                <v-btn color='info' @click="login">Googleアカウントでログイン</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex'
export default {
    name: 'Home',
    components: {},
    methods: {
        ...mapActions(['login'])
    }
}
</script>
