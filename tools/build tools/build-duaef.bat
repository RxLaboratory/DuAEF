cd ..
cd ..
del /s /q docs
rmdir /s /q docs
mkdir docs
cd tools
cd "build tools"
mkdir output
DuBuilder ..\..\src\DuAEF.jsxinc -d jsdoc_conf.json output\DuAEF.jsxinc
xcopy /S /I /Y ..\..\docs output\docs
cd output\docs
xcopy /Y DuAEF.html index.html
cd ..
cd ..
cd ..
cd ..
cd docs
xcopy /Y DuAEF.html index.html
echo duaef-reference.rainboxlab.org > "CNAME"
echo theme: jekyll-theme-cayman > _config.yml
pause