<script setup>
import {ref} from 'vue';

const newTask = ref('');

const emit = defineEmits(['add-task']);

function formSubmit(){
    //comunica al genitore l'invio del nuovo valore
    emit('add-task', newTask.value);
    newTask.value = '';
}

</script>

<template>

<form @submit.prevent="formSubmit">

    Nuovo todo:
    <input type="text" v-model="newTask">
    <button>Aggiungi</button>

  </form>

</template>

<style scoped>

</style>