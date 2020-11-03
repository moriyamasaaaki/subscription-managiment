<template>
<div class="subscriptions" text-xs-center justify-center>
    <v-layout row wrap>
        <Title :title="'登録サブスク'" />
        <div class="subscriptions__loading" v-show="loading">
            <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
        </div>
        <div class="subscriptions__default" v-if="subscriptions && !loading">
            <svg v-show="subscriptions.length === 0" id="b21613c9-2bf0-4d37-bef0-3b193d34fc5d" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 647.63626 632.17383">
                <path d="M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z" transform="translate(-276.18187 -133.91309)" fill="#f2f2f2" />
                <path d="M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56" />
                <path d="M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z" transform="translate(-276.18187 -133.91309)" fill="#2c79ec" />
                <circle cx="190.15351" cy="24.95465" r="20" fill="#2c79ec" />
                <circle cx="190.15351" cy="24.95465" r="12.66462" fill="#fff" />
                <path d="M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z" transform="translate(-276.18187 -133.91309)" fill="#e6e6e6" />
                <path d="M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56" />
                <path d="M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z" transform="translate(-276.18187 -133.91309)" fill="#2c79ec" />
                <circle cx="433.63626" cy="105.17383" r="20" fill="#2c79ec" />
                <circle cx="433.63626" cy="105.17383" r="12.18187" fill="#fff" />
            </svg>
            <p class="subscriptions__default-text" v-show="subscriptions.length === 0">サブスクが登録されていません。</p>
        </div>

        <div class="subscriptions__sum-fees-mobile text-center" v-show="!loading">
            <v-btn class="sum-btn" color="blue-grey" dark @click="sheet = !sheet">
                合計金額を見る
            </v-btn>
            <v-bottom-sheet class="subscriptions__sum-fees-mobile-sheet" v-model="sheet">
                <v-sheet class="text-center" height="300px">
                    <v-btn class="mt-6" text color="red" @click="sheet = !sheet">
                        閉じる
                    </v-btn>
                    <div class="py-3">
                        <v-list-item class="grow mb-5">
                            <v-list-item-avatar color="grey darken-3">
                                <v-img class="elevation-6" v-if="photoURL" :src="photoURL" />
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>{{ userName }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <p class="subscriptions__length mb-3" v-show="subscriptions.length !== 0">現在<span>{{ subscriptions.length }}</span>個のサブスクに登録しています。</p>
                        <p class=" subscriptions__default-text mb-3" v-show="subscriptions.length === 0">サブスクが登録されていません。</p>
                        <p class="subscriptions__sum-fee">月額/合計: <span>¥{{ sum | addComma }}</span>円</p>
                        <p class="subscriptions__sum-fee">年額/合計: <span>¥{{ year | addComma }}</span>円</p>
                    </div>
                </v-sheet>
            </v-bottom-sheet>
        </div>
        <transition name="subscription-list" tag="div">
            <div class="subscriptions__container" v-show="!loading">
                <v-expansion-panels class="subscriptions__list" flat focusable>
                    <v-expansion-panel v-for="subscription in subscriptions" :key="subscription.id">
                        <v-expansion-panel-header>
                            <div class="subscriptions__header-left">
                                <img v-if="subscription.url" :src="subscription.url + '/favicon.ico'" width="30" height="30" alt="" />
                                <img v-else src="http://www.google.com/s2/favicons?domain=https://masa-portfolio.netlify.app/" width="30" height="30" alt="" />
                                <strong>{{ subscription.name }}</strong>
                            </div>
                            <div class="subscriptions__header-right">
                                <p class="subscriptions__header-fee" v-if="subscription.type !== 'お試し期間'">{{ subscription.type.slice(0, 1) }}/¥{{ subscription.fee | addComma}}円</p>
                                <p class="subscriptions__header-fee" v-if="subscription.type === 'お試し期間'">{{ subscription.type }}/¥{{ subscription.fee | addComma}}円</p>
                                <div class="subscriptions__header-payment" v-if="subscription.type === '年額'">
                                    <v-icon>mdi-credit-card-outline</v-icon>
                                    <p>{{ subscription.month }}月{{ subscription.day }}日支払</p>
                                </div>
                                <div class="subscriptions__header-payment" v-else>
                                    <v-icon>mdi-credit-card-outline</v-icon>
                                    <p>毎月{{ subscription.day }}日支払</p>
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
                                    <v-row justify="center">
                                        <v-btn class="ma-1" :to="{ name: 'subscription_edit', params: { subscription_id: subscription.id }}" outlined small fab color="indigo">
                                            <v-icon>mdi-pencil</v-icon>
                                        </v-btn>

                                        <v-btn class="ma-1" outlined small fab color="error" @click.stop="dialog = true">
                                            <v-icon>mdi-delete</v-icon>
                                        </v-btn>

                                        <v-dialog v-model="dialog" max-width="300">
                                            <v-card>
                                                <v-card-title class="headline">
                                                    {{ subscription.name }}を削除しますか？
                                                </v-card-title>

                                                <v-card-text>
                                                    削除すると元に戻すことはできません。本当に削除しますか？
                                                </v-card-text>

                                                <v-card-actions>
                                                    <v-spacer></v-spacer>

                                                    <v-btn color="blue darken-1" text @click="dialog = false">
                                                        キャンセル
                                                    </v-btn>

                                                    <v-btn color="blue darken-1" text @click="deleteSubscriptionId(subscription.id)">
                                                        削除
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                    </v-row>

                                </div>
                            </div>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>

                <v-card class="subscriptions__sum-fees" v-show="!loading" flat rounded>
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
                            <v-card-text class="subscriptions__length" v-show="subscriptions.length !== 0">現在<span>{{ subscriptions.length }}</span>個のサブスクを登録中です。</v-card-text>
                            <v-card-text class=" subscriptions__default-text" v-show="subscriptions.length === 0">サブスクが登録されていません。</v-card-text>

                            <v-card-text class="subscriptions__sum-fee">月額/合計: <span>¥{{ sum | addComma }}</span>円</v-card-text>
                            <v-card-text class="subscriptions__sum-fee">年額/合計: <span>¥{{ year + yearly | addComma}}</span>円</v-card-text>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </div>
        </transition>
        <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
                <v-btn class="mx-2 btn" fab dark color="indigo" to="/create/subscription" v-bind="attrs" v-on="on">
                    <v-icon dark>
                        mdi-plus
                    </v-icon>
                </v-btn>
            </template>
            <div>サブスクを追加する</div>
        </v-tooltip>
    </v-layout>
</div>
</template>

<script>
import Title from "@/components/Title";
import {
    mapActions
} from 'vuex'
import {
    mapGetters
} from 'vuex'

export default {
    components: {
        Title
    },
    created() {
        setTimeout(() => {
            this.loading = false;
            this.subscriptions = this.$store.state.subscriptions;
        }, 1500)
    },
    data() {
        return {
            dialog: false,
            sheet: false,
            loading: true,
            subscriptions: [],
            sumMonthly: [],
            sumSubscription: '',
            sumYearly: [],
        }
    },
    computed: {
        sum() {
            return this.totalSum();
        },
        year() {
            return this.totalYear();
        },
        yearly() {
            return this.totalSubscriptionTypeYear();
        },
        ...mapGetters(['userName', 'photoURL'])
    },
    methods: {
        subscriptionsMonthly() {
            this.subscriptions.map(subscription => {
                if (subscription.type === '月額') {
                    this.sumMonthly.push(subscription.fee);
                    console.log(this.sumMonthly);
                }
            })
        },
        subscriptionsYearly() {
            this.subscriptions.map(subscription => {
                if (subscription.type === '年額') {
                    this.sumYearly.push(subscription.fee);
                    console.log(this.sumYearly);
                }
            })
        },
        deleteSubscriptionId(id) {
            this.deleteSubscription({
                id
            })
            this.sumMonthly.length = 0;
            this.sumYearly.length = 0;
            this.dialog = false;
        },
        totalSum() {
            this.subscriptionsMonthly();
            return this.sumMonthly.reduce(function (prev, current) {
                return prev + current;
            }, 0)
        },
        totalYear() {
            return this.sumMonthly.reduce(function (prev, current) {
                return prev + current * 12;
            }, 0)
        },
        totalSubscriptionTypeYear() {
            this.subscriptionsYearly();
            return this.sumYearly.reduce(function (prev, current) {
                return prev + current;
            }, 0)
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
.subscription-list-enter-active {
    transition: all 1s ease;
}

.subscription-list-leave-active {
    transition: all .8s;
}

.subscription-list-enter,
.subscription-list-leave-to {
    opacity: 0;
    transform: translateY(15px);
}

.subscriptions {
    margin: 16px auto;
    padding: 0 16px;
    max-width: 1200px;
    position: relative;

    &__container {
        @include pclarge {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
        }
    }

    &__default {
        font-size: 16px;
        font-weight: 600;
        color: rgba(0, 0, 0, .6);
        margin: 40px auto 80px;

        @include pc {
            font-size: 24px;
            position: absolute;
            top: 70%;
            left: 50%;
            transform: translateY(-50%) translateX(-50%);
            -webkit-transform: translateY(-50%) translateX(-50%);
        }
    }

    &__loading {
        margin: 80px auto 0;
    }

    &__list {
        @include pclarge {
            width: 70%;
        }
    }

    svg {
        display: block;
        text-align: center;
        margin: 0 auto 32px;
    }

    ;

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
        display: none;

        @include pc {
            background-color: #f1f5f9;
            display: block;
            width: 25%;
        }
    }

    &__sum-fees-mobile {
        margin: 0 0 16px auto;

        @include pc {
            display: none;
            margin: 0;
        }
    }

    &__sum-fees-mobile-sheet {
        z-index: 999;
    }

    &__sum-fee {
        border-bottom: 1px solid rgb(226, 224, 224);
        margin-bottom: 16px;
        font-size: 18px;
    }

    &__sum-fees-userName {
        text-align: left;
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

        @include pc {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
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
        font-size: 14px;
    }

}

img {
    display: block;
    margin-bottom: 8px;
}

.btn {
    position: fixed;
    z-index: 998;
    bottom: 3%;
    right: 2%;
}

span {
    color: orangered;
    font-weight: 600;
}

.v-list-item .v-list-item__title {
    text-align: left;
}
</style>
