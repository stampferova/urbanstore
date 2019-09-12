{{#sprites}}
sprite2x-{{name}}()
	background url('../img/bg/{{escaped_image}}') unit({{offset_x}} / 2, 'px') unit({{offset_y}} / 2, 'px') no-repeat
	background-size unit({{total_width}} / 2, 'px') unit({{total_height}} / 2, 'px')
sprite2x-{{name}}-size()
	sprite2x-{{name}}()
	size unit({{width}} / 2, 'px') unit({{height}} / 2, 'px')
sprite2x-{{name}}-position()
	background-position unit({{offset_x}} / 2, 'px') unit({{offset_y}} / 2, 'px')
{{/sprites}}
