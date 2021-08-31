---
layout: page
title: GALERIA
description: Collage tool using digital media!
---
{% include searchBar.html %}

<div class="container">
	<div class="columns is-multiline">
		{% for track in site.data.studio %}
			{% assign item = track[1] %}
				<div class="column is-one-third">
					<div class="card" >
						<div class="card-image">
						<figure class="image is-4by3">
							<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
						</figure>
						</div>
						<div class="card-content">
							<h5><a href="{{ item.title | datapage_url: 'studio' }}">{{ item.title }}</a></h5>
						</div>
						<div class="content">
							{% for author in site.data.authors %}
								{% if author.author_name == item.author %}
									<p>Author: <a href="{{ author.author_name | datapage_url: 'authors' }}">{{ item.author }}</a></p>
								{% endif %}
							{% endfor %}
							<p>Date: {{ item.date }}</p>
							<p>Description: {{ item.description }}</p>
							<br><br>
						</div>
					</div>
				</div>
		{% endfor %}
	</div>
</div>

