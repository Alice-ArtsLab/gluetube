all:
	sg www-data -c "bundle exec jekyll build --destination=../../html/webart/gluetube --trace"
