import Olimpo from './widgets/Olimpo'
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'

export default function Headers() {
	const sections = [
		{ title: 'Vantagens', link: '#vantagens' },
		{ title: 'Serviços', link: '#servicos' },
		{ title: 'Ajuda', link: '#perguntas' },
		{ title: 'Contato', link: '#form' },
	]

	const [isOpen, setOpen] = useState(false)

	window.onresize = () => window.innerWidth > 640 && setOpen(false)

	return (
		<header className="min-w-full shadow-lg bg-slate-100 flex justify-center items-center sm:px-10 px-5 py-2 sticky top-0 z-50">
			<div className="w-full max-w-[98rem] flex justify-between items-center">
				<button
					className="cursor-pointer"
					onClick={() => window.scrollTo(0, 0)}
				>
					<Olimpo color={'#14222B'} size={'3rem'} />
				</button>

				<nav>
					<button className="sm:hidden">
						<Hamburger toggled={isOpen} toggle={setOpen} color={'#14222B'} />
					</button>
					<ul className="hidden sm:flex gap-10 text-olimpo_blue transition-all">
						{sections.map((section) => (
							<li key={section.id}>
								<a href={section.link}>{section.title}</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}
