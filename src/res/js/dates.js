export default function createDates( tag ) {

	const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

	let parent = document.getElementsByClassName( 'images' )[ 0 ]
	let dates = [] 

	for( let x in data.images ) {
		if( !dates.includes( data.images[ x ].date ) ) {
			if( tag ) if( !data.images[ x ].tags.includes( tag ) ) continue
			dates.push( data.images[ x ].date ) 
		}
	}

	for( let x in dates ) {

		let element = document.createElement( 'div' ) 

		let month = months[ parseInt( dates[ x ].split( '/' )[ 0 ] ) ] 
		let year  = dates[ x ].split( '/' )[ 1 ] 

		element.innerHTML = 
			`<div class="date-box" id="${ dates[ x ].replace( '/', '-' ) }"> 
				<a class="date" href="#${ dates[ x ].replace( '/', '-' )}"> 
					${ month + ' ' + year } 	
				</a>
			</div>`
			
		parent.appendChild( element ) 

	}

}