using App.WindowsService;
using Microsoft.Extensions.Logging.Configuration;
using Microsoft.Extensions.Logging.EventLog;

using CliWrap;

const string ServiceName = ".NET Joke Service";

if (args is { Length: 1 })
{
	try
	{
		string executablePath = Path.Combine(AppContext.BaseDirectory, "JokeService.exe");
		if (args[0] is "/Install")
		{
			await Cli.Wrap("sc")
				.WithArguments(new[] { "create", ServiceName, $"binPath={executablePath}", "start=auto" })
				.ExecuteAsync();
		}
		else if (args[0] is "/Uninstall")
		{
			await Cli.Wrap("sc")
				.WithArguments(new[] { "stop", ServiceName })
				.ExecuteAsync();

			await Cli.Wrap("sc")
				.WithArguments(new[] { "delete", ServiceName })
				.ExecuteAsync();
		}
	}
	catch (Exception ex)
	{
		Console.WriteLine(ex);
	}
	return;
}

HostApplicationBuilder builder = Host.CreateApplicationBuilder(args);
builder.Services.AddWindowsService(options =>
  {
  options.ServiceName = ".NET Joke Service";
  });

LoggerProviderOptions.RegisterProviderOptions<
    EventLogSettings, EventLogLoggerProvider>(builder.Services);

builder.Services.AddSingleton<JokeService>();
builder.Services.AddHostedService<WindowsBackgroundService>();

IHost host = builder.Build();
host.Run();
