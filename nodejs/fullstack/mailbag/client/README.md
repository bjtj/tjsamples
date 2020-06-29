# 'this' implicitly has type 'any' because it does not have a type annotation

<https://stackoverflow.com/a/41945742>

> It should've been this:
>
> ```javascript
> foo.on('error', function(this: Foo, err: any) {
> ```
>
> or this:
>
> ```javascript
> foo.on('error', function(this: typeof foo, err: any) {
> ```

