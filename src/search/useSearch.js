import { computed } from "vue";

export default function useSearch( searchStr, reviews ){  
    
    const results = computed( ( ) => {
        if( searchStr ){
            return reviews.filter( review => review.name.toLocaleLowerCase().includes( searchStr.toLocaleLowerCase() ) ) ;
        }
        else{
            return [];
        }
    });

    return { searchResults : results };
}