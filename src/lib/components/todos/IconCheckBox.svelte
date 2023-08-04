<script lang="ts">
	import longpress from '$lib/actions/longpress';
    import FaRegCheckCircle from 'svelte-icons/fa/FaRegCheckCircle.svelte'

    export let isChecked = false;
    export let handleChecked: () => void;
    export let handleLongpress = () => {};
</script>

<button use:longpress={{duration:1000}} on:longpress={handleLongpress}  on:click={handleChecked}>
    <span class:isChecked class="w-5 inline-block">
        <FaRegCheckCircle  />
    </span>
</button>

<style lang="postcss">
    span {
      @apply text-gray;
    }
    .isChecked {
        @apply text-primary;

    }
</style>
