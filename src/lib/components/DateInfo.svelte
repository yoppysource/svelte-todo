<script lang="ts">
    const date = new Date();
    const day = date.getDate();
    const day_in_str =  date.toLocaleString('en', { weekday: 'long' }).toUpperCase();
    const month =  date.toLocaleString('en', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();
</script>

<div class="date-info">
    <div class= "left-date">
        <p class="date">{day}</p>
        <div class="flex flex-col px-2">
            <span class="translate-y-0.5 font-semibold text-m">{month}</span>
            <span class="-translate-y-1 font-thin">{year}</span>
        </div>
    </div>
    <p class="font-semibold opacity-90">{day_in_str}</p>
</div>

<style lang="postcss">
    .date-info {
        @apply w-full flex flex-row justify-between items-center;
    }
    .left-date {
        @apply flex flex-row items-center;
    }

    .date {
        @apply font-semibold text-5xl;
    }

</style>