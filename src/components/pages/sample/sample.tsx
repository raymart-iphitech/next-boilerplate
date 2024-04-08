import { useSampleStore } from "@/store/sample/sample"


const Sample = () =>{
  const { information, updateInformation } = useSampleStore()

  return (
    <div>
      <h1>{ information.title }</h1>
      <p>{ information.description }</p>
      <button onClick={() =>{
        updateInformation({
          title: "New title from button"
        })
      }}>Click</button>
    </div>
  )
}


export default Sample