fls:
        sg www-data -c "bundle exec jekyll build --config "_config/_config.fls.yml" --destination=/home/fls/public_html/gluetube --trace"

mariana:
        sg www-data -c "bundle exec jekyll build --config "_config/_config.mariana.yml" --destination=/home/marilellis/public_html/gluetube --trace"

avner:
        sg www-data -c "bundle exec jekyll build --config "_config/_config.avner.yml" --destination=/home/avner/public_html/gluetube --trace"

web:
        sg www-data -c "bundle exec jekyll build --destination=/var/www/html/webart/gluetube --trace"
