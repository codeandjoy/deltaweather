<script>
    export let dayData;
</script>


<div class="day-card">
    <div class="day-card-art" style="background-image: url('/icons/weather_icons/{ dayData.wmo[4].icon }_white.svg');"></div>

    <div class="day-card-content-container">
        <div class="weather-img-container">
            <div class="weather-img" style="background-image: url('/icons/weather_icons/{ dayData.wmo[4].icon  }.svg');"></div>
            <div class="weather-desc" style="color: { dayData.wmo[4].color  }">
                <span>{ dayData.wmo[4].name }</span>
            </div>
        </div>
        
        <div class="date-container">
            <span class="card-day">{ dayData.time[4].weekday }</span>
            <span class="card-date">{ dayData.time[4].date }</span>
        </div>
        <div class="weather-temp">
            <span class="temp-value">{ dayData.temperature[4] }</span>
            <span class="temp-unit">°C</span>
        </div>
        <div class="weather-extra-data-container">
            <div class="extra-data">
                <div class="extra-data--icon extra-data--icon-wind"></div>
                <div class="extra-data--value">{ dayData.wind[4] } km/h</div>
            </div>
            <div class="extra-data">
                <div class="extra-data--icon extra-data--icon-humidity"></div>
                <div class="extra-data--value">{ dayData.humidity[4] } %</div>
            </div>
            <div class="extra-data">
                <div class="extra-data--icon extra-data--icon-pressure"></div>
                <div class="extra-data--value">{ dayData.pressure[4] } hPa</div>
            </div>
        </div>
    </div>
</div>



<style lang="scss">
    .day-card{
        position: relative;

        padding: 50px;

        font-family: 'Lato', sans-serif;

        background-color: #000;
        border-radius: 20px;

        overflow: hidden;

        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); 

        .day-card-art{
            position: absolute;
            left: 50%;
            bottom: -60%;
            transform: translateX(-50%);
            z-index: 1;

            width: 400px;
            height: 400px;

            background-image: url('/icons/weather_icons/sun_white.svg');
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            opacity: 4%;

            border-style: dashed;
        }


        .day-card-content-container{
            position: relative;
            z-index: 2;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .weather-img-container{
                position: relative;
    
                margin-top: -30px;
    
                .weather-img{
                    width: 200px;
                    height: 200px;
                
                    background-image: url('/icons/weather_icons/sun.svg');
                    background-position: center;
                    background-size: contain;
                    background-repeat: no-repeat;
    
                    opacity: .2;
                }
    
                .weather-desc{
                    position: absolute;
                    top: 49%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    
                    width: 100%;
                    text-align: center;

                    font-size: 34px;
                    font-weight: bold;
                }
            }
    
            .date-container{
                position: relative;
                z-index: 2;

                display: flex;
                flex-direction: column;
                align-items: center;
    
                margin-top: -50px;
                margin-bottom: 5px;
    
                
                .card-day{
                    font-size: 24px;
                    font-weight: bold;
                    color: #fff;
                }
                .card-date{
                    font-size: 14px;
                    font-weight: bold;
                    color: #3f3f3f;
                }
            }
            
            .weather-temp{
                position: relative;
    
                margin-bottom: 8px;
                margin-right: 16px;
    
                color: #fff;
    
                .temp-value{
                    font-size: 60px;
                    font-weight: bold;
                }
                .temp-unit{
                    position: absolute;
                    top: 12px;
                    right: -20px;
                    font-size: 16px;
                }
            }
    
            .weather-extra-data-container{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: 5px;
    
                min-width: 50%;
                max-width: 80%;
    
                .extra-data{
                    display: flex;
                    align-items: center;
    
                    color: #acacac;
    
                    .extra-data--icon{
                        width: 24px;
                        height: 24px;
    
                        margin-right: 10px;
    
                        background-position: center;
                    }
                    .extra-data--value{
                        font-weight: normal;
                    }
    
                    .extra-data--icon-wind{ background-image: url('/icons/wind.svg'); }
                    .extra-data--icon-humidity{ background-image: url('/icons/humidity.svg'); }
                    .extra-data--icon-pressure{ background-image: url('/icons/pressure.svg'); }
                }
            }
        }
    }
</style>