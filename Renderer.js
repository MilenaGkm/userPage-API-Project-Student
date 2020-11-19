

class Renderer {

	mainRender(data){
		this.emptyTemplates()
		this.renderMainUser(data)
		this.renderQuote(data)
	}

	renderMainUser(data){
		const source = $("#user-template").html();
		const template = Handlebars.compile(source);
		let newHTML = template(data.mainUser);
		$('.user-container').append(newHTML);
	}

	renderQuote(data){
		const source = $("#quote-template").html();
		const template = Handlebars.compile(source);
		let newHTML = template(data);
		$('.quote-container').append(newHTML);
	}

	emptyTemplates(){
		$('.quote-container').empty()
		$('.user-container').empty()
	}
}