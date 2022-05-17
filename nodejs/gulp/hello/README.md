# how to solve this npm glob-parent problem #

<https://stackoverflow.com/a/68489125/5676460>

> In your package.json, add this target under scripts:
>
> "preinstall": "npx npm-force-resolutions"
>
> Then add this below the scripts:
>
> "resolutions": { "glob-parent": "^6.0.1" }
>
> One thing, I don't know if any dependent packages that use an older version will break because of 6.0.1.

