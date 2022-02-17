# Markdown notation specifications

Rough notes (CM), trying to get together a spec, so these are not very accessible as instructions.

# Shorthand version
This borrows from HTML-style notation for id and class -- I was initially working on this in Pug
Bullet point per item is optional, but we can use these to group objects together (i.e. left-most outlets automatically connected within a ul group)

- Object: the # sign followed by the name of the object
- Class . sign followed by the class of object

Spaces optional.

An optional hyphen or equals sign marks the end of the object name/class. 
This helps pace the screenreader output as well as giving a visual marker.
(nb I originally used > especially since this implies some sort of arrow/allocation, but this reads as 'greater than')

Arguments/attributes follow.
Optional comma between attributes for visual separation/screen reader pause.

## Example
Same oscillator object -- first is spaced for screenreader and visual ease, second is the way I usually type my objects out in Pug.
- #osc .Oscillator - frequency:100, type:sawtooth
- #osc.Oscillator frequency:100 type:sawtooth

# Longhand version
This version also adds a connection written directly into the object notation.  I would prefer GitHub's nested blockquotes for this to be honest, since the bullet points don't read out nicely in VoiceOver.
- Object: here instead of # we write name followed by colon and the name of the object
- Class: as above

A nested second level bullet point describes a connection (with a hyphen and optional spaces between the target and destination).

## Example
- name:filter1, type:Filter - frequency:100, resonance:1
  - audio - speaker
- name:speaker class:output

# Dedicated connection list
This could be in addition to and even include duplicates from the nested connections above.

Object outlets / parameters use standard dot notation (and could use brackets, why not?)

## Example
- osc1.audio - filter1.audio 
- filter1.audio - speaker.audio

Alternatively, if this causes confusion with the dot notation for classes, it could accept:
- osc1:audio - filter1:audio

or

- osc1:audio to filter1:audio

# Notes
Should be flexible with spaces around the colons, longer term..

# Patcher test space
Testing abbreviated version first:
<div id="source" style='background-color:beige;'>

</div>

.beginPatch

- #osc .Oscillator - frequency:100, type:sawtooth
- #osc.Oscillator frequency:100 type:sawtooth

.endPatch

<div id='patcher'></div>
<code id='object'></code>


<script src="./vessels.js"></script>
<script src="./page.js"></script>
<script>
    run();
</script>