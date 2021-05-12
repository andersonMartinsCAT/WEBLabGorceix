const {TagBuilder, IotGateway} = require('kepserverex-js');
 
const tagBuilder = new TagBuilder({ namespace: 'ControlLogix.CLP1100' });
const iotGateway = new IotGateway({
  host: '127.0.0.1',
  port: '39320',
  username: '',
  password: ''
});

//=========================================//
// setEN escreve 0 ou 1 no enable
// 
//=========================================//
function setEN(value){
    // Add write tags to builder.
    // [ {id:"Channel1.Device1.ValveOpen","v":1}, {"id":"Channel1.Device1.PumpSpeed","v":80}]

    const myTagsW = tagBuilder
        .write("EN",value)
        .get();
    
    iotGateway.write(myTagsW).then((data) => {
        console.log(data);
    }); 

    //clean tags from tagsbuilder
    tagBuilder.clean();
}
//
// 
function experimentIit(tempo){
    setEN(1);
    setTimeout(setEN,tempo,0);
}
console.log(1)
experimentIit(5000)
console.log(2)