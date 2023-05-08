import { Target } from '@phosphor-icons/react'
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

	const [isOpen, setMode] = useState(false)

	window.onresize = () => window.innerWidth > 640 && setOpen(false)

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
							<Hamburger toggled={isOpen} toggle={setMode} color={'#14222B'} />
						</button>
						<ul className={'sm:flex hidden text-olimpo_blue '}>
							{sections.map((section) => (
								<li key={section.id}>
									<a
										className="px-3 py-1 hover:text-olimpo_yellow transition-all "
										href={section.link}
									>
										{section.title}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</header>
			<ul
				className={
					isOpen
						? //Aberto
						  'xs:h-12 xs:w-full xs:flex-row xs:justify-center xs:py-0 xs:px-4 xs:gap-10 sm:hidden h-[12rem] w-36 flex flex-col items-center gap-4 py-5 visible absolute right-0 top-[4.3rem] bg-slate-100 text-olimpo_blue transition-all duration-500 overflow-x-hidden z-50'
						: //Fechado
						  'xs:h-0 xs:w-full xs:flex-row xs:justify-center xs:py-0 xs:px-4 xs:gap-6 h-[12rem] w-0 flex flex-col items-center gap-4 py-5 visible absolute right-0 top-[4.3rem] bg-slate-100 text-olimpo_blue transition-all duration-500 overflow-x-hidden z-50'
				}
			>
				{sections.map((section) => (
					<li key={section.id}>
						<a
							className="py-5 hover:text-olimpo_yellow transition-all "
							href={section.link}
						>
							{section.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
