import {data} from '../utils/data';

export const fetchByCategory = (category) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            const result = data.filter(item => item.category === category)
            if(result){
                resolve(result)
            }else{
                reject("products not found")
            }
        }, 2000);
    })
}