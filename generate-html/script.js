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

let exampleId = "osc"
let exampleObject = object[exampleId];

class ObjectHTML{
    constructor(id, object){

    }

    init(){
        
    }
}

let htmlElement = {
    name:exampleObject.id,
    details:document.createElement('details'),  
    summary:document.createElement('summary'),
    attributes:{
        details:document.createElement('details'),
        summary:document.createElement('summary'),
        table:{
            table:document.createElement('table'),
            header:{
                row:document.createElement('tr'),
                name: document.createElement('th'),
                value: document.createElement('th')
            },
            rows:[]
        }
    },
    connections:{
        details:document.createElement('details'),
        summary:document.createElement('summary'),
        table:{
            table:document.createElement('table'),
            header:{
                row:document.createElement('tr'),
                from: document.createElement('th'),
                to: document.createElement('th')
            },
            rows:[]
        }
    }
}

// htmlElement.attributes.summary.innerHTML =  `${Object.keys(exampleObject.attributes).length} attributes`;
htmlElement.attributes.summary.innerHTML =  `${Object.keys(exampleObject.attributes).length} attribute${Object.keys(exampleObject.attributes).length == 1 ? '':'s'}`;
htmlElement.connections.summary.innerHTML =  `${exampleObject.connections.length} connection${exampleObject.connections.length == 1 ? '':'s'}`;
// [headerFrom,headerTo].forEach(x=>x.className = 'detail')

htmlElement.connections.table.header.from.innerHTML = 'From';
htmlElement.connections.table.header.to.innerHTML = 'To';
htmlElement.connections.table.header.row.appendChild(htmlElement.connections.table.header.from);
htmlElement.connections.table.header.row.appendChild(htmlElement.connections.table.header.to);
htmlElement.connections.table.table.appendChild(htmlElement.connections.table.header.row);
htmlElement.connections.details.appendChild(htmlElement.connections.table.table);

htmlElement.attributes.table.header.name.innerHTML = 'Name';
htmlElement.attributes.table.header.value.innerHTML = 'Value';
htmlElement.attributes.table.header.row.appendChild(htmlElement.attributes.table.header.name)
htmlElement.attributes.table.header.row.appendChild(htmlElement.attributes.table.header.value)
htmlElement.attributes.table.table.appendChild(htmlElement.attributes.table.header.row)
htmlElement.attributes.details.appendChild(htmlElement.attributes.table.table);

exampleObject.connections.forEach(([from,to])=>{
    let connectionObject = {};
    connectionObject.row = document.createElement('tr');
    connectionObject.from = document.createElement('td');
    connectionObject.to = document.createElement('td');
    connectionObject.from.role='gridcell';
    connectionObject.to.role='gridcell';
    // [tdIndex,tdValue].forEach(x=>x.className = 'detail')
    connectionObject.from.innerHTML = from;
    connectionObject.to.innerHTML = to;
    connectionObject.row.appendChild(connectionObject.from);
    connectionObject.row.appendChild(connectionObject.to);
    htmlElement.connections.table.rows.push(connectionObject)
    htmlElement.connections.table.table.appendChild(connectionObject.row);
})


Object.entries(exampleObject.attributes).forEach(([name,value])=>{
    let connectionObject = {};
    connectionObject.row = document.createElement('tr');
    connectionObject.name = document.createElement('td');
    connectionObject.name.role='gridcell';
    connectionObject.value = document.createElement('td');
    connectionObject.value.role='gridcell';
    // [tdIndex,tdValue].forEach(x=>x.className = 'detail')
    connectionObject.name.innerHTML = name;
    connectionObject.value.innerHTML = value;
    connectionObject.row.appendChild(connectionObject.name);
    connectionObject.row.appendChild(connectionObject.value);
    htmlElement.attributes.table.rows.push(connectionObject)
    htmlElement.attributes.table.table.appendChild(connectionObject.row);
})

htmlElement.attributes.details.appendChild(htmlElement.attributes.table.table)
htmlElement.connections.details.appendChild(htmlElement.connections.table.table) 

htmlElement.summary.innerHTML = htmlElement.name;
htmlElement.summary.className = 'objectName';
htmlElement.details.appendChild(htmlElement.attributes.details)
htmlElement.details.appendChild(htmlElement.connections.details)
htmlElement.attributes.details.appendChild(htmlElement.attributes.summary)
htmlElement.connections.details.appendChild(htmlElement.connections.summary)

htmlElement.details.appendChild(htmlElement.summary)
document.getElementById('new').appendChild(htmlElement.details);
