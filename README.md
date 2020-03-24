# DuAEF
Duduf After Effects ExtendScript Framework

## What's this?

***DuAEF*** is a set of **classes**, **methods** and **tools** to ease the scripting process in **After Effects**, as long as adding features (like [pngquant](https://pngquant.org/), [ffmpeg](https://ffmpeg.org/), or [json](http://json.org/)) not available in After Effects/ExtendScript.
It is very easy to use and **[documented](https://duaef-reference.rainboxlab.org)**.

## Links

- **Contributing guide**: [wiki/Contributing-Guide](https://github.com/Rainbox-dev/DuAEF_Duik/wiki/Contributing-Guide)
- Tools: [rainboxprod.coop/en/tools/](https://rainboxprod.coop/en/tools/)
- User forum: [forum.rainboxprod.coop](http://forum.rainboxprod.coop)
    - You can create private threads on the forum if you need.    
- Developers and users chat: [framateam.org](https://framateam.org/signup_user_complete/?id=scystqi16t8njnwhxbiuso94he)
    - Feel free to come talk with us ! :smile:
- Developers' documentation: [rainbox-dev.github.io/DuAEF_Duik/](https://duaef-reference.rainboxlab.org)    
   
## How to use the framework in an After Effects script?

Just include the framework in your script with this simple code:

    #include DuAEF.jsxinc //includes all libraries, as separated files (you'll need the complete /libs/ folder)
    
After this, all objects and methods from DuAEF will be available, in [the DuAEF namespace](https://duaef-reference.rainboxlab.org).

## Comprehensive reference

The framework reference is available **[here](https://duaef-reference.rainboxlab.org)**.
    
## Other tools

- The [tools](https://github.com/Rainbox-dev/DuAEF/tree/master/src/tools) subfolder contains some useful scripts, which can be used as example cases of DuAEF use.
- [DuBuilder](https://github.com/Rainbox-dev/DuAEF/tree/master/DuBuilder) is a stand-alone application written in Qt/C++ to build the scripts. It replaces all includes with the actual source code and lets you distribute your scripts as single files instead of a main script with a lot of includes.
