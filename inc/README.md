# DuAEF
Duduf After Effects Framework

► [The Framework reference is available here](http://duaef.rxlab.io).

## Classes and namespaces

These stables show where to find the implementation for each class & namespace of the framework.  
[Read the reference](http://duaef.rxlab.io) for the description of all classes and namespaces.

### General

| Name | Type | File | Description |
| :---: | :---: | --- | --- |
| `DuAE` | *namespace* | [inc/ae.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/ae.jsxinc) | Application specific objects and methods. |
| `DuAEF` | *namespace* | [inc/core.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/core.jsxinc) | Main objects and methods. |
| `DuAEKeyFrame` | *Class* | [inc/ae.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/ae.jsxinc) | Properties of an After Effects Keyframe. |
| `DuAEKeySpatialProperties` | *Class* | [inc/ae.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/ae.jsxinc) | Spatial properties of a DuAEKeyFrame. |
| `DuAELayerAnimation` | *Class* | [inc/ae.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/ae.jsxinc) | Contains all DuAEPropertyGroupAnimation from an After Effects Layer. |
| `DuAEPropertyAnimation` | *Class* | [inc/ae.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/ae.jsxinc) | Describes the animation of an After Effects property. |
| `DuAEPropertyGroupAnimation` | *Class* | [inc/ae.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/ae.jsxinc) | Contains all DuAEPropertyAnimation from an After Effects PropertyGroup. |
| `DuAEProperty` | *Class* | [inc/ae.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/ae.jsxinc) |  Get some handy informations about a property. |

### DuESF Extension

*DuAEF* also extends *DuESF* with *After Effects* specific objects. They're listed here.

| Name | Type | File | Description |
| :---: | :---: | --- | --- |
| `DuList` | *Class* | [inc/dulist_extension.jsxinc](https://github.com/RxLaboratory/DuAEF/blob/main/inc/dulist_extension.jsxinc) | Adds methods specific to AE Collections. |
| `DuScriptUI.String` | *enum* | [inc/duscriptui_extension.jsxinc](https://github.com/RxLaboratory/DuAEF/blob/main/inc/duscriptui_extension.jsxinc) | Adds new strings used by the UI. |