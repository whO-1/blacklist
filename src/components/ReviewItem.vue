<template>
    <a class="results-item">
        <div class="head-part">
            <div class="info-item">
                <div class="info-p"> <div class="strong">10</div> răspunsuri</div>
                <div class="info-p">10/05/2022</div>
            </div>
            <img :src="save_svg" class="save-svg">
        </div>
        <div class="item-content">
            <img v-if="props.image !== '' " class="item-img" :src="props.image">
            <div class="item-text">
                <h2 class="item-title"> {{ props.name }} </h2>
                <p class="item-subtitle"> {{ props.description }} </p>
            </div>
        </div> 
        <div class="bottom-part">
            <div class="likes">
                <img :src="heart_svg" class="heart-svg">
                <div class="info-p"> <div class="strong">15</div> aprecieri</div>
            </div>
            <div class="info-p likes"> 
                <div class="strong">10</div> vizualizări</div>
        </div>  
    </a>    
</template>

<script setup>
import save_svg from "@/assets/save.svg";
import heart_svg from "@/assets/heart.svg";

const props = defineProps(['image','name','description']);

</script>

<style scoped>
.strong{
    font-weight: bold;
    display: inline;
    color: rgb(52, 52, 52);
}

.save-svg{
    width: 20px;
}

.save-svg:hover{
    filter: invert(52%) sepia(27%) saturate(385%) hue-rotate(358deg) brightness(97%) contrast(89%);
}

.heart-svg{
    filter: sepia(93%) saturate(20%) hue-rotate(246deg) brightness(106%) contrast(104%);
    stroke: #ff4561;
}
.heart-svg:hover{
    filter: invert(33%) sepia(83%) saturate(1085%) hue-rotate(317deg) brightness(105%) contrast(101%);
}


.results-item{
    border-radius: 10px;
    padding: 2% 3%;
    box-shadow: 4px 0px 10px rgba(0,0,0,0.2);
    transition-duration: 0.3s;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.results-item:hover{
    outline: 1px solid black;
}

.head-part{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}
.info-item{
    width: 80%;
    display: flex;
    flex-direction: row;  
    justify-content: space-between; 
}
.info-p{
    font-style: italic;
    font-size: 12px;
    color: rgb(158, 158, 158);
    display: inline;
}

.item-content{
    display: flex;
    flex-direction: row;
    gap: 10%
}

.item-title{
    font-size: 16px;
    font-weight: bold;
    color: black;
    margin-bottom: 2%;
}

.item-subtitle{
    font-size: 12px;
    font-weight: normal;
    color: grey;
}

.item-img{
    background-color: gray;
    width: 70px;
}



.bottom-part{
    padding: 0 5%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 5%;
}

.likes{
    text-wrap: nowrap;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
    align-items: center;
}

</style>