# Astro Basics

## Built with

- Astro
- Tailwind

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


## 🚀 My journey with Astro @GomezJuan

Astro is a static site generator and a tool for building modern websites. It allows developers to create websites using a combination of familiar markup languages, such as HTML, CSS, and JavaScript, but with the added benefit of optimizing performance through its static site generation capabilities.

### Learning process

In the tag ```<slot />``` is where our routes are going to be renderized.

```<style is:global>```: Means the style is global

To add a library or a specific technology I can just type in the console ```npx astro add react```. Check it out [here](https://docs.astro.build/en/guides/integrations-guide/)

Whit ```npx astro add --list``` to list all the technologies availables.

### Fonts

[Fontsource](https://fontsource.org/)

There, in fontsource I can find two types of fonts statics and variables, which means if my font support all the weights or not.

**Using Custom Fonts**

When using Tailwind it's possible to setup the fonts on the tailwind.config.mjs

[Check out here](https://docs.astro.build/en/guides/fonts/)

### JavaScript code

It is possible to add vanilla JS code that will be executed in the frontend Just using the ```<script>``` tag. This is important because it is also possible to write code between ```---```, but this code is going to be executed in the server side.

If I have the type check activated I can deactivate in a specific part just using ```// @ts-nocheck```

```JavaScript
<script>
  // @ts-nocheck
  const carouselList = document.querySelector(".carousel__list");
  const carouselItems = document.querySelectorAll(".carousel__item");
  const elems = Array.from(carouselItems);

  ...
</script>
```

## Acknowledgements

I want to say thanks to all the great people how create incredible things on the internet and share their knowledge.

Special thanks to [MiduDev](https://www.twitch.tv/midudev), one of the biggest community builders in the hispanic people. Most of my knowledge in Astro so far was thanks to him.

- Thanks to Max Lykov for the [incredible Carrousel](https://codepen.io/frise/pen/mZvKpe)