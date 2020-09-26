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
                <v-card-actions>
                    <v-btn text color="deep-purple accent-4"> Learn More </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</div>
</template>

<style lang="scss" scoped>
.subscription-list {
    margin-top: 40px;

    &__card {
        margin-bottom: 16px;
    }
}
</style>
