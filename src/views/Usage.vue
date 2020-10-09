<template>
<div class="usage">
    <Title :title="'使い方'" />
</div>
</template>

<script>
import Title from "@/components/Title";
export default {
    components: {
        Title
    },

}
</script>

<style lang="scss" scoped>
.usage {
    max-width: 1000px;
    margin: 40px auto;
    line-height: 2;
    padding: 0 8px;

}
</style>
