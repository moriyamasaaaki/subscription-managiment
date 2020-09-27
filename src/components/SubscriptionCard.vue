<template>
<div class="subscription-list">
    <v-row no-gutters>
        <v-col v-for="n in 100" :key="n" cols="12" sm="4">
            <v-card class="subscription-list__card mx-auto" max-width="450">
                <v-card-text>
                    <div>カテゴリ</div>
                    <p class="display-1 text--primary">サブスク名</p>
                    <p>2020/09/27</p>
                    <div class="text--primary">
                        概要が入ります。概要が入ります。<br />
                        概要が入ります。概要が入ります。概要が入ります。
                    </div>
                </v-card-text>
                <v-form class="form" ref="form" v-model="valid" lazy-validation>

                    <v-text-field v-model="description" :counter="100" :rules="descriptionRules" label="メモ" required></v-text-field>

                    <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="登録日" required></v-select>

                    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                        完了
                    </v-btn>

                    <v-btn color="error" class="mr-4" @click="reset">
                        リセット
                    </v-btn>
                </v-form>
            </v-card>
        </v-col>
    </v-row>
</div>
</template>

<script>
export default {
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || '必須項目です',
            v => (v && v.length <= 100) || 'Name must be less than 100 characters',
        ],
        select: null,
        items: [
            '1',
            '2',
            '3',
            '4',
        ],
    }),

    methods: {
        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
    },
}
</script>

<style lang="scss" scoped>
.subscription-list {
    margin-top: 40px;

    &__card {
        margin-bottom: 16px;
    }
}

.form {
    padding: 16px;
}
</style>
