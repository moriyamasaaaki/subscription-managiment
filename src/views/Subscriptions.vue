<template>
<v-container class="subscriptions" text-xs-center justify-center>
    <v-layout row wrap>
        <v-flex xs12>
            <h1 class="hdg">登録サブスク</h1>
        </v-flex>
        <v-expansion-panels>
            <v-expansion-panel v-for="subscription in subscriptions" :key="subscription.id">
                <v-expansion-panel-header>
                    <div class="subscriptions__header-left">
                        <img :src="'http://www.google.com/s2/favicons?domain=' + subscription.url" width="30" height="30" alt="" />
                        <p>{{ subscription.name }}</p>
                    </div>
                    <div class="subscriptions__header-right">
                        <p>{{ subscription.type.slice(0, 1) }}/¥{{ subscription.fee | addComma}}円</p>
                        <p>支払日:毎月{{ subscription.day }}日</p>
                    </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <p>{{ subscription.memo }}</p>
                    <a :href="subscription.url">
                        <v-btn depressed color="primary">
                            サイトへ
                        </v-btn>
                    </a>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <ul>
            <li class="subscriptions__sum-fee">月額/合計: <span>¥{{ sum | addComma }}</span>円</li>
            <li class="subscriptions__sum-fee">年額/合計: <span>¥{{ year | addComma }}</span>円</li>
        </ul>
        <v-btn class="mx-2 btn" fab dark color="indigo" to="/create/subscription">
            <v-icon dark>
                mdi-plus
            </v-icon>
        </v-btn>
    </v-layout>
</v-container>
</template>

<script>
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
    },
    methods: {
        subscriptionsFee() {
            this.subscriptions.map(subscription => {
                this.fees.push(subscription.fee);
                console.log(this.fees);
            })
        },
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

    ul {
        margin: 32px 0 0 auto;
    }

    li {
        margin-bottom: 8px;
        font-size: 18px;
    }

    &__sum-fee {
        border-bottom: 1px solid rgb(226, 224, 224);
    }

    // &__header {
    //     display: flex;
    //     align-items: center;
    // }
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
