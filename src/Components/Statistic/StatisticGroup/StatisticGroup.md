# StatisticGroup Component

A re-usable custom component wrapper around [semantic-ui-react Statistic.Group](https://react.semantic-ui.com/views/statistic)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant StatisticGroup
participant SemanticUI
    App ->> StatisticGroup: Import StatisticGroup;
    StatisticGroup ->> SemanticUI : Import Properties
    SemanticUI ->> StatisticGroup : Export Properties
    StatisticGroup ->> App : Export StatisticGroup
```
