# Easyslider
Create a slideshow without writing any CSS or JS, just style your container and add the easy classes to begin

# Silder Structure
```html
<div class="easy-slider">
	<div class="easy-slider-body">
		<div class="easy-slide active">
			//slide design
		</div>
		...
		<div class="easy-slide">
			//slide design
		</div>
	</div>
</div>
```
# Setup
include the CSS in the head tag and the JS files at the bottom part of the body tag
```html
<head>
	...
	<link rel="stylesheet" href="css/easyslider.css">
</head>
<body>
	...
	<script src="js/easyslider.js"></script>
</body>
```
# Options
Hide the slide dots by adding .easy-hide-dots class to the easy-slider container
```html
<div class="easy-slider easy-hide-dots">
	<div class="easy-slider-body">
          ...
	</div>
</div>
```
The dots are clickable, so you can navigate through your slides using the dots
