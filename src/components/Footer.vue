<template>
<footer class="footer">
    <small class="footer__copyright">© subscment</small>
</footer>
</template>

<style lang="scss" scoped>
.footer {
    border-top: 1px solid #cfdce6;

    &__copyright {
        display: block;
        font-size: 13px;
        color: rgba(0, 0, 0, .6);
        text-align: center;
        padding: 24px 0;

        @include pc {
            font-size: 14px;
            padding: 40px 0;
        }
    }
}
</style>
