import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Trends({setProd, gender}) {
  useEffect(()=>{
    //axios get request sending M or F
  },[])
  const navigate = useNavigate();
  const a=[{"id":1,"name":"firstpro", "eco":"true"},{"id":2,"name":"second pro"}]
  const openProduct = (ele)=>{
    setProd(ele)
    navigate("/prod")
  }
  return (
    <div className="flex justify-center space-x-7 mt-20">
      {a.map((ele, index)=>(
        <div key={index} className={`h-80 w-52 shadow-lg hover:bg-slate-200 cursor-pointer `} onClick={()=>openProduct(ele)}>
            <img className="h-56 w-full"></img>
            <div className="ml-4 mt-2">
              {ele.eco=="true"&&<div className="flex items-center"><img src="https://static.vecteezy.com/system/resources/thumbnails/010/852/913/small_2x/leaf-icon-vector-png.png" className="h-4 w-4 mr-2"></img> Eco-friendly </div>}
              <p className="font-bold">{ele.name}</p>
              {ele.eco=="true"&&<button className="border-solid border-slate-500 border rounded-xl px-1 text-xs flex items-center mt-2">
                <img src="https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png" className="h-4 w-4"></img>1.5X Myntra Coins</button>}
            </div>
        </div>
        

      ))}
    </div>
  )
}

export default Trends