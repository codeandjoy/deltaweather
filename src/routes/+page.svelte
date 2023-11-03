<script>
    import Search from "../lib/components/Search.svelte";
    import DayCards from "../lib/components/DayCards.svelte";

    let dataAvailable = true;
</script>



<svelte:head>
    <title>Test</title>
</svelte:head>

<div class="delta-weather-container">
    <Search/>
    {#if dataAvailable}
        <DayCards/>
    {/if}
</div>



<style lang="scss">
    :global(body){
        margin: 0;
        padding: 0;

        background-color: #121212;

    }
    :global(*){
        border-color: red;
    }

    .delta-weather-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100vh;
    }
</style>