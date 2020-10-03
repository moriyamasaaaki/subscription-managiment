<template>
<div class="subscription-list">
    <v-expansion-panels>
        <v-expansion-panel v-for="(item, i) in 5" :key="i">
            <v-expansion-panel-header>サブスク名</v-expansion-panel-header>
            <v-expansion-panel-content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </p>
                <v-form class="form" ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="description" :counter="100" :rules="descriptionRules" label="メモ" required></v-text-field>

                    <v-select v-model="select" :items="items" :rules="[(v) => !!v || 'Item is required']" label="登録日" required></v-select>

                    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                        完了
                    </v-btn>

                    <v-btn color="error" class="mr-4" @click="reset"> リセット </v-btn>
                </v-form>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</div>
</template>

<script>
export default {
    data: () => ({
        valid: true,
        name: "",
        descriptionRules: [
            (v) => !!v || "必須項目です",
            (v) => (v && v.length <= 100) || "Description must be less than 300 characters",
        ],
        select: null,
        items: ["1", "2", "3", "4"],
    }),

    methods: {
        validate() {
            this.$refs.form.validate();
        },
        reset() {
            this.$refs.form.reset();
        },
    },
};
</script>

<style lang="scss" scoped>
.subscription-list {
    margin-top: 40px;
    padding: 0 16px;
    max-width: 500px;
}

.theme--light.v-expansion-panels .v-expansion-panel {
    margin-bottom: 8px;
}

.form {
    padding: 16px;
}
</style>
