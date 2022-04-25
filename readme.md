# Gallery Generator
## Usage 
1) Install [Node.JS](https://nodejs.org/en/) and install dependencies with either `npm install` or `yarn` 
2) Configure your specific build
```
root/
  config/
	images/ ...
	config.json
	favicon.ico (optional)
	watermark.png (optional) 
```
3) Create config.json in the project root and edit according to config.example.json
4) Run `yarn build` or `npm run build` depending on your package manager
5) Take the files in the newly generated .zip file and deploy wherever you prefer