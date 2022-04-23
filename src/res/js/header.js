export default function populateHeader() {

	let parent = document.getElementsByClassName( 'header' )[ 0 ] 

	let element = document.createElement( 'div' ) 

	element.innerHTML = `<div> 
			<h1> ${ data.header.title } </h1> 
			<p>  ${ data.header.description } </p> 
		</div>`
	
	parent.appendChild( element ) 
}