<script lang="ts">
	import { createEventDispatcher, onDestroy } from "svelte";
    import FaRegTrashAlt from 'svelte-icons/fa/FaRegTrashAlt.svelte'
	import IconCheckBox from "./IconCheckBox.svelte";
    onDestroy(() => {
        // TODO: Show toast 
        console.log(`${order} destroyed`);
    })

    export let id: string,  title: string, completed: boolean, order: number;
    
    const dispatch = createEventDispatcher();
    const handleRemoveTodo = (id: string) => {
        dispatch('removeTodo', {id})
    }
    const handleToggleTodo = (id:string, value:boolean) => {
        dispatch('toggleTodo', {id,value})
    } 
</script>

<li class:completed>
        <p>{title}</p>
        <div class="icons">
            <button on:click={() => handleRemoveTodo(id)}> 
                <span class="w-5 inline-block">
                    <FaRegTrashAlt />
                  </span>
            </button>
            <IconCheckBox handleToggleTodo={() => handleToggleTodo(id, !completed)} {completed} />
        </div>
</li>

<style lang="postcss">
    li {
        @apply w-full flex justify-between items-center;
    }
    p {
        @apply text-xl font-semibold opacity-95;
    }
    .completed p {
        @apply text-gray line-through opacity-50;
    }
    .icons {
        @apply justify-center items-center;
    }
</style>