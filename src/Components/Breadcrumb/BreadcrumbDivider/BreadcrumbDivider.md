# BreadcrumbDivider Component

A re-usable custom component wrapper around [semantic-ui-react Breadcrumb.Divider](https://react.semantic-ui.com/collections/breadcrumb), divider sub-component of Breadcrumb.

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant BreadcrumbDivider
participant SemanticUI
    App ->> BreadcrumbDivider: Import BreadcrumbDivider;
    BreadcrumbDivider ->> SemanticUI : Import Properties
    SemanticUI ->> BreadcrumbDivider : Export Properties
    BreadcrumbDivider ->> App : Export BreadcrumbDivider
```
