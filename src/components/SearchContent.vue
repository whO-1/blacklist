<template>
    <div class="search-content">

        <SearchBar @updateInput="str => handleUpdateInput(str)" :texts="props.texts.search"/>

        <SearchFilters v-if="state.results.length > 0 " 
            @updateFilter="(filter) => handleUpdateFilter(filter)" 
            :texts="props.texts.filters"/>
        
        <div :class="`search-results ${ (!state.resultsDisplay)? 'close-all': 'open-all' } `" v-if=" state.searchField !== '' ">   
            <div class="row">
                <h2  class="results-title"> {{ props.texts.resultTitle }}: ( {{ state.filteredResults.length }} )</h2>
                <button @click=" handleCloseResults() " class="close-results">{{ props.texts.closeButton }}</button>
            </div>
            <ul v-if=" state.filteredResults.length > 0 " class="results-list">
                <li v-for=" review in state.filteredResults " :key="review.id" >
                    <ReviewItem 
                        :image="review.image"
                        :name="review.name"
                        :description="review.description"    
                    />
                </li>

            </ul>
        </div>
    
    </div>

</template>




<script setup>

import SearchBar from "@/components/SearchBar.vue";
import SearchFilters from "@/components/SearchFilters.vue";
import useFilters from '@/search/useFilters';
import { reactive} from "vue";
import dataList from "@/data/dataList";
import useSearch from "@/search/useSearch";
import ReviewItem from "@/components/ReviewItem.vue";

const props = defineProps(['texts']);

const state = reactive({
    searchField: '',
    results: [],
    activeFilter: {},
    filteredResults: [],
    resultsDisplay: true,
});

const fetchResults = (str) => {
    console.log(`fetch new data  [${str}]`); 
    const { searchResults } = useSearch(str, dataList );
    state.results = searchResults;
};


const handleUpdateInput = (str) => {
    if(state.searchField !== str){
        state.searchField = str;
        fetchResults(str); 
        state.filteredResults = useFilters(state.results, state.activeFilter);    
    }
    state.resultsDisplay = true;
}

const handleUpdateFilter = (filter) => {
    if(state.resultsDisplay){
        state.activeFilter = filter ;
    state.filteredResults = useFilters(state.results, state.activeFilter);
    } 
}

const handleCloseResults = () => {
    state.resultsDisplay = false; 
}


</script>





<style scoped>

.search-results{
    width: 100%;
    flex-direction: column;
    align-items: center;
    background-color: white;
    display: flex;
    border-radius: 10px;
    gap:20px;
}

.results-list{
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.row{
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.results-title{
    text-align: start;
    color:black;
    font-size: 12px;
}

.search-content{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.close-results{
    outline: 1px solid black;
    padding: 5px 8px;
    border-radius:  20px;
    transition-duration: 0.3s;
    color: black
}
.close-results:hover{
    background-color: #fc6a60;
    color: white;
    outline: none;
}


.close-all{
    animation: animation_results_close 0.5s ease-in-out  1 forwards;
}

.open-all{
    animation: animation_results 0.5s ease-in-out 1 forwards;
}

@media only screen and (min-width: 900px){ 
    .results-list{
        width: 40%;
    }
    .results-title{
        width: 40%;
    }
    .row{
        width: 40%;
    }
}

@keyframes animation_results{
    0%{
        display: flex;
        height: 0%;
        padding: 0%;
        opacity: 0;
        overflow: hidden;
    }
    100%{
        opacity: 1;
        height: 100%;
        padding: 3% 0%;
        overflow: hidden;
    }
}

@keyframes animation_results_close{
    0%{
        opacity: 1;
        height: 100%;
        padding: 3% 0%;
        overflow: hidden;
    }
    100%{
        height: 0%;
        padding: 0%;
        opacity: 0;
        overflow: hidden;
        display: none;
    }
}

</style>