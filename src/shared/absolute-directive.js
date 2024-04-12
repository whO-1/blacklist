export default {
    mounted: ( element, binding  ) => {
        if( binding.value[0] ){
            if (!element.classList.contains(binding.value[1]) ){
                element.classList.add(binding.value[2]);
            }
        }
        else{
            if (element.classList.contains(binding.value[1]) ){
                element.classList.remove(binding.value[1]);
            }
            else{
                element.classList.remove(binding.value[2]);
            }        
        }
    },
    updated: ( element, binding ) => {
        if( binding.value[0] ){
            if (!element.classList.contains(binding.value[1]) ){
                element.classList.add(binding.value[2]);
            }
        }
        else{
            if (element.classList.contains(binding.value[1]) ){
                element.classList.remove(binding.value[1]);
            }
            else{
                element.classList.remove(binding.value[2]);
            }        
        }
    }
}