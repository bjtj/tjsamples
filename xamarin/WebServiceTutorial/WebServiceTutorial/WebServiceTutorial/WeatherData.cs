using Newtonsoft.Json;

namespace WebServiceTutorial
{
    public class WeatherData
    {
        [JsonProperty("name")]
        public string Title { get; set; }

        [JsonProperty("weather")]
        public Weather[] Weather { get; set; }

        [JsonProperty("main")]
        public Main Main { get; set; }

        [JsonProperty("visibility")]
        public long Visibility { get; set; }

        [JsonProperty("wind")]
        public Wind Wind { get; set; }
    }

    public class Main
    {

        double temperature;

        [JsonProperty("temp")]
        public double Temperature {
            get { return temperature; }
            set { temperature = value; }
        }
        
        public double TemperatureCelsius {
            get { 
                return (temperature - 32) * 5 / 9;
            }
        }

        [JsonProperty("humidity")]
        public long Humidity { get; set; }
    }

    public class Weather
    {
        [JsonProperty("main")]
        public string Visibility { get; set; }
    }

    public class Wind
    {
        [JsonProperty("speed")]
        public double Speed { get; set; }
    }
}