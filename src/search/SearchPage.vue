<template>
  <div class="home">    
      <div  class="section" id="section-main">
          
          <div class="left-part">
              <div class="main-title">
                  Black<div class="inverted-title">List</div>
              </div>
              <div class="description">
                  {{ SearchPageTexts.mainParagraph }}
              </div>
              <div class="sm-links">
                  <a href="https://www.linkedin.com/in/dumitru-diocher-69497627b/" target="_blank" rel="noopener noreferrer">
                      <img class="sm-link" :src="in_svg" alt="icon">
                  </a>
                  <a href="https://www.instagram.com/dumitrudiocher/" target="_blank" rel="noopener noreferrer">
                      <img class="sm-link" :src="inst_svg" alt="icon">
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                      <img class="sm-link" :src="twit_svg" alt="icon">
                  </a>
                  <a href="https://www.facebook.com/diocherdima" target="_blank" rel="noopener noreferrer">
                      <img class="sm-link" :src="fb_svg" alt="icon">
                  </a>
              </div>
          </div>

          <div class="right-part">
              <div class="info-blocks">
                  <div class="info-block">
                      <div class="circles">
                          <div class="circle"></div>
                          <div class="circle"></div>
                          <div class="circle"></div>
                      </div>
                      <h3 class="block-title">
                        {{ SearchPageTexts.infoBlock1.title1 }} <div class="block-title2">{{ SearchPageTexts.infoBlock1.title2 }}</div>
                      </h3>
                      <a href="" class="block-link">
                        {{ SearchPageTexts.infoBlock1.link }}
                          <img :src="arrow_svg" alt="arrow">
                      </a>  
                  </div>
                  <div class="info-block">
                      <div class="circles">
                          <div class="circle"></div>
                          <div class="circle"></div>
                          <div class="circle"></div>
                      </div>
                      <h3 class="block-title">
                        {{ SearchPageTexts.infoBlock2.title1 }} <div class="block-title2">{{ SearchPageTexts.infoBlock2.title2 }}</div>
                      </h3>
                      <a href="" class="block-link">
                        {{ SearchPageTexts.infoBlock2.link }}
                          <img :src="arrow_svg" alt="arrow">
                      </a>  
                  </div>    
                  <div class="info-block">
                      <p class="block-p"> {{ SearchPageTexts.infoBlock3.miniTitle }}</p>
                      <h3 class="block-title">
                          {{ SearchPageTexts.infoBlock3.title1 }} <div class="block-title2">{{ SearchPageTexts.infoBlock3.title2 }}</div>
                      </h3>
                      
                      <a href="" class="block-link">
                        {{ SearchPageTexts.infoBlock3.link }}
                          <img :src="arrow_svg" alt="arrow">
                      </a>
                  </div>
              </div>
              <div class="imgs">
                <img :src="img1" class="img-decor">
                <img :src="img2" class="img-decor">
              </div>     
          </div>     
      </div>


      <SearchContent :texts = "SearchPageTexts.SearchContent"  /> 

      
  </div>
</template>


<script setup >

import SearchContent from "@/components/SearchContent.vue";
import fb_svg from "@/assets/facebook.svg";
import inst_svg from "@/assets/instagram.svg";
import twit_svg from "@/assets/twitter.svg";
import in_svg from "@/assets/linkedin.svg";
import arrow_svg from "@/assets/arrow.svg";
import img1 from "@/assets/image1.png";
import img2 from "@/assets/image2.png";

import texts from "@/data/texts";
import { useLangStore } from "@/stores/langStore.js";
import { computed } from "vue";

const { currentLang } = useLangStore();

const SearchPageTexts = computed( ()=> texts[currentLang()].SearchPage );

</script>




<style scoped>


.home{
  background-color: #FFFAE6;
  min-height: 110vh;
  display:flex;
  flex-direction: column;
  align-items: center;
}

.section{
    width: 100%;
    display: flex; 
    flex-direction: row;
    justify-content: space-around;

}


.left-part{
  padding: 150px 9% 100px 9% ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  
}
.right-part{
  padding-top: 120px;
  height: 100%;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-title{
  font-size: 50px;
  font-style: italic;
  color:#FFFAE6;
  -webkit-text-stroke: 5px black; 
}

.description{
  text-align: center;
}

.inverted-title{
  color: black;
  display: inline;
}


.sm-links{
  display: flex;
  flex-direction: row;
  gap: 23px;
}

.sm-link{
  width: 23px;
  height: 23px;
  transition-duration: 0.3s ;
}
.sm-link:hover{
  transform: scale(1.2, 1.2);
}


.info-blocks{
  width: 100%;
  padding: 0 2%;
  height: auto ;
  display: flex;
  flex-direction: row;
  gap: 2%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.info-block{
  width: 30%;
  height: 130px;
  padding: 2% 5%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10%;
  border-radius: 20px 20px 20px 20px;
  
}

.info-block:first-child{
  border-radius: 0 20px 20px 20px;
}
.info-block:last-child{
  border-radius: 20px 20px 0 20px;
}

.circles{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  margin-bottom: 10%;
}
.circle{
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: grey;
}

.block-p{
  margin-bottom: 10%;
  font-size: 0.8rem;
}
.block-title{
  font-size: 1.2rem;
  color: black;
  font-weight: bold;
}
.block-title2{
  font-weight: normal;
  display: inline;
  font-size: 1rem;
  color: black;
}
.block-link{
  font-size: 0.8rem;  
  text-wrap: nowrap;
}

.imgs{
  width: 70%;
  display: flex;
  flex-direction: row;
}

.img-decor{
  width: 50%;  
}


@media only screen and (min-width: 900px) { 
    .right-part{
      display: flex;
    }  
    .left-part{
      height: 100%;
      padding: 120px 9%;

    }
    .main-title{
      font-size: 108px;
    }
    .description{
      text-align: left;
    }
}

</style>

