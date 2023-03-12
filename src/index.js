import ReactDOM from 'react-dom';
import './index.css';

function MainComponent(){
              return (<div className='main'>
                    <Header/>
                    <Facts/>
                    <List/>
                    <Footer/>
              </div>
              )
}

const Header=()=>(
    <nav>
         <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" className='nav-logo'/>
         <ul className='nav-items'>
           <li><a href="#">Pricing</a></li>
           <li><a href="#">About</a></li>
           <li><a href="#">Contact</a></li>
         </ul>
    </nav>)

const Facts=()=> <h1>Fun facts about React</h1>

const List=()=> (
              <ol>
                  <li>Was released in 2013</li>
                  <li>Was originally created by Jordan Walke</li>
                  <li>Has well over 100k stars on Github</li>
                  <li>Is maintained by Facebook</li>
                  <li>Powers thousand of enterprise apps including mobile apps</li>
              </ol>
)

const Footer=()=>(
   <p className='footer'>2023 shimanto development. all rights reserved</p>
)


ReactDOM.render(<MainComponent/>,document.getElementById('root'));

