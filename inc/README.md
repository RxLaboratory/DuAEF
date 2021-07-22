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
| `DuAEComp` | *namespace* | [inc/comp.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/comp.jsxinc) | Composition specific objects and methods. |
| `DuAEExpression` | *namespace* | [inc/expression.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/expression.jsxinc) | Expression specific objects and methods and cache system. |
| `DuAEF` | *namespace* | [inc/core.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/core.jsxinc) | Main objects and methods. |
| `DuAEItem` | *namespace* | [inc/item.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/item.jsxinc) | Projecct items specific objects and methods. |
| `DuAEKeyFrame` | *Class* | [inc/ae.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/ae.jsxinc) | Properties of an After Effects Keyframe. |
| `DuAEKeySpatialProperties` | *Class* | [inc/ae.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/ae.jsxinc) | Spatial properties of a DuAEKeyFrame. |
| `DuAELayer` | *namespace* | [inc/layer.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/layer.jsxinc) | Layer specific objects and methods. |
| `DuAELayerAnimation` | *Class* | [inc/ae.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/ae.jsxinc) | Contains all DuAEPropertyGroupAnimation from an After Effects Layer. |
| `DuAEProject` | *namespace* | [inc/project.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/project.jsxinc) | Project specific objects and methods. |
| `DuAEProjectXMP` | *namespace* | [inc/projectXMP.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/projectXMP.jsxinc) | Manages XMP Metadata of the project. |
| `DuAEProperty` | *Class* | [inc/property.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/property.jsxinc) | Property specific objects and methods. |
| `DuAEPropertyAnimation` | *Class* | [inc/ae.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/ae.jsxinc) | Describes the animation of an After Effects property. |
| `DuAEPropertyExpression` | *Class* | [inc/ae.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/ae.jsxinc) | Describes an expression and the property containing it. |
| `DuAEPropertyGroupAnimation` | *Class* | [inc/ae.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/ae.jsxinc) | Contains all DuAEPropertyAnimation from an After Effects PropertyGroup. |
| `DuAEPuppet` | *namespace* | [inc/puppet.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/puppet.jsxinc) | Puppet tool specific objects and methods. |
| `DuAERenderQueue` | *namespace* | [inc/renderqueue.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/renderqueue.jsxinc) | Render queue specific objects and methods. |
| `DuAEShapeLayer` | *namespace* | [inc/shapelayer.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/shapelayer.jsxinc) | Shape layer specific objects and methods. |
| `DuAETag` | *namespace* | [inc/tag.jsxinc](https://github.com/RxLaboratory/DuESF/blob/main/inc/tag.jsxinc) |  Tag methods. Tags are layer markers used by DuAEF to store data. |

### DuESF Extension

*DuAEF* also extends *DuESF* with *After Effects* specific objects. They're listed here.

| Name | Type | File | Description |
| :---: | :---: | --- | --- |
| `DuList` | *Class* | [inc/dulist_extension.jsxinc](https://github.com/RxLaboratory/DuAEF/blob/main/inc/dulist_extension.jsxinc) | Adds methods specific to AE Collections. |
| `DuScriptUI.String` | *enum* | [inc/duscriptui_extension.jsxinc](https://github.com/RxLaboratory/DuAEF/blob/main/inc/duscriptui_extension.jsxinc) | Adds new strings used by the UI. |