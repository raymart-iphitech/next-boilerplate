import { 
  updateSampleInformation, 
  useSampleStore } from "@/store/sample/sample"


const Sample = () =>{
  const { information } = useSampleStore()

  return (
    <div>
      <h1>{ information.title }</h1>
      <p>{ information.description }</p>
      <button onClick={() =>{
        updateSampleInformation({
          title: "New title from button",
          description: "New description"
        })
      }}>Click</button>
    </div>
  )
}


export default Sample