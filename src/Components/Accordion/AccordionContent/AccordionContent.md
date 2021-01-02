# AccordionContent Component

A re-usable custom component wrapper around [semantic-ui-react Accordion.Content](https://react.semantic-ui.com/modules/accordion), content sub-component of Accordion.

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant AccordionContent
participant SemanticUI
    App ->> AccordionContent: Import AccordionContent;
    AccordionContent ->> SemanticUI : Import Properties
    SemanticUI ->> AccordionContent : Export Properties
    AccordionContent ->> App : Export AccordionContent
```
