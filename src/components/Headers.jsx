import Olimpo from './widgets/Olimpo'
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'

function HeaderItem({ title, link = '#' }) {
	return (
		<li>
			<a className="hover:text-olimpo_yellow transition-all" href={link}>
				{title}
			</a>
		</li>
	)
}

export default function Headers() {
	const sections = [
		{ id: 1, title: 'Vantagens', link: '#vantagens' },
		{ id: 2, title: 'Serviços', link: '#servicos' },
		{ id: 3, title: 'Ajuda', link: '#perguntas' },
		{ id: 4, title: 'Contato', link: '#contato' },
	]

	const [isOpen, setOpen] = useState(false)

	return (
		<div className="sticky top-0 z-50">
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
						<ul className="sm:flex hidden gap-7 text-olimpo_blue">
							{sections.map((section) => (
								<HeaderItem key={section.id} {...section} />
							))}
						</ul>
					</nav>
				</div>
			</header>
			<ul
				className={
					isOpen
						? /* Aberto */ 'xs:h-12 xs:w-full xs:flex-row xs:justify-center xs:py-0 xs:px-4 xs:gap-10 sm:hidden h-[13rem] w-36 flex flex-col items-center gap-4 py-5 visible absolute right-0 top-[4.3rem] bg-slate-100 text-olimpo_blue transition-all duration-500 overflow-x-hidden z-50'
						: /* Fechado */ 'xs:h-0 xs:w-full xs:flex-row xs:justify-center xs:py-0 xs:px-4 xs:gap-6 h-[13rem] w-0 flex flex-col items-center gap-4 visible absolute right-0 top-[4.3rem] bg-slate-100 text-olimpo_blue transition-all duration-500 overflow-x-hidden z-50'
				}
			>
				{sections.map((section) => (
					<HeaderItem key={section.id} {...section} />
				))}
			</ul>
		</div>
	)
}
