# Structure
All the routes inside the `pages` folder is treated as route in next.js. 

For this boilerplate, the suggested style is that if you want to create a route, create a folder for it and have an index on it. Below is sample


```
pages
 -> login(folder)
   -> index.ts
 -> signup(folder)
   -> index.ts
```

As you can see, you name a folder the route name that you want and every folder have an `index.ts`. The `index.ts` will `export default` the component of that page, like a normal next.js app:
```
const Login = () =>{

  return (
    <main>
        <ASectionCompoentOfTheLoginPage />
        <AnotherSectionCompoentOfTheLoginPage />
    </main>
  )
}


export default Login
```

As you can see, the page component does not really have many `jsx` inside it, it only imports and use the components from other folders or files and renders it. This way, every section of the page will only live on their own component or file and will not clutter a single file or component.