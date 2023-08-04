<script lang="ts">
import FaRegCheckCircle from 'svelte-icons/fa/FaRegCheckCircle.svelte'

export let completed = false;
export let handleToggleTodo: () => void;

</script>
<button class="pl-2" on:click={handleToggleTodo}>
    <span class:completed class="w-5 inline-block">
        <FaRegCheckCircle  />
    </span>
</button>

<style lang="postcss">
    span {
      @apply text-gray;
    }
    .completed {
        @apply text-primary;

    }
</style>
