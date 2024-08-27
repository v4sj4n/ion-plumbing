<template>
    <div class="my-14 h-4/5">
        <h2 class="title text-5xl">{{ $t("home.main.title") }}</h2>
        <p class="mb-2"> {{ $t("home.main.description") }}</p>
        <button class="btn">{{ $t("home.main.btnText") }}</button>
    </div>
</template>



<style lang="scss" scoped>
.btn {
    @apply px-4 py-2 bg-sky-600 rounded-md text-white;

    &:hover {
        @apply bg-sky-700;
    }
}

.title {
    font-family: "Merriweather", serif;
    font-weight: 900;
}
</style>