all:
	sg www-data -c "bundle exec jekyll build --destination=../gluetube-teste"
