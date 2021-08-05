---
layout: page
title: GALERIA
description: Collage tool using digital media!
---

{% include searchBar.html %}

<div>
	{% for track in site.data.studio %}
		{% assign item = track[1] %}
		<h2><a href="{{ item.title | datapage_url: 'studio' }}">{{ item.title }}</a></h2>
		{% for author in site.data.authors %}
			{% if author.author_name == item.author %}
				<p>Author: <a href="{{ author.author_name | datapage_url: 'authors' }}">{{ item.author }}</a></p>
			{% endif %}
		{% endfor %}
		<p>Date: {{ item.date }}</p>
		<p>Description: {{ item.description }}</p>
		<br><br>
	{% endfor %}
</div>
