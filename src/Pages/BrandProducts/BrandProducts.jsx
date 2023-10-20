import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UniqueBrandCard from "../../Components/UniqueBrandCard/UniqueBrandCard";
const BrandProducts = () => {
    const products=useLoaderData();

    const {brand}=useParams();
    console.log(products);

    const [allBrand,setAllBrand]=useState([]);
    const [img1,setimg1] = useState(null);
    const [img2,setimg2] = useState(null);
    const [img3,setimg3] = useState(null);

    useEffect(()=>{
        fetch('../brands.json')
        .then(res=>res.json())
        .then(data=>{
            setAllBrand(data);
        })
    },[])
    console.log(allBrand);
    useEffect(()=>{
        const selectedBrand=allBrand.find(singleBrand=>singleBrand.brand_name===brand);
        setimg1(selectedBrand?.slide1)
        setimg2(selectedBrand?.slide2)
        setimg3(selectedBrand?.slide3)
        console.log(img1);
    },[allBrand, brand, img1])

    return (
        <div className="px-4 md:px-10 lg:px-20 mt-10">
            <div className="carousel w-full mb-10" >
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full h-[80vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full h-[80vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full h-[80vh]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> 
            </div>
            <h2 className="text-center text-5xl font-bold text-orange-500 mb-10">Total Products: {products.length}</h2>
            <div>
               {
                products.length>0 ?
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {
                        products.map(product=><UniqueBrandCard key={product._id} product={product}></UniqueBrandCard>)
                    }
                </div> :
                'No product available'
               }
            </div>
        </div>
    );
};

export default BrandProducts;