export default function SectionPrincipal() {
	return (
		<section
			className="h-[90vh] max-h-[53rem]"
			style={{
				backgroundImage: 'url(/moca-presente-75x.png)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center top',
			}}
		>
			<div
				className="h-full"
				style={{
					backgroundImage:
						'linear-gradient(90deg, rgba(20, 34, 43, 0.75) 2%, rgba(20, 34, 43, 0) 72%)',
				}}
			>
				<div className="px-10 h-full">
					<div className="h-full flex-col max-w-[98rem] mx-auto gap-10 flex justify-center items-start">
						<h1 className="max-w-lg font-bold xs:text-5xl text-3xl text-slate-100">
							A Olimpo tem o compromisso em deixar o cliente satisfeito!
						</h1>

						<button
							className="px-7 py-3 font-bold rounded-lg cursor-pointer
				 bg-olimpo_yellow text-white 
				 hover:bg-olimpo_blue transition-colors tracking-wider"
						>
							Simule já
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
