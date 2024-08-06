import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { InCategory } from "../interface/categories";
import { IProduct } from "../interface/products";
import instance from "../axios";

const Category = () => {
  const { id } = useParams<{ id: string }>();

  const [category, setCategory] = useState<InCategory | null>(null);
  const [categoryProducts, setCategoryProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        // Fetch all categories
        const { data: categoriesData } = await instance.get(`/categories`);
        const selectedCategory = categoriesData.find((cat: InCategory) => cat.id === parseInt(id));
        setCategory(selectedCategory);

        // Fetch all products
        const { data: productsData } = await instance.get(`/products`);
        
        // Filter products that belong to the selected category
        const filteredProducts = productsData.filter((product: IProduct) => product.category === parseInt(id));
        setCategoryProducts(filteredProducts);
      } catch (error) {
        console.log("Error fetching category or products:", error);
      }
    };

    fetchCategory();
  }, [id]);

  if (!category) return <div>Loading...</div>;

  return (
    <>
      <section className="container max-w-screen-xl mt-2">
      <h3>San pham:</h3>
      <div className="grid grid-cols-4 gap-8 mt-4 mb-8" >
        {categoryProducts.length > 0 ? (
          categoryProducts.map((product) => (
            <div  key={product.id}>
               <div className="w-[50px] h-[24px] bg-gray-600 rounded-md text-white text-base">
                  <p className="text-center">Sell</p>
                </div>
                <div className="flex justify-center">
                  <div className="relative image-container max-w-[200px] max-h-[200px]">
                    <img
                      className="object-cover h-full"
                      src={product.image}
                      alt="Image"
                    />
                    <div className="overlay flex gap-2">
                      <a className="  py-1 px-2 bg-[#4E7C32] text-white text-xl font-semibold">
                        <i className="bi bi-cloud-arrow-down"></i>
                      </a>
                      <a className=" py-1 px-2 bg-[#4E7C32] text-white text-xl font-semibold">
                        <i className="bi bi-bag-check font-bold"></i>
                      </a>
                      <a className=" py-1 px-2 bg-[#4E7C32] text-white text-xl font-semibold">
                        <i className="bi bi-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <Link to={`/product-detail/${product.id}`}>
                    <h3 className="text-[16px] font-bold mt-2">{product.name}</h3>
                  </Link>
                  <div className="flex gap-2 text-[15px] text-gray-400">
                    <p>${product.price}</p>
                    <p className="line-through">${product.price}</p>
                  </div>
                </div>
            </div>
            
          ))

        ) : (
          <p>No products found in this category.</p>
        )}
        
      </div>
      </section>

    
      
    </>
  );
};

export default Category;
