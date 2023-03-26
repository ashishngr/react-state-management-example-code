import { useState, useReducer, useMemo } from "react";


function SortedList({list}){
  const sortedList = useMemo(()=>{
    console.log("running  sort");
    return [...list].sort();
  },[list])
  return <div>{sortedList.join(",")}</div>
}


//  useState ----
function NameList(){
  const [list, setList] = useState(["Jack", "Jill", "Hill"])
  const [name, setName] = useState("");

  const onAddName = (name) => {
    console.log("--")
    console.log(list)
    setList([...list, name]);
    setName("")
  }
  return (
    <div>
      <ul>
       {list.map((name)=> (
        <li key={name}>{name}</li>
       ))}
      </ul>
      <input 
      type="text"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <button 
      onClick={onAddName}>Add Name</button>
    </div>
  )
}
function Counter() {
  const [count,setCount] = useState(10)
  function addOne(){
    setCount(count+1)
  }
  return (
    <div className="App">
      <button
      onClick={addOne}>Count = {count}</button>
    </div>
  );
}

// useReducer -- 
/**
 Basic Syntax - numbers.reduce(()=>{}, initial value)
 */


function  App(){
  const [ state, dispatch ] = useReducer((state, action)=>{
    switch(action.type){
      case "SET_REDUCER_NAME": 
        return {...state, name:action.payload}
    }
  }, {
    name: [],
    name: ""
  })

  // UseMemo 
  const [numbers] = useState([10, 20, 30]);
  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
    )
  const [names] = useState(["jhon", "paul", "George", "Ringo"])
  // const sortedNames = useMemo(() =>[...names].sort());

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
    const countTotal = useMemo(()=> count1 + count2, [count1, count2])

  return(
    <>
     <div>
      <Counter />
      <NameList />
    </div>
    <div className="App" id="reducer">
      <input 
      type="text"
      value={state.name}
      onChange={e => 
      dispatch({type: "SET_REDUCER_NAME", payload: e.target.value})}/>
      <div>Name = {state.name}</div>
    </div>
    <div id="mapReducer" className="useMemo">
        Total: {total}
    </div>
    <div id="useMemoAndUseCallback">
        <div>Names: {names.join(",")}</div>
        {/* <div>Sorted Names: {sortedNames.join(",")}</div> */}
        <SortedList names={names}/>
        <button onClick={()=>setCount1(count1 + 1)}>count1: {count1}</button>
        <button onClick={()=>setCount2(count2 + 1)}>count2: {count2}</button>
        <div>Total Count: {countTotal}</div>
    </div>
    </>
  )
}
export default App;
