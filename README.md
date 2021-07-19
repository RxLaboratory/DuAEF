# DuAEF
Duduf After Effects ExtendScript Framework

## Current refactor: split and move ES functions to DuESF

### To be moved

- [x] DuSettings
- [x] DuBinary (extract)
- [x] DuDebug
- [x] DuProcess
- [ ] DuRSS
- [ ] DuSystem <- move DuESF.win and DuESF.mac there
- [ ] DuXML
- [ ] DuXMP
- [ ] DuZip
- [ ] Scriptui (except ae related controls)
- [ ] DuOCA -> Split Ae related and non-Ae functions

### Re-check, don't know what to do

- [ ] DuFFMpeg
- [ ] DuQuant

### Move to their own repo / Check what to do

- [ ] Dugr
- [ ] Duik

## What's this?

***DuAEF*** is a set of **classes**, **methods** and **tools** to ease the scripting process in **After Effects**, as long as adding features (like [pngquant](https://pngquant.org/), [ffmpeg](https://ffmpeg.org/), or [json](http://json.org/)) not available in After Effects/ExtendScript.
It is very easy to use and **[documented](https://duaef-reference.rainboxlab.org)**.

## Links

- **Contributing guide**: [duaef-docs.rainboxlab.org](http://duaef-docs.rainboxlab.org/contributing-guide/)
- Tools: [rainboxlab.org/tag/after-effects](https://rainboxlab.org/tag/after-effects/)
- User forum: [forum.rainboxlab.org](http://forum.rainboxprod.coop)
    - You can create private threads on the forum if you need.    
- Developers and users chat: [chat.rainboxlab.org](https://chat.rainboxlab.org)
    - Feel free to come talk with us ! :smile:
- Developers' documentation: [https://duaef-reference.rainboxlab.org](https://duaef-reference.rainboxlab.org)    
   
## How to use the framework in an After Effects script?

Just include the framework in your script with this simple code:

    #include DuAEF.jsxinc
    
After this, all objects and methods from DuAEF will be available, in [the DuAEF namespace](https://duaef-reference.rainboxlab.org).

## Comprehensive reference

The framework reference is available **[here](https://duaef-reference.rainboxlab.org)**.
    
## Other tools

- The [tools](https://github.com/Rainbox-dev/DuAEF/tree/master/src/tools) subfolder contains some useful scripts, which can be used as example cases of DuAEF use.
- [DuBuilder](https://github.com/Rainbox-dev/DuAEF/tree/master/DuBuilder) is a stand-alone application written in Qt/C++ to build the scripts. It replaces all includes with the actual source code and lets you distribute your scripts as single files instead of a main script with a lot of includes.
