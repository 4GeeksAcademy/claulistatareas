
import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	//Crear estados
	const [inputvalue, setInputvalue] = useState("")
	const [lista, setLista] = useState([])
	const [boton, setBoton] = useState(false)

	//2. asignacion del evento onChange lo tengo en el html
	// function handleInput(e) {
	// setInputvalue(e.target.value);
	// setInputvalue("")
	// }

	//3.Agregar tareas onSubmit
	function agregar(e) {
		e.preventDefault()
		setLista([...lista, inputvalue])
		setInputvalue("")
		console.log(lista)
	}

	function eliminar (index) {
		const arregloentero = lista.filter((fila, nuevoindex) => {
			return nuevoindex != index
		})
		setLista(arregloentero)
	}

	


	return (

		<div className="text-center w-50 mx-auto">
			<div class="mb-3">
				<div>
					<h1>Todos</h1>
				</div>
				<form action="" onSubmit={agregar}> <input value={inputvalue} type="text" onChange={function (e) { setInputvalue(e.target.value) }} class="form-control shadow p-3 mb-5" id="exampleFormControlInput1" placeholder="escribe tu tarea" /></form>
			</div>
			<div class="mb-3">

				<ul className="list-group shadow p-3 mb-5">
					{lista.map((lista, index) => <li onMouseEnter={function () { setBoton(true) }} onMouseLeave={function () { setBoton(false) }} className="list-group-item d-flex flex-row justify-content-between">
						<p ClassName="m-0 p-0">{lista}</p>
						{boton === true && <p className="text-danger opacity-50 m-0 p-0" onClick={function(){eliminar(index)}}>X</p>}
					</li>)}
				</ul>
			</div>
		</div>
	);
};


export default Home;







// import React, {useState} from "react";
// ​
// //include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
// ​
// //create your first component
// const Home = () => {
// //1. declaracion de estados
// const [email,setEmail]=useState("")
// const [password,setPassword]=useState("")
// ​
// ​
// //2. asignacion del evento onChange
// function handleEmail(e) {
// 	setEmail(e.target.value);
// }
// ​
// ​
// //3. asignacion del evento onSumit
// function handleSubmit(e) {
// 	//detener el comportamiento predeterminado de un formulario
// 	e.preventDefault()
// 	console.log(email);
// 	console.log(password);
// 	setEmail("")
// 	setPassword("")
// }
// ​
// 	return (
// 		<div className="text-center w-50 mx-auto">
// 			<h1 className="h1 text-center">Login</h1>
// 			<form onSubmit={handleSubmit}>
//   <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" onChange={handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" onChange={function (e) {setPassword(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
//   </div>
//   <div className="mb-3 form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//     <label className="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>
// 		</div>
// // 	);
// // };
// // ​
// // export default Home;

