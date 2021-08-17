all: 
	sg www-data -c "bundle exec jekyll build --destination=/var/www/html/webart/gluetube --trace"
