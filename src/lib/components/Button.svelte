<script lang="ts">
export let size = 'small';
</script>

<button class="fab" class:size-lg={size == 'large'} {...$$restProps} >
    <slot>Fallback</slot>
</button>

<style lang="postcss">
    button {
        @apply py-2 px-4 w-24 h-24;
    }
    :disabled {
        @apply bg-gray opacity-80 cursor-not-allowed;
    }
    :enabled:hover {
        @apply drop-shadow-2xl animate-pulse duration-75;
    }
    .size-lg {
        @apply w-32 h-32;
    }

</style>