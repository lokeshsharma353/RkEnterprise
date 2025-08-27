@echo off
echo Manual GitHub Pages Deployment...
git add build/
git commit -m "Update build files for GitHub Pages"
git subtree push --prefix build origin gh-pages
echo Deployment complete!
pause