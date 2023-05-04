export default function SectionPrincipal() {
	return (
		<section
			className="h-[53rem]"
			style={{
				backgroundImage: 'url(/moca-presente-75x.png)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<div
				className="h-full"
				style={{
					backgroundImage:
						'linear-gradient(76.67deg, rgba(20, 34, 43, 0.6) 32.72%, rgba(20, 34, 43, 0) 50.03%)',
				}}
			>
				<div className="px-10 h-full">
					<div className="h-full flex-col max-w-[98rem]  mx-auto gap-10 flex justify-center items-start">
						<h1 className="max-w-lg font-bold text-5xl text-slate-100">
							A Olimpo tem o compromisso em deixa o cliente satisfeito!
						</h1>

						<button
							className="px-7 py-3 font-bold rounded-lg cursor-pointer
				 bg-olimpo_yellow text-white 
				 hover:bg-olimpo_blue transition-colors"
						>
							Simule já
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
