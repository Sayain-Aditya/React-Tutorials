import './App.css'
import Card from './Component/Card'


function App() {
let myObj = {
  username: "Aditya",
  age: 23
}
let newArr =[1,2,3]
  return (
    <>
     <h1 className='bg-green-600 text-black p-4 rounded-xl mb-6'>tailwind test</h1>
     <Card username="chaiaurcode" text="hello"/>
     <Card username= "aditya"  text="hiii" />
    </>
  )
}

export default App
