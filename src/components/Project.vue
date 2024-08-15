<script setup lang="ts">
import { computed } from 'vue';
interface Props {
    title: string,
    github: string,
    link: string,
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
</script>
<template>
    <div class="flex flex-col xl:w-2/5 border-black border-2 max-w-4xl mx-auto h-fit rounded-2xl bg-gray-50">
        <div class="flex flex-wrap p-5 minh-header 2xl:min-h-96 items-center gap-5">
            <div class="flex gap-5">
                <h2 class="w-4/5">{{ title }}</h2>
                <div class="flex items-center gap-3">
                    <a :href="github" class="basis-full" target="_blank">
                        <img class="aspect-square w-12" src="/src/assets/images/logos/Github.png" alt="Github Icon" />
                    </a>
                    <a :href="link" class="basis-full" target="_blank">
                        <img class="aspect-square w-12" src="/src/assets/images/logos/Webpage Icon.png"
                            alt="Icon representing a webpage">
                    </a>
                </div>
            </div>
            <ul class="flex overflow-x-scroll overflow-y-hidden w-fit py-8 px-3 mx-5 gap-5 rounded-md">
                <li v-for="(link, img) in techStackPaths" class="flex-shrink-0 h-fit w-fit">
                    <a :href="link" target="_blank" class="h-14 block">
                        <img class="drop-shadow-lg h-full object-contain hover:scale-110 transition ease-in-out"
                            :src="img">
                    </a>
                </li>
            </ul>
        </div>
        <hr />
        <ul class="m-5 space-y-4 minh-bp list-inside leading-relaxed overflow-scroll">
            <li class="list-disc text-xl" v-for="(item) in bulletpoint">{{ item }}</li>
        </ul>
        <hr />
        <a :href="imagePath" class="hover:contrast-50 animation ease-in hover:cursor-zoom-in" target="_blank">
            <img class="rounded-b-2xl object-cover aspect-video" :src="imagePath" />
        </a>
    </div>
</template>
<style>
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
