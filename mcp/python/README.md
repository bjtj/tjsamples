# For Server Developers #

<https://modelcontextprotocol.io/quickstart/server#why-claude-for-desktop-and-not-claude-ai>

uv

``` powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

Create and set up a project

``` powershell
# Create a new directory for our project
uv init weather
cd weather

# Create virtual environment and activate it
uv venv
.venv\Scripts\activate

# Install dependencies
uv add mcp[cli] httpx

# Create our server file
new-item weather.py
```

## Testing your server with Claude for Desktop ##

``` powershell
code $env:AppData\Claude\claude_desktop_config.json
```

e.g.)

``` json
{
    "mcpServers": {
        "weather": {
            "command": "uv",
            "args": [
                "--directory",
                "C:\\ABSOLUTE\\PATH\\TO\\PARENT\\FOLDER\\weather",
                "run",
                "weather.py"
            ]
        }
    }
}
```

Restart claude desktop

Make sure hammer icon is appeared

Ask something

- What’s the weather in Sacramento?
- What are the active weather alerts in Texas?


## Troubleshoot ##

Try to set `uv` in absolute path

e.g.)

``` json
  "command": "c:\\Users\\USER\\.local\\bin\\uv.exe",
```
