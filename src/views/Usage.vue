<template>
<div class="usage">
    <Title :title="'使い方'" />
    <v-timeline class="usage__mobile" align-top dense>
        <v-timeline-item color="primary" v-for="step in usage" :key="step.index" small>
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong v-if="step.index === 5">Goal!!</strong>
                    <strong v-if="step.index !== 5">Step{{ step.index }}</strong>
                </v-col>
                <v-col>
                    <strong>{{ step.title }}</strong>
                    <div class="caption">
                        {{ step.text }}
                    </div>
                </v-col>
            </v-row>
        </v-timeline-item>
    </v-timeline>

    <v-timeline class="usage__pc">
        <v-timeline-item v-for="step in usage" :key="step.index" color="primary">
            <template v-slot:opposite>
                <strong v-if="step.index === 5">Goal!!</strong>
                <strong v-if="step.index !== 5">Step{{ step.index }}</strong>
            </template>
            <v-card class="elevation-2">
                <v-card-title class="headline">
                    {{ step.title }}
                </v-card-title>
                <v-card-text>
                    {{ step.text }}
                </v-card-text>
            </v-card>
        </v-timeline-item>
    </v-timeline>
</div>
</template>

<script>
import Title from "@/components/Title";
export default {
    components: {
        Title
    },
    data() {
        return {
            usage: [{
                    index: 1,
                    title: 'ログインする',
                    text: 'GoogleログインをしますのでGoogleアカウントが必要です。'
                },
                {
                    index: 2,
                    title: 'サブスク登録ページへ',
                    text: '+アイコンを押してサブスク登録ページへ移動します。'
                },
                {
                    index: 3,
                    title: 'フォームを入力する',
                    text: 'フォームを入力してサブスク作成します。'
                },
                {
                    index: 4,
                    title: 'サブスク一覧',
                    text: '登録したサブスクの一覧を確認することができるのと、月額・年額で合計金額を算出できます。'
                },
                {
                    index: 5,
                    title: '終了',
                    text: '使い方をマスターしました！！'
                },
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
.usage {
    max-width: 1000px;
    margin: 40px auto;
    line-height: 2;
    padding: 0 8px;

    &__mobile {
        @include tab {
            display: none;
        }
    }

    &__pc {
        display: none;

        @include tab {
            display: block;
        }
    }

}
</style>
