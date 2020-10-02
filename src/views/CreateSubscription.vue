<template>
<v-container text-xs-center>
    <v-layout row wrap justify-center>
        <v-flex xs12>
            <h1>サブスク作成</h1>
        </v-flex>

        <v-flex xs mt-5>
            <v-card>
                <v-card-text>
                    <v-form>
                        <v-text-field v-model="subscription.name" label="サブスク名"></v-text-field>
                        <v-text-field v-model="subscription.description" label="概要"></v-text-field>
                        <v-text-field v-model="subscription.memo" label="メモ"></v-text-field>
                        <v-select :items="months" v-model="subscription.month" label="登録月"></v-select>
                        <v-select :items="days" v-model="subscription.day" label="登録日"></v-select>
                        <v-container fluid>
                            <p>サブスク種類</p>
                            <v-radio-group v-model="subscription.type" :mandatory="false">
                                <v-radio label="月額" value="月額"></v-radio>
                                <v-radio label="年額" value="年額"></v-radio>
                            </v-radio-group>
                        </v-container>
                        <v-btn>キャンセル</v-btn>
                        <v-btn color="info" @click="submit">保存</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import {
    mapActions
} from 'vuex';
export default {
    data() {
        return {
            months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            subscription: {}
        }
    },
    methods: {
        submit() {
            this.addSubscription(this.subscription);
            console.log(this.subscription);
        },
        ...mapActions(['addSubscription'])
    },
}
</script>
