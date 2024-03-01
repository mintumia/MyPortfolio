<script setup>
import {useTimeoutPoll} from '@vueuse/core';
import {computed, onMounted, ref, watchEffect} from 'vue';


const top = ref(0);
const showButton = ref(false);
const isClicked = ref(false);

const {resume} = useTimeoutPoll(()=>{

    if(document.documentElement.scrollTop > 20){
        console.log("screen large: "+ document.documentElement.scrollTop);
        showButton.value = true;
    }else {
        showButton.value = false;
    }

    console.log("Scroll: "+ document.documentElement.scrollTop +" Screen: "+ window.screen.height);

if(isClicked.value){
    goTop.value;

    isClicked.value = false;
}
},200)


onMounted(()=>{
  resume();

});




const goTop = computed(()=>{



    if(isClicked.value){

        console.log(document.documentElement.scrollTop);
        /*window.body.scroll.y = top.value;*/
        document.body.scrollTop = top.value;

        document.documentElement.scrollTop = top.value;
    }


});


</script>

<template>


<div v-if="showButton" class="fixed bottom-20 right-8 w-8 h-8 z-50 mn-center">


    <button @click="isClicked = true" class="relative mx-auto animate-bounce duration-300 text-center bg-white rounded-full ring-1 ring-slate-700">
<!--    <a href="#navbar" class="relative mx-auto animate-bounce duration-300 text-center bg-white rounded-full ring-1 ring-slate-700">-->

           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 11.8V15q0 .425.288.713T12 16q.425 0 .713-.288T13 15v-3.2l.9.9q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7l-2.6-2.6q-.3-.3-.7-.3t-.7.3l-2.6 2.6q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg>


        <p class="text-sm text-center stroke-1 stroke-amber-50">
            UP
        </p>
<!--        </a>-->
    </button>

</div>
</template>


