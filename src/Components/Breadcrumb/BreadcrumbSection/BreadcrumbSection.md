# BreadcrumbSection Component

A re-usable custom component wrapper around [semantic-ui-react Breadcrumb.Section](https://react.semantic-ui.com/collections/breadcrumb), section sub-component of Breadcrumb.

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant BreadcrumbSection
participant SemanticUI
    App ->> BreadcrumbSection: Import BreadcrumbSection;
    BreadcrumbSection ->> SemanticUI : Import Properties
    SemanticUI ->> BreadcrumbSection : Export Properties
    BreadcrumbSection ->> App : Export BreadcrumbSection
```
