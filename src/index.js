import ReactDOM from 'react-dom';
import './index.css';
import Header from './header';

function App(){
              return (<div className='main'>
                    <Header/>
                    <Facts/>
                    <List/>
                    <Footer/>
              </div>
              )
}

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


ReactDOM.render(<App/>,document.getElementById('root'));

