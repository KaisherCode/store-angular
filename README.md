# Store

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/
tools/cli) page.


## Crear proyecto

- `ng new store --standalone --skip-tests`
- Ingresar a la carpeta del proyecto `cd store`
- Integración de framework tailwindcss `npm install -D tailwindcss postcss autoprefixer` y `npx tailwindcss init`
- Configurar la plantilla de rutas `tailwind.config.js`
  
```js
  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```
## Creando componnetes en Angular

- `ng g c domains/products/pages/list`

## Página que provee servicio en línea de imágenes aleatorios

- `https://picsum.photos/640/640`

## Página para crear audio

- `https://wavesurfer.xyz/`

## Crear musica con IA 

- `https://stableaudio.com/`
