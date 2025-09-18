<script setup>
import {ref} from 'vue';
import TaskForm from './components/TaskForm.vue'
import Task from './components/Task.vue'

const title = ref('Todo List');//per accedere al valore devo fare riferimento alla proprietà value dell'oggetto restituito da ref
//nota: non è necessario riferirsi a value nell'html

console.log(title.value);

//funzionamento todo-list
const taskList = ref([]);


function addTask(taskText){
    taskList.value.push({
      id: crypto.randomUUID(),
      text:taskText,
      completed: false
    });
}

function deleteTask(taskId){
  taskList.value = taskList.value.filter(t => t.id !== taskId);
}


</script>

<template>
  <h1>{{ title }}</h1>
  
  <TaskForm @add-task="addTask"/>

  <div id="task-list">
    <Task 
    v-for="task in taskList" 
    :key="task.id" 
    :task="task" 
    @remove-task="deleteTask"
    />
  </div>

</template>

<style scoped>

#task-list{
  background-color: #ccc;
  padding: 15px;
  margin-top: 15px;
}

.task{
  background-color: #ffd500;
  height: 50px;
  margin-bottom: 5px;
}
.task.done{
  background-color: #5eff00;
}

</style>
