<p id='patcher'></p>

# HTML / pug style:
- #osc .Oscillator = frequency:100, type:sawtooth

# New style
- name:filter1, type:Filter / frequency:100 resonance:1
  - audio>speaker
- #speaker .output

# Additional items
[ ] checkbox (github only)

<script>
    console.log(document.querySelectorAll('li'));

    document.querySelectorAll('li').forEach((x)=>{
        x.setAttribute('class','red');
        // console.log(x.style.className)
        console.log(x.children.length)
        if(x.children.length>0)console.log((x.children).querySelector('ul'))
        if(x.innerHTML.split('<ul>').length>1)console.log(x.innerHTML.split('<ul>')[1].split('</ul>')[0])
        let listItem =  patcher.appendChild(document.createElement('button'))
        listItem.innerHTML = x.innerHTML
    })
</script>