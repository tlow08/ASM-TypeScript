import "./App.css";
// import AddTodo from "./components/AddTodo";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { formData, IProduct } from "./interface/products";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import instance from "./axios/index";
import Dashboard from "./pages/admin/Dashboard";
import ShopPage from "./pages/ShopPage";
import ClientLayout from "./layouts/ClientLayout";
import PrivateRoute from "./routes/PrivateRoute";
import AdminLayout from "./layouts/AdminLayout";
import AuthForm from "./pages/AuthForm";
import { formCategory, InCategory } from "./interface/categories";
import ListCategories from "./pages/admin/ListCategories";
import AddCategory from "./pages/admin/AddCategory";
import UpdateCategory from "./pages/admin/UpdateCategory";
import ListUser from "./pages/admin/ListUser";
import ListProducts from "./pages/admin/ListProducts";
import AddProduct from "./pages/admin/AddProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";
import Category from "./pages/Category";

function App() {
  const nav = useNavigate();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<InCategory[]>([]);

  //categories
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("/categories");
        setCategories(data);
      } catch (errors) {
        console.log(errors);
      }
    })();
  }, []);

  const onAddCategory = async (dataCategory: formCategory) => {
    try {
      const { data } = await instance.post("/categories", dataCategory);
      const newData = [...categories, data];
      setCategories(newData);
      alert("Add category successfully!");
      nav("/admin/categories");
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteCategory = async (id: number | string) => {
    try {
      if (confirm("Delete Category ?")) {
        await instance.delete(`/categories/${id}`);
        alert("Delete category successfully!");
        const newCategories = categories.filter(
          (category) => category.id !== id
        );
        setCategories(newCategories);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdateCategory = async (
    dataCategory: formCategory,
    id: number | string
  ) => {
    try {
      const { data } = await instance.put(`/categories/${id}`, dataCategory);
      const newCategory = categories.map((category) =>
        category.id == id ? data : category
      );
      setCategories(newCategory);
      alert("Update category successfully!");
      nav("/admin/categories");
    } catch (error) {
      console.log(error);
    }
  };

  //products
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const onAdd = async (dataProduct: formData) => {
    try {
      const { data } = await instance.post("/products", dataProduct);
      const newData = [...products, data];
      setProducts(newData);
      alert("them moi thanh cong");
      nav("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async (id: number | string) => {
    try {
      if (confirm("Delete product?")) {
        await instance.delete(`/products/${id}`);
        alert("delete successfully");
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onEdit = async (dataProduct: formData, id: number | string) => {
    try {
      const { data } = await instance.put("/products/" + id, dataProduct);
      const newProduct = products.map((product) =>
        product.id == id ? data : product
      );
      setProducts(newProduct);
      alert("cap nhat thanh cong");
      nav("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route
            index
            element={<HomePage products={products} categories={categories} />}
          />
          <Route
            path="shop"
            element={<ShopPage products={products} categories={categories} />}
          />
          <Route
            path="product-detail/:id"
            element={<DetailPage products={products} />}
          />
          <Route path="register" element={<AuthForm isRegister={true} />} />
          <Route path="login" element={<AuthForm isRegister={false} />} />
          <Route
            path="category/:id"
            element={<Category categories={categories} products={products} />}
          />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />

            <Route
              path="products"
              element={
                <ListProducts
                  onDeleteProduct={onDelete}
                  products={products}
                  categories={categories}
                />
              }
            />
            <Route
              path="add-product"
              element={
                <AddProduct onAddProduct={onAdd} categories={categories} />
              }
            />
            <Route
              path="update-product/:id"
              element={
                <UpdateProduct
                  onUpdateProduct={onEdit}
                  categories={categories}
                />
              }
            />

            <Route
              path="categories"
              element={
                <ListCategories
                  categories={categories}
                  onDeleteCategory={onDeleteCategory}
                />
              }
            />
            <Route
              path="add-category"
              element={<AddCategory onAddCategory={onAddCategory} />}
            />
            <Route
              path="update-category/:id"
              element={<UpdateCategory onUpdateCategory={onUpdateCategory} />}
            />

            <Route path="users" element={<ListUser />} />
            {/* Add more admin routes here */}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
