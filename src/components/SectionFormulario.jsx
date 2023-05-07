export default function SectionFormulario() {
	const inputStyle =
		'bg-transparent border-slate-300 border-b hover:border-b-2 px-4 py-2 rounded'

	return (
		<section
			id="form"
			className="flex justify-center items-center bg-slate-100 min-h-fit px-10 py-20"
		>
			<div className="flex gap-10 max-w-[98rem] w-full min-h-fit flex-col">
				<h1 className="text-4xl font-semibold text-olimpo_blue">
					Quer falar com a gente?
				</h1>

				<div className="flex gap-10">
					<div className="flex gap-10 justify-between max-w-[98rem] w-full min-h-fit">
						<form className="max-w-[40rem] flex w-full flex-col gap-4">
							<input
								className={inputStyle}
								placeholder="Nome completo *"
								type="text"
								name="nome"
							/>
							<div className="flex flex-col sm:flex-row justify-between w-full gap-4">
								<input
									className={inputStyle + ' sm:max-w-[40%]'}
									placeholder="Telefone *"
									type="tel"
									name="telefone"
								/>
								<input
									className={inputStyle + ' w-full'}
									placeholder="Email *"
									type="email"
									name="email"
								/>
							</div>
							<textarea
								className={inputStyle + ' bg-white max-h-28'}
								placeholder="Digite sua mensagem *"
								name="body"
								id="body"
								rows="10"
							></textarea>
							<button
								className="px-7 py-3 font-bold rounded-lg cursor-pointer
										 bg-olimpo_yellow text-white
										 hover:bg-olimpo_blue transition-colors tracking-wider"
								type="submit"
								name="enviar"
								onClick={(e) => e.preventDefault()}
							>
								Enviar
							</button>
						</form>
					</div>
					<div
						className="hidden lg:block max-w-[45rem] min-h-[10rem] w-full"
						style={{
							backgroundImage: 'url(/equipe-75x.jpg)',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'center top',
						}}
					></div>
				</div>
			</div>
		</section>
	)
}
