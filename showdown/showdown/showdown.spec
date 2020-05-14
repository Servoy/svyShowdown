{
	"name": "showdown-showdown",
	"displayName": "showdown",
	"categoryName": "Visualization",
	"version": 1,
	"definition": "showdown/showdown/showdown.js",
	"libraries": [
		{
			"name":"showdown.js", 
			"version":"1.0.0", 
			"url":"showdown/showdown/lib/showdown.js", 
			"mimetype":"text/javascript"
		}
	],
	"model":
	{
		"markdown" : {"type": "string", "default":"This is **showdown** for Servoy"},
		"markup" : {"type": "string"}
	}
}