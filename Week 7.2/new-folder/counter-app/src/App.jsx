import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom, eventSelector } from "./store/atoms/count"

function App() {
  return (
    <div>
        <RecoilRoot>
          <Count/>
        </RecoilRoot>
    </div>
  )
}

function Count(){
  return (
    <div>
      <CountRender/>
      <Button />
      <Check/>
    </div>
  )
}

function CountRender(){
  const count = useRecoilValue(countAtom)
    return (
      <div>
        Counter : {count}
      </div>
    )
}

function Button(){
  const setCount = useSetRecoilState(countAtom)
  return (
    <div>
      <button onClick={() => {
        setCount(count => count+1)
      }}>
      Increase
      </button>
      
      <button onClick={()=>{
        setCount(count => count-1)
      }}>
        Decrease
      </button>
    </div>
  )  
}

// function Check(){
//   const count = useRecoilValue(countAtom)

//   if(count % 2 == 0){
//     return "It is Even"
//   } 
//   else{
//     return "It is Odd"
//   }
// } 

// another way using selector 

function Check(){
  const check = useRecoilValue(eventSelector)
  return (
    <div>
       {check ? "It is Even" : null}
    </div>
  )
}

export default App
