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

echo Building DuAEF version %version%...

:: Clean
echo __Cleaning build paths

rd /s /q "%build_path%"
md "%build_path%"
rd /s /q "%repoPath%\dist"
md "%repoPath%\dist"
rd /s /q "%repoPath%\docs"
md "%repoPath%\docs"
rd /s /q "%repoPath%\types\duaef"
md "%repoPath%\types\duaef"

:: Build
echo __Building library
DuBuilder "%repoPath%\src\DuAEF.jsxinc" --no-banner -r "{duaefVersion}:%version%" "%build_path%\DuAEF.jsxinc"

:: Generate doc
echo __Generating docs
cmd /c jsdoc -c jsdoc_conf.json
echo " " > "%repoPath%\docs\jsdoc.css"
xcopy /Y jsdoc.css "%repoPath%\docs\jsdoc.css"

:: Generate type defs
echo __Generating type defs
cmd /c jsdoc -c jsdoc_ts_conf.json

:: Include the doc in the output folder and
:: Replace indexes
echo __Finishing...
xcopy /Y "%repoPath%\docs\DuAEF.html" "%repoPath%\docs\index.html"
xcopy /S /I /Y "%repoPath%\docs" "%build_path%\docs"
xcopy /S /I /Y "%repoPath%\types\duaef\.." "%build_path%\types"
echo " " > "%repoPath%\dist\DuAEF.jsxinc"
echo " " > "%repoPath%\dist\setup.jsxinc"
echo " " > "%build_path%\setup.jsxinc"
xcopy /Y "%build_path%\DuAEF.jsxinc" "%repoPath%\dist\DuAEF.jsxinc"
xcopy /Y "%repoPath%\src\setup.jsxinc" "%repoPath%\dist\setup.jsxinc"
xcopy /Y "%repoPath%\src\setup.jsxinc" "%build_path%\setup.jsxinc"

pause