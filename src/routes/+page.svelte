<script>
    import { anyCardOpen_store } from "../lib/components/store";
    import Search from "../lib/components/Search.svelte";
    import DayCards from "../lib/components/DayCards.svelte";

    $: anyCardOpen = $anyCardOpen_store;
    let dataAvailable = true;
</script>



<svelte:head>
    <title>DeltaWeather</title>
</svelte:head>

<div class="delta-weather-container">
    {#if !anyCardOpen}
        <Search/>
    {/if}
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
    @media (max-width: 1100px){
        .delta-weather-container{
            padding: 50px;
            justify-content: flex-start;
            box-sizing: border-box;
        }
    }
    @media (max-width: 500px){
        .delta-weather-container{
            padding: 20px;
        }
    }
</style>