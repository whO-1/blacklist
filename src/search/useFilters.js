
function filterResults (results , filter){
    const filteredResults = results.filter( item => {
            let flag = true;
            for(const key in filter){
                if( !( item[key] !== undefined && item[key] === filter[key] )  ){
                    flag = false;
                }
            }
            return flag ;
        });
    return filteredResults;
}

export default function useFilters ( results, filter ) {
    let filteredResults;
    if( results.length > 0 ){
        filteredResults = filterResults (results , filter) ;
    }
    else{
        filteredResults = [];
    }
    return filteredResults;
}