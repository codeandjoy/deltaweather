<script>
    import DayCardClosed from "./DayCardClosed.svelte";

    export let isOpen;
    // export let dayData;
</script>



{#if isOpen}
    <div>Placeholder</div>
{:else}
    <DayCardClosed/>
{/if}
