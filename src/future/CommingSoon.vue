<template>
    <section class="section-future">
        <h1 >{{FuturePageTexts.title1}}</h1>
        <h5>{{ FuturePageTexts.title2 }}</h5>
    </section>
</template>

<script setup>
import { useLangStore } from "@/stores/langStore.js";
import texts from "@/data/texts";
import { computed } from "vue";

const { currentLang } = useLangStore();
const FuturePageTexts = computed( ()=> texts[currentLang()].FuturePage );
</script>

<style scoped>

.section-future{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFAE6;
    text-align: center;
}

h1{
    font-size: 60px;
    color: black;
}
h5{
    font-size: 30px;
    color: rgb(50, 50, 50);
}

</style>