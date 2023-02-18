let serial = 0

// for card-1
//!  triangle calculation
document.getElementById('triangle-btn').addEventListener('click', function(){
    serial += 1
    const objectTitle = document.getElementById('triangle-title').innerText;
    const baseString = document.getElementById('base-tangle');
    const base = baseString.value;
    baseString.value = '';
    
    const heightString = document.getElementById('height-tangle');
    const height = heightString.value;
    heightString.value = '';

    const area = 0.5 * parseFloat( base ) * parseFloat( height );
    if ( isNaN( area ) ) {
        alert( 'Enter a number' );
    }
    else {
        setTableValue(serial, objectTitle, area.toFixed(2));
    }
})

// for card-2
// ! rectangle calculation
document.getElementById('rectangle-btn').addEventListener('click', function(){
    serial += 1 ;
    const objectTitle = document.getElementById('rectangle-title').innerText;
    const lengthString = document.getElementById('length-rtangle') ;
    const length = lengthString.value;
    lengthString.value = '';
    
    const widthString = document.getElementById( 'width-rtangle' );
    const width = widthString.value;
    widthString.value = '';

    const area = parseFloat(length) * parseFloat (width);
    if (isNaN(area)){
        alert('Enter a number');
    }
    else {
        setTableValue(serial,objectTitle,area.toFixed(2));
    }
})

// for card-3
// !Parallelogram calculation
function parallelogramCalc(){
    serial += 1;
    const objectTitle = document.getElementById('parallelogram-title').innerText;
    const area = 10 * 12;
    setTableValue(serial,objectTitle,area.toFixed(2));
}

// for card-4
//! Rhombus calculation
function rhombusCalc(){
    serial += 1;
    const objectTitle = document.getElementById('rhombus-title').innerText;
    const area = 0.5 * 16 * 8;
    setTableValue(serial, objectTitle, area.toFixed(2));
}
// for card-5
// ! Pentagon Calculation
function pentagonCalc(){
    serial += 1;
    const title = document.getElementById( 'pentagon-title' ).innerText;
    const area = 0.5 * 6 * 10;
    setTableValue(serial, title, area.toFixed(2));
}
// for card-6
// ! Ellipse Calculation
function ellipseCalc(){
    serial += 1;
    const title = document.getElementById( 'ellipse-title' ).innerText;
    const area = Math.PI * 10 * 4;
    setTableValue(serial, title, area.toFixed(2));
}

// area calculation function
function setTableValue(serial, objectTitle , area){
const table = document.getElementById('table-main-body');

const li = document.createElement('tr');

li.innerHTML = 
`
<tr>
    <td>${serial}</td>
    <td>${objectTitle}</td>
    <td id="conversion-result">${area}</td>
    <td><button id="convert-meter" class="btn btn-info normal-case">Convert to m<sup>2</sup></a></button></td>
</tr>
` ;
table.appendChild(li);
}
