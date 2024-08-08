<template>
    <div>
        <div class="flex flex-col w-screen p-5 gap-3">
            <div class="gap-5 ">
                <h2>{{ titleOrDegree }}</h2>
                <h3>{{ companyOrSchool }}</h3>
                <p>{{ dateRange }}</p>
                <p>{{ type }}</p>
            </div>
            <ul class="space-y-4 list-inside leading-relaxed">
                <li class="list-disc" v-for="(item) in bulletpoint">{{ item }}</li>
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