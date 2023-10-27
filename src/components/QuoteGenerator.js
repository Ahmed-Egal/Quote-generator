import { useEffect , useState} from 'react'
import './quotegenerator.css'
import github from '../assets/github.png';
import twitter from '../assets/twitter.png'



import React from 'react'

const QuoteGenerator = () => {

    const [quotes,setQuotes] = useState([])


    useEffect(() => {
        fetchAPI()
    }, [])


    
const fetchAPI = () =>{
     fetch('https://api.quotable.io/quotes/random')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setQuotes(data);

        })
           

    } 

  return (
    
    <div className='content'>
        <div className='container'>
                {quotes.map(quote => (
                <div key={quote.id} className="quote-section">
                <p className='quote'>&ldquo; {quote.content} &rdquo;</p>
                <p className='author'> - {quote.author}</p>
                </div>
            ))}
        </div>

    

      <div className='icons-container'>
        <div className='icons'>
            <a href='https://github.com' target='_blank' className='image-link' ><img src={github} alt='Github logo' className='image' /></a>
            <a href='https://twitter.com/intent/tweet' target='_blank' className='image-link' ><img src={twitter} alt='Twitter logo ' className='image'  /></a>
        </div>
        
        <div className='button'>        
            <button onClick={fetchAPI}>New quote</button>
        </div>
        

      </div>
      

  </div>
        
       

    

    
  )
}





export default QuoteGenerator
