export default function imageClicked( name ) {

	let container  = document.getElementsByClassName( 'preview' )[ 0 ] 
	let background = document.getElementsByClassName( 'background' )[ 0 ]  
	let image 	   = document.getElementsByClassName( 'image' )[ 0 ]  
	let summary    = document.getElementsByClassName( 'summary' )[ 0 ] 

	let obj
	for( let x in data.images ) {
		if( data.images[ x ].name == name ) obj = data.images[ x ] 
	}

	background.onclick = function() {

		container.classList.toggle( 'show' )
	}

	image.onload = () => {

		container.classList.toggle( 'show' ) 

		summary.style.left = '50%'
		summary.style.top = '0px'
		summary.style.transform = 'translate( -' 
			+ ( image.width / 2 ) + 'px,' 
			+ ( image.height + 80) + 'px)'
	
		summary.innerHTML = `
			 <b> ${ obj.name.split( '.' )[ 0 ] } </b> | ${ obj.description } </h3> `	
	}

	image.src = 'images/' + name 

}