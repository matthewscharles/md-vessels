# Studio config example with Jason Dasent

This is an example developed in session with Jason. We were comparing my proposed syntax with a table as might be used in a screen reader context. 

I think the table might still be useful, but it was surprisingly difficult to write out in markdown on the fly.

There are two channels with a total of six objects on screen.

- Synth loop
  - 1 output

- Drum loop
  - 1 outputs

- Compressor
  - 2 inputs
  - 1 outputs

- Filter
  - 1 inputs
  - 1 output

- Output
  - 1 input

---


| Channel 1 | Channel 2 | 
|--- |--- |
| Synth loop | Drum loop    |
| Inputs: none | Inputs: none |
| Outputs: 2 | Outputs 2 |
| - Audio left| - Audio left|
| - Audio left| - Audio right|
|--- |--- |
| Compressor        | Filter    |
| Inputs: 3 | Inputs: 2 |
| - Audio left | - Audio left |
| - Audio right | - Audio right |
| - Sidechain | |
| Outputs: 2 | Outputs 2 |
| - Left| - Left|
| - Right| - Right|
|--- |--- |
| Output        | Output    |
| Inputs: 2 | Inputs: 2 |
| Outputs: none | Outputs none |
| - Audio left| - Audio left|
| - Audio right| - Audio right|
|--- |--- |
