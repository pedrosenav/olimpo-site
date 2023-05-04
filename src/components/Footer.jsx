import { Envelope, Phone, WhatsappLogo } from '@phosphor-icons/react'
import Olimpo from './widgets/Olimpo'

function FooterItem({ content = '', link = '#', icon = null }) {
	return (
		<li className="hover:underline gap-2 flex items-center">
			{icon}
			<a href={link}>{content}</a>
		</li>
	)
}

export default function Footer() {
	const footerLists = [
		{
			id: 'para-voce',
			title: 'Para você',
			items: [
				{
					id: 'novo-credito',
					content: 'Novo crédito',
					link: '#',
				},
				{
					id: 'credito-pessoal',
					content: 'Crédito pessoal',
					link: '#',
				},
				{
					id: 'financiamento',
					content: 'Financiamento',
					link: '#',
				},
				{
					id: 'fgts',
					content: 'FGTS',
					link: '#',
				},
				{
					id: 'credito-consignado',
					content: 'Crédito consignado',
					link: '#',
				},
				{
					id: 'emprestimo',
					content: 'Empréstimo',
					link: '#',
				},
			],
		},
		{
			id: 'atendimento',
			title: 'Atendimento',
			items: [
				{
					id: 'whatsapp',
					icon: <WhatsappLogo />,
					content: '21 9999-9999',
					link: '#',
				},
				{
					id: 'phone',
					icon: <Phone />,
					content: '21 8888-8888',
					link: '#',
				},
				{
					id: 'email',
					icon: <Envelope />,
					content: 'email@olimpo.com',
					link: '#',
				},
			],
		},
		{
			id: 'localizacao',
			title: 'Localização',
			items: [
				{
					id: 'endereco',
					content: `Rua Street Name, 123 - São Gonçalo, Rio de Janeiro - 29764318`,
					link: '#',
				},
			],
		},
	]

	return (
		<footer className="px-10 bg-olimpo_blue text-white flex justify-center items-center">
			<div className="py-7 px-4 w-full max-w-[98rem] flex flex-wrap gap-8 justify-between items-start">
				<Olimpo color="white" size="6rem" />

				<ul className="flex gap-8 flex-wrap">
					{footerLists.map((list) => (
						<li key={list.id}>
							<h3 className="font-medium text-xl pb-4">{list.title}</h3>
							<ul className="flex flex-col gap-2 text-slate-400 ">
								{list.items.map((item) => (
									<FooterItem {...item} />
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</footer>
	)
}
