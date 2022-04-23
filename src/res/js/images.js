import createDates from './dates'
import createTags  from './tags' 

export default function populateImages( tag ) {

	document.getElementsByClassName( 'images' )[ 0 ].innerHTML = ''

	let params = new URLSearchParams( window.location.href.split( '?' )[ 1 ] )

	let extension = '?tag=' 

	if( params.has( 'tag' ) ) {
		if( tag ) {
			extension += tag
			if( tag == params.get( 'tag' ).split( '#' )[ 0 ] ) {
				extension = ''
				tag = null
			}
		} else tag = params.get( 'tag' ).split( '#' )[ 0 ] 
	} else if( tag ) extension += tag 


	if (history.pushState && extension != '?tag=' ) {

		let newurl = 
			window.location.protocol 
			+ "//" 
			+ window.location.host 
			+ window.location.pathname 
			+ extension
		window.history.pushState( { path:newurl }, '', newurl )
	}

	createTags() 
	createDates( tag ) 

	document.querySelectorAll( '.tag-line' ).forEach( element => {
		element.style.color = '#ffffff'
	})

	if( tag ) {
		document.getElementById( tag + '-line' ).style.color = '#9e9e9e'
	}

	for( let x in data.images ) {
		
		if( tag ) {
			if( !data.images[ x ].tags.includes( tag ) ) continue
		} 

		let parent = document.getElementById( data.images[ x ].date.replace( '/', '-' ) )

		let element = document.createElement( 'div' )
		
		element.id = data.images[ x ].name
		element.onclick   = `onImageClick('${data.images[x].name}')`
		element.style     = `background-image:url('thumbnails/${data.images[x].name}');`
		element.classList = 'card' 

		parent.appendChild( element ) 

	}

}