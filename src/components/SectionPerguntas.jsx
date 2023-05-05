import { CaretDown } from '@phosphor-icons/react'

function Pergunta({ title, content }) {
	return (
		<details className="cursor-pointer p-3 max-w-[50rem] border-b border-slate-300">
			<summary className="flex justify-between gap-10 items-center">
				<h3 className="sm:text-xl text-lg text-light text-olimpo_blue">
					{title}
				</h3>
				<div>
					<CaretDown size={25} color="#E4AA15" />
				</div>
			</summary>

			{content.map((text, i) => (
				<p key={i} className="py-4 text-slate-500 text-base max-w-prose">
					{text}
				</p>
			))}
		</details>
	)
}

export default function SectionPerguntas() {
	return (
		<section className="bg-slate-50 h-fit p-10 flex justify-center items-start">
			<div className="max-w-[98rem] w-full flex flex-col items-center gap-10">
				<div>
					<h2 className="font-semibold text-olimpo_blue text-4xl">
						Perguntas frequentes
					</h2>
				</div>
				<div className="flex flex-col gap-4">
					<Pergunta
						title={'O que é o Empréstimo Consignado?'}
						content={[
							'É um empréstimo em que as parcelas são descontadas diretamente de sua folha de pagamento',
						]}
					/>

					<Pergunta
						title={'Qual é o valor máximo de parcela do Empréstimo Consignado?'}
						content={[
							'O valor máximo de sua parcela (margem consignável) mensal é definido conforme o convênio estipulado entre o Órgão em que você está enquadrado.',
						]}
					/>

					<Pergunta
						title={'Quem pode realizar o Empréstimo onsignado?'}
						content={[
							'Aposentados e pensionistas do INSS, servidores públicos ou pensionistas de órgãos municipais, estaduais e federais, militares ou pensionistas das Forças Armadas, desde que haja convênio estipulado entre a Olimpo e o Órgão em que você está enquadrado. Entre em contato com a Central de Atendimento para consultar o seu caso.',
						]}
					/>

					<Pergunta
						title={'Em quanto tempo recebo o valor em minha conta?'}
						content={[
							'Finalizada a análise de sua proposta e confirmada a reserva de margem, você receberá o valor em no máximo 2 dias úteis.',
						]}
					/>

					<Pergunta
						title={'Quem pode solicitar a portabilidade de Crédito?'}
						content={[
							'Qualquer pessoa física que possua uma operação de crédito vigente em uma Instituição financeira integrante do Sistema Financeiro Nacional.',
						]}
					/>

					<Pergunta
						title={'Quais os passos para a Portabilidade de Crédito?'}
						content={[
							'Conforme resolução 4.292, de 20/12/2013, você deve:',
							'1.Solicitar à instituição origem de sua operação o valor de sua dívida e o prazo remanescente;',
							'2.Informar os dados à nova instituição, bem como conceder autorização expressa para início do processo de portabilidade.',
						]}
					/>
				</div>
			</div>
		</section>
	)
}
