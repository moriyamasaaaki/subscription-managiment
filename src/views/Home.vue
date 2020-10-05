<template>
<v-container text-xs-center justify-center>
    <v-layout row wrap>
        <v-flex xs12>
            <h1>サブスク管理とは？</h1>
            <p>サブスク管理では肥大化するサブスクを管理できない、サブスクで合計いくら使っているの分からない、解約しようと思ったら１日過ぎてたなどの悩みを解決するサービスです。</p>
            <p>サブスクをしっかり管理して無駄のない生活をしませんか？？</p>
            <img src="@/assets/image/top.png" alt="">
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

<style lang="scss" scoped>
img {
    width: 100%;
    margin: 0 auto;

    @include tab {
        width: 70%;
    }
}
</style>
