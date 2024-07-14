import { useEffect } from "react";

const Prod = ({ prod }) => {
    useEffect(()=>{
        //axios get request sending product id
      },[])
  return (
    <div className="ml-40">
      <div className="flex  mt-20">
        <img className="h-96 w-72"></img>
        <div className="ml-80">
          <p className="font-bold text-2xl">{prod.name}</p>
          <p className="font-bold text-2xl mt-6">{`₹300`}</p>
          <p className="font-bold text-green-600 text-sm mt-2">inclusive of all taxes</p>
          <button className="h-12 w-72 bg-rose-500 hover:bg-rose-400 text-white rounded-md mt-8">Add to Bag</button>
          <button className="h-12 w-52 border-solid border-slate-500 border rounded-md mt-8 ml-2 hover:border-2">Wishlist</button>

        </div>
      </div>
      <div>
        <p className="font-bold text-3xl mt-20 mb-6">Outfit recommender</p>
        <div className="h-72 w-52 shadow-lg hover:bg-slate-200 cursor-pointer" >
            <img className="h-56 w-full"></img>
            <div className="ml-4">
              <p className="font-bold">hello</p>
              
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Prod;
