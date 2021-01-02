# Select Component

A re-usable custom component wrapper around [semantic-ui-react Select](https://react.semantic-ui.com/addons/select)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Select
participant SemanticUI
    App ->> Select: Import Select;
    Select ->> SemanticUI : Import Properties
    SemanticUI ->> Select : Export Properties
    Select ->> App : Export Select
```
