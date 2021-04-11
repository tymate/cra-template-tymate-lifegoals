# Build-your-own-life-goals workshop

## Instructions

1. [Create your own GitHub repo](https://github.com/new). Make it public, and initialize without `README`, `.gitignore` or `licence` file.
2. [Install Mockend GitHub app](https://github.com/apps/mockend) on the newly created repo.
3. Your `App.js` file is ready to be read, your mission is explained there, or below.

## Launching

`yarn start`

## Deploying

Deploying to GitHub pages is automatically handled.

## The mission:

We would like you to create your own **life goals app**. Because you installed mockend, you will be able to get access to a fake API, located at https://mockend.com/user/repo/goals (REST) or https://mockend.com/user/repo/graphql (GraphQL), where `user/repo` represents the path to you repository on GitHub.

The app should consist of three pages:

- A homepage, `/`, containing the list of you life goals.
- A goal details page, `/:goalId`, displaying your life goals in more details. What changes between the homepage and the details page is up to you, but we suggest thinking about truncating or hiding the goals description on the homepage.
- An admin page, `/admin`, where you will be able to create, update and delete you life goals. We would like the `title`, `description` and `imageUrl` (consider using Unsplash?) to be mandatory. We would like the `completion` field to act as checkbox as well as date reference.

## Tools

This repo comes with the following libraries installed:

- UI library: [Chakra](https://chakra-ui.com/)
- Routing: [react-router-dom v6](https://reacttraining.com/blog/react-router-v6-pre/)
- Forms: [Formik](https://formik.org/docs/overview)
- Form errors handling: [Yup](https://github.com/jquense/yup#api)
- Icons: [react-icons](https://react-icons.github.io/react-icons/)
- Requests: [urql](https://formidable.com/open-source/urql/docs/) if you want to use GraphQL, [React Query](https://react-query.tanstack.com/) otherwise.

Good luck!

If you want to react out for help, questions or clarifications, we are on twitter, [TymateEng](https://twitter.com/TymateEng)
