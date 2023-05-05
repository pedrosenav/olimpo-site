import { List } from '@phosphor-icons/react'
import Olimpo from './widgets/Olimpo'
import { useState } from 'react'

export default function Headers() {
	const sections = [
		{ id: 1, title: 'Quem somos?', link: '#' },
		{ id: 2, title: 'Vantagens', link: '#' },
		{ id: 3, title: 'Serviços', link: '#' },
		{ id: 4, title: 'Ajuda', link: '#' },
	]

	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className="min-w-full shadow-lg bg-slate-100 flex justify-center items-center sm:px-10 px-5 py-2 sticky top-0 z-10">
			<div className="w-full max-w-[98rem] flex justify-between items-center">
				<button
					className="cursor-pointer"
					onClick={() => window.scrollTo(0, 0)}
				>
					<Olimpo color={'#14222B'} size={'3rem'} />
				</button>

				<nav>
					<ul className="hidden sm:flex gap-10 text-olimpo_blue text-base font-normal">
						{sections.map((section) => (
							<li key={section.id}>
								<a href={section.link}>{section.title}</a>
							</li>
						))}
					</ul>
				</nav>

				<nav className="sm:hidden">
					<List
						size={40}
						onClick={() => {
							setIsOpen(!isOpen)
							console.log(isOpen)
						}}
					/>
					<ul
						className={`
						fixed flex-col right-0 flex gap-10 bg-white p-7 text-olimpo_blue text-base font-normal`}
					>
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
