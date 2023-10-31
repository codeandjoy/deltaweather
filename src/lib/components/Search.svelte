<script>
    import "@fontsource/poppins/700.css"

    let searchData = "";

    function querySearch(){
        console.log(searchData);
    }
</script>



<div class="city-search">
    <input class="search-inp" type="text" placeholder="City:" bind:value={searchData}/>
    <button class="search-btn" on:click={ querySearch }></button>
</div>



<style lang="scss">
    .city-search{
        display: flex;
        align-items: center;

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