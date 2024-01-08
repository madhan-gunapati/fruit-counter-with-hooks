import { useState } from "react"

const Home = ()=>{
    const [count , setCount] = useState({mangoes:5 , bananas:5})

    function addBanana(){
        setCount((p)=>({...p ,bananas:p.bananas + 1}))
    }

    function addMango(){
        // <p>No shallow merge in useState</p>
        setCount((p)=>({...p ,mangoes:p.mangoes+1}))
    }
    return <div>
        <h3>Bob ate {count.mangoes} mangoes and {count.bananas} bananas</h3>
        <div>
           
            <button type='button' onClick={addMango}>Eat Mango</button>
            <button type='button' onClick={addBanana}>Eat Banana</button>
        </div>
    </div>


}

export default Home