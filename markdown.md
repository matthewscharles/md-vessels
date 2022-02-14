# HTML / pug style:
- #osc .Oscillator = frequency:100, type:sawtooth

# New style
- name:filter1, type:Filter / frequency:100 resonance:1
  - audio>speaker
- #speaker .output

# Additional items
[ ] checkbox (github only)

<script>
    console.log(document.querySelectorAll('li'))
</script>