class Visibility extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			visibility: false,
			details: 'This is a message with details'
		}
	}

	handleToggleVisibility() {
		this.setState((prevState) => {
			return {	
				visibility: !(prevState.visibility)
			};
		});
	}

	render() {
		return (
			<div>
				<h1> Visibility Toggle</h1>
				<p hidden = {this.state.visibility == false}>{this.state.details}</p>
				<button onClick = {this.handleToggleVisibility}>{this.state.visibility == false ? 'Show Details' : 'Hide Details'}</button>

			</div>
		)
	}



}

ReactDOM.render(<Visibility />, document.getElementById('app'));

// const details = {
// 	title: 'Visibility Toggle',
// 	description: 'This is the detailed description part'
// };

// let button = "Show Details";
// let buttonState = 0;
// const toggleVisible = () => {
// 	if(buttonState == 0){
// 		button = "Hide Details";
// 		buttonState = 1;
// 	}else {
// 		button = "Show Details";
// 		buttonState= 0;
		
// 	}
// 	renderApp();
// }

// const renderApp = () => {
// 	const template = (
// 		<div>
// 			<h1>{details.title}</h1>
// 			<button onClick={toggleVisible}>{button}</button>
// 			<p hidden={buttonState ==0}>{details.description}</p>
// 		</div>
// 	);
// 	ReactDOM.render(template, appRoot);
// }

// const appRoot = document.getElementById('app');
// renderApp();