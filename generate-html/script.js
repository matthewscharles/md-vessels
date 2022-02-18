let object = {"osc":{
    "class":"Oscillator",
    "id":"osc",
    "attributes":{
        "frequency":"100",
        "type":"sawtooth"
    },
    "connections":[
        ['audio','speaker:audio']
    ]
}}
console.log(Object.entries(object));

let exampleId = "osc"
let exampleObject = object[exampleId];

let newObject = document.createElement('details');
let newSummary = document.createElement('summary');
let newSummaryAttributes = document.createElement('summary');

// newSummaryAttributes.innerHTML =  `${Object.keys(exampleObject.attributes).length} attributes`;
newSummaryAttributes.innerHTML =  `${exampleObject.connections.length} connection${exampleObject.connections.length == 1 ? '':'s'}`;
let newDetailAttributes = document.createElement('details');
let newAttributes = document.createElement('table');
let newConnections = document.createElement('table');
let headers = document.createElement('tr');
let headerFrom = document.createElement('th');
let headerTo = document.createElement('th');
[headerFrom,headerTo].forEach(x=>x.className = 'detail')
headerFrom.innerHTML = 'From';
headerTo.innerHTML = 'To';
headers.appendChild(headerFrom)
headers.appendChild(headerTo)
newDetailAttributes.appendChild(headers)
exampleObject.connections.forEach(([index,value])=>{
    let newRow = document.createElement('tr');
    let tdIndex = document.createElement('td');
    let tdValue= document.createElement('td');
    [tdIndex,tdValue].forEach(x=>x.className = 'detail')
    tdIndex.innerHTML = index;
    tdValue.innerHTML = value;
    newRow.appendChild(tdIndex);
    newRow.appendChild(tdValue);
    newDetailAttributes.appendChild(newRow);
})

newObject.appendChild(newAttributes)

newSummary.innerHTML = object[exampleId].id;
newObject.appendChild(newDetailAttributes)
newDetailAttributes.appendChild(newSummaryAttributes)

newObject.appendChild(newSummary)
document.getElementById('new').appendChild(newObject);