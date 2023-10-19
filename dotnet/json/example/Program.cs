using System.Text.Json;

namespace SerializeDeserializeBasic
{

  public class Program
  {

    public static async Task Main()
      {
        await SerializeBasic.Samples();
        SerializeExtra.Samples();
        DeserializeExtra.Samples();
        DeserializeFromFile.Samples();
        await DeserializeFromFileAsync.Samples();
      }
  }


  public class SerializeBasic
  {
    public class WeatherForecast
    {
      public DateTimeOffset Date { get; set; }
      public int TemperatureCelsius { get; set; }
      public string? Summary { get; set; }
    }

    public static async Task Samples()
      {
        Sample1();
        Sample2();
        await Sample3();
        Sample4();
      }

    public static void Sample1()
      {
        var weatherForecast = new WeatherForecast
        {
          Date = DateTime.Parse("2019-08-01"),
          TemperatureCelsius = 25,
          Summary = "Hot"
        };

        string jsonString = JsonSerializer.Serialize(weatherForecast);

        Console.WriteLine(jsonString);
      }
// output:
//{"Date":"2019-08-01T00:00:00-07:00","TemperatureCelsius":25,"Summary":"Hot"}

    public static void Sample2()
      {
        var weatherForecast = new WeatherForecast
        {
          Date = DateTime.Parse("2019-08-01"),
          TemperatureCelsius = 25,
          Summary = "Hot"
        };

        string fileName = "WeatherForecast.json"; 
        string jsonString = JsonSerializer.Serialize(weatherForecast);
        File.WriteAllText(fileName, jsonString);

        Console.WriteLine(File.ReadAllText(fileName));
      }
// output:
//{"Date":"2019-08-01T00:00:00-07:00","TemperatureCelsius":25,"Summary":"Hot"}

    public static async Task Sample3()
      {
        var weatherForecast = new WeatherForecast
        {
          Date = DateTime.Parse("2019-08-01"),
          TemperatureCelsius = 25,
          Summary = "Hot"
        };

        string fileName = "WeatherForecast.json";
        using FileStream createStream = File.Create(fileName);
        await JsonSerializer.SerializeAsync(createStream, weatherForecast);
        await createStream.DisposeAsync();

        Console.WriteLine(File.ReadAllText(fileName));
      }
// output:
//{"Date":"2019-08-01T00:00:00-07:00","TemperatureCelsius":25,"Summary":"Hot"}


    public static void Sample4()
      {
        var weatherForecast = new WeatherForecast
        {
          Date = DateTime.Parse("2019-08-01"),
          TemperatureCelsius = 25,
          Summary = "Hot"
        };

        string jsonString = JsonSerializer.Serialize<WeatherForecast>(weatherForecast);

        Console.WriteLine(jsonString);
      }
// output:
//{"Date":"2019-08-01T00:00:00-07:00","TemperatureCelsius":25,"Summary":"Hot"}
  }

  public class SerializeExtra
  {

    public class WeatherForecast
    {
        public DateTimeOffset Date { get; set; }
        public int TemperatureCelsius { get; set; }
        public string? Summary { get; set; }
        public string? SummaryField;
        public IList<DateTimeOffset>? DatesAvailable { get; set; }
        public Dictionary<string, HighLowTemps>? TemperatureRanges { get; set; }
        public string[]? SummaryWords { get; set; }
    }

    public class HighLowTemps
    {
        public int High { get; set; }
        public int Low { get; set; }
    }

    public static void Samples()
      {
        Sample1();
      }
    
    public static void Sample1()
      {
        var weatherForecast = new WeatherForecast
        {
          Date = DateTime.Parse("2019-08-01"),
          TemperatureCelsius = 25,
          Summary = "Hot",
          SummaryField = "Hot",
          DatesAvailable = new List<DateTimeOffset>() 
          { DateTime.Parse("2019-08-01"), DateTime.Parse("2019-08-02") },
          TemperatureRanges = new Dictionary<string, HighLowTemps>
          {
            ["Cold"] = new HighLowTemps { High = 20, Low = -10 },
            ["Hot"] = new HighLowTemps { High = 60 , Low = 20 }
            },
          SummaryWords = new[] { "Cool", "Windy", "Humid" }
        };

        var options = new JsonSerializerOptions { WriteIndented = true };
        string jsonString = JsonSerializer.Serialize(weatherForecast, options);

        Console.WriteLine(jsonString);
      }
// output:
//{
//  "Date": "2019-08-01T00:00:00-07:00",
//  "TemperatureCelsius": 25,
//  "Summary": "Hot",
//  "DatesAvailable": [
//    "2019-08-01T00:00:00-07:00",
//    "2019-08-02T00:00:00-07:00"
//  ],
//  "TemperatureRanges": {
//    "Cold": {
//      "High": 20,
//      "Low": -10
//    },
//    "Hot": {
//    "High": 60,
//      "Low": 20
//    }
//  },
//  "SummaryWords": [
//    "Cool",
//    "Windy",
//    "Humid"
//  ]
//} 
  }


  public class DeserializeExtra
  {
    public class WeatherForecast
    {
      public DateTimeOffset Date { get; set; }
      public int TemperatureCelsius { get; set; }
      public string? Summary { get; set; }
      public string? SummaryField;
      public IList<DateTimeOffset>? DatesAvailable { get; set; }
      public Dictionary<string, HighLowTemps>? TemperatureRanges { get; set; }
      public string[]? SummaryWords { get; set; }
    }

    public class HighLowTemps
    {
      public int High { get; set; }
      public int Low { get; set; }
    }


    public static void Samples()
      {
        Sample1();
      }

    public static void Sample1()
      {
        string jsonString =
@"{
  ""Date"": ""2019-08-01T00:00:00-07:00"",
  ""TemperatureCelsius"": 25,
  ""Summary"": ""Hot"",
  ""DatesAvailable"": [
    ""2019-08-01T00:00:00-07:00"",
    ""2019-08-02T00:00:00-07:00""
  ],
  ""TemperatureRanges"": {
                ""Cold"": {
                    ""High"": 20,
      ""Low"": -10
                },
    ""Hot"": {
                    ""High"": 60,
      ""Low"": 20
    }
            },
  ""SummaryWords"": [
    ""Cool"",
    ""Windy"",
    ""Humid""
  ]
}
";
                
    WeatherForecast? weatherForecast = 
      JsonSerializer.Deserialize<WeatherForecast>(jsonString);

    Console.WriteLine($"Date: {weatherForecast?.Date}");
    Console.WriteLine($"TemperatureCelsius: {weatherForecast?.TemperatureCelsius}");
    Console.WriteLine($"Summary: {weatherForecast?.Summary}");        
  }
// output:
//Date: 8/1/2019 12:00:00 AM -07:00
//TemperatureCelsius: 25
//Summary: Hot
  
}

public class DeserializeFromFile
{
  public class WeatherForecast
  {
    public DateTimeOffset Date { get; set; }
    public int TemperatureCelsius { get; set; }
    public string? Summary { get; set; }
  }

  
  public static void Samples()
    {
      Sample1();
    }

  public static void Sample1()
    {
      string fileName = "WeatherForecast.json";
      string jsonString = File.ReadAllText(fileName);
      WeatherForecast weatherForecast = JsonSerializer.Deserialize<WeatherForecast>(jsonString)!;

      Console.WriteLine($"Date: {weatherForecast.Date}");
      Console.WriteLine($"TemperatureCelsius: {weatherForecast.TemperatureCelsius}");
      Console.WriteLine($"Summary: {weatherForecast.Summary}");
    }
// output:
//Date: 8/1/2019 12:00:00 AM -07:00
//TemperatureCelsius: 25
//Summary: Hot
}

public class DeserializeFromFileAsync
{
  public class WeatherForecast
  {
    public DateTimeOffset Date { get; set; }
    public int TemperatureCelsius { get; set; }
    public string? Summary { get; set; }
  }

  public static async Task Samples()
    {
      await Sample1();
    }
  
  public static async Task Sample1()
    {
      string fileName = "WeatherForecast.json";
      using FileStream openStream = File.OpenRead(fileName);
      WeatherForecast? weatherForecast = 
        await JsonSerializer.DeserializeAsync<WeatherForecast>(openStream);

      Console.WriteLine($"Date: {weatherForecast?.Date}");
      Console.WriteLine($"TemperatureCelsius: {weatherForecast?.TemperatureCelsius}");
      Console.WriteLine($"Summary: {weatherForecast?.Summary}");
    }
// output:
//Date: 8/1/2019 12:00:00 AM -07:00
//TemperatureCelsius: 25
//Summary: Hot
  
}
}


