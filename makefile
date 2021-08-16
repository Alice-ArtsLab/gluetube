all:
	sg www-data -c "bundle exec jekyll build --destination=../public_html/gluetube --trace"

