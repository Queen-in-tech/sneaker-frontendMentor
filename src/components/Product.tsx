type ImageData = {
    smallImageUrl: string;
    bigImageUrl: string;
    id: number;
    active: boolean;
  };

type CartContextType = {
    count: number
    setCount : (value: number) => void
    setAddToCart: (value: boolean) => void
}


import { useEffect, useState, useContext } from "react"
import Modal from "./Modal";
import { CartContext } from "../context";

const Product = () => {
    const contextValue = useContext(CartContext) as CartContextType
    const [imgData, setImgData] = useState<ImageData[]>([]) 
    const [index, setIndex] = useState(0)
    const [mobileIndex, setMobileIndex] = useState(0)
    const [toggleModal, setToggleModal] = useState(false)
    const {count, setCount, setAddToCart} = contextValue


    useEffect(() => {
        const imageData = async() => {
            try {
            const res =  await fetch("./src/images.json")
            const data = await res.json()
            const updatedData = data.map((image: ImageData, idx: number) => ({
                ...image,
                active: idx === 0
              }));
              setImgData(updatedData);
            } catch (error) {
                
            }
        }

        imageData()
    }, [])
   
    const handleClick = (id: number) => {
        const updatedData = imgData.map((image: ImageData) => {
            if (image.id === id) {
              return {
                ...image,
                active: true,
              };
            } else {
              return {
                ...image,
                active: false, 
              };
            }
          });
          setImgData(updatedData);
        setIndex(id)
    }

    useEffect(() => {
      count <= 0 && setAddToCart(false)
    }, [count])

    const addToCart = () => {
      count> 0 && setAddToCart(true)
    }

  return (
    <div className=" pt-5 md:px-12 md:pt-20 md:pb-12 md:flex md:gap-12 lg:gap-24">

    {toggleModal && <Modal imgData= {imgData} setImgData= {setImgData} setToggleModal= {setToggleModal}/>}
    <div className="">
    <div className="relative">
    <img src={imgData[index]?.bigImageUrl} alt="big product image"  className="hidden md:block md:rounded-2xl md:w-[460px] md:h-[400px] object-fill cursor-pointer" onClick={() => setToggleModal(true)}/>
    <img src={imgData[mobileIndex]?.bigImageUrl} alt="big product image"  className="md:hidden object-fill cursor-pointer h-[19rem] w-full"/>

    <img src="icon-previous.svg" alt="" className="absolute top-36 bg-white h-8 w-8 p-2 rounded-full left-3 md:hidden" onClick={() => {
        if (mobileIndex === 0){
            setMobileIndex(3)
        }else{
            setMobileIndex(mobileIndex - 1)
        }
    }}/>
    <img src="icon-next.svg" alt=""  className="absolute top-36 right-3 bg-white h-8 w-8 p-2 rounded-full md:hidden" onClick={() => {
        if (mobileIndex === 3){
            setMobileIndex(0)
        }else{
            setMobileIndex(mobileIndex + 1)
        }
    }}/>
    </div>
    <div className="hidden md:pt-6 md:flex md:gap-4 lg:gap-7">
        {
            imgData.map((image: ImageData) => (
                <div key={image.id} className={`flex ${image.active && `border border-orange-500 rounded-xl`}`}>
                    <img src={image.smallImageUrl} alt="shoe images" className={`hover:opacity-50 cursor-pointer rounded-xl w-24 h-24 ${image.active && ` opacity-40` }`} onClick={() => handleClick(image.id)} />
                </div>
            ))
        }
    </div>
    </div>
    <div className="w-full md:w-[50%] px-7 py-6 md:px-0 md:py-14">
       <p className="text-orange-500 font-bold uppercase">sneaker company</p>
       <p className="font-bold text-4xl pt-4 pb-8 capitalize w-[400px]">fall limited edition sneakers</p>
       <p className="w-full leading-7 tracking-wide text-sm mb-5">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

        <div className="flex justify-between items-center mb-4 md:mb-0 md:flex-col md:justify-start md:items-start">
       <p className="text-3xl font-bold flex items-center">$125.00 <span className="ml-4 text-sm bg-orange-200 text-orange-500 md:px-2 py-1 rounded-[5px]">50%</span></p>

       <p className="mt-2 mb-8 line-through text-sm text-gray-500 font-semibold">$250.00</p>
       </div>

       <div className="md:flex w-full md:gap-3">
        <div className="w-full py-4 px-4 mb-5 md:w-[30%] text-center md:py-3 bg-zinc-100 text-black text-sm font-bold rounded-lg flex justify-between items-center md:mb-0 md:px-4">
            <img src="icon-minus.svg" alt="minus" className="w-2 h-1 cursor-pointer" onClick={() => setCount(count - 1)}/>
            <span>{count > 0 ? count : 0}</span>
            <img src="icon-plus.svg" alt="plus" className="w-2 h-3 cursor-pointer" onClick={() => setCount(count + 1)}/>
        </div>
        <button className="w-full py-4 md:w-[50%] md:py-3 bg-orange-500 text-white text-sm font-bold rounded-lg flex justify-center items-center gap-4 hover:bg-orange-300" onClick={addToCart}>
            <img src="icon-btn-cart.svg" alt="" className="w-4 h-4" />
            Add to cart
        </button>
       </div>
    </div>
    </div>
  )
}

export default Product
