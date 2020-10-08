<template>
<v-container text-xs-center>
    <v-layout row wrap justify-center>
        <Title :title="'サブスク作成'" />

        <v-flex xs12 mt-5>
            <v-card>
                <v-card-text>
                    <v-form ref="form">
                        <v-text-field type="text" v-model="subscription.name" :rules="nameRules" :counter="20" required label="サブスク名"></v-text-field>
                        <v-text-field type="number" v-model.number="subscription.fee" :rules="feeRules" required label="料金"></v-text-field>
                        <v-text-field type="text" v-model="subscription.description" :counter="50" label="概要"></v-text-field>
                        <v-text-field type="text" v-model="subscription.memo" :counter="100" label="メモ"></v-text-field>
                        <v-text-field type="text" v-model="subscription.url" label="サイトURL"></v-text-field>
                        <v-select :items="months" v-model="subscription.month" :rules="[v => !!v || '*登録月は必須項目です。']" required label="登録月"></v-select>
                        <v-select :items="days" v-model="subscription.day" :rules="[v => !!v || '*登録日は必須項目です。']" required label="登録日"></v-select>

                        <v-container fluid>
                            <p>プラン</p>
                            <v-radio-group v-model="subscription.type" :rules="[v => !!v || '*登録プランは必須項目です。']" required :mandatory="false">
                                <v-radio label="月額" value="月額"></v-radio>
                                <v-radio label="年額" value="年額"></v-radio>
                                <v-radio label="お試し期間" value="お試し期間"></v-radio>
                            </v-radio-group>
                        </v-container>
                        <v-btn @click="$router.push({ name: 'subscriptions' })">キャンセル</v-btn>
                        <v-btn color="info" :disabled="
                            !subscription.name ||
                            !subscription.fee ||
                            !subscription.month ||
                            !subscription.day ||
                            !subscription.type 
                        " @click="submit">作成</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import Title from "@/components/Title";
import {
    mapActions
} from 'vuex'
export default {
    components: {
        Title
    },
    created() {
        if (!this.$route.params.subscription_id) return

        const subscription = this.$store.getters.getSubscriptionById(this.$route.params.subscription_id)
        if (subscription) {
            this.subscription = subscription
        } else {
            this.$router.push({
                name: 'subscriptions'
            })
        }
    },
    data() {
        return {
            months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            nameRules: [
                v => !!v || '*サブスク名は必須項目です。',
                v => (v && v.length <= 20) || '*サブスク名は20文字以内にしてください。',
            ],
            feeRules: [
                v => !!v || '*料金は必須項目です。',
            ],
            subscription: {}
        }
    },
    methods: {
        submit() {
            if (this.$route.params.subscription_id) {
                this.updateSubscription({
                    id: this.$route.params.subscription_id,
                    subscription: this.subscription
                })
            } else {
                this.addSubscription(this.subscription)
            }
            this.$router.push({
                name: 'subscriptions'
            })
            this.subscription = {}
        },
        ...mapActions(['addSubscription', 'updateSubscription'])
    }
}
</script>
