import {
	ArrowRight,
	CarProfile,
	HandCoins,
	CreditCard,
	PhoneOutgoing,
	Money,
	Bank,
	Coins,
	PiggyBank,
	Wallet,
	Gavel,
	MedalMilitary,
} from '@phosphor-icons/react'
import { useState } from 'react'

function CardServico({ icon, title, desc, message }) {
	return (
		<div className="max-w- bg-white p-4 rounded-lg flex flex-col justify-between gap-4 shadow-md sm:hover:shadow-xl sm:hover:scale-105 transition-all">
			<div className="flex justify-start gap-2">
				{icon}
				<h3 className="text-olimpo_blue font-semibold text-xl">{title}</h3>
			</div>

			<p className="text-slate-500 flex-1">{desc}</p>

			<a
				target='_blank' rel="noreferrer" href={`mailto:promotoraolimposuporte@gmail.com?subject=${title}&body=${message}`}
			>
				<button
					className="tracking-wide font-light flex items-center justify-between w-full bg-olimpo_yellow hover:bg-olimpo_blue active:brightness-110 hover:text-white transition-colors text-olimpo_blue px-4 py-2 rounded-lg
					"
				>
					Simular
					<ArrowRight />
				</button>
			</a>
		</div>
	)
}

export const servicos = [
	{
		id: 1,
		title: 'Crédito consignado',
		desc: 'Empréstimo com desconto automático em folha de pagamento',
		icon: <Coins size={32} color="#e4aa15" />,
		message: 'Estamos felizes em ter você conosco, digite aqui sua mensagem...',
	},
	{
		id: 2,
		title: 'Financiamento de veículos',
		desc: 'Empréstimo específico para a compra de veículos.',
		icon: <CarProfile size={32} color="#e4aa15" />,
		message: 'Estamos felizes em ter você conosco, digite aqui sua mensagem...',
	},
	{
		id: 3,
		title: 'Novo crédito',
		desc: 'Possibilidade de obter um novo empréstimo em cima de um já existente',
		icon: <CreditCard size={32} color="#e4aa15" />,
		message: 'Estamos felizes em ter você conosco, digite aqui sua mensagem...',
	},
	{
		id: 4,
		title: 'Portabilidade',
		desc: 'Transferência de dívida de uma instituição financeira para outra',
		icon: <PhoneOutgoing size={32} color="#e4aa15" />,
		message: 'Estamos felizes em ter você conosco, digite aqui sua mensagem...',
	},
	{
		id: 5,
		title: 'Empréstimo',
		desc: 'Operação financeira em que uma instituição empresta dinheiro a um cliente',
		icon: <Money size={32} color="#e4aa15" />,
		message: 'Estamos felizes em ter você conosco, digite aqui sua mensagem...',
	},
	{
		id: 6,
		title: 'Financiamento',
		desc: 'Modalidade de crédito para aquisição de bens e serviços',
		icon: <Bank size={32} color="#e4aa15" />,
		message: 'Estamos felizes em ter você conosco, digite aqui sua mensagem...',
	},
	{
		id: 7,
		title: 'Crédito pessoal',
		desc: 'Empréstimo para uso livre do cliente',
		icon: <HandCoins size={32} color="#e4aa15" />,
		message: 'Estamos felizes em ter você conosco, digite aqui sua mensagem...',
	},
	{
		id: 8,
		title: 'FGTS',
		desc: 'Fundo de Garantia por Tempo de Serviço para trabalhadores com carteira assinada',
		icon: <PiggyBank size={32} color="#e4aa15" />,
		message: 'Estamos felizes em ter você conosco, digite aqui sua mensagem...',
	},
	{
		id: 9,
		title: 'SIAPE',
		desc: 'Sistema Integrado de Administração de Recursos Humanos para servidores públicos federais',
		icon: <Wallet size={32} color="#e4aa15" />,
		message: 'Estamos felizes em ter você conosco, digite aqui sua mensagem...',
	},
	{
		id: 10,
		title: 'Exército',
		desc: 'Aposentadoria e benefícios para militares',
		icon: <MedalMilitary size={32} color="#e4aa15" />,
		message: 'Estamos felizes em ter você conosco, digite aqui sua mensagem...',
	},
	{
		id: 11,
		title: 'Governo',
		desc: 'Aposentadoria e benefícios para funcionários públicos',
		icon: <Gavel size={32} color="#e4aa15" />,
		message: 'Estamos felizes em ter você conosco, digite aqui sua mensagem...',
	},
]

export default function SectionServicos() {
	const [degree, setDegree] = useState(window.innerWidth >= 768 ? 90 : 180)

	window.onresize = () =>
		window.innerWidth >= 768 ? setDegree(90) : setDegree(180)

	return (
		<section
			id="servicos"
			style={{
				backgroundImage: 'url(/handshake-side-75x.jpg)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'bottom',
			}}
			className="relative bg-slate-300 min-h-fit px-10 flex justify-center items-start"
		>
			<div className="z-10 py-20 max-w-[98rem] w-full flex flex-col gap-7">
				<div className="max-w-md flex flex-col gap-7 justify-start items-start">
					<h2 className="text-4xl font-semibold text-olimpo_blue">
						Faça seu empréstimo com a gente!
					</h2>
					<p className="text-slate-500 text-lg">
						Veja todos os serviços que a Olimpo oferece
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[28rem] xs:max-h-96 sm:max-h-max max-w-5xl sm:overflow-visible overflow-y-auto">
					{servicos.map((servico) => (
						<CardServico key={servico.id} {...servico} />
					))}
				</div>
			</div>
			<div
				className="w-full h-full z-0 absolute"
				style={{
					backgroundSize: 'contain',
					backgroundImage: `linear-gradient(${degree}deg, #cbd5e1 20%, #cbd5e170 90%)`,
				}}
			></div>
		</section>
	)
}
