<div class="day-card">
    <div class="weather-img"></div>
    <div class="weather-img-art"></div>
    <div class="date-container">
        <span class="card-day">Mon</span>
        <span class="card-date">03-12-2023</span>
    </div>
    <div class="weather-desc"><span>Sun</span></div>
    <div class="weather-temp">
        <span class="temp-value">2</span>
        <span class="temp-unit">°C</span>
    </div>
    <div class="weather-extra-data-container">
        <div class="extra-data">
            <div class="extra-data--icon extra-data--icon-wind"></div>
            <div class="extra-data--value">3.1 km/h</div>
        </div>
        <div class="extra-data">
            <div class="extra-data--icon extra-data--icon-humidity"></div>
            <div class="extra-data--value">40%</div>
        </div>
        <div class="extra-data">
            <div class="extra-data--icon extra-data--icon-pressure"></div>
            <div class="extra-data--value">1000 mb</div>
        </div>
    </div>
</div>



<style lang="scss">
    .day-card{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 50px;

        font-family: 'Lato', sans-serif;

        background-color: #000;
        border-radius: 20px;

        .weather-img,
        .weather-img-art{
            background-image: url('/icons/sun.svg');
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }

        .weather-img{
            margin-bottom: 10px;

            width: 200px;
            height: 200px;
        }
        .weather-img-art{
            position: absolute;
            bottom: 0;

            display: none;
            
            width: 400px;
            height: 400px;
        }
        
        .date-container{
            display: flex;
            flex-direction: column;
            align-items: center;

            .card-day{
                font-size: 24px;
                font-weight: bold;
                color: #6a6a6a;
            }
            .card-date{
                font-size: 12px;
                font-weight: bold;
                color: #272727;
            }
        }

        .weather-desc{
            margin-top: -10px;

            font-size: 50px;
            font-weight: bold;

            color: #FFD23F;
            opacity: .1;
        }
        .weather-temp{
            position: relative;

            margin-top: -44px;
            margin-bottom: 8px;

            color: #fff;

            .temp-value{
                font-size: 60px;
                font-weight: bold;
            }
            .temp-unit{
                position: absolute;
                top: 12px;
                right: -17px;
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
                    font-weight: bold;
                }

                .extra-data--icon-wind{ background-image: url('/icons/wind.svg'); }
                .extra-data--icon-humidity{ background-image: url('/icons/humidity.svg'); }
                .extra-data--icon-pressure{ background-image: url('/icons/pressure.svg'); }
            }
        }
    }
</style>