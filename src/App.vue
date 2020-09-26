<template>
<v-app>
    <v-app-bar app color="primary" dark>
        <div class="d-flex align-center">
            <h1>サブスク管理</h1>
        </div>

        <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
        <SubscriptionCard />
    </v-main>
</v-app>
</template>

<script>
import SubscriptionCard from "@/components/SubscriptionCard";
export default {
    name: 'App',

    components: {
        SubscriptionCard
    },

    data: () => ({
        //
    }),
};
</script>
