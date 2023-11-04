<script>
    import DayCard from "./DayCard.svelte";

</script>



<div class="day-cards-container">
    <DayCard isOpen={ true }/>
    <DayCard isOpen={ false }/>
    <DayCard isOpen={ false }/>
</div>



<style lang="scss">
    .day-cards-container{
        display: flex;
        gap: 50px;
    }

</style>