# How to display and refresh multiple lines in bash #

<https://stackoverflow.com/a/53844642/5676460>

# tput #

<http://linuxcommand.org/lc3_adv_tput.php>

```
echo $TERM
```

```
infocmp screen
```

```
tput longname
```

```
tput -T screen longname
```

```
tput colors
tput cols
```


## Reading Terminal Attributes ##

| Capname  | Description                       |
|----------|-----------------------------------|
| longname | Full name of the terminal type    |
| lines    | Number of lines in the terminal   |
| cols     | Number of columns in the terminal |
| colors   | Number of colors available        |


SIGWINCH - signal window changed

## Controlling The Cursor ##

| Capname           | Description                                |
|-------------------|--------------------------------------------|
| sc                | Save the cursor position                   |
| rc                | Restore the cursor position                |
| home              | Move the cursor to upper left corner (0,0) |
| cup `<row> <col>` | Move the cursor to position row, col       |
| cud1              | Move the cursor down 1 line                |
| cuu1              | Move the cursor up 1 line                  |
| civis             | Set to cursor to be invisible              |
| cnorm             | Set the cursor to its normal state         |


## Text Effects ##

| Capname         | Description             |
|-----------------|-------------------------|
| bold            | Start bold text         |
| smul            | Start underlined text   |
| rmul            | End underlined text     |
| rev             | Start reverse video     |
| blink           | Start blinking text     |
| invis           | Start invisible text    |
| smso            | Start "standout" mode   |
| rmso            | End "standout" mode     |
| sgr0            | Turn off all attributes |
| setaf `<value>` | Set foreground color    |
| setab `<value>` | Set background color    |


## Clearing The Screen ##

| Capname | Description                                        |
|---------|----------------------------------------------------|
| smcup   | Save screen contents                               |
| rmcup   | Restore screen contents                            |
| el      | Clear from the cursor to the end of the line       |
| el1     | Clear from the cursor to the beginning of the line |
| ed      | Clear from the cursor to the end of the screen     |
| clear   | Clear the entire screen and home the cursor        |

