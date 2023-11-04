<script>
    import DayCardClosed from "./DayCardClosed.svelte";
    import DayCardOpen from "./DayCardOpen.svelte";
    import FullPageFade from "./FullPageFade.svelte";

    export let isOpen;
    // export let dayData;
</script>



{#if isOpen}
    <DayCardOpen/>
    <FullPageFade/>
{:else}
    <DayCardClosed/>
{/if}
