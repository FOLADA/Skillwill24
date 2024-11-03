import React, { useId, useState } from 'react';

const Home: React.FC = () => {
    const [email, setEmail] = useState("");
    const [num, setNum] = useState(0);
    const Id = useId();

    const increase = () => {
        setNum(prev => prev + 1);
    };

    const decrease = () => {
        setNum(prev => prev - 1);
    };

    const submitBtn = (e: React.FormEvent) => {
        e.preventDefault();
        setEmail(""); 
    };

    return (
        <div className='Home-div'>
            <h1>
                I wanted to make Home page really attractive, with functionality and many components, but don't have time. At least use that counter. It's kind of funny
            </h1>
            <h1>{num}</h1>
            <button onClick={increase} className='Home-btn'>+</button>
            <button onClick={decrease} className='Home-btn'>-</button>
            <br /><br />
            <form onSubmit={submitBtn}>
                <label htmlFor={Id}>
                    Email:
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        id={Id} 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        required
                    />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Home;
