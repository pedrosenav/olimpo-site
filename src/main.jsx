import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/Footer'
import Header from './components/Headers'
import SectionPrincipal from './components/SectionPrincipal'
import SectionVantagens from './components/SectionVantagens'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Header />
		<SectionPrincipal />
		<SectionVantagens/>
		<Footer />
	</React.StrictMode>
)
