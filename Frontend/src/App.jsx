import React from "react";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

const App = () => {
  const product = [
    {
      name: "Folded Hoodies Set",
      image:
        "https://imgs.search.brave.com/xMqoK1qL5E3qxsKJq9JpKvDfCdOqbHzZSsP10VS9WJc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE3LzkwLzkxLzU4/LzM2MF9GXzE3OTA5/MTU4ODdfcVZSekRD/S2dRakU3S2ZsR3Y4/R3lQM25XaDl6Y09E/c2wuanBn",
      price: 28.99,
    },
    {
      name: "Hanging Casual Wear",
      image:
        "https://imgs.search.brave.com/Yk9H3mpkFf5kaCORusB6w3zZZ4qipEXrxDrUNDSs8Dw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY5/MzgyODQ5NC9waG90/by9jbG9zZS11cC1v/Zi1jbG90aGVzLWhh/bmdpbmctb24taGFu/Z2Vycy1vbi1hLXJh/aWwuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWZyOWVkams3/NE5kVy1Jbm1FbXhr/dmZXUE1weU52eW9U/a3M5YUI0WFpWYnM9",
      price: 19.99,
    },
    {
      name: "Colorblock Pullover",
      image:
        "https://imgs.search.brave.com/FKBWsVspngHJ7aw0wgNeNa7expTjHMY4BHv9gUse3og/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ldmVy/ZXZlLmNvbS9jZG4v/c2hvcC9maWxlcy8w/MjEwMjVfRWNvbW1f/MDE1NDYyMDAwMS1B/Vl8xNjExXzFfMDNk/MTFjOGUtYzIxNy00/MzlhLThiZjYtMjI5/MWZhNjQ0YjFkLmpw/Zz92PTE3NDQwNjUw/NDEmd2lkdGg9MTA2/OA",
      price: 24.99,
    },
    {
      name: "Men's Summer Dress",
      image:
        "https://imgs.search.brave.com/5e-7A1mKycJU834X41cRpl8aO1ZNH0iO8y9sybO9B_o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZW5z/ZmxhaXIuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA1/L21lbnMtc3VtbWVy/LW91dGZpdHMtMi5q/cGc",
      price: 34.75,
    },
    {
      name: "Black Jacket Close-Up",
      image:
        "https://imgs.search.brave.com/m_whG50JxZ9PUL61cWRSBVSAN8EXL9SLow-CEPG4FTU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE1L2Zj/L2EwLzE1ZmNhMDE0/NmRkMzI1ZjJhYzI3/ZDI5OTMwNDhiYmZj/LmpwZw",
      price: 42.5,
    },
    {
      name: "Clothes on Rack",
      image:
        "https://imgs.search.brave.com/fwiuYIePjVQhygT0R-iR-PeHFKAytcP31GkmoeteD08/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFNT1c3WXF1UEwu/anBn",
      price: 29.99,
    },
    {
      name: "Hanging Shirts",
      image:
        "https://imgs.search.brave.com/cs_IGI1sTSg8J4v_ziC_31kG_6I1wTmhACFLXEQvdQs/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9jb3R0/b25raW5nLmNvbS9j/ZG4vc2hvcC9jb2xs/ZWN0aW9ucy9BbGxf/U2hpcnRzLmpwZz92/PTE3MDc0MTExNjE",
      price: 22.99,
    },
    {
      name: "Flat Lay Clothing",
      image:
        "https://imgs.search.brave.com/KAiehUwUSIKyovVxhR8bbgXLg3t2pjYsy3mDzEYonBQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91a2Ns/aXBwaW5ncGF0aC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMDIvRmxhdC1s/YXktQ2xvdGhpbmct/UGhvdG9ncmFwaHkt/Mi5qcGc",
      price: 31.5,
    },
  ];

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className="flex justify-center m-6">
              <h1 className="text-5xl text-blue-600 font-black">Stripe</h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center m-10">
              <Products product={product} />
            </div>
          </>
        }
      />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
    </Routes>
  );
};

export default App;
