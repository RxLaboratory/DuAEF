cd ..
cd ..
del /s /q docs
rmdir /s /q docs
mkdir docs
cd tools
cd "build tools"
mkdir output
DuBuilder ..\..\DuAEF.jsxinc -d jsdoc_conf.json output\DuAEF.jsxinc
xcopy /S /I /Y ..\..\docs output\docs
cd output\docs
xcopy /Y DuAEF.html index.html
cd ..
cd ..
cd ..
cd ..
cd docs
xcopy /Y DuAEF.html index.html
echo duaef.rxlab.io > "CNAME"
echo theme: jekyll-theme-cayman > _config.yml
pause