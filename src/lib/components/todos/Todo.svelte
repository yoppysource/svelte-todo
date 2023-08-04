<script lang="ts">
	import { createEventDispatcher, onDestroy } from "svelte";
    import FaRegTrashAlt from 'svelte-icons/fa/FaRegTrashAlt.svelte'
	import IconCheckBox from "./IconCheckBox.svelte";
	import tippy from "$lib/actions/tippy";

    onDestroy(() => {
        // TODO: Show toast 
        // https://svelte.dev/repl/0091c8b604b74ed88bb7b6d174504f50?version=3.35.0
        console.log(`${title} destroyed`);
    })

    export let id: string,  title: string, completed: boolean;
    
    const dispatch = createEventDispatcher();
    const handleRemoveTodo = (id: string) => {
        dispatch('removeTodo', {id})
    }
    const handleToggleTodo = (id:string, value:boolean) => {
        dispatch('toggleTodo', {id,value})
    } 
</script>

<li class:completed >
        <p>{title}</p>
        <div class="icons">
            <button class="pr-2" on:click={() => handleRemoveTodo(id)} use:tippy={{content: "delete todo", placement: "left"}}> 
                <span class="w-5 inline-block">
                    <FaRegTrashAlt />
                    <slot/>
                  </span>
            </button>
            <IconCheckBox handleLongpress={() => handleRemoveTodo(id)}  handleChecked={() => handleToggleTodo(id, !completed)} isChecked={completed} />
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