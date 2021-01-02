# Rheostat Component

A re-usable custom component wrapper around [airbnb Rheostat](https://github.com/airbnb/rheostat)

# Sequence Diagram

```mermaid
sequenceDiagram
participant App
participant Rheostat
participant Airbnb
    App ->> Rheostat: Import Rheostat;
    Rheostat ->> Airbnb : Import Properties
    Airbnb ->> Rheostat : Export Properties
    Rheostat ->> App : Export Rheostat
```
