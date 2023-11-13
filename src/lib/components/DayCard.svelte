<script>
    export let dayData;

    import DayCardClosed from "./DayCardClosed.svelte";
    import DayCardOpen from "./DayCardOpen.svelte";
    import FullPageFade from "./FullPageFade.svelte";

    let isOpen = false;
</script>



{#if isOpen}
    <button class="wrapper-button" on:click={() => isOpen = false}>
        <DayCardOpen dayData={ dayData }/>
    </button>
    <button class="wrapper-button" on:click={() => isOpen = false}>
        <FullPageFade/>
    </button>
{:else}
    <button class="wrapper-button" on:click={() => isOpen = true}>
        <DayCardClosed dayData={ dayData }/>
    </button>
{/if}

<style>
    .wrapper-button{
        background-color: transparent;
        border: none;
    }
</style>
