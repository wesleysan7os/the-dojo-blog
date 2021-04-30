import { useState } from 'react';

const Home = () => {

  const [name, setName] = useState('wesley');
  const [age, setAge] = useState(18);
  

  const handleClick = (name, age) => {
    setName(name);
    setAge(age);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } old.</p>
      <button onClick={() => handleClick('juan', 29)}>Click me</button>
    </div>
  );
}
 
export default Home;