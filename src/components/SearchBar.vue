<template>
    <section class="search-bar">
      
        <form @submit.prevent="submitSearchField()">
            <div class="search-field">
                <input class="search-input" type="text" :placeholder=" props.texts.placeholder "  v-model="state.searchString" required>
                <button  class="search-submit" type="submit" > {{props.texts.button}}  </button>
            </div>  
        </form>
      
    </section>
</template>



<script setup>

const emit = defineEmits(["updateInput"]);
const props = defineProps(["texts"]);

const state = {
    searchString: "",
}

const submitSearchField = () => {
    emit('updateInput',state.searchString);
}

</script>




<style scoped>

    .search-bar{
        width: 70%;
    }

    .search-field{
        width: 100%;
        display: flex;
        border-radius: 20px ;
        overflow: hidden;
        border: 1px solid black;
    }

    .search-input{
        flex-basis: 80%;
        padding: 5% 8% ; 
        background:transparent ;
    }
    .search-input:focus{
        outline: none;
    }
    .search-submit{
        flex-basis: 20%;
        color: black;
    }

@media only screen and (min-width: 900px){ 
    .search-input{
        padding: 2%;  
    }  
    .search-bar{
        width: 50%;
    }
}

</style>