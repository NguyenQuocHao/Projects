/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function clear() {
    document.getElementById('container').innerHTML = "";
}

function applyLocation() {
    numberOfPlaces = document.getElementById('numberOfPlaces').value;

    var container='';
    container += '<a href="index.html"><input type="button" onclick="clear()" value="Clear options"></a>';

    var i;
    if (numberOfPlaces < 5) {
        for (i = 0; i < numberOfPlaces; i++) {
            //Print Address
            container += '<form>';
            container += '<p>Address:</p>';
            container += '<input type="text" name="Address"><br>';

            //Print price
            container += '<p>Price (if you share only include the amount you pay):</p>'
            container += '<input type="number" min="0" name="Price"><br>'

            //Print Lease
            container += 'Does the place include lease:'
            container += '<input type = "radio" id = "lease" name = "lease" value = "yes">'
            container += '<label > Yes </label>'
            container += '<input type = "radio" id = "lease" name = "lease" value = "no">'
            container += '<label > No </label><br>'

            //Print amentities
            container += 'Does the rent paid include electricity, internet:'
            container += '<input type = "radio" id = "lease" name = "amenities" value = "yes">'
            container += '<label> Yes </label>'
            container += '<input type = "radio" id = "lease" name = "amenities" value = "no">'
            container += '<label> No </label><br>'

            //Print amentities
            container += 'Share with landlord:'
            container += '<input type = "radio" id = "lease" name = "share" value = "yes">'
            container += ' <label> Yes </label>'
            container += ' <input type = "radio" id = "lease" name = "share" value = "no">'
            container += ' <label> No </label><br>'

            container += '</form>';
        }
        container += '<input type="button" onclick="test2()" value="Calculate">';
    }
    //document.write(container1);

    document.getElementById('container').innerHTML = container;
}

function test2() {
    var data = [numberOfPlaces][5];

}