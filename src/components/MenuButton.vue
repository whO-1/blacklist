<template>
	<button class="toggle-btn" >
		<div class="menu-icon" @click = "animateToggle()">
			<div :class=" `line  ${(open)? 'firstLineAnimationOpen ' : (close)? 'firstLineAnimationClose ' : '' } `" ></div>
			<div :class=" `line  ${(open)? 'secondLineAnimationOpen' : (close)? 'secondLineAnimationClose' : ''} `" ></div>
			<div :class=" `line  ${(open)? 'thirdLineAnimationOpen ' : (close)? 'thirdLineAnimationClose ' : ''} `" ></div>
		</div>
	</button>
	
</template>

<script setup>
	import { ref } from 'vue';

	const emit = defineEmits(['menuToggle']);

	const open = ref(false);
	const close = ref(false);

	const animateToggle = () =>  {
		open.value = !open.value;
		close.value = !open.value;
		emit('menuToggle');
	}

</script>

<style lang="scss" scoped>


@media only screen and (min-width: 900px) {
	.toggle-btn{
		display: none;
	}     
}

.toggle-btn{
	background-color: rgba(0,0,0,0);
	border:none;
	display: auto;
	width: 45px;
}

.menu-icon{
	position: relative;
	height: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	cursor: pointer;
}

.line{
	position:absolute;
	padding: 2px 0px;
	width: 100%;
	background: rgb(0, 0, 0);
	border-radius: 3px;
	box-shadow: 2px 2px 10px rgba(0,0,0,0.4);
	left: 50%;
	transform: translate(-50%, 0%);
}

.line:nth-child(1){
	top:27%;
	z-index: 2;
}

.line:nth-child(2){
	top:47%;	
	z-index: 1;
}
.line:nth-child(3){
	top:67%;	
	z-index: 3;
}

.firstLineAnimationOpen{
	animation-iteration-count: 1;
	animation-name: firstBarOpen;
	animation-duration: 0.8s;
	animation-fill-mode: forwards; 
}
.secondLineAnimationOpen{
	animation-name: secondBarOpen;
	animation-duration: 0.8s;
	animation-iteration-count: 1;		
	animation-fill-mode: forwards; 
}
.thirdLineAnimationOpen{
	animation-name: thirdBarOpen;
	animation-duration: 0.8s;
	animation-iteration-count: 1;	
	animation-fill-mode: forwards; 
}

.firstLineAnimationClose{
	animation-iteration-count: 1;
	animation-name: firstBarClose;
	animation-duration: 0.8s;
	animation-fill-mode: forwards; 
}
.secondLineAnimationClose{
	animation-name: secondBarClose;
	animation-duration: 0.8s;
	animation-iteration-count: 1;		
	animation-fill-mode: forwards;
}
.thirdLineAnimationClose{
	animation-name: thirdBarClose;
	animation-duration: 0.8s;
	animation-iteration-count: 1;	
	animation-fill-mode: forwards; 
}

@keyframes firstBarOpen{
	0% { top:27%; }
	50% {
				top: 47%;
				transform: translate(-50%, 0%) rotate(0deg);
			}	
	60%{
				top: 47%;
				transform: translate(-50%, 0%) rotate(0deg);
	}
	100% { 
				top: 47%;
				transform: translate(-50%, 0%) rotate(45deg);
			}
}	

@keyframes secondBarOpen{
	0% { transform: translate(-50%, 0%) scale(1,1) }
	50% {
				transform: translate(-50%, 0%) scale(0.5,0.9);
				opacity: 1;
			}	
	60%{
				transform: translate(-50%, 0%) scale(0.5,0.9);
				opacity: 1;	
	}
	100% {
				transform: translate(-50%, 0%) scale(0,0); 
				opacity: 0;
	}
}

@keyframes thirdBarOpen{
	0% { top:67%; }
	50% {
				top: 47%; 
				transform: translate(-50%, 0%) rotate(0deg);
			}	
	60% {
				top: 47%; 
				transform: translate(-50%, 0%) rotate(0deg);
	}
	100% {
				top: 47%; 
				transform: translate(-50%, 0%) rotate(135deg);	
	}
}	



@keyframes firstBarClose{
	100% { top:27%; }
	60% {
				top: 47%;
				transform: translate(-50%, 0%) rotate(0deg);
			}	
	50%{
				top: 47%;
				transform: translate(-50%, 0%) rotate(0deg);
	}
	0% { 
				top: 47%;
				transform: translate(-50%, 0%) rotate(45deg);
			}
}	

@keyframes secondBarClose{
	100% { transform: translate(-50%, 0%) scale(1,1) }
	60% {
				transform: translate(-50%, 0%) scale(0.5,0.9);
				opacity: 1;
			}	
	50%{
				transform: translate(-50%, 0%) scale(0.5,0.9);
				opacity: 1;	
	}
	0% {
				transform: translate(-50%, 0%) scale(0,0); 
				opacity: 0;
	}
}

@keyframes thirdBarClose{
	100% { top:67%; }
	60% {
				top: 47%; 
				transform: translate(-50%, 0%) rotate(0deg);
			}	
	50% {
				topa: 47%; 
				transform: translate(-50%, 0%) rotate(0deg);
	}
	0% {
				top: 47%; 
				transform: translate(-50%, 0%) rotate(135deg);	
	}
}	





</style>