import './style.css'

const SectionHome = () => (
	<div className="capa">
		<img className="logo" src="/images/logo.png" />
		<h1>AUTODIAGNÓSTICO DE FORNECEDOR</h1>
		<h2> TRANSPORTADORAS	</h2>
		<h2>Ciclo 2020</h2>
		<img className="fabrica"src="/images/fabrica.png" />
	</div>
)

const SectionSummary = () => (
	<div>summary</div>
)

export default () => (
	<div>
		<SectionHome />
		<SectionSummary />
	</div>	
)

