<template>
    <div class="post">
        <div class="post-content">
            <div class="text">
                <h1 class="post-heading">{{ PostPageTexts.title }}</h1>
            </div>
            
            <div class="container">
                <form @submit.prevent="performSubmit()">
                    <div class="form-row">
                        <div class="input-data">
                            <input type="text" name="name" v-model="newReview.name" :placeholder=" PostPageTexts.form.input.name " required>
                            <div class="underline"></div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="input-data">
                            <select class="select-input" name="select" v-model="newReview.object" required>
                                <option value="Person"> {{ PostPageTexts.form.input.select.option1 }} </option>
                                <option value="Company" selected> {{ PostPageTexts.form.input.select.option2 }} </option>
                            </select>
                        </div>
                        
                    </div>
                    <div class="form-row">
                        <div class="input-data textarea">
                            <textarea rows="8" cols="80" name = "description" type="text" v-model="newReview.description" :placeholder="PostPageTexts.form.input.textarea" required></textarea>
                            <br />
                            <div class="underline"></div>
 
                            <br />
                            <div class="form-row ">
                              <div class="submit-btn">
                                  <div class="inner"></div>
                                  <input type="submit" :value="PostPageTexts.form.input.submit">
                              </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>            
    </div>
</template>

<script setup>

import {useReviewStore} from '@/stores/reviewsStore';
import { ref,computed } from 'vue';
import { useLangStore } from "@/stores/langStore.js";
import texts from "@/data/texts";

const reviewsStore = useReviewStore();


const newReview =  ref({
    id: reviewsStore.reviews.length ,
    name: "",
    object: "",
    image: '',
    description: ""   
});

const performSubmit = () => {

    reviewsStore.addReview( {
        id: newReview.value.id,
        name: newReview.value.name,
        object: newReview.value.object,
        image: newReview.value.image,
        description: newReview.value.description    
    });
    newReview.value.id =  reviewsStore.reviews.length ;
    newReview.value.name = "";
    newReview.value.object = "";
    newReview.value.image = "";
    newReview.value.description = "";   

}


const { currentLang } = useLangStore();
const PostPageTexts = computed( ()=> texts[currentLang()].PostPage );


</script>

<style scoped>
.post{
    width:100%;
    display: flex;
    background-color: #FFFAE6;
    min-height: 100vh;
}

.post-content{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5vw 0;
    row-gap: 2vw;
    max-height: 100vh;
    
}

.post-heading{
    margin-top: 80px;
    margin-bottom: 2%;
    font-size: 30px;
    font-style: italic;
}


.container{
  max-width: 800px;
  background: #fff;
  width: 100%;
  padding: 25px 40px 10px 40px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  border-radius: 20px;

}
.post-content .text{
  text-align: center;
  font-size: 41px;
  font-weight: 600;
  background: -webkit-linear-gradient(right, #000000, #000000, #000000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.container form{
  padding: 30px 0 0 0;
}
.container form .form-row{
  display: flex;
  margin: 32px 0;
}
form .form-row .input-data{
  width: 100%;
  height: 40px;
  margin: 0 20px;
  position: relative;
}
form .form-row .textarea{
  height: 70px;
}
 input,
.textarea textarea{
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 12px;
  border-bottom: 2px solid rgba(0,0,0, 0.12);
}

.textarea textarea{
  resize: none;
  padding-top: 10px;
}


 .underline{
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
}
.underline:before{
  position: absolute;
  content: "";
  height: 2px;
  width: 100%;
  background: #3498db;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}
 input:focus ~ .underline:before,
 input:valid ~ .underline:before,
.textarea textarea:focus ~ .underline:before,
.textarea textarea:valid ~ .underline:before{
  transform: scale(1);
}
.submit-btn{
  height: 45px!important;
  width: 25%!important;
  min-width: 120px;
  border-radius: 20px;
  background-color: rgb(255, 227, 128);
  display: block;
  position: static;
}
 .inner{
  height: 100%;
  width: 300%;
  position: absolute;
  left: -100%;
  transition: all 0.4s;
}
.submit-btn .input-data:hover .inner{
  left: 0;
}

.input-data input{
  background: none;
  border: none;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  z-index: 2;
}

.input-data{
  border: 1 px solid white;
}

.select-input{
    padding: 2% 5%;
}

@media (max-width: 700px) {
  .container .text{
    font-size: 30px;
  }
  .container form{
    padding: 10px 0 0 0;
  }
  .container form .form-row{
    display: block;
  }
  form .form-row .input-data{
    margin: 35px 0!important;
  }
  .submit-btn .input-data{
    width: 40%!important;
  }
}

</style>