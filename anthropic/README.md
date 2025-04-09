# User Guides #

## Getting Started ##

### Initial setup ###

<https://docs.anthropic.com/en/docs/initial-setup>

API KEY

<https://console.anthropic.com/settings/keys>

Python

``` shell
python -m venv claude-env
```

Activate the virtual environment using

- On macOS or Linux, `source claude-env/bin/activate`
- On Windows, `claude-env\Scripts\activate`

``` shell
pip install anthropic
```

Set your API key

``` shell
setx ANTHROPIC_API_KEY "your-api-key-here"
```

