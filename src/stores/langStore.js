import { defineStore } from 'pinia';
import {ref } from 'vue';

const listOfLangs = ['ro','en'];

export const useLangStore =  defineStore( 'lang', () => {
    const lang  = ref('ro');

    const changeLang = (new_lang) => { 
        lang.value = ( listOfLangs.indexOf(new_lang) !== -1 )? new_lang : lang;
    }
    const currentLang = () => lang.value;

    return {
        changeLang,
        currentLang,
    };
});
