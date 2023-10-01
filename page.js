let output = {};

function getPatch(element, start='.beginPatch', end='.endPatch'){
    return element.substring(element.indexOf(start) + start.length,element.indexOf(end));
}

/**
 * convert text representation to json
 */

function run(){
    document.getElementById('source').innerHTML = getPatch(document.body.innerHTML);
    document.getElementById('patcher').innerHTML = '';
    document.getElementById('source').querySelectorAll('li').forEach((x,i)=>{
        x.setAttribute('class','red');
        x.id = `original${i}`;

        if(window.verbose) console.log(x.children.length)

        let listItem =  patcher.appendChild(document.createElement('code'));
        let newObject = Vessels.parseObject(x.innerHTML);
        
        listItem.innerHTML = JSON.stringify(newObject);
        listItem.id = `item${i}`
        output[newObject.id] = newObject;
    })
    
    document.getElementById('object').innerHTML += JSON.stringify(output);
}


// notes from run
// check length of children and apply a separate process, remove from loop

// if(x.children.length>0){
    // if(window.verbose) console.log(Array.from(x.children).filter(item=>item.tagName == 'UL'))
// }
// if(x.innerHTML.split('<ul>').length>1){
//     if(window.verbose) console.log(x.innerHTML.split('<ul>')[1].split('</ul>')[0])
// }