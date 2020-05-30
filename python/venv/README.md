# What is the difference between venv, pyvenv, pyenv, virtualenv, virtualenvwrapper, pipenv, etc? #

<https://stackoverflow.com/a/41573588>

> ## Recommendation for beginners: ##
>
> This is my personal recommendation for beginners: start by learning virtualenv and pip, tools which work with both Python 2 and 3 and in a variety of situations, and pick up other tools once you start needing them.

# venv — Creation of virtual environments #

<https://docs.python.org/3/library/venv.html>

**Create**

```shell
python3 -m venv /path/to/new/virtual/environment
```

**Activation**

| Platform | Shell           | Command to activate virtual environment |
|----------|-----------------|-----------------------------------------|
| POSIX    | bash/zsh        | `$ source <venv>/bin/activate`          |
|          | fish            | `$ . <venv>/bin/activate.fish`          |
|          | csh/tcsh        | `$ source <venv>/bin/activate.csh`      |
|          | PowerShell Core | `$ <venv>/bin/Activate.ps1`             |
| Windows  | cmd.exe         | `C:\> <venv>\Scripts\activate.bat`      |
|          | PowerShell      | `PS C:\> <venv>\Scripts\Activate.ps1`   |


**Deactivation**

> You can deactivate a virtual environment by typing “deactivate” in your shell. The exact mechanism is platform-specific and is an internal implementation detail (typically a script or shell function will be used).
