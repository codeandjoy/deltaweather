<script>
    import '@fontsource/poppins'
    import '@fontsource/lato'

    // export let dayData;
</script>



<div class="day-card-open">
    <div class="day-card-open--header">
        <div class="location">
            <div class="city"><span>London</span></div>
            <div class="daydate"><span class="day">Mon</span><span class="date">03-12-2023</span></div>
        </div>
        <div class="units">
            <div class="unit--temp"><span>°C</span></div>
            <div class="unit--wind"><span>km/h</span></div>
            <div class="unit--pressure"><span>mb</span></div>
        </div>
    </div>

    <div class="day-card-open--data">
        <div class="icons-col">
            <div class="data--icons">
                <div class="data--icon icon-wind"></div>
                <div class="data--icon icon-humidity"></div>
                <div class="data--icon icon-pressure"></div>
            </div>
        </div>
        <div class="data-col">
            <div class="weather-icon-container">
                <div class="weather-icon"></div>
                <div class="weather-desc">Sun</div>
            </div>
            <div class="time"><span>0:00 am</span></div>
            <div class="temperature"><span class="value">0</span><span class="unit">°C</span></div>
            <div class="whp-values">
                <div class="wind"><span>3.1 km/h</span></div>
                <div class="humidity"><span>40%</span></div>
                <div class="pressure"><span>1000 mb</span></div>
            </div>
        </div>
        <div class="data-col">
            <div class="weather-icon-container">
                <div class="weather-icon"></div>
                <div class="weather-desc">Sun</div>
            </div>
            <div class="time"><span>0:00 am</span></div>
            <div class="temperature"><span class="value">0</span><span class="unit">°C</span></div>
            <div class="whp-values">
                <div class="wind"><span>3.1 km/h</span></div>
                <div class="humidity"><span>40%</span></div>
                <div class="pressure"><span>1000 mb</span></div>
            </div>
        </div>
        <div class="data-col">
            <div class="weather-icon-container">
                <div class="weather-icon"></div>
                <div class="weather-desc">Sun</div>
            </div>
            <div class="time"><span>0:00 am</span></div>
            <div class="temperature"><span class="value">0</span><span class="unit">°C</span></div>
            <div class="whp-values">
                <div class="wind"><span>3.1 km/h</span></div>
                <div class="humidity"><span>40%</span></div>
                <div class="pressure"><span>1000 mb</span></div>
            </div>
        </div>
        <div class="data-col">
            <div class="weather-icon-container">
                <div class="weather-icon"></div>
                <div class="weather-desc">Sun</div>
            </div>
            <div class="time"><span>0:00 am</span></div>
            <div class="temperature"><span class="value">0</span><span class="unit">°C</span></div>
            <div class="whp-values">
                <div class="wind"><span>3.1 km/h</span></div>
                <div class="humidity"><span>40%</span></div>
                <div class="pressure"><span>1000 mb</span></div>
            </div>
        </div>
        <div class="data-col">
            <div class="weather-icon-container">
                <div class="weather-icon"></div>
                <div class="weather-desc">Sun</div>
            </div>
            <div class="time"><span>0:00 am</span></div>
            <div class="temperature"><span class="value">0</span><span class="unit">°C</span></div>
            <div class="whp-values">
                <div class="wind"><span>3.1 km/h</span></div>
                <div class="humidity"><span>40%</span></div>
                <div class="pressure"><span>1000 mb</span></div>
            </div>
        </div>
        <div class="data-col">
            <div class="weather-icon-container">
                <div class="weather-icon"></div>
                <div class="weather-desc">Sun</div>
            </div>
            <div class="time"><span>0:00 am</span></div>
            <div class="temperature"><span class="value">0</span><span class="unit">°C</span></div>
            <div class="whp-values">
                <div class="wind"><span>3.1 km/h</span></div>
                <div class="humidity"><span>40%</span></div>
                <div class="pressure"><span>1000 mb</span></div>
            </div>
        </div>
        <div class="data-col">
            <div class="weather-icon-container">
                <div class="weather-icon"></div>
                <div class="weather-desc">Sun</div>
            </div>
            <div class="time"><span>0:00 am</span></div>
            <div class="temperature"><span class="value">0</span><span class="unit">°C</span></div>
            <div class="whp-values">
                <div class="wind"><span>3.1 km/h</span></div>
                <div class="humidity"><span>40%</span></div>
                <div class="pressure"><span>1000 mb</span></div>
            </div>
        </div>
        <div class="data-col">
            <div class="weather-icon-container">
                <div class="weather-icon"></div>
                <div class="weather-desc">Sun</div>
            </div>
            <div class="time"><span>0:00 am</span></div>
            <div class="temperature"><span class="value">0</span><span class="unit">°C</span></div>
            <div class="whp-values">
                <div class="wind"><span>3.1 km/h</span></div>
                <div class="humidity"><span>40%</span></div>
                <div class="pressure"><span>1000 mb</span></div>
            </div>
        </div>
    </div>
</div>



<style lang="scss">
    .day-card-open{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;

        padding: 60px 80px;
        padding-right: 90px;

        background-color: #000;

        border-radius: 20px;

        .day-card-open--header{
            display: flex;
            align-items: flex-end;
            justify-content: space-between;

            margin-bottom: 40px;

            .location{
                position: relative;

                font-family: 'Poppins', sans-serif;

                .city{
                    margin-top: -60px;
                    margin-bottom: -80px;
                    margin-left: -10px;

                    span{
                        font-size: 200px;
                        font-weight: normal;
                        color: #121212  ;
                    }
                }
                .daydate{
                    position: absolute;
                    bottom: 0;

                    margin-bottom: -41px;

                    .day{
                        margin-right: 10px;

                        font-size: 100px;
                        color: #AAAAAA;
                    }
                    .date{
                        font-size: 30px;
                        color: #6F6F6F;
                    }
                }
            }
            .units{
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 10px;

                margin-bottom: -6px;

                font-family: 'Lato', sans-serif;
                font-size: 30px;
                font-weight: bold;

                color: #2b2b2b;
            }
        }

        .day-card-open--data{
            display: flex;
            
            .icons-col{
                display: flex;
                flex-direction: column;
                justify-content: flex-end;

                margin-right: 5px;

                .data--icons{
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
    
                    .data--icon{
                        width: 24px;
                        height: 24px;
                    }
    
                    .icon-wind{ background-image: url('/icons/wind.svg'); }
                    .icon-humidity{ background-image: url('/icons/humidity.svg'); }
                    .icon-pressure{ background-image: url('/icons/pressure.svg'); }
                }
            }
            .data-col:not(:last-child){
                margin-right: 20px;
            }
            .data-col{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-end;

                font-family: 'Lato', sans-serif;
                font-weight: bold;

                .weather-icon-container{
                    position: relative; 

                    margin-bottom: -8px;
                    
                    .weather-icon{
                        width: 100px;
                        height: 100px;
    
                        background-image: url('/icons/weather_icons/sun.svg');
                        background-size: contain;
                        background-position: center;
                        background-repeat: no-repeat;
                        opacity: .1;
                    }
                    .weather-desc{
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);

                        color: #FFD23F;

                        font-size: 40px;
                        font-weight: bold;
                    }
                }

                .time{
                    font-size: 14pt;
                    font-weight: bold;
                    color: #393939;
                }

                .temperature{
                    position: relative;
                    
                    margin-top: 5px;
                    margin-bottom: 10px;

                    color: #fff;

                    .value{
                        font-size: 60px;
                    }
                    .unit{
                        position: absolute;
                        top: 16px;
                        right: -18px;
                        font-size: 16px;
                    }
                }

                .whp-values{
                    display: flex;
                    flex-direction: column;
                    gap: 16px;

                    font-size: 18px;
                    color: #acacac;
                }
            }
        }
    }
</style>   