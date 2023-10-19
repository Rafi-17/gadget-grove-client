import bg from '../../assets/brandBG.jpg'
import bg1 from '../../assets/brandBg.jpeg'
import Banner from "../../Components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import BrandCard from "../../Components/BrandCard/BrandCard";


const Home = () => {
    const brands= useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="px-32 bg-gray-200 bg-no-repeat bg-cover">
                <h2 className="text-6xl font-extrabold text-orange-500 text-center pt-10 mb-10">Our Trusted Brands</h2>
                <div className="grid grid-cols-3 gap-8 ">
                    {
                        brands.map(brand=><BrandCard key={brand.key} brand={brand}></BrandCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;