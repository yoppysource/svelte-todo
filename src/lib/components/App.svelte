<script lang="ts">
    import IconCheckBox from "./todos/IconCheckBox.svelte";
    import DateInfo from "./DateInfo.svelte";
    import TodoList from "./todos/TodoList.svelte";
    import viewSetting from "$lib/stores/viewSetting";
    import { onDestroy } from "svelte";

    // Prevent memory leak
    onDestroy(() => {
        unsubscribe();
    })

    let hideDone: boolean;
    // 실제로는 $store 형태로 쓰는게 좋음
    const unsubscribe = viewSetting.subscribe(value => {
        hideDone = value.hideDone;
    })

    $: {
        viewSetting.update(previousViewSetting => {
            return {
                ...previousViewSetting,
                hideDone
            }
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
    <TodoList/>
</div>


<style lang="postcss">
    .content-wrapper {
        @apply h-[600px] min-w-[400px] flex flex-col justify-between items-center pt-14 px-14;
    }

    .component-wrapper {
        @apply w-full h-12 flex flex-col justify-center items-start;
    }
</style>