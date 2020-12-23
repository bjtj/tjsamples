# Laravel Crash Course 2020 #

<https://youtu.be/MFh0Fd7BsjE>


# tailwindcss #

<https://tailwindcss.com/>

Install Tailwind via npm

<https://tailwindcss.com/docs/installation#install-tailwind-via-npm>

```
$ npm install tailwindcss
$ npm install
$ npm run dev
```

# PostCSS 7 compatibility build #

<https://tailwindcss.com/docs/installation#post-css-7-compatibility-build>

```
Error: PostCSS plugin tailwindcss requires PostCSS 8.
```

```
$ npm uninstall tailwindcss postcss autoprefixer
$ npm install tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```


# Migration #

**First time**

```
$ createdb posty
$ php artisan migrate
```

**migrate**

```
$ php artisan make:migration add_username_to_users_table
$ php artisan migrate
```

**rollback**

```
$ php artisan migrate:rollback
```

# Controller #

```
$ php artisan make:controller RegisterController
```

or subdirectory

```
$ php artisan make:controller Auth\\RegisterController
```

```
$ php artisan make:controller DashboardController
$ php artisan make:controller LoginController
$ php artisan make:controller Auth\\LoginController
$ php artisan make:controller Auth\\LogoutController
$ php artisan make:controller PostController
```

# Model #

```
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

```
$ php artisan make:migration create_likes_table --create=likes
$ php artisan migrate
$ php artisan make:model Like
$ php artisan make:controller PostLikeController
```

# Laravel Debugbar #

<https://github.com/barryvdh/laravel-debugbar>

```
composer require barryvdh/laravel-debugbar --dev
```

# Post #

```
$ php artisan make:policy PostPolicy
$ php artisan make:controller UserPostController
$ php artisan make:component Post
```

## `Error : Target class [App\View\Components\Post] does not exist.` ##

```
php artisan view:clear
```

YouTube 댓글에 있었음

# Email #

```
$ php artisan make:mail PostLiked --markdown=emails.posts.post_liked
$ php artisan make:migration add_soft_deletes_to_likes_table --table=likes
$ php artisan migrate
```

## Mailtrap ##

<https://mailtrap.io/>

