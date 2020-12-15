# Tutorial: Create a .NET class library using Visual Studio #

<https://docs.microsoft.com/en-us/dotnet/core/tutorials/library-with-visual-studio>

# Tutorial: Test a .NET class library with .NET using Visual Studio #

<https://docs.microsoft.com/en-us/dotnet/core/tutorials/testing-library-with-visual-studio>

## CS0579 C# 특성이 중복되었습니다. ##

<https://stackoverflow.com/a/10312664/5676460>

> I have also run into this issue in the past, so I am going to assume that your build process provides assembly information separately to providing versioning. And that causes a duplication as your project also has that info in the AssemblyInfo.cs file. So remove the file and I think it should work.
