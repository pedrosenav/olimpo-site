import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/Footer'
import Headers from './components/Headers'
import SectionPrincipal from './components/SectionPrincipal'
import SectionVantagens from './components/SectionVantagens'
import SectionServicos from './components/SectionServicos'
import SectionPerguntas from './components/SectionPerguntas'
import SectionFormulario from './components/SectionFormulario'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Headers />
		<SectionPrincipal />
		<SectionVantagens />
		<SectionServicos />
		<SectionPerguntas />
		<SectionFormulario/>
		<Footer />
	</React.StrictMode>
)
