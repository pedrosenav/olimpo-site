import { Envelope, Phone, WhatsappLogo } from '@phosphor-icons/react'
import Olimpo from './widgets/Olimpo'
import { servicos } from './SectionServicos'

function FooterItem({ content = '', link = '#', icon = null }) {
	return (
		<li className="hover:underline gap-2 flex items-center">
			{icon}
			<a target="_blank" rel="noopener noreferrer" href={link}>
				{content}
			</a>
		</li>
	)
}

const person = {
	firstName: 'Name',
	lastName: 'Surname',
	get fullName() { return this.firstName + ' ' + this.lastName }
}

console.log(person)

export default function Footer() {
	const footerLists = [
		{
			id: 'para-voce',
			title: 'Para você',
			items: [
				...servicos.map((servico) => {
					return {
						id: servico.id,
						content: servico.title,
						link: `mailto:promotoraolimposuporte@gmail.com?subject=${servico.title}&body=${servico.message}`,
					}
				}),
			],
		},
		{
			id: 'atendimento',
			title: 'Atendimento',
			items: [
				/* {
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
				}, */
				{
					id: 'email',
					icon: <Envelope />,
					content: 'promotoraolimposuporte@gmail.com',
					link: `mailto:promotoraolimposuporte@gmail.com?subject=Assunto do email&body=Tire suas dúvidas ou nos informe o serviço que deseja`,
				},
			],
		},
		{
			id: 'localizacao',
			title: 'Localização',
			items: [
				{
					id: 'endereco',
					content:
						'R. Dr. Porciúncula, 395 - Venda da CruzSão Gonçalo - RJ, 24411-005',
					link: 'http://maps.google.com/?q=R. Dr. Porciúncula, 395 - Venda da Cruz, São Gonçalo - RJ, 24411-005',
				},
			],
		},
	]

	return (
		<footer className="px-10 bg-olimpo_blue text-white flex justify-center items-center">
			<div className="py-7 px-4 w-full max-w-[98rem] flex flex-wrap gap-8 justify-between items-start">
				<button onClick={() => window.scrollTo(0, 0)}>
					<Olimpo color="white" size="6rem" />
				</button>

				<ul className="flex gap-8 flex-wrap">
					{footerLists.map((list) => (
						<li key={list.id}>
							<h3 className="font-medium text-xl pb-4">{list.title}</h3>
							<ul className="flex flex-col flex-wrap gap-2 text-slate-400">
								{list.items.map((item) => (
									<FooterItem key={item.id} {...item} />
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</footer>
	)
}
