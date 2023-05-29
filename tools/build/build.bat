@echo off

:: The version
IF "%~1"=="" (
    SET version=1.0.2
) ELSE (
    SET version=%~1
)

:: The repo (current dir)
SET repoPath=%~dp0..\..

:: The build path
SET build_path=%~dp0output
:: The dist path to copy the result
SET dist_path="%repoPath%\dist"
:: The docs path
SET docs_path="%repoPath%\docs"
:: The types path
SET types_path="%repoPath%\types\duaef"

echo Building DuAEF version %version%...

:: Clean
echo __Cleaning build paths

rd /s /q "%build_path%"
md "%build_path%"
rd /s /q "%dist_path%"
md "%dist_path%"
rd /s /q "%docs_path%"
md "%docs_path%"
rd /s /q "%types_path%"
md "%types_path%"

:: Build
echo __Building library
DuBuilder "%repoPath%\src\DuAEF.jsxinc" --no-banner -r "{duaefVersion}:%version%" "%build_path%\DuAEF.jsxinc"

:: Generate doc
echo __Generating docs
cmd /c jsdoc -c jsdoc_conf.json
echo " " > "%docs_path%\jsdoc.css"
xcopy /Y jsdoc.css "%docs_path%\jsdoc.css"

:: Generate type defs
echo __Generating type defs
cmd /c jsdoc -c jsdoc_ts_conf.json

:: Include the doc in the output folder and
:: Replace indexes
echo __Finishing...
xcopy /Y "%docs_path%\DuAEF.html" "%docs_path%\index.html"
xcopy /S /I /Y "%docs_path%" "%build_path%\docs"
xcopy /S /I /Y "%types_path%\.." "%build_path%\types"
echo " " > "%dist_path%\DuAEF.jsxinc"
echo " " > "%dist_path%\setup.jsxinc"
echo " " > "%build_path%\setup.jsxinc"
xcopy /Y "%build_path%\DuAEF.jsxinc" "%dist_path%\DuAEF.jsxinc"
xcopy /Y "%repoPath%\src\setup.jsxinc" "%dist_path%\setup.jsxinc"
xcopy /Y "%repoPath%\src\setup.jsxinc" "%build_path%\setup.jsxinc"

pause