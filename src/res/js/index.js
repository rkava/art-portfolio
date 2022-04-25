import populateImages from './images'
import populateHeader from './header'
import imageClicked   from './preview'

window.onload = function() {

	document.title = data.description 
	document.body.oncontextmenu = () => false 

	populateHeader() 
	populateImages() 

}

window.onImageClick = imageClicked
window.onTagClick   = populateImages
