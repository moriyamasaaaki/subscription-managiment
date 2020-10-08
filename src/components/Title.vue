<template>
<v-flex xs12>
    <h1 class="hdg">{{ title }}</h1>
</v-flex>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        }
    }
}
</script>

<style lang="scss">
.hdg {
    font-size: 20px;
    padding: 8px 16px;
    color: #fff;
    background: #2c79ec;
    -webkit-box-shadow: 5px 5px 0 rgb(2, 62, 112);
    box-shadow: 5px 5px 0 rgb(2, 62, 112);
    margin: 40px auto;
    text-align: center;
    max-width: 300px;

    @include pc {
        font-size: 24px;
    }
}
</style>
