import { useState } from "react";
import { toast } from "react-toastify";

export default function ModalRegister({ isRegister, handleRegister, handleLogin }) {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			toast.warn("Password Mismatch", {
				position: "top-right",
				autoClose: 1000,
				closeOnClick: true,
			});

			return;
		}

		try {
			const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, email, password }),
			});

			const data = await res.json();

			if (res.ok) {
				setUsername("");
				setEmail("");
				setPassword("");
				setConfirmPassword("");

				toast.success("Register Successful", {
					position: "top-right",
					autoClose: 1000,
					closeOnClick: true,
					onClose: () => {
						handleRegister(); 
						handleLogin();
					}
				});
			} else {
				toast.warn("Register Failed. Check Your Data!", {
					position: "top-right",
					autoClose: 1000,
					closeOnClick: true,
					onClose: () => {
						handleRegister(); 
						handleLogin();
					}
				});
			}
		} catch (err) {
			toast.error("There has been a mistake", {
				position: "top-right",
				autoClose: 1000,
				closeOnClick: true,
			});
		}
	};

	return (
		<>
			<div className={`modal fade modal-login ${isRegister ? "show d-block" : ""}`} id="exampleModalToggle2" aria-hidden="true" tabIndex={-1}>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<button type="button" className="btn-close" onClick={handleRegister} aria-label="Close" />
						<div className="tfre_registration-form">
							<h2>Register:</h2>
							<form className="tfre_register" onSubmit={handleSubmit}>
								<div className="container">
									<div className="form-group">
										<label htmlFor="username">User Name:</label>
										<input
											type="text"
											id="usernames"
											placeholder="User name"
											required
											value={username}
											onChange={(e) => setUsername(e.target.value)}
										/>
									</div>
									<div className="form-group">
										<label htmlFor="email">Email:</label>
										<input
											type="email"
											id="email-modal"
											placeholder="Email"
											required
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
									<div className="form-group">
										<label htmlFor="password">Password:</label>
										<input
											type="password"
											id="passwords"
											placeholder="Your password"
											required
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>
									<div className="form-group">
										<label htmlFor="confirm_password">Confirm Password:</label>
										<input
											type="password"
											id="confirm_password"
											placeholder="Confirm password"
											required
											value={confirmPassword}
											onChange={(e) => setConfirmPassword(e.target.value)}
										/>
									</div>
									<button type="submit" className="flat-button">Sign Up</button>
								</div>
							</form>
						</div>
						<div className="container tfre_signin tfre_login_redirect">
							<p>Already have an account? <a onClick={() => { handleLogin(); handleRegister(); }}>Sign in.</a></p>
						</div>
					</div>
				</div>
			</div>
			{isRegister &&
				<div className={`modal-backdrop fade show`} onClick={handleRegister} />
			}
		</>
	);
}
