import { Bank, CurrencyCircleDollar, Headset } from '@phosphor-icons/react'

function CardVantagem({ title, content, icon }) {
	return (
		<div className="shadow-lg hover:shadow-xl transition-all rounded-2xl p-6 flex max-w-xs min-h-[18rem] h-fit bg-white hover:scale-105">
			<div className="flex flex-col gap-8">
				<div className="flex justify-between">
					<h3 className="font-medium text-olimpo_blue text-3xl">{title}</h3>
					{icon}
				</div>
				<p className="text-slate-500 font-light text-2xl max-w-[90%]">
					{content}
				</p>
			</div>
		</div>
	)
}

export default function SectionVantagens() {
	const cards = [
		{
			title: 'Suporte',
			content: 'Atendimento totalmente humanizado, com suporte 24 horas',
			icon: <Headset weight={'fill'} size={40} color={'#E4AA15'} />,
		},

		{
			title: 'Taxas flexíveis',
			content:
				'Buscando sempre os menores juros e as melhores taxas para o cliente',

			icon: (
				<CurrencyCircleDollar weight={'fill'} size={40} color={'#E4AA15'} />
			),
		},

		{
			title: 'Parceria',
			content: 'Parceria comprovada com os 16 maiores bancos do Brasil',
			icon: <Bank weight={'fill'} size={40} color={'#E4AA15'} />,
		},
	]

	return (
		<section
			className="bg-slate-200 min-h-fit p-10 flex justify-center items-center"
			style={{
				backgroundImage: 'url(/atendente-olimpo-75x.png)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'auto',
				backgroundPosition: 'center bottom',
			}}
		>
			<div className="max-w-[98rem] w-full flex flex-col gap-12">
				<h2 className="text-4xl font-semibold text-olimpo_blue">
					Por que contratar a Olimpo?
				</h2>

				<div className="max-w-fit gap-8 grid grid-cols-1 md:grid-cols-2">
					{cards.map((card, i) => (
						<CardVantagem key={i} {...card} />
					))}
				</div>
			</div>
		</section>
	)
}
