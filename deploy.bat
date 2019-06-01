call npm run build
call cd dist

call git init 
call git add -A 
call git commit -m 'deploy'

call git push -f https://github.com/massynas/pwa_push_arthur.git master:gh-pages

call cd ..