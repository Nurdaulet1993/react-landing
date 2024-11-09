import './App.css'
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${BASE_URL}/posts?page=${page}`);
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err);
        setLoading(false)
      } finally {
        setLoading(false)
      }

    }

    fetchPosts();
  }, [page])

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>Error: { error.message }</h2>

  return (
    <>
      <h1></h1>
      <div className="wrapper">
        { posts.map(item => <div key={item.id}>{item.title}</div>  ) }
        <Header/>
        <Hero/>
        <Outlet/>
      </div>

    </>
  )
}

export default App
