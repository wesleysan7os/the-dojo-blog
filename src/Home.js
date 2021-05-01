import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
  const { data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {error && <div>{ error }</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
    </div>
  );
}
 
export default Home;

