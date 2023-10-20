import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {

    const product= useLoaderData();
    console.log(product);
    const {name,brand, type, price, photo, description, rating}= product[0];
    const productDetails= {name,brand, type, price, photo, rating};

    const handleCart=()=>{
        fetch('http://localhost:5000/cart',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(productDetails),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product added to cart successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div className="bg-gray-200 min-h-[70vh]">
            <div className="w-1/3 bg-gradient-to-r from-cyan-500 to-blue-500 py-6 mx-auto border-2 border-black mt-2">
                <div className=" pt-4 mb-6">
                    <img className="mx-auto w-[225px] h-[225px]" src={photo} alt="" />
                </div>
                <div className="text-center">
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-2 text-white">{name}</h2>
                    <p className="text-lg md:text-2xl font-semibold mb-1 text-white"><span className="font-bold text-white">Brand:</span> {brand}</p>
                    <p className="text-lg md:text-2xl font-semibold mb-1 text-white"><span className="font-bold text-white">Type: </span> {type}</p>
                    <p className="text-lg md:text-xl font-semibold text-white"><span className="font-bold text-white">Price: </span> {price}</p>
                    <p className="text-white font-semibold"><span className="font-bold">Description: </span> {description}</p>
                    <button onClick={handleCart} className="bg-purple-500 px-2 py-1 rounded-md text-xl font-bold mx-auto w-1/2 mt-4 text-white ">Add cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;