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
	<div className="slide">
		<h1>SUMÁRIO</h1>
		<ul>
			<li>SOBRE NÓS</li>
			<li><a href="#qualidade">QUALIDADE, UM VALOR FUNDAMENTAL</a></li>
			<li>USANDO ESTE DOCUMENTO</li>
			<li>INFORMAÇÕES GERAIS</li>
			<li>DOCUMENTAÇÃO</li>
			<li>DECLARAÇÃO DE CONFORMIDADE DE ALERGÊNICOS</li>
			<li>QUESTIONÁRIO DE AUTODIAGNÓSTICO</li>
		</ul>
	</div>
)
const SectionSobrenos = () => (
	<div className="slide">
		<h1>SOBRE NÓS</h1>
		<p>A Polo Films é pioneira no setor de fabricação de BOPP (polipropileno biorientado) no Brasil. Passou por transformações e adaptações ao longo dos anos para estar sempre preparada para atender às demandas do mercado.</p>
		<p>Evoluir é uma das premissas da Polo Films desde sua criação. A constante preocupação com a qualidade de seus produtos, cuidado no atendimento e união de suas equipes estão em seu DNA. Diariamente busca atender com excelência e paixão as demandas do mercado, valorizando a confiança de seus clientes. Para maiores informações, acesse nosso site: www.polofilms.com.br.</p> 
	</div>
)
const SectionQualidade = () => (
	<div className="slide" id="qualidade">
		<h1>QUALIDADE, UM VALOR FUNDAMENTAL</h1>
		<p>Todos os dias na Polo Films estamos trabalhando para melhorar nossa organização, nossos processos e as habilidades de nossos funcionários para sermos os melhores de nosso segmento. Estamos comprometidos com a excelência da qualidade, processo com foco no cliente e mentalidade de melhoria contínua.</p>
		<p>Na Polo Films consideramos os nossos fornecedores importantes parceiros de negócios no cumprimento de nossa meta de fornecer produtos seguros e de alta qualidade. Entendemos que é vital fomentar relacionamentos com outras empresas que são conduzidas ao mesmo nível de excelência na condução de suas operações comerciais, ou seja, de maneira consistente com o mais alto grau de padrões éticos, legais e profissionais mantidos em nossa empresa.</p>
		<p>Em nossa missão de gerar prosperidade através de soluções de BOPP e nossa visão de sermos reconhecidos como a melhor empresa de BOPP do Brasil, esperamos que nossos fornecedores nos suportem na jornada de sustentabilidade através do cuidado que investem nas peças, componentes e serviços que oferecem, produzem e entregam.</p>
	</div>
)
const SectionUsandoestedocumento = () => (
	<div className="slide">
		<h1> USANDO ESTE DOCUMENTO</h1>
		<p>O documento de Auto Diagnóstico de Fornecedor é uma ferramenta valiosa para o fornecedor e Polo Films em nosso programa de avaliação da cadeia de suprimentos. Ela apoia na avaliação, gerenciamento e melhoria contínua de nosso produto e processo. Para tal, solicita-se o retorno do documento preenchido em até 10 dias úteis após o seu recebimento.</p>
		<p>É fundamental que o fornecedor realize o retorno via e-mail do documento preenchido e da documentação solicitada.</p>
		<p>Este questionário é aplicável aos fornecedores de serviços de transporte.</p>
	</div>
)
export default () => (
	<div className="pre_capa">
		<SectionHome />
		<SectionSummary />
		<SectionSobrenos />
		<SectionQualidade />
		<SectionUsandoestedocumento />
	</div>	
)

