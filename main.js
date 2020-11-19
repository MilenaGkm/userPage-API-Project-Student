const api = new APIManager()

const render = new Renderer()


const loadDataBtn = function(){
	api.loadData()	
}

const displayDataBtn = function(){
	render.mainRender(api.data)
}


