# Structure

Structuring is really important in any codebase and in this boilerplat, the structure used inside this codebase is the best that I encountered through my years using react.

The structure is that you create folder and that folder is named with the component that you want to use. That folder contains a minimum of 2 files, an `index.ts` and `nameOfTheComponent.tsx`

## Example
Say you create an `components/pages/home/hero`, below is the look of that `hero` folder

```
hero
    -> hero.tsx
    -> index.ts
```

The `hero.tsx` contains all the rendering of the jsx components and the `index.ts` does is it name exports the default export of the `hero.tsx`

Below is the code inside the `hero.tsx`
```
const Hero = () =>{

  return (
    <div>
      ... other components or jsx
    </div>
  )
}


export default Hero
```

The name of the component is the name of the file where it belongs and it exports default it.

Below is the code for the `index.ts`

```
export { default as HomeHero } from "./hero"
```

This way, when a component imports the `hero` component , their directory won't be `@/components/pages/home/hero/hero.tsx` and instead will be `@/components/pages/home/hero`

As you can see, the latter is much clearer and not redundant compared to the former

Another reason for this is when you want the component to ues a provider. You can only use a Provider when that Provider has already renders a component but not when the component that is using the Provider's value is inside the Provider being rendered. Below is a sample of this scenario

```


const Component = () =>{
  const { value } = useReduxProviderValues()
  const dispatch = useAppDispatch()

  const handleChangeReduxValue = () =>{
    dispatch(changeReduxValue("new value"))
  }

  return (
    <ReduxProvider>
      <OtherComponent />
      <div>
        <h2>{ value.title }</h2>
        <button onClick={handleChangeReduxValue}>Change value</button>
      </div>
    </ReduxProvider>
  )
}
```

This component will produce an error because you can't use or change a provider's value when the component that is using that value is not fully wrapped or rendered as a child of a Provider


To solve this, inside the `index.ts` you export the component again but wrapped with the Provider
```
import ComponentSection from "./file.tsx"


export const Component = () =>{

  return (
    <ReduxProvider>
      <ComponentSection />
    </ReduxProvider>
  )
}
```

This way, when you use the value inside the Component, it will run properly and will not produce any error