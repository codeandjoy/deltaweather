<script>
    export let dayData;
    export let isOpen;

    import DayCardClosed from "./DayCardClosed.svelte";
    import DayCardOpen from "./DayCardOpen.svelte";
    import FullPageFade from "./FullPageFade.svelte";

</script>



{#if isOpen}
    <DayCardOpen dayData={ dayData }/>
    <FullPageFade/>
{:else}
    <DayCardClosed dayData={ dayData }/>
{/if}
