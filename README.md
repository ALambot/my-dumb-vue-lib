# my-dumb-vue-lib

Demo on how to make a Vue.js 3 component library, based on Bulma. See **my-dumb-vue-app** for usages.

## The important stuff

- To install : *npm install git+https://github.com/ALambot/my-dumb-vue-lib.git*
- Take a look at the components *OneDumbButton* and *ThreeDumbButtons*
- Bulma is imported in *assets/main.scss*, which is in turn imported in the \<style\> part of each component. I'm sure there are better ways to do this.
- *package.json* and *vite.config.json* contain the info used to build the library
- The library is built using *npm build*. The built files are under *dist*. They need to be on github if you want to install this lib with npm.
- *dist/style.css* contains the entirety of Bulma (I think) because we import the entirety of Bulma (in *main.scss*). There are probably much better approaches. This will probably cause CSS conflicts in the apps using this lib ? Also I put Bulma as a dependency, but I'm not sure it's even necessary because we basically ship Bulma with the lib.
- *main.js* and *App.vue* are only used to run a local demo, there are not used for the library aspect

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
