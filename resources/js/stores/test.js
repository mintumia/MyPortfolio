import {ref} from 'vue';
import {defineStore} from 'pinia';

export const useTestStore = defineStore('test',()=>{
const mintu = ref('Md. Mintu Mia from Test Store');


return{
    mintu,

}


})
