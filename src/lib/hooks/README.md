# Hooks
This hooks folder contains all the hooks that are used throughout the application. Don't be confused this hooks folder to the custom hooks that are used by the different components for this codebase. 

This hooks folder inside the `lib` is used to store hooks that are reusable and can be used by different applications or can be used

## Sample hooks
Below are some of the hooks

### useDebounce

The `useDebounce` hook is used to create a debouncer so updates won't always be run per change on an item and will only fire when a user exceeeds the time set as stale

#### Usage
```
const ComponentThatUsesDebouncer = () =>{
  const [username, setUsername] = useState("")
  const { debouncer } = useDebounce((newName: string)=>setUsername(newName))
  
  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) =>{
    debouncer(event.currentTarget.value)
  }

  return (
    <form>
      <input type="text" onChange={ handleChangeUsername } />
    </form>
  )
}
```

The `useDebounce` hook accepts a function and this function will run when the stale time is exceeded. This hook also accepts a second optional parameter, a `threshold` time that is used to determine if it is state or not, `1000` equals to `1` second