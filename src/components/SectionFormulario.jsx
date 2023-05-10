import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function FormErrorMessage({ children }) {
	return <p className="text-red-500 text-sm p-2">{children}</p>
}

export default function SectionFormulario() {
	const form = useRef()

	function onSubmit(e) {
		emailjs
			.sendForm(
				'service_klv8yo8',
				'template_1ed9f5u',
				form.current,
				'5S_PLd_sRJBfAHZ0i'
			)
			.then(
				(result) => {
					// pop-up sucesso de envio
					toast.success('E-mail enviado!')

					// limpa os inputs após o envio
					reset({
						name: '',
						tel: '',
						email: '',
						message: '',
					})
				},
				(error) => {
					// pop-up de erro ao enviar
					toast.error('Falha ao enviar e-mail')
				}
			)
	}

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({
		mode: 'all',
	})

	// estilo base dos inputs
	const inputStyle =
		'bg-transparent border-slate-300 border-b hover:border-b-2 px-4 py-2 rounded w-full '

	return (
		<>
			<section
				id="contato"
				className="flex justify-center items-center bg-slate-100 min-h-fit px-10 py-20"
			>
				<div className="flex gap-10 max-w-[98rem] w-full min-h-fit flex-col">
					<h1 className="text-4xl font-semibold text-olimpo_blue w-fit">
						Quer falar com a gente?
					</h1>

					<div className="flex gap-10">
						<div className="flex gap-10 justify-between max-w-[98rem] w-full min-h-fit">
							<form
								ref={form}
								onSubmit={handleSubmit(onSubmit)}
								className="max-w-[40rem] flex w-full flex-col gap-4"
							>
								<div>
									<input
										className={inputStyle}
										placeholder="Nome completo *"
										type="text"
										{...register('name', {
											required: 'Este campo é obrigatório',
										})}
									/>
									<FormErrorMessage>{errors.name?.message}</FormErrorMessage>
								</div>

								<div className="flex flex-col sm:flex-row justify-between w-full gap-4">
									<div className="sm:w-[60%]">
										<input
											className={inputStyle}
											placeholder="Telefone *"
											type="tel"
											{...register('tel', {
												required: 'Este campo é obrigatório',
												pattern: {
													value: /^[1-9]{2}(?:[2-8]|9[1-9])[0-9]{3}[0-9]{4}$/,
													message: 'Formato de número inválido',
												},
											})}
										/>
										<FormErrorMessage>{errors.tel?.message}</FormErrorMessage>
									</div>

									<div className="w-full">
										<input
											className={inputStyle}
											placeholder="Email *"
											type="email"
											{...register('email', {
												required: 'Este campo é obrigatório',
												pattern: {
													value: /^[\w.]+@([\w-]+\.)+[\w-]{2,4}$/,
													message: 'Formato de e-mail inválido',
												},
											})}
										/>
										<FormErrorMessage>{errors.email?.message}</FormErrorMessage>
									</div>
								</div>

								<div>
									<textarea
										className={inputStyle + 'bg-white'}
										placeholder="Digite sua mensagem *"
										rows="5"
										{...register('message', {
											required: 'Este campo é obrigatório',
										})}
									></textarea>
									<FormErrorMessage>{errors.message?.message}</FormErrorMessage>
								</div>

								<input
									className="px-7 py-3 font-bold rounded-lg cursor-pointer
										 bg-olimpo_yellow text-white
										 hover:bg-olimpo_blue transition-colors tracking-wider"
									type="submit"
									value="Enviar"
								/>
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
			<ToastContainer
				position="bottom-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</>
	)
}
