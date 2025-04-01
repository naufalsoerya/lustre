import Link from "next/link"

export default function ModalLogin({ isLogin, handleLogin, handleRegister, handleForgotPass }) {
	return (
		<>
			<div className={`modal fade modal-login ${isLogin ? "show d-block" : ""}`} id="exampleModalToggle" aria-hidden="true" aria-label="exampleModalToggleLabel" tabIndex={-1}>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<button type="button" className="btn-close" onClick={handleLogin} aria-label="Close" />
						<div className="tfre_login-form">
							<h2>Login:</h2>
							<div className="error_message tfre_message" />
							<form className="tfre_login" method="post" encType="multipart/form-data" id="tfre_custom-login-form">
								<div className="container">
									<div className="form-group">
										<label htmlFor="username">User Name:</label>
										<input type="text" name="username" id="username" placeholder="Email or user name" required />
									</div>
									<div className="form-group">
										<label htmlFor="password">Password:</label>
										<input type="password" name="password" id="password" placeholder="Your password" required />
									</div>
									<div>
										<a onClick={() => { handleLogin(); handleForgotPass() }} data-bs-toggle="modal" data-bs-dismiss="modal" className="tfre-reset-password" id="tfre-reset-password">Forgot
											password?</a>
									</div>
									<input type="hidden" name="action" defaultValue="tfre_login_ajax" />
									<button type="submit" className="flat-button">Login</button>
								</div>
							</form>
						</div>
						<div className="container tfre_register" id="tfre_register_redirect">
							<p>Don't you have an account? <a onClick={() => { handleLogin(); handleRegister() }} data-bs-toggle="modal" data-bs-dismiss="modal">Register.</a></p>
						</div>
					</div>
				</div>
			</div>
			{isLogin &&
				<div className={`modal-backdrop fade show`} onClick={handleLogin} />
			}

		</>
	)
}
