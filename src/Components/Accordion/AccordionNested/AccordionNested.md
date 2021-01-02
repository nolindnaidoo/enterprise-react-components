# AccordionNested Component

A re-usable custom component wrapper around [semantic-ui-react Accordion.Accordion](https://react.semantic-ui.com/modules/accordion), sub-component of Accordion.

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant AccordionNested
participant SemanticUI
    App ->> AccordionNested: Import AccordionNested;
    AccordionNested ->> SemanticUI : Import Properties
    SemanticUI ->> AccordionNested : Export Properties
    AccordionNested ->> App : Export AccordionNested
```
