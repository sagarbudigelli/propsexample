//import ClassComponent from'./ClassComponent'
//import PropsExample from './PropsExample'
import FunctionProps from './FunctionProps'
import StateExample from './StateExample'
import Demo from './Demo'
import Events from './Events'
function App(){
	return(
		<section>
		<StateExample/>
		<Demo price="1st"/>
		<Events/>
		<FunctionProps carname="rollsroyce" year="1998"/>
		{/*<PropsExample name="sagar" age="20"/>
			
			<p>good boy</p>
			<h1>good one</h1>
			<img src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2020/05/19/file74g16bzwmc819e5i5hwd-807658252-1552396810.jpg?itok=qp5SV2vb"/>
			<ClassComponent/>*/}
		</section>
		)
}

export default App;

