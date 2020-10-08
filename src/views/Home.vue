<template>
<v-container class="home" text-xs-center justify-center>
    <v-layout row wrap>
        <h1>サブスク管理とは？</h1>

        <v-flex xs12>
            <div class="home__top">
                <img src="@/assets/image/main.png" alt="">
                <div class="home__top-login-button">
                    <h2 class="home__top-login-title">サブスク管理を始める</h2>
                    <p class="home__top-login-subTitle">サブスク管理は「余計な課金」や「解約漏れ」防ぐためのサブスク管理サービスです。</p>
                    <v-btn class="pa-6" color='white' @click="login">
                        <img class="home__top-login-google-icon" src="@/assets/image/google_icon.png" alt="">
                        Sign in with Google
                    </v-btn>
                </div>
            </div>
        </v-flex>
        <h3>サブスク管理大変...</h3>

        <v-row>
            <v-col cols=12 md=6 lg=4>
                <v-card class="card ma-2" color="rgb(2, 62, 112)" dark>
                    <v-img height="300px" src="@/assets/image/subsc-img1.png" />
                    <div class="card__body">

                        <v-card-title class="card__body-title headline">
                            1,サブスク管理ができない
                        </v-card-title>
                        <v-card-subtitle>サブスク管理を使えば何を使っているかが一覧表で見れるのでサブスクの管理がすごく楽になります。</v-card-subtitle>
                    </div>
                </v-card>
            </v-col>
            <v-col cols=12 md=6 lg=4>
                <v-card class="card ma-2" color="rgb(2, 62, 112)" dark>
                    <v-img height="300px" src="@/assets/image/subsc-img2.png" />

                    <div class="card__body">

                        <v-card-title class="card__body-title headline">
                            2,いくら使っているのか分からない
                        </v-card-title>
                        <v-card-subtitle>こういった悩みもサブスク管理を使用すればサブスク１つ１つの金額を把握でき、尚且つ月間・年間でサブスクにいくらかかっているのかなども算出することができます。</v-card-subtitle>
                    </div>
                </v-card>
            </v-col>
            <v-col cols=12 md=6 lg=4>
                <v-card class="card ma-2" color="rgb(2, 62, 112)" dark>
                    <v-img height="300px" src="@/assets/image/subsc-img3.png" />

                    <div class="card__body">
                        <v-card-title class="card__body-title headline">
                            3,解約したいのに支払日が過ぎてしまった。
                        </v-card-title>
                        <v-card-subtitle>サブスクでよくあるのが今月までで解約したかったのに支払日が１日過ぎてしまっていて次月のサブスク課金が始まってしまった。このような悩みもサブスク管理はプッシュ通知でお知らせできるので解約漏れを防ぐことができます。</v-card-subtitle>
                    </div>
                </v-card>
            </v-col>
        </v-row>
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
.home {
    &__top {
        @include pc {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-bottom: 160px;
        }
    }

    &__top-login-button {
        text-align: left;

        @include pc {
            width: 40%;
        }
    }

    &__top-login-title {
        font-size: 18px;
        margin-bottom: 8px;

        @include pc {
            font-size: 32px;
            margin-bottom: 24px;
        }
    }

    &__top-login-subTitle {
        font-size: 13px;
        margin-bottom: 8px;

        @include pc {
            font-size: 16px;
            margin-bottom: 24px;
        }

    }

    &__top-login-google-icon {
        width: 20px;
        height: 20px;
        margin-right: 8px;
    }
}

img {
    width: 100%;
    margin: 0 auto;

    @include pc {
        width: 50%;
    }
}

.card {
    &__body {
        min-height: 250px;
    }

    &__body-title {
        margin-bottom: 16px;
    }

}

h1 {
    position: relative;
    margin: 64px 0 24px;
    padding: 1.5rem 2rem;
    border-radius: 10px;
    background: #2c79ec;
    color: #fff;
}

h3 {
    position: relative;
    margin-bottom: 2em;
    padding: 1.5rem 2rem;
    border-radius: 10px;
    background: #2c79ec;
    color: #fff;
    margin: 0 0 0 auto;
}

h1,
h3 {
    font-size: 18px;
    margin-bottom: 24px;

    @include pc {
        font-size: 20px;
        margin-bottom: 40px;
    }
}

h1:before,
h1:after,
h3:before,
h3:after {
    position: absolute;
    content: '';
    border-radius: 50%;
    background: #2c79ec;
}

h1:before {
    right: 30px;
    bottom: -15px;
    width: 30px;
    height: 30px;
}

h3:before {
    left: 30px;
    bottom: -15px;
    width: 30px;
    height: 30px;
}

h1:after {
    right: 20px;
    bottom: -30px;
    width: 15px;
    height: 15px;
}

h3:after {
    left: 20px;
    bottom: -30px;
    width: 15px;
    height: 15px;
}
</style>
