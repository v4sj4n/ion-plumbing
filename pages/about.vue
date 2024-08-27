<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At modi itaque temporibus odio possimus deleniti!
            Debitis amet earum adipisci necessitatibus inventore quibusdam vero, modi veniam in delectus commodi
            expedita illum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto quae amet neque facilis maxime
            obcaecati dolores optio eligendi aliquid nesciunt odio, eos consequuntur magnam adipisci sed illo!
            Exercitationem, optio?</p>
        <p>{{ data }}</p>
    </div>
</template>

<script lang="ts" setup>
const { data } = await useFetch("/api/ninja?name=Vasjan")
console.log(data)
</script>

<style lang="scss" scoped></style>