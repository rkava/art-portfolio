export default function populateTags() {

	let parent = document.getElementsByClassName( 'images' )[ 0 ]

	let element = document.createElement( 'div' ) 
	element.classList = 'tags' 

	parent.appendChild( element )

	let tags = []
	for( let x in data.images )
		for( let y in data.images[ x ].tags ) 
			if( !tags.includes( data.images[ x ].tags[ y ] )) 
				tags.push( data.images[ x ].tags[ y ] )
			

	for( let x in tags ) {

		let child = document.createElement( 'div' ) 

		child.innerHTML = `<div 
				style="width: fit-content;" 
				class="tag" 
				onclick="onTagClick('${ tags[ x ] }')"> ${ tags[ x ] }
				<span id="${ tags[ x ] }-line" class="tag-line" style="color: #ffffff;"> | </span>
			</div>`

		element.appendChild( child ) 

	}
				
}