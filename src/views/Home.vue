<template>
<v-container text-xs-center justify-center>
    <v-layout row wrap>
        <v-flex xs12>
            <h1>サブスク管理</h1>
            <p>サブスク管理をご利用の方は、Googleアカウントでログインしてください。</p>
        </v-flex>

        <v-flex xs12 mt-5>
            <v-btn color='info' @click="login">Googleアカウントでログイン</v-btn>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import {
    mapActions
} from 'vuex'
export default {
    methods: {
        ...mapActions(['login'])
    }
}
</script>
