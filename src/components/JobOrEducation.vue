<template>
    <div>
        <div class="flex flex-col w-screen items-center font-terminal p-5 gap-3 bg-black">
            <div class="items-center gap-5 w-2/5">
                <h2 class="text-4xl font-semibold text-white">{{ titleOrDegree }}</h2>
                <h3 class="text-3xl text-white">{{ companyOrSchool }}</h3>
                <p class="text-2xl text-white">{{ dateRange }}</p>
                <p class="text-2xl text-white">{{ type }}</p>
            </div>
            <ul class="w-2/5 space-y-4 list-inside leading-relaxed">
                <li class="list-disc text-xl" v-for="(item) in bulletpoint">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
interface Props {
    titleOrDegree: string;
    companyOrSchool: string;
    dateRange: string;
    type: string,
    bulletpoint: string[];
}

const {titleOrDegree, companyOrSchool, dateRange, bulletpoint} = defineProps<Props>();
</script>