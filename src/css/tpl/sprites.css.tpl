{{#sprites}}
sprite-{{name}}()
	background url('../img/bg/{{escaped_image}}') {{offset_x}}px {{offset_y}}px no-repeat
sprite-{{name}}-size()
	sprite-{{name}}()
	size {{width}}px {{height}}px
sprite-{{name}}-position()
	background-position {{offset_x}}px {{offset_y}}px
{{/sprites}}
