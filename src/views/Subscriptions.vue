<template>
<v-container text-xs-center justify-center>
    <v-layout row wrap>
        <v-flex xs12>
            <h1>サブスク一覧</h1>
        </v-flex>

        <v-flex xs12 mt-3 justify-center>
            <v-data-table :headers='headers' :items='subscriptions'>
                <template v-slot:items="props">
                    <td class="text-xs-left">{{ props.item.name }}</td>
                    <td class="text-xs-left">{{ props.item.description }}</td>
                    <td class="text-xs-left">{{ props.item.memo }}</td>
                    <td class="text-xs-left">{{ props.item.type }}</td>
                    <td class="text-xs-left">{{ props.item.month }}月{{ props.item.day }}日サブスク開始</td>
                    <td class="text-xs-left">{{ props.item.fee | number_format}}</td>
                </template>
            </v-data-table>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
    created() {
        this.subscriptions = this.$store.state.subscriptions
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
                {
                    text: '操作',
                    sortable: false
                }
            ],
            subscriptions: []
        }
    }
}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
}
</style>
