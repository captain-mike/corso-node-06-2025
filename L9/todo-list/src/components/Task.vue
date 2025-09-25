<script setup>

    const props = defineProps({
        task: {
            type: Object,
            required: true
        }
    })

    const emit = defineEmits(['remove-task','toggle-complete']);

</script>

<template>

    <div class="task" :style="{ textDecoration : task.completed ? 'line-through' : 'none' }">
        <span>{{ task.text }}</span>
        
        <button @click="emit('remove-task', task.id)">Elimina</button>
        <button @click="emit('toggle-complete', task.id)">Completa</button>
    </div>

</template>

<style scoped></style>