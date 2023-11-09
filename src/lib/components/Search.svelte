<script>
    import "@fontsource/poppins/700.css"
    import queryCity from "../utils/processRequest";

    let searchData = "";

    async function search(){
        const data = await queryCity(searchData);
        console.log(data);
    }
</script>



<div class="city-search">
    <input class="search-inp" type="text" placeholder="City:" bind:value={searchData}/>
    <button class="search-btn" on:click={ search }></button>
</div>



<style lang="scss">
    .city-search{
        display: flex;
        align-items: center;

        margin-bottom: 100px;

        width: 1000px;

        border-bottom: 5px solid #fff;
        
        .search-inp{
            width: 100%;
            
            font-family: 'Poppins', sans-serif;
            font-size: 100px;

            text-align: center;

            color: #fff;
            background-color: transparent;
            border: none;
            outline: none;
        }
    
        .search-btn{
            width: 50px;
            height: 50px;
    
            background-image: url('/icons/search.svg');
    
            background-color: transparent;
            border: none;
        }
    }    
</style>