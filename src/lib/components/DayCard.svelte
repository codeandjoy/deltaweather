<script>
    export let dayData;

    import { anyCardOpen_store } from "./store";
    import DayCardClosed from "./DayCardClosed.svelte";
    import DayCardOpen from "./DayCardOpen.svelte";
    import FullPageFade from "./FullPageFade.svelte";

    let isOpen = false;

    $: anyCardOpen = $anyCardOpen_store;
</script>



{#if isOpen}
    <button class="wrapper-button" on:click={() => {isOpen = false ; $anyCardOpen_store = false}}>
        <DayCardOpen dayData={ dayData }/>
    </button>
    <button class="wrapper-button" on:click={() => {isOpen = false ; $anyCardOpen_store = false}}>
        <FullPageFade/>
    </button>
{:else if !anyCardOpen}
    <button class="wrapper-button" on:click={() => {isOpen = true ; $anyCardOpen_store = true}}>
        <DayCardClosed dayData={ dayData }/>
    </button>
{/if}

<style>
    .wrapper-button{
        background-color: transparent;
        border: none;
    }
</style>
