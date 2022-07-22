import {data} from '../utils/data';

export const fetchByItemId = (id) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            const result = data.filter(item => item.id === parseInt(id))
            if(result){
                resolve(result)
            }else{
                reject("product not found")
            }
        }, 2000);
    })
}