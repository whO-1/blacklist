<template>
    <div class="filter-section">
        <ul class="filter-list" > 
            <li > 
                <button   @click="applyFilter( {} )"  name = 'All' 
                    v-active="{ obj: state.activeFilter  , toggleClass: state.activeClass }" 
                    class="filter-item"> {{ props.texts.filter1 }}
                </button> 
            </li>       
            <li> 
                <button   @click="applyFilter( { object: 'Company' } )"  name = 'Company' 
                        v-active="{ obj: state.activeFilter  , toggleClass: state.activeClass }" 
                        class=" filter-item"> {{ props.texts.filter2 }} 
                </button> 
            </li>
            <li> 
                <button   @click="applyFilter( { object: 'Person' } )"  name = 'Person'  
                        v-active="{ obj: state.activeFilter  , toggleClass: state.activeClass }" 
                        class=" filter-item"> {{ props.texts.filter3 }}
                </button> 
            </li>
        </ul>
    </div>
</template>



<script setup>
import vActive from "@/shared/active-directive";  
import { onUpdated, reactive } from "vue";

const emit = defineEmits(['updateFilter']);
const props = defineProps(['texts']);


const state = reactive({ 
    activeFilter: {} ,
    activeClass: 'active',

});

const checkFilter = (obj) => {
    let flag = false;
    if(  Object.keys(obj).length > 0  ){
        for ( const key in obj ){
            if( obj[key] !== state.activeFilter[key] ){
                flag = true;  
            } 
        }
    }
    else if ( Object.keys(state.activeFilter).length !== 0 ){
        flag = true;
    } 
    return flag;
}

const applyFilter = (obj) => {
    if ( checkFilter(obj) ){
        state.activeFilter = obj;       
    }
};



onUpdated( () => {
    emit("updateFilter",state.activeFilter);
});

</script>




<style scoped>
.filter-item{
    border: 1px solid black;
    border-radius: 10px;
    padding:  3px 10px;
    transition-duration: 0.3s;
    color: black;
}

.filter-section{
    padding: 15px 3%;
    width: 45%;
}

.filter-list{
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 3%;
}

.active{
  background-color: black;
  color: white;
}

</style>
