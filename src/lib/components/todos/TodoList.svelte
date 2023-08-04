<svelte:options immutable={true} />

<script lang='ts'>
	import { afterUpdate } from "svelte";
	import Button from "../Button.svelte";
	import Todo from "./Todo.svelte";
    import {v4 as uuid} from "uuid";
	import DateInfo from "../DateInfo.svelte";
    import FaPlus from 'svelte-icons/fa/FaPlus.svelte'
	import IconCheckBox from "./IconCheckBox.svelte";
	import { flip } from "svelte/animate";
	import { scale } from "svelte/transition";
	import appear from "$lib/animations/appear";
	import typewriter from "$lib/animations/typewriter";
    afterUpdate(() => {
        if(autoscroll) listDiv.scrollTo(0, listDivScrollHeight);
        autoscroll = false;
    })

    let todos: Model.Todo[] = [];
    let prevTodos = todos;
    let inputText = "";
    let autoscroll: boolean, listDivScrollHeight: number, listDiv: HTMLDivElement;
    let hideDone = false;

    $: {
        autoscroll = todos.length > prevTodos.length;
        prevTodos = todos;
    }

    const handleAddTodo = () => {
        todos = [...todos, {
            id: uuid(),
            title: inputText,
            completed: false
        }]

        inputText = ""
    }
    const handleRemoveTodo = (event: CustomEvent<{id: string}>) => {
        todos = todos.filter(todo => todo.id !== event.detail.id)
    }
    const handleToggleTodo = (event: CustomEvent<{id: string, value: boolean}>) => {
        todos = todos.map(todo => {
            if(todo.id === event.detail.id) {
                return {
                    ...todo,
                    completed: event.detail.value
                }
            }
            return  { ...todo };
        })
    }
</script>

<div class="content-wrapper">
    <div class="component-wrapper">
        <div class="flex flex-row pb-2">
            <IconCheckBox handleChecked={() => {
                hideDone = !hideDone;
            }} isChecked={hideDone}/>
            <p class="pl-2">Hide done</p>
        </div>
        <DateInfo/>
    </div>
    <div class="todo-list" bind:this={listDiv}>
        <!-- 만약 위 div에서 쓴다면, 스크롤이 가능한 영역에서 보이는 부분의 높이라서, 아래 div를 만들어줌 -->
        <div bind:offsetHeight={listDivScrollHeight}>
            {#if todos.length === 0}
                <p class="no-items-text" in:typewriter={{}}>No Todos yet!</p>
            {:else}
            <ul transition:appear={{duration:200}}>
                    <!-- id is for help for complier to which Dom node should be update -->
                {#each todos as todo  (todo.id)}
                {@const {id,completed, title} = todo}
                <!-- Reorder list element smothly -->
                <div animate:flip={{ duration: 1000 }} transition:scale={{start: 0.1}}> 
                    {#if !(hideDone && completed)}
                        <div class="component-wrapper">
                            <Todo  on:removeTodo={handleRemoveTodo} on:toggleTodo={handleToggleTodo} {id} {title} {completed}></Todo>
                        </div>
                    {/if}
                </div>
                {/each}
            </ul>          
            {/if}
        </div>
    </div>
    <form class="add-todo-form" on:submit|preventDefault={handleAddTodo}>
        <div class="component-wrapper">
            <input class="text-gray h-4/6 w-full outline-none" bind:value={inputText} type="text" placeholder="Add Todo..." />
        </div>
        <div class="btn">
            <Button type="submit" disabled={!inputText}>
                <span class="plus-icon w-6" class:disabled={!inputText}>
                    <FaPlus/>
                </span>
            </Button>
        </div>
    </form>  
</div>

<style lang="postcss">
    .content-wrapper {
        @apply h-[600px] min-w-[400px] flex flex-col justify-between items-center pt-14 px-14;
    }

    .todo-list {
        @apply h-full w-full overflow-auto pt-8;
    }
    .component-wrapper {
        @apply w-full h-12 flex flex-col justify-center items-start;
    }
    .add-todo-form {
        @apply w-full flex flex-col justify-evenly items-center translate-y-1/3;
    }
    .no-items-text {
        @apply font-semibold text-center;
    }
    .plus-icon {
        @apply text-gray;
    }
    .plus-icon.disabled {
        @apply text-current;
    }
</style>