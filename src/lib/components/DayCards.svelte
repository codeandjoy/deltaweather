<script>
    import DayCard from "./DayCard.svelte";
    import { appState_store, weatherData_store } from "./store";

    $: appState = $appState_store;
    $: weatherData = $weatherData_store;
</script>


{#if appState === "success"}
    <div class="day-cards-container">
        {#each weatherData as dayData }
            <DayCard dayData={ dayData }/>
        {/each}
    </div>
{:else if appState === "loading"}
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
{:else if appState === "error"}
    <div class="error-msg"><span>Something went wrong :(</span></div>
{/if}

<style lang="scss">
    .day-cards-container{
        display: flex;
        gap: 50px;
    }
    @media (max-width: 1100px){
        .day-cards-container{
            flex-wrap: wrap;
            justify-content: center;

            padding-bottom: 50px;

            width: 100%;
        }
    }
    @media (max-width: 820px){
        .day-cards-container{
            flex-direction: column;
            flex-wrap: nowrap;
            align-items: center;
        }
    }
    @media (max-width: 500px){
        .day-cards-container{
            gap: 20px;

            padding-bottom: 20px;
        }
    }
    @media (max-width: 440px){
        .day-cards-container{
            align-items: stretch;
        }
    }


    .lds-ring {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .error-msg{
        color: #FF3F3F;

        span{
            font-size: 18px;
        }
    }

</style>