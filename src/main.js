const config = require( '../config.json' )
const sharp  = require( 'sharp' )
const path   = require( 'path' )
const fs     = require( 'fs' )

const archive = require( 'archiver' )( 'zip', { zlib: { level: 9 } } )
const output  = fs.createWriteStream( './.zip' )

archive.pipe( output ) 

let entries = 0
let expected = config.images.length + 3 

archive.on( 'entry', data => {  
	if( ++entries == expected ) archive.finalize() 
})

for( let x in config.images ) {

	let img = config.images[ x ] 
	let dir = path.resolve( __dirname, '../img/', img.name )

	try { if( !fs.existsSync( dir ) ) break } catch( e ) {} 

	archive.file( dir, { name: 'images/' + img.name } )

	const file = fs.readFileSync( dir )

	sharp( file ).resize( 500 ).toBuffer().then(
		( data, info ) => archive.append( data, { name: 'thumbnails/' + img.name } ) 
	)
}

let data = fs
	.readFileSync( __dirname + '/res/index.html' )
	.toString()
	.split( '<!--INSERT-->' )

data.splice( 1, 0, 
	`<script> let data = ${ JSON.stringify( config ) } </script>`
)

archive.append( 
	fs.createReadStream( __dirname + '/res/script.min.js' ),  
	{ name: 'script.min.js'  } 
)

archive.append( 
	fs.createReadStream( __dirname + '/res/styles.css' ),     
	{ name: 'styles.css' } 
) 

archive.append( 
	data.join( '\n' ), 
	{ name: 'index.html' } 
)