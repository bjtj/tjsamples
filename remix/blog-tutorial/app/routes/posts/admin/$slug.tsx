import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useTransition, } from "@remix-run/react";
import invariant from "tiny-invariant";
import { updatePost } from "~/models/post.server";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData, useLocation } from "@remix-run/react";
import { marked } from "marked";

import { getPost } from "~/models/post.server";

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, `params.slug is required`);

  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);

  return json({ post });
};
/* 
 * export default function PostSlug() {
 *   const { post, html } = useLoaderData<typeof loader>();
 *   return (
 *     <main className="mx-auto max-w-4xl">
 *       <h1 className="my-6 border-b-2 text-center text-3xl">
 *         {post.title}
 *       </h1>
 *       <div dangerouslySetInnerHTML={{ __html: html }} />
 *     </main>
 *   );
 * }
 *  */


export const action = async ({ request }: ActionArgs) => {

  /* await new Promise((res) => setTimeout(res, 1000)); */
  
  const formData = await request.formData();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");

  const errors = {
    title: title ? null : "Title is required",
    slug: slug ? null : "Slug is required",
    markdown: markdown ? null : "Markdown is required",
  };
  const hasErrors = Object.values(errors).some(
    (errorMessage) => errorMessage
  );
  if (hasErrors) {
    return json(errors);
  }

  invariant(
    typeof title === "string",
    "title must be a string"
  );
  invariant(
    typeof slug === "string",
    "slug must be a string"
  );
  invariant(
    typeof markdown === "string",
    "markdown must be a string"
  );

  await updatePost({ title, slug, markdown });

  return redirect("/posts/admin");
};

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;

export default function UpdatePost() {

  let location = useLocation();
  const { post } = useLoaderData<typeof loader>();

  const errors = useActionData<typeof action>();

  const transition = useTransition();
  const isUpdating = Boolean(transition.submission);
  
  return (
    <Form method="post">
      <p>
        <label>
          Post Title:{" "}
          {errors?.title ? (
            <em className="text-red-600">{errors.title}</em>
          ) : null}
          <input
            key={location.key}
            type="text"
            name="title"
            className={inputClassName}
            defaultValue={post.title}
          />
        </label>
      </p>
      <p>
        <label>
          Post Slug:{" "}
          {errors?.slug ? (
            <em className="text-red-600">{errors.slug}</em>
          ) : null}
          <input
            key={location.key}
            type="text"
            name="slug"
            className={inputClassName}
            value={post.slug}
          />
        </label>
      </p>
      <p>
        <label htmlFor="markdown">
          Markdown:{" "}
          {errors?.markdown ? (
            <em className="text-red-600">
              {errors.markdown}
            </em>
          ) : null}
        </label>
        <br />
        <textarea
          key={location.key}
          id="markdown"
          rows={20}
          name="markdown"
          className={`${inputClassName} font-mono`}
          defaultValue={post.markdown}
        >
        </textarea>
      </p>
      <p className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
          disabled={isUpdating}
        >
          {isUpdating ? "Updating..." : "Update Post"}
        </button>
      </p>
    </Form>
  );
}
