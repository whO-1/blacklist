<template>
    <nav class="navbar">
        <div class="logo">
            <router-link :to="{name: 'Search'}"   > 
                <a class="logo-initials">#BlackList</a>
            </router-link>
        </div>
        <div class="nav-elements">
            <div v-absolute = "[state.isBarClose,'init-close', 'bar-close']"  class="nav-btns init-close" >
                <ul class="nav-links">
                    <li class="nav-link active-link ">
                        <router-link :to="{ name: 'Search' }"  > {{ NavBarTexts.link1 }} </router-link>
                    </li>
                    <li class="nav-link">
                        <router-link :to="{ name: 'Soon' }"  > {{ NavBarTexts.link2 }} </router-link>
                    </li>
                    <li class="nav-link" >
                        <router-link :to="{ name: 'Soon' }"   > {{ NavBarTexts.link3 }} </router-link>
                    </li> 
                    <li class="nav-link" >
                        <router-link :to="{ name: 'Soon' }"   > {{ NavBarTexts.link4 }} </router-link>
                    </li> 
                </ul>
                
                <div class="nav-cta-btns">   
                    <div class="nav-lang-btn btn-list">  
                        <button @click="updateLang('en')" >
                            <div :class=" `btn ${ (state.lang === 'en')? 'active-btn':'' }`"  name="en"  >
                                En
                            </div>
                        </button>
                        <button @click="updateLang('ro')">
                            <div :class=" `btn ${ (state.lang === 'ro')? 'active-btn' :'' }`"   name="ro">
                                RO
                            </div>
                        </button>
                    </div>
                    <div class="nav-cta-btn btn-list"> 
                        <router-link :to="{ name: 'Post' }"  >
                            <div class="active-btn btn">
                                  {{ NavBarTexts.ctaButton }} 
                                 
                            </div>
                        </router-link>
                        <router-link :to="{ name: 'Post' }"  >
                            <div class="btn">
                                <img :src="arrow">
                            </div> 
                        </router-link>
                    </div>         
                </div>
            </div>

            <MenuButton @menuToggle = "handleMenuToggle()" />

        </div>
    </nav>
</template>

<script setup>
    import arrow from "@/assets/arrow.svg";
    import MenuButton from "@/components/MenuButton.vue";
    import { reactive,computed } from "vue";
    import vAbsolute from "@/shared/absolute-directive";
    import { useLangStore } from "@/stores/langStore";

    import texts from "@/data/texts";

    const { changeLang, currentLang } = useLangStore();
    const NavBarTexts = computed( ()=> texts[currentLang()].NavBar );

    

    const state = reactive({
        isBarClose: true,
        lang: 'ro',
    });

    const handleMenuToggle = () => {
        state.isBarClose = !state.isBarClose;
    }

    const updateLang = (lang) => {
        changeLang(lang);
        state.lang = currentLang();    
    }

</script>

<style scoped>

    .navbar{
        width: 100vw;
        padding: 1% 10%;
        position: fixed;
        display: flex;
        flex-direction: row;
        align-items: center;
        backdrop-filter: invert(100%) blur(2px);
        background-color: rgba(255, 250, 230, 0.9);
        z-index: 2;
    }

    .logo{
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo-initials{
        color:black;
        font-style: italic;
        text-decoration: none !important;    
        font-size: 16px;
        font-weight: bold;
    }

    .nav-elements{
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    .nav-btns{
        width: 100vw;
        position: absolute;
        left: 0%;
        top: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(255,255,255,0.9);
        animation: animation_navMenu 0.6s ease-in-out  1 forwards;
    }

    .nav-links{
        padding: 5%;
        width: 100%;
        display: flex;
        height: 100%;
        flex-direction: row;   
        justify-content: center;
        align-items: center;
        gap: 10%;   
    }

    .nav-link{
        color: rgb(128, 128, 128);
        font-size: 12px;
    }

    .nav-link:hover{
        color: rgb(6, 6, 6);
    }

    .active-link{
        color: rgb(6, 6, 6);    
    }

    .nav-cta-btns{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row; 
        justify-content: center;  
        align-items: center;
        gap: 5%;  
        text-wrap: nowrap;   
    }

    .btn-list{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .btn{
        color: black;
        padding: 12px 18px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: 1px solid rgb(130, 130, 130);
        border-radius: 20px;
        font-size: 12px;
        z-index: 1;
    }

    .btn:hover{
        border: 1px solid rgb(75, 75, 75);       
    }

    .active-btn{ 
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        z-index: 2;
        color: #FFFAE6 ;
        background-color: black;
    }

    .active-btn:hover{
        background-color: black;    
    }

    .bar-close{
        animation: animation_navMenu_close 0.6s ease-in-out 1 forwards ;
    }

    .init-close{
        display: none;
    }

    @keyframes animation_navMenu{
        0%{ 
            opacity: 0;
            height: 0%; 
            padding: 0;  
            overflow: hidden;
        }
        100%{
            opacity: 1;
            padding: 3% 0;
            height: 270%;
            overflow: hidden;
        }
    }

    @keyframes animation_navMenu_close{
        0%{
            opacity: 1;
            padding: 3% 0;
            height: 270%;
            overflow: hidden;   
        }
        100%{
            opacity: 0;
            height: 0%; 
            padding: 0;  
            overflow: hidden;
            display: none;
        }
    }

    @media only screen and (min-width: 900px) {  
        .nav-btns{
            padding: 0;
            position: static;
            flex-direction: row;
            background-color: rgba(0,0,0,0);
            animation: none;
        }  
        .nav-links, .nav-cta-btns{
            padding: 0%;
            width: 50%;
        }  
        .bar-close{
            display: flex;
            animation: none;
        }
        .init-close{
            display: flex;
        }
    }

    

</style>