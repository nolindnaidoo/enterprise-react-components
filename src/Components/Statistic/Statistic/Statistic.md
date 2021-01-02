# Statistic Component

A re-usable custom component wrapper around [semantic-ui-react Statistic](https://react.semantic-ui.com/views/statistic)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Statistic
participant SemanticUI
    App ->> Statistic: Import Statistic;
    Statistic ->> SemanticUI : Import Properties
    SemanticUI ->> Statistic : Export Properties
    Statistic ->> App : Export Statistic
```
