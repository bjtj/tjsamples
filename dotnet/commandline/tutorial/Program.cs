using System.CommandLine;

class Program
{
    static async Task<int> Main(string[] args)
    {
        var fileOption = new Option<FileInfo?>(
            name: "--file",
            description: "The file to read and display on the console.");

        var delayOption = new Option<int>(
            name: "--delay",
            description: "Delay between lines, specified as milliseconds per character in a line.",
            getDefaultValue: () => 42);

        var fgcolorOption = new Option<ConsoleColor>(
            name: "--fgcolor",
            description: "Foreground color of text displayed on the console.",
            getDefaultValue: () => ConsoleColor.White);

        var lightModeOption = new Option<bool>(
            name: "--light-mode",
            description: "Background color of text displayed on the console: default is black, light mode is white.");

        var rootCommand = new RootCommand("Sample app for System.CommandLine");
        //rootCommand.AddOption(fileOption);
        var readCommand = new Command("read", "Read and display the file.")
        {
            fileOption,
            delayOption,
            fgcolorOption,
            lightModeOption
        };
        rootCommand.AddCommand(readCommand);

        //rootCommand.SetHandler((file) =>
        //    {
        //        ReadFile(file!);
        //    },
        //    fileOption);

        readCommand.SetHandler(async (file, delay, fgcolor, lightMode) =>
        {
            await ReadFile(file!, delay, fgcolor, lightMode);
        },
        fileOption, delayOption, fgcolorOption, lightModeOption);

        return await rootCommand.InvokeAsync(args);
    }

    //static void ReadFile(FileInfo file)
    //{
    //    File.ReadLines(file.FullName).ToList()
    //        .ForEach(line => Console.WriteLine(line));
    //}

    internal static async Task ReadFile(FileInfo file, int delay, ConsoleColor fgColor, bool lightMode)
    {
        Console.BackgroundColor = lightMode ? ConsoleColor.White : ConsoleColor.Black;
        Console.ForegroundColor = fgColor;
        List<string> lines = File.ReadLines(file.FullName).ToList();
        foreach (string line in lines)
        {
            Console.WriteLine(line);
            await Task.Delay(delay * line.Length);
        };
    }
}