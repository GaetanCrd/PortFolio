<!-- <template>
  <div class="max-h-[50vh] overflow-auto sm:w-4/12 mx-auto">
    <div v-for="(project, index) in projects" :key="index">
      <a :href="project.link" target="_blank">
        <div class="flex items-center bg-blue-300 mb-4 p-2 rounded-md shadow-md">
          <div class="w-20 h-20">
            <img :src="project.image" class="w-full h-full object-cover rounded-md" :alt="project.name" />
          </div>
          <div>
            <h2 class="font-bold text-xl">{{ project.name }}</h2>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    name: 'Project 1',
    description: 'Description du projet 1',
    image: '@/assets/imgs/project1.jpeg',
    link: 'lien_vers_le_projet_1'
  },
  {
    name: 'Project 2',
    description: 'Description du projet 2',
    image: '@/assets/imgs/project2.jpeg',
    link: 'lien_vers_le_projet_2'
  },
  // Ajoutez d'autres projets au besoin
];
</script> -->

















<!-- <template>
  <div class="max-h-[50vh] overflow-auto sm:w-4/12 mx-auto">      
      
    <a href="https://dvic.devinci.fr/projects/holowars" target="_blank">
      <div class="flex items-center bg-blue-300 mb-4 p-2 rounded-md shadow-md">
      
        <div class="w-15 h-15">
          <img src="../assets/imgs/project1.jpeg" class="w-full h-full object-cover rounded-md" alt="Projet 1" />
        </div>

        <div class="ml-3">
          <p class="font-bold text-xl">HoloWars</p>
          <p>Immersive experience halfway between a laser game and a video game</p>
        </div>

      </div>
    </a>
    

    <div class="flex items-center bg-blue-300 mb-4 p-2 rounded-md shadow-md">
    
    <div class="w-15 h-15">
      <img src="../assets/imgs/project2.png" class="w-full h-full object-cover rounded-md" alt="Projet 1" />
    </div>

    <div class="ml-3">
      <p class="font-bold text-xl">How to create a life size holographic projection</p>
      <p>Design and manufacture of a hologram using the Pepper's Ghost optical illusion</p>
    </div>

  </div>
    

  <a href="https://dvic.devinci.fr/projects/biowatch" target="_blank">
      <div class="flex items-center bg-blue-300 mb-4 p-2 rounded-md shadow-md">
      
        <div class="w-15 h-19">
          <img src="../assets/imgs/project3.jpeg" class="w-full h-full object-cover rounded-md" alt="Projet 1" />
        </div>

        <div class="ml-3">
          <p class="font-bold text-xl">BioWatch</p>
          <p>A smartwatch prototype for wearable biosensors</p>
        </div>

      </div>
  </a>


  <a href="https://www.kickstarter.com/projects/stressbud/quickstarter-stressbud-a-fidget-toy-to-focus" target="_blank">
    <div class="flex items-center bg-blue-300 mb-4 p-2 rounded-md shadow-md">
      
      <div class="w-15 h-15">
        <img src="../assets/imgs/project4.png" class="w-full h-full object-cover rounded-md" alt="Projet 1" />
      </div>

      <div class="ml-3">
        <p class="font-bold text-xl">StressBud</p>
        <p>A fidget tool to focus</p>
      </div>

    </div>
  </a>


  </div>
</template> -->










<style>
    .image-link {
        text-decoration: none;
    }

    .image-container {
        width: 200px;
        height: 200px;
        overflow: hidden;
        border-radius: 8px;
        float: left;
    }

    .image-content {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .text-container {
        margin-left: 1.5rem;
        width: calc(100% - 230px); /* Ajustez la largeur de la section de texte selon vos besoins */
    }
</style>

<template>
    <div class="max-h-[50vh] overflow-auto sm:w-4/12 mx-auto">
        <a href="https://dvic.devinci.fr/projects/holowars" target="_blank" class="image-link">
            <div class="flex items-center bg-blue-300 mb-4 p-2 rounded-md shadow-md">
                <div class="image-container">
                    <img src="../assets/imgs/project1.png" alt="Projet 1" class="image-content" />
                </div>
                <div class="text-container">
                    <p class="font-bold text-xl">HoloWars</p>
                    <p>Immersive experience halfway between a laser game and a video game</p>
                </div>
            </div>
        </a>
        
        <a href="https://www.kickstarter.com/projects/stressbud/quickstarter-stressbud-a-fidget-toy-to-focus"
            target="_blank" class="image-link">
            <div class="flex items-center bg-blue-300 mb-4 p-2 rounded-md shadow-md">
                <div class="image-container">
                    <img src="../assets/imgs/project4.png" alt="Projet 4" class="image-content" />
                </div>
                <div class="text-container">
                    <p class="font-bold text-xl">StressBud</p>
                    <p>A fidget tool to focus</p>
                </div>
            </div>
        </a>
        
        <a href="https://dvic.devinci.fr/projects/biowatch" target="_blank" class="image-link">
            <div class="flex items-center bg-blue-300 mb-4 p-2 rounded-md shadow-md">
                <div class="image-container">
                    <img src="../assets/imgs/project3.png" alt="Projet 3" class="image-content" />
                </div>
                <div class="text-container">
                    <p class="font-bold text-xl">BioWatch</p>
                    <p>A smartwatch prototype for wearable biosensors</p>
                </div>
            </div>
        </a>

        <div class="flex items-center bg-blue-300 mb-4 p-2 rounded-md shadow-md">
            <div class="image-container">
                <img src="../assets/imgs/project2.png" alt="Projet 2" class="image-content" />
            </div>
            <div class="text-container">
                <p class="font-bold text-xl">How to create a life size holographic projection</p>
                <p>Design and manufacture of a hologram using the Pepper's Ghost optical illusion</p>
            </div>
        </div>


    </div>
</template>



