<script setup>
import { ref, computed } from 'vue';
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import NotFound from './components/pages/NotFound.vue';

//Oggetto che mappa i percorsi ai componenti vue corrispondenti
const routes = {
  '/' : Home,
  '/about' : About
}

//l'hash corrente dell'url 
const currentPath = ref(window.location.hash);


//Ascolto i cambiamenti dell'hash nell'url del browser 
window.addEventListener('hashchange', () => {
  //Aggiorna il valore del percorso corrente quando l'hash cambia 
  currentPath.value = window.location.hash;

});

//Computed property
const currentView = computed(() => {
  //currentPath.value.slice(1) rimuove il # dall'inizio dell'hash -> #/about diventa /about
  //Restituisce il componente corrispondente al percorso oppure NotFound se il percorso non dovesse esistere
    return routes[currentPath.value.slice(1) || '/'] || NotFound
});


</script>

<template>
<!-- Link di navigazione che cambiano l'hash dell'Url per navigare tra le pagine -->
<a href="#/">Home</a> |
<a href="#/about">About</a> |
<a href="#/non-esistente">404</a>


<component :is="currentView"></component>

</template>

<style scoped></style>
