import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ModalLogin({ isLogin, handleLogin, handleRegister, handleForgotPass }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [generalError, setGeneralError] = useState("");

	useEffect(()=>{
		setGeneralError("")
	} , [password, username])

	const handleSubmit = async (e) => {
		e.preventDefault();

		setGeneralError("");

		try {
			const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
			});

			const data = await res.json();

			if (res.ok) {
				setUsername("");
				setPassword("");

				toast.success("Login Successful. Welcome back!", {
					position: "top-right",
					autoClose: 1000,
					closeOnClick: true,
					onClose: () => {
						const userInfo = {
							token: data.token,
							username: data.userInfo.username,
							email: data.userInfo.email,
							id: data.userInfo.id,
						};
						
						Object.entries(userInfo).forEach(([key, value]) => {
							localStorage.setItem(key, value);
						});
						  
						handleLogin(); 
						window.location.reload(); 
					}
				});
			} else {
				if (data.error) {
					setGeneralError(data.error);
				} else {
					setGeneralError(data.error || "Invalid credentials");
				}
			}
		} catch (err) {
			console.error(err);
			setGeneralError("Server error. Please try again later.");
		}
	};

	return (
		<>
			<div className={`modal fade modal-login ${isLogin ? "show d-block" : ""}`} tabIndex={-1}>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<button type="button" className="btn-close" onClick={handleLogin} aria-label="Close" />
						<div className="tfre_login-form">
							<h2>Login:</h2>
							<form className="tfre_login" onSubmit={handleSubmit}>
								<div className="container">
									<div className="form-group">
										<label htmlFor="username">User Name:</label>
										<input
											type="text"
											name="username"
											id="username"
											placeholder="Email or user name"
											required
											value={username}
											onChange={(e) => setUsername(e.target.value)}
										/>
									</div>

									<div className="form-group">
										<label htmlFor="password">Password:</label>
										<input
											type="password"
											name="password"
											id="password"
											placeholder="Your password"
											required
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>

									{/* <div>
										<a onClick={() => { handleLogin(); handleForgotPass(); }} className="tfre-reset-password">
											Forgot password?
										</a>
									</div> */}

									<button type="submit" className={generalError ? 'disabled flat-button bg-white btn-outline-danger text-danger' : "flat-button"}>{generalError || 'Login'}</button>
								</div>
							</form>
						</div>

						<div className="container tfre_register" id="tfre_register_redirect">
							<p>Don't have an account? <a onClick={() => { handleLogin(); handleRegister(); }}>Register.</a></p>
						</div>
					</div>
				</div>
			</div>
			{isLogin && <div className="modal-backdrop fade show" onClick={handleLogin} />}
		</>
	);
}
