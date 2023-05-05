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

function CardServico({ icon, title, desc }) {
	return (
		<div className="bg-white p-4 rounded-lg flex flex-col justify-between gap-4 shadow-md hover:shadow-xl hover:scale-105 transition-all">
			<div className="flex justify-start gap-2">
				{icon}
				<h3 className="text-olimpo_blue font-semibold text-xl">{title}</h3>
			</div>

			<p className="text-slate-500">{desc}</p>

			<button
				className="tracking-wide font-light flex items-center justify-between w-full bg-olimpo_yellow hover:bg-olimpo_blue hover:text-white transition-colors text-olimpo_blue px-4 py-2 rounded-lg
				"
			>
				Simular
				<ArrowRight />
			</button>
		</div>
	)
}

export default function SectionServicos() {
	const servicos = [
		{
			id: 1,
			title: 'Crédito consignado',
			desc: 'Frase sobre o serviço e num sei o que, sei que lá',
			icon: <Coins size={32} color="#e4aa15" />,
			link: '#',
		},
		{
			id: 2,
			title: 'Financiamento de veículos',
			desc: 'Frase sobre o serviço e num sei o que, sei que lá',
			icon: <CarProfile size={32} color="#e4aa15" />,
			link: '#',
		},
		{
			id: 3,
			title: 'Novo crédito',
			desc: 'Frase sobre o serviço e num sei o que, sei que lá',
			icon: <CreditCard size={32} color="#e4aa15" />,
			link: '#',
		},
		{
			id: 4,
			title: 'Portabilidade',
			desc: 'Frase sobre o serviço e num sei o que, sei que lá',
			icon: <PhoneOutgoing size={32} color="#e4aa15" />,
			link: '#',
		},
		{
			id: 5,
			title: 'Empréstimo',
			desc: 'Frase sobre o serviço e num sei o que, sei que lá',
			icon: <Money size={32} color="#e4aa15" />,
			link: '#',
		},
		{
			id: 6,
			title: 'Financiamento',
			desc: 'Frase sobre o serviço e num sei o que, sei que lá',
			icon: <Bank size={32} color="#e4aa15" />,
			link: '#',
		},
		{
			id: 7,
			title: 'Crédito pessoal',
			desc: 'Frase sobre o serviço e num sei o que, sei que lá',
			icon: <HandCoins size={32} color="#e4aa15" />,
			link: '#',
		},
		{
			id: 8,
			title: 'FGTS',
			desc: 'Frase sobre o serviço e num sei o que, sei que lá',
			icon: <PiggyBank size={32} color="#e4aa15" />,
			link: '#',
		},
		{
			id: 9,
			title: 'SIAPE',
			desc: 'Frase sobre o serviço e num sei o que, sei que lá',
			icon: <Wallet size={32} color="#e4aa15" />,
			link: '#',
		},
		{
			id: 10,
			title: 'Exército',
			desc: 'Frase sobre o serviço e num sei o que, sei que lá',
			icon: <MedalMilitary size={32} color="#e4aa15" />,
			link: '#',
		},
		{
			id: 11,
			title: 'Governo',
			desc: 'Frase sobre o serviço e num sei o que, sei que lá',
			icon: <Gavel size={32} color="#e4aa15" />,
			link: '#',
		},
	]

	return (
		<section className="bg-slate-300 min-h-fit p-10 flex justify-center items-start">
			<div className="max-w-[98rem] w-full flex flex-col gap-7">
				<div className="max-w-md flex flex-col gap-7 justify-start items-start">
					<h2 className="text-4xl font-semibold text-olimpo_blue">
						Faça seu empréstimo com a gente!
					</h2>
					<p className="text-slate-500 text-lg">
						Veja todos os serviços que a Olimpo oferece
					</p>
				</div>

				<div className="grid sm sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 max-w-5xl">
					{servicos.map((servico) => (
						<CardServico key={servico.id} {...servico} />
					))}
				</div>
			</div>
		</section>
	)
}
