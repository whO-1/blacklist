export default {
    mounted: (element,binding) => {
         if( element.classList.contains(binding.value.toggleClass) ){
             element.classList.remove( binding.value.toggleClass);
         }     
    },
    updated: (element,binding) => {  
        if( Object.values( binding.value.obj ).indexOf( element.name ) !== -1 ){
            element.classList.add(binding.value.toggleClass);
        } 
        else if( element.classList.contains(binding.value.toggleClass) ){
            element.classList.remove( binding.value.toggleClass);
        }
    }
}