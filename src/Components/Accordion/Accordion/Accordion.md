# Accordion Component

A re-usable custom component wrapper around [semantic-ui-react Accordion](https://react.semantic-ui.com/modules/accordion)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Accordion
participant SemanticUI
    App ->> Accordion: Import Accordion;
    Accordion ->> SemanticUI : Import Properties
    SemanticUI ->> Accordion : Export Properties
    Accordion ->> App : Export Accordion
```
