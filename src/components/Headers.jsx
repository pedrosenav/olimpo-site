import Olimpo from './widgets/Olimpo'

export default function Headers() {
	const sections = [
		{ id: 'quem-somos', title: 'Quem somos?', link: '#' },
		{ id: 'vantagens', title: 'Vantagens', link: '#' },
		{ id: 'servicos', title: 'Serviços', link: '#' },
		{ id: 'ajuda', title: 'Ajuda', link: '#' },
	]

	return (
		<header className="min-w-full shadow-lg bg-slate-100 flex justify-center items-center px-10 p-2 fixed top-0">
			<div className="w-full max-w-[98rem] flex justify-between items-center">
				<Olimpo color="#14222B" size="4rem" />

				<nav>
					<ul className="flex gap-10 text-olimpo_blue text-base font-normal">
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
