import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header'
import './styles/style.css'

const App = () => {
    return(
        <>
            <Header/>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);