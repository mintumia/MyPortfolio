<script setup>
import {onMounted, ref, reactive, computed} from 'vue';
import {gsap} from "gsap";


const content = ref(null);
const mObj = reactive(null);

/*let tween = gsap.to(content.value, {
    delay: 1, rotate:360,duration: 2, ease: "bounce",repeat:1


})*/


onMounted(() => {

    let tween = gsap.to(content.value, {
        duration: 2,
        x: +200, // animate by the px width of the nav
        xPercent: -100, // offset by the width of the box
        rotation: 360,
        ease: "bounce.inOut",

    });
    tween.play();
});


function mintuAction() {
    console.log("Action Working");
  // mObj.value.play();

}

function mintuAction2() {
    console.log("Action Working");
  //  mObj.reset();

}


</script>

<template>
    <div>
        <div ref="content" class="w-20 h-20 bg-slate-700">
            Mintu Mia
        </div>


        <button @click="mintuAction" class="bg-amber-400 rounded-lg px-3 my-2">Play</button>
        <button @click="mintuAction2" class="bg-amber-400 rounded-lg px-3 my-2">Replay</button>
    </div>
</template>


