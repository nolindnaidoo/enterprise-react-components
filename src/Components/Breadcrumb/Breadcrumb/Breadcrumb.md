# Breadcrumb Component

A re-usable custom component wrapper around [semantic-ui-react Breadcrumb](https://react.semantic-ui.com/collections/breadcrumb)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Breadcrumb
participant SemanticUI
    App ->> Breadcrumb: Import Breadcrumb;
    Breadcrumb ->> SemanticUI : Import Properties
    SemanticUI ->> Breadcrumb : Export Properties
    Breadcrumb ->> App : Export Breadcrumb
```
