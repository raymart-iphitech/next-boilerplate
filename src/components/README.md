# Description

The `components` directory is where you store all the components that are used throughout the app. As you noticed on the first description inside the `pages` directory, page components only renders components and those components are from the this directory

## Usage

Inside this directory, you will see a structure below:
```
pages(folder)
    ->sample(folder)
        ->index.ts
        ->sample.tsx
```

As you noticed, if you create a route/folder inside the `pages` directory, you also need to create a folder inside the `pages` folder inside the `components` directory with the same name. This way, you know that the `components/pages/sample` belongs to the `pages/sample` directory as its component.

If have components that are reusable inside the application, you can create a `shared` folder inside and this `shared` folder contains the different components that are reusable.

Below is a sample folder inside the `components` as one level deep

```
components
    ->pages(folder)
        ->sample(folder)
        ->home(folder)
            ->hero(folder)
                ->hero.tsx
                ->index.ts
        ->dashboard(folder)
    ->shared(folder)
        ->form(folder)
            ->inputs(folder)
                ->text(folder)
                    ->text.tsx
                    ->index.ts
    ->guards(folder)
        ->admin(folder)
            ->admin.tsx
            ->index.ts
        ->user(folder)
            ->user.tsx
            ->index.ts
```