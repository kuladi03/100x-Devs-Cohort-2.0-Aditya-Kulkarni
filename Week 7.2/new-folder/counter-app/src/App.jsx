import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { countAtom } from "./store/atoms/count"

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
      Hi count is called
      <CountRender/>
      <Button />
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
  const [count , setCount] = useRecoilState(countAtom)
  return (
    <div>
      <button onClick={() => {
        setCount(count+1)
      }}>
      Increase
      </button>
      
      <button onClick={()=>{
        setCount(count-1)
      }}>
        Decrease
      </button>
    </div>
  )  
}

export default App
