<script setup lang="ts">
import { computed, ref } from 'vue';
interface Props {
    title: string,
    github: string,
    link: string | undefined,
    bulletpoint: string[],
    techStack: Record<string, string | undefined>,
    image: string
}
const { title, bulletpoint, techStack, image } = defineProps<Props>();
const techStackPaths = computed(() => {
    let newPaths: Record<string, string | undefined> = {};
    for (const key in techStack) {
        const newKey = "/src/assets/images/logos/" + key;
        newPaths[newKey] = techStack[key];
    }
    return newPaths;
});
const imagePath = computed(() => "/src/assets/images/projects/" + image);
const collapseStack = ref(true);
const collapseBp = ref(true);
</script>
<template>
    <div v-bind:class="(collapseStack && collapseBp) ? 'max-h-[50rem] md:max-h-[60rem]' : 'max-h-[7000px]'"
        class="flex flex-col xl:w-2/5 border-black border-2 transition-all ease-in-out duration-300 max-w-4xl mx-auto rounded-2xl bg-gray-50">
        <div class="flex flex-wrap p-5 items-center gap-5">
            <div class="flex flex-wrap justify-between w-full gap-5">
                <h2 class="">{{ title }}</h2>
                <div class="flex items-center gap-3">
                    <a :href="github" class="basis-full" target="_blank">
                        <img class="aspect-square w-12" src="/src/assets/images/logos/Github.png" alt="Github Icon" />
                    </a>
                    <a v-if="link" :href="link" class="basis-full" target="_blank">
                        <img class="aspect-square w-12" src="/src/assets/images/logos/Webpage Icon.png"
                            alt="Icon representing a webpage">
                    </a>
                </div>
            </div>
            <div class="w-full">
                <button class="w-full bg-black text-white rounded-lg p-3" @click="collapseStack = !collapseStack"
                    type="button">
                    <div class="px-3 items-center flex flex-row w-full">
                        <p class="font-semibold">Tech Stack</p>
                        <img v-bind:class="(collapseStack) ? '' : 'rotate-180'"
                            class="w-10 h-10 ml-auto transition ease-in-out" src="../assets/images/logos/arrow.png"
                            alt="Expand/Collapse Arrow"></img>
                    </div>
                </button>
                <div v-bind:class="(collapseStack) ? 'collapsed' : ''"
                    class="overflow-y-hidden transition-all duration-300 max-h-[1000px] w-fit ease-in-out">
                    <ul class="flex flex-wrap w-fit pt-8 px-3 gap-5">
                        <li v-for="(link, img) in techStackPaths" class="flex-shrink-0 h-fit w-fit">
                            <a :href="link" target="_blank" class="h-14 block">
                                <img class="drop-shadow-lg h-full object-contain hover:scale-110 transition ease-in-out"
                                    :src="img">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr />
        <ul v-bind:class="(collapseBp) ? 'max-h-40' : 'max-h-[1000px]'"
            class="m-5 space-y-4 list-inside transition-all duration-300 ease-in-out leading-relaxed overflow-hidden">
            <li class="list-disc text-xl" v-for="(item) in bulletpoint">{{ item }}</li>
        </ul>
        <button class="w-fit p-2 mx-auto bg-black font-semibold rounded-lg text-white" @click="collapseBp = !collapseBp"
            type="button">
            {{ (collapseBp) ? 'Read More' : 'Read Less' }}
        </button>
        <hr />
        <a :href="imagePath" class="hover:contrast-50 animation ease-in hover:cursor-zoom-in" target="_blank">
            <img class="rounded-b-[0.8rem] object-cover aspect-video" :src="imagePath" />
        </a>
    </div>
</template>
<style>
.collapsed {
    max-height: 0px;
    padding: 0px;
    margin: 0px;
}

.minh-header {
    @media (min-width: 1280px) {
        min-height: 26rem;
    }

    @media (min-width: 1536px) {
        min-height: 24rem;
    }
}

.minh-bp {
    @media (min-width: 1280px) {
        min-height: 30rem;
    }

    @media (min-width: 1536px) {
        min-height: 25rem;
    }
}
</style>
