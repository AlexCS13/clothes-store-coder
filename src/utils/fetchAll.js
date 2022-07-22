import {data} from '../utils/data';

export const fetchAll = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            if(data){
                resolve(data)
            }else{
                reject("items not found")
            }
        }, 2000);
    })
}