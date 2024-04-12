import { defineStore } from 'pinia';
import { ref } from 'vue';
import dataList from '../data/dataList';




export const useReviewStore =  defineStore( 'reviews', () => {
    const reviews = ref(dataList);
    const addReview = (revObj) => {
        reviews.value.push(revObj);
    };
    // const deleteReview =  ({objReview}) => { 
    //     reviews.value.push(objReview);
    // }
    return {
        reviews,
        addReview,
    };
});


