# AccordionTitle Component

A re-usable custom component wrapper around [semantic-ui-react Accordion.Title](https://react.semantic-ui.com/modules/accordion), title sub-component of Accordion.

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant AccordionTitle
participant SemanticUI
    App ->> AccordionTitle: Import AccordionTitle;
    AccordionTitle ->> SemanticUI : Import Properties
    SemanticUI ->> AccordionTitle : Export Properties
    AccordionTitle ->> App : Export AccordionTitle
```
