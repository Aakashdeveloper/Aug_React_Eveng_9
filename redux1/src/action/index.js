export function movieList(){
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:1,name:'Mad Max'},
            {id:2,name:'Blood Dimaond'},
            {id:3,name:'Avengers'}
        ]
    }
}