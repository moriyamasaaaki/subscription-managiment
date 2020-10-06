<template>
<v-container class="subscriptions" text-xs-center justify-center>
    <v-layout row wrap>
        <v-flex xs12>
            <h1 class="hdg">登録サブスク</h1>
        </v-flex>
        <div class="subscriptions__container">
            <v-expansion-panels class="subscriptions__list">
                <v-expansion-panel v-for="subscription in subscriptions" :key="subscription.id">
                    <v-expansion-panel-header>
                        <div class="subscriptions__header-left">
                            <img v-if="subscription.url" :src="'http://www.google.com/s2/favicons?domain=' + subscription.url" width="30" height="30" alt="" />
                            <img v-else src="http://www.google.com/s2/favicons?domain=https://masa-portfolio.netlify.app/" width="30" height="30" alt="" />
                            <strong>{{ subscription.name }}</strong>
                        </div>
                        <div class="subscriptions__header-right">
                            <p class="subscriptions__header-fee" v-if="subscription.type !== 'お試し期間'">{{ subscription.type.slice(0, 1) }}/¥{{ subscription.fee | addComma}}円</p>
                            <p class="subscriptions__header-fee" v-if="subscription.type === 'お試し期間'">{{ subscription.type }}/¥{{ subscription.fee | addComma}}円</p>
                            <div class="subscriptions__header-payment" v-if="subscription.type === '年額'">
                                <v-icon>mdi-credit-card-outline</v-icon>
                                <p>支払日:{{ subscription.month }}月{{ subscription.day }}日</p>
                            </div>
                            <div class="subscriptions__header-payment" v-else>
                                <v-icon>mdi-credit-card-outline</v-icon>
                                <p>支払日:毎月{{ subscription.day }}日</p>
                            </div>
                        </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <div class="subscriptions__content">
                            <p>{{ subscription.memo }}</p>
                            <p v-if="subscription.memo === ''">特になし</p>
                        </div>
                        <div class="subscriptions__footer">
                            <a :href="subscription.url" v-if="subscription.url">
                                <v-btn depressed color="primary">
                                    サイトへ
                                </v-btn>
                            </a>
                            <div class="subscriptions__footer-buttons">
                                <v-btn class="ma-1" :to="{ name: 'subscription_edit', params: { subscription_id: subscription.id }}" outlined small fab color="indigo">
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                                <v-btn class="ma-1" @click="deleteConfirm(subscription.id)" outlined small fab color="error">
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </div>
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

            <v-card class="subscriptions__sum-fees">
                <v-list-item class="grow">
                    <v-list-item-avatar color="grey darken-3">
                        <v-img class="elevation-6" v-if="photoURL" :src="photoURL" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{ userName }}</v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-card-text class="subscriptions__length" v-if="subscriptions">現在{{ subscriptions.length }}個のサブスクに登録しています。</v-card-text>
                        <v-card-text class="subscriptions__sum-fee">月額/合計: <span>¥{{ sum | addComma }}</span>円</v-card-text>
                        <v-card-text class="subscriptions__sum-fee">年額/合計: <span>¥{{ year | addComma }}</span>円</v-card-text>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        </div>
        <v-btn class="mx-2 btn" fab dark color="indigo" to="/create/subscription">
            <v-icon dark>
                mdi-plus
            </v-icon>
        </v-btn>
    </v-layout>
</v-container>
</template>

<script>
import {
    mapActions
} from 'vuex'
import {
    mapGetters
} from 'vuex'

export default {
    created() {
        this.subscriptions = this.$store.state.subscriptions;
    },
    data() {
        return {
            headers: [{
                    text: 'サブスク名',
                    value: 'name'
                },
                {
                    text: '概要',
                    value: 'description'
                },
                {
                    text: 'メモ',
                    value: 'memo'
                },
                {
                    text: '月',
                    value: 'month',
                },
                {
                    text: '日',
                    value: 'day'
                },
                {
                    text: '種類',
                    value: 'type'
                },
                {
                    text: '料金',
                    value: 'fee'
                },
                // {
                //     text: 'URL',
                //     value: 'url'
                // },
                // {
                //     text: '操作',
                //     sortable: false
                // }
            ],
            subscriptions: [],
            fees: [],
            sumSubscription: ''
        }
    },
    computed: {
        sum: function () {
            this.subscriptionsFee();
            return this.fees.reduce(function (prev, current) {
                return prev + current;
            }, 0)
        },
        year: function () {
            return this.fees.reduce(function (prev, current) {
                return prev + current * 12;
            }, 0)
        },
        ...mapGetters(['userName', 'photoURL'])
    },
    methods: {
        subscriptionsFee() {
            this.subscriptions.map(subscription => {
                this.fees.push(subscription.fee);
                console.log(this.fees);
            })
        },
        deleteConfirm(id) {
            if (confirm('削除してよろしいですか？')) {
                this.deleteSubscription({
                    id
                })
            }
        },
        ...mapActions(['deleteSubscription'])
    },
    filters: {
        addComma: function (val) {
            return val.toLocaleString();
        }
    }
}
</script>

<style lang="scss" scoped>
.subscriptions {
    margin: 16px auto;
    padding: 0 8px;
    max-width: 1200px;

    &__container {
        @include pclarge {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
        }
    }

    &__list {
        @include pclarge {
            width: 70%;
        }
    }

    ul {
        margin: 32px 0 0 auto;
    }

    strong {
        font-size: 16px;
        color: rgb(77, 77, 77);

        @include pc {
            font-size: 18px;
        }
    }

    &__sum-fees {
        @include pclarge {
            width: 25%;
        }
    }

    &__sum-fee {
        border-bottom: 1px solid rgb(226, 224, 224);
        margin-bottom: 8px;
        font-size: 18px;
    }

    &__header-right,
    &__content {
        font-size: 13px;
        color: rgba(0, 0, 0, .6);
    }

    &__header-left {
        width: 40%;
    }

    &__header-right {
        width: 30%;
    }

    &__header-payment {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    &__header-fee {
        margin-bottom: 4px;
    }

    &__content {
        margin: 16px 0;
    }

    &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__length {
        font-size: 13px;
    }

}

a {
    text-decoration: none;
}

img {
    display: block;
    margin-bottom: 8px;
}

.btn {
    position: fixed;
    bottom: 2%;
    right: 2%;
}

span {
    color: orangered;
}
</style>
