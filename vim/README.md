# vim manual #

http://vimdoc.sourceforge.net/htmldoc/usr_toc.html


## usr_02.txt - The first steps in Vim ##

Normal mode

* `i` insert
* `x` delete
* `dd` delete line
* `J` join two lines
* `u` undo
* `CTRL-r` redo
* `a` append
* `o` open a new line
* `O` open a line above the cursor
* **count**
  * `3a!<ESC>` append triple '!'
  * `3x` delete 3 characters
* `ZZ` write file and exit
* `:q!` discard chages


## usr_08.txt - Splitting windows ##

* `:split` open a window
* `:close` close a window
* `:only` close all others
* `:split two.c` open a window and edit given file
* `:new` open a window and edit new file
* `:3split alpha.c` open a window three lines high
* `CTRL-w +` increse
* `CTRL-w -` decrease
* `:vsplit`
* `:vertical new`
* Moving between windows
  * `CTRL-w h`
  * `CTRL-w j`
  * `CTRL-w k`
  * `CTRL-w l`


## usr_41.txt - Write a Vim script ##

`vimrc`

```
:let i = 1
:while 1 < 5
:  echo "count is" i
:  let i += 1
:endwhile
```

```
:let
```

```
:unlet s:count
```

```
:unlet! s:count
```

```
:let name = "peter"
:echo name
```


## usr_22.txt - Finding the file to edit ##

```
:edit .
```

## usr_04.txt - Making small changes ##

**04.4	Visual mode**

http://vimdoc.sourceforge.net/htmldoc/usr_04.html#04.4


* `v` visual mode
* `V` select lines
* `d` delete
* `p` paste
* `CTRL-v` vertical
