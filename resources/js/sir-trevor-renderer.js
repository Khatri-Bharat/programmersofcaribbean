(function(){
	var root = this;
	var SirTrevorRenderer = root.SirTrevorRenderer = {};
	SirTrevorRenderer.render = function(json) {
		var partials = _.map(json.data, SirTrevorRenderer.renderPartial(blockJson)); 	
		var html = partials.join("\n");
		return html;
	};

	SirTrevorRenderer.renderPartial = function(blockJson) {
		var type = blockJson.type;
		var data = blockJson.data;
		var text = data.text;
		var rep = "";
		switch(type) {
			case "text":
				rep += "<p>" + text + "</p>";			
				break;
			case "heading":
				rep += "<h2><b>" + text + "</b></h2>";
				break;
			default:	
		}
		return rep;
	};
})();
