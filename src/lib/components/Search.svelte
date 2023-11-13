<script>
    import "@fontsource/poppins/700.css"
    import { appState_store, query_store, weatherData_store } from "./store";
    import queryCity from "../utils/processRequest";

    let citySearchValue = $query_store || "";

    async function search(){
        $appState_store = "loading";

        const data = await queryCity(citySearchValue);

        if(data !== undefined){
            $query_store = citySearchValue;
            $weatherData_store = data;
            $appState_store = "success";
        }
        else{
            $appState_store = "error";
        }
    }

    let isFocused = false;
</script>



<div class={"city-search" + ( isFocused?" city-search-focused":"") }>
    <input class="search-inp" type="text" placeholder="City:" bind:value={ citySearchValue } on:focus={() => isFocused = true} on:blur={() => isFocused = false}/> 
    <button class="search-btn" on:click={ search }></button>
</div>



<style lang="scss">
    .city-search{
        display: flex;
        align-items: center;

        margin-bottom: 100px;

        width: 1000px;

        border-bottom: 5px solid #3F3F3F;
        
        .search-inp{
            width: 100%;
            
            font-family: 'Poppins', sans-serif;
            font-weight: bold;
            font-size: 100px;

            text-align: center;

            color: #3F3F3F;
            background-color: transparent;
            border: none;
            outline: none;
        }
    
        .search-btn{
            width: 50px;
            height: 50px;
    
            background-image: url('/icons/search_grey.svg');
            background-size: contain;
    
            background-color: transparent;
            border: none;
        }
    }
    .city-search-focused{
        border-bottom: 5px solid #fff;

        .search-inp{
            color: #fff;
        }

        .search-btn{
            background-image: url('/icons/search.svg');
        }
    }
    @media (max-width: 1100px){
        .city-search{
            width: 100%;
            margin-bottom: 50px;

            .search-inp{
                font-size: 60px;
            }
            .search-btn{
                width: 40px;
                height: 40px;
            }
        }
    }
    @media (max-width: 500px){
        .city-search{
            margin-bottom: 20px;
        }
    }
</style>