<script setup>
import { availableLanguages } from '~/data';

const isLanguagePickerActive = ref(false)
const toggleLanguagePicker = () => {
    isLanguagePickerActive.value = !isLanguagePickerActive.value
}
const selectedLanguage = useCookie('i18n_redirected')
console.log('Selected Language:', selectedLanguage.value)
console.log('Available languages:', availableLanguages)
const pageLanguage = computed(() => {
    return availableLanguages.filter((lang) => lang.locale === selectedLanguage.value)[0] || availableLanguages[0]
})
const upDownCharacter = computed(() => isLanguagePickerActive.value ? "▴" : "▾")



console.log('Page language:', pageLanguage.value)
</script>
<template>
    <header class="shadow-sm bg-gradient-to-b from-sky-700 to-sky-800">
        <nav class="container mx-auto p-3 flex justify-between items-center">
            <NuxtLink to="/" class="font-bold flex items-center">
                <img src="/ionLogoWhite.png" alt="ion logo" class="w-10 fill-red-400">
            </NuxtLink>
            <ul class="flex gap-4 text-slate-300">
                <li>
                    <NuxtLink to="/" active-class="font-bold">{{ $t("navbar.home") }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" active-class="font-bold">
                        {{ $t("navbar.about") }}
                    </NuxtLink>
                </li>
                <li>
                    <button @click="toggleLanguagePicker" class="btn">{{ pageLanguage.emoji }} {{ upDownCharacter
                        }}</button>
                    <div class="fixed right-10 bg-slate-500 p-2" v-if="isLanguagePickerActive">
                        <p v-for="language in availableLanguages" class="white">
                            <button @click="selectedLanguage = language.locale; reloadNuxtApp()"> {{ language.emoji }} {{
                                language.title }}</button>
                        </p>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
    <div class="container mx-auto p-3">

        <slot></slot>
    </div>
</template>


<style scoped></style>  