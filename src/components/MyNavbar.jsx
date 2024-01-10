import { Component } from "react";
import { Navbar, Nav, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

class MyNavbar extends Component {
	state = {
		searchString: "",
	};

	searchStringHandler = (e) => {
		if (e.keyCode === 13) {
			// WHEN ENTER KEY IS PRESSED
			this.props.showSearchResult(this.state.searchString);
		} else {
			this.setState({ searchString: e.currentTarget.value });
		}
	};

	render() {
		return (
			<Navbar
				variant="dark"
				expand="lg"
				style={{ backgroundColor: "#221f1f" }}
			>
				<Navbar.Brand href="/">
					<img
						src="assets/logo.png"
						alt="logo"
						style={{ width: "100px", height: "55px" }}
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Link className="font-weight-bold" to="/">
							Home
						</Link>
						<Link  className="font-weight-bold" to="/tvseries">
							TV Shows
						</Link>
						<Link className="font-weight-bold" to="/">
							Movies
						</Link>
						<Link className="font-weight-bold" to="/">
							Recently Added
						</Link>
						<Link className="font-weight-bold" to="/">
							My List
						</Link>
					</Nav>
					<span className="d-flex align-items-center">
						<InputGroup className="icons">
							<FormControl
								placeholder="Search and press enter"
								aria-label="search"
								aria-describedby="basic-addon1"
								onKeyDown={this.searchStringHandler}
								onChange={this.searchStringHandler}
								value={this.state.searchString}
							/>
						</InputGroup>
						<div id="kids">KIDS</div>
						<i className="fa fa-bell icons"></i>
						<i className="fa fa-user icons"></i>
					</span>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default MyNavbar;
