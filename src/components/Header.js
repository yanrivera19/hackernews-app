import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SearchForm from "./SearchForm";
import { setPageNumber } from "../actions";
import "bootstrap/dist/js/bootstrap.min.js";

const Header = (props) => {
	const resetPageNumber = () => {
		props.setPageNumber(0);
	};

	return (
		<div style={{ paddingBottom: "20px" }} className="bg-light">
			<nav className="navbar navbar-expand-lg navbar-dark ">
				<div className="logo-section containter-fluid pb-2">
					<Link
						to="/"
						onClick={resetPageNumber}
						style={{ textDecoration: "none" }}
					>
						<h1 className="navbar-brand text-light fs-1">
							The Hacker News
						</h1>
					</Link>
				</div>
			</nav>
			<nav
				className="navbar navbar-expand-lg navbar-light border-bottom border-5 bg-light"
				style={{ paddingBottom: "10px" }}
			>
				<div
					id="content"
					className="container-fluid d-flex flex-row-reverse"
				>
					<button
						className="navbar-toggler border-4"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse text-center"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<Link
								to="/"
								onClick={resetPageNumber}
								style={{ textDecoration: "none" }}
							>
								<li className="nav-item">
									<a
										id="activLink"
										className="nav-link"
										aria-current="page"
										href="/"
									>
										Home
									</a>
								</li>
							</Link>

							<li className="nav-item">
								<a className="nav-link" href="#">
									Cyber Attacks
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">
									Malware
								</a>
							</li>

							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdownMenuLink"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Services
								</a>

								<ul
									className="dropdown-menu text-center"
									aria-labelledby="navbarDropdownMenuLink"
								>
									<li>
										<a className="dropdown-item" href="#">
											Publish
										</a>
									</li>

									<li>
										<a className="dropdown-item" href="#">
											Advertisement
										</a>
									</li>

									<li>
										<a className="dropdown-item" href="#">
											Organizations
										</a>
									</li>
								</ul>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className=" py-4 search-bar">
				<SearchForm />
			</div>
		</div>
	);
};

export default connect(null, { setPageNumber })(Header);
