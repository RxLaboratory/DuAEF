#!/bin/sh

# After Effects path
ae_path="/Applications/Adobe After Effects 2020"
# DuAEF Repo
duaef=$HOME/DEV_SRC/RxOT/DuAEF/DuAEF

ae_scripts="$ae_path/Scripts/ScriptUI Panels"

# DuAEF Libs
duaef_libs="$ae_scripts/libs"
rm -r -f "$duaef_libs"
rm "$ae_scripts/DuAEF.jsxinc"
mkdir "$duaef_libs"

# DuAELib
mkdir "$duaef_libs/DuAELib"
for file in "$duaef/src/libs/DuAELib/"* ; do
    ln -sf "$file" "$duaef_libs/DuAELib"
    echo "Linked $file"
done

# DuikLib
mkdir "$duaef_libs/DuikLib"
for file in "$duaef/src/libs/DuikLib/"* ; do
    ln -sf "$file" "$duaef_libs/DuikLib"
    echo "Linked $file"
done

# DuScriptUILib
mkdir "$duaef_libs/DuScriptUILib"
for file in "$duaef/src/libs/DuScriptUILib/"*.jsxinc ; do
    ln -sf "$file" "$duaef_libs/DuScriptUILib"
    echo "Linked $file"
done

# icons
mkdir "$duaef_libs/DuScriptUILib/icons"
for file in "$duaef/src/libs/DuScriptUILib/icons/"* ; do
    ln -sf "$file" "$duaef_libs/DuScriptUILib/icons"
    echo "Linked $file"
done

# pseudoEffects
mkdir "$duaef_libs/pseudoEffects"
for file in "$duaef/src/libs/pseudoEffects/"* ; do
    ln -sf "$file" "$duaef_libs/pseudoEffects"
    echo "Linked $file"
done

# third-party
mkdir "$duaef_libs/third-party"
for file in "$duaef/src/libs/third-party/"* ; do
    ln -sf "$file" "$duaef_libs/third-party"
    echo "Linked $file"
done

# DuAEF
for file in "$duaef/src/libs/"*.jsxinc ; do
    ln -sf "$file" "$duaef_libs"
    echo "Linked $file"
done
ln -sf "$duaef/src/DuAEF.jsxinc" "$ae_scripts"