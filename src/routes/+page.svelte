<script>
    import Search from "../lib/components/Search.svelte";
</script>



<svelte:head>
    <title>Test</title>
</svelte:head>

<div class="delta-weather-container">
    <Search/>
</div>



<style>
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
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100vh;
    }
</style>