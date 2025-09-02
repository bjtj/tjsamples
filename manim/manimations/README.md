# Installing Manim locally #

<https://docs.manim.community/en/stable/installation/uv.html>

## Windows ##

``` powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

``` powershell
uv python install
```

``` powershell
uv init manimations
cd manimations
uv add manim
```

``` powershell
uv run manim checkhealth
```
