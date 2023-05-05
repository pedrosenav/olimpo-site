export default function SectionServicos() {
	return (
		<section className="bg-slate-300 min-h-[53rem] h-fit p-10 flex justify-center items-start">
			<div className="max-w-[98rem] w-full flex">
				<div className="max-w-lg flex flex-col gap-7 justify-start items-start">
					<h2 className="text-4xl font-semibold text-olimpo_blue">
						Faça seu empréstimo com a gente!
					</h2>
					<h4 className="text-slate-500 text-lg">
						Alguma dúvida? Entre em contato com nossa equipe de atendimento
					</h4>
					<button className="tracking-wider px-7 py-3 font-bold rounded-lg cursor-pointer text-olimpo_blue border-2 border-solid border-olimpo_yellow bg-transparent">
						Entrar em contato
					</button>
				</div>
			</div>
		</section>
	)
}
