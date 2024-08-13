<script setup lang="ts">
  import projects from './assets/content/projects.json';
  import jobs from './assets/content/jobs.json';
  import education from './assets/content/education.json';
  import skills from './assets/content/skills.json'
  import Project from './components/Project.vue';
  import JobOrEducation from './components/JobOrEducation.vue'
  import SkillSection from './components/SkillSection.vue';
  import Header from './components/Header.vue';
  import Hero from './components/Hero.vue';
</script>

<template>
  <Header></Header>
  <Hero id="about"></Hero>
  <hr/>
  <h1 id="education" class="scroll-mt-20">Education</h1>
  <JobOrEducation id="education" v-for="(job, index) in education"
    :key="index"
    :bulletpoint="job.bulletpoints"
    :titleOrDegree="job.titleOrDegree"
    :companyOrSchool="job.companyOrSchool"
    :dateRange="job.dateRange"
    :type="job.type"
    ></JobOrEducation>
  <hr/>
  <h1 id="work">Work Experience</h1>
  <JobOrEducation v-for="(job, index) in jobs"
    :key="index"
    :bulletpoint="job.bulletpoints"
    :titleOrDegree="job.titleOrDegree"
    :companyOrSchool="job.companyOrSchool"
    :dateRange="job.dateRange"
    :type="job.type"
    ></JobOrEducation>
  <hr/>
  <h1 id="projects" >Projects</h1>
  <div class="flex flex-wrap p-5 gap-5 content-between justify-center w-screen">
    <Project v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      :github="project.github"
      :link="project.link"
      :bulletpoint="project.bulletpoints"
      :tech-stack="project.techStack"
      :image="project.image"
      ></Project>
  </div>
  <hr/>
  <h1 id="skills">Skills</h1>
  <SkillSection v-for="(content, section) in skills"
    :key="section"
    :title="section"
    :skills="content"
  ></SkillSection>
</template>