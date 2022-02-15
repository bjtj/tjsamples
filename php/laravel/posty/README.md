# Laravel Crash Course 2020 #

<https://youtu.be/MFh0Fd7BsjE>


# tailwindcss #

<https://tailwindcss.com/>

Install Tailwind via npm

<https://tailwindcss.com/docs/installation#install-tailwind-via-npm>

```shell
$ npm install tailwindcss
$ npm install
$ npm run dev
```

# PostCSS 7 compatibility build #

<https://tailwindcss.com/docs/installation#post-css-7-compatibility-build>

```
Error: PostCSS plugin tailwindcss requires PostCSS 8.
```

```shell
$ npm uninstall tailwindcss postcss autoprefixer
$ npm install tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```


# Migration #

**First time**

```shell
$ createdb posty
$ php artisan migrate
```

**migrate**

```shell
$ php artisan make:migration add_username_to_users_table
$ php artisan migrate
```

**rollback**

```shell
$ php artisan migrate:rollback
```

# Controller #

```shell
$ php artisan make:controller RegisterController
```

or subdirectory

```shell
$ php artisan make:controller Auth\\RegisterController
```

```shell
$ php artisan make:controller DashboardController
$ php artisan make:controller LoginController
$ php artisan make:controller Auth\\LoginController
$ php artisan make:controller Auth\\LogoutController
$ php artisan make:controller PostController
```

# Model #

```shell
$ php artisan make:model Post
$ php artisan make:model Post --help
$ php artisan make:model Post -m -f
$ php artisan migrate
$ php artisan tinker
Psy Shell v0.10.5 (PHP 8.0.0 — cli) by Justin Hileman
>>> App\Models\Post::factory()->times(200)->create(['user_id' => 3]);
...
```

# Likes #

```shell
$ php artisan make:migration create_likes_table --create=likes
$ php artisan migrate
$ php artisan make:model Like
$ php artisan make:controller PostLikeController
```

# Laravel Debugbar #

<https://github.com/barryvdh/laravel-debugbar>

```shell
composer require barryvdh/laravel-debugbar --dev
```

# Post #

```shell
$ php artisan make:policy PostPolicy
$ php artisan make:controller UserPostController
$ php artisan make:component Post
```

## `Error : Target class [App\View\Components\Post] does not exist.` ##

```shell
php artisan view:clear
```

YouTube 댓글에 있었음

# Email #

```shell
$ php artisan make:mail PostLiked --markdown=emails.posts.post_liked
$ php artisan make:migration add_soft_deletes_to_likes_table --table=likes
$ php artisan migrate
```

## Mailtrap ##

<https://mailtrap.io/>

