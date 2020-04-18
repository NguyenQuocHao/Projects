/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function clear() {
    document.getElementById('container').innerHTML = "";
}


function addLocation() {
    var container = '';
    container += '<a href="index.html"><input type="button" onclick="clear()" value="Clear options"></a>';
    var i;

    //Create form
    var myForm = document.createElement("FORM");
    myForm.id = "form";
    var button = document.createElement("INPUT");
    button.type = "button";
    button.value = "Remove";
    button.onclick = function(){
        var elmnt = document.getElementById("form");
        elmnt.remove();
    }
    myForm.appendChild(button);

    //Create Address field
    var text = document.createTextNode("Address:");
    myForm.appendChild(text);
    myForm.appendChild(document.createElement("BR")); //Add newline
    var address = document.createElement("INPUT");
    address.setAttribute("type", "text");
    address.setAttribute("name", "Address");
    myForm.appendChild(address);
    //Create Price field
    myForm.appendChild(document.createElement("BR")); //Add newline
    text = document.createTextNode("Price:");
    myForm.appendChild(text);
    myForm.appendChild(document.createElement("BR")); //Add newline
    var price = document.createElement("INPUT");
    price.type = "text";
    price.name = "Price";
    myForm.appendChild(price);
    //Create Lease field
    myForm.appendChild(document.createElement("BR")); //Add newline
    text = document.createTextNode("Does the place include lease:");
    myForm.appendChild(text);
    myForm.appendChild(document.createElement("BR")); //Add newline
    //Create yes button
    var lease = document.createElement("INPUT");
    lease.type = "radio";
    lease.name = "Lease";
    lease.id = "Lease";
    lease.value = "yes";
    myForm.appendChild(lease);
    var label = document.createElement("LABEL");
    text = document.createTextNode("Yes");
    label.appendChild(text);
    myForm.appendChild(label);
    //Create no button
    var lease = document.createElement("INPUT");
    lease.type = "radio";
    lease.name = "Lease";
    lease.id = "Lease";
    lease.value = "no";
    myForm.appendChild(lease);
    var label = document.createElement("LABEL");
    text = document.createTextNode("No");
    label.appendChild(text);
    myForm.appendChild(label);
    //Create Amenities field
    myForm.appendChild(document.createElement("BR")); //Add newline
    text = document.createTextNode("Does the rent paid include electricity, internet:");
    myForm.appendChild(text);
    myForm.appendChild(document.createElement("BR")); //Add newline
    //Create yes button
    var lease = document.createElement("INPUT");
    lease.type = "radio";
    lease.name = "Amenities";
    lease.id = "Amenities";
    lease.value = "yes";
    myForm.appendChild(lease);
    var label = document.createElement("LABEL");
    text = document.createTextNode("Yes");
    label.appendChild(text);
    myForm.appendChild(label);
    //Create no button
    var lease = document.createElement("INPUT");
    lease.type = "radio";
    lease.name = "Amenities";
    lease.id = "Amenities";
    lease.value = "no";
    myForm.appendChild(lease);
    var label = document.createElement("LABEL");
    text = document.createTextNode("No");
    label.appendChild(text);
    myForm.appendChild(label);
    //Create Share with Landlord field
    myForm.appendChild(document.createElement("BR")); //Add newline
    text = document.createTextNode("Share with landlord:");
    myForm.appendChild(text);
    myForm.appendChild(document.createElement("BR")); //Add newline
    //Create yes button
    var lease = document.createElement("INPUT");
    lease.type = "radio";
    lease.name = "Landlord";
    lease.id = "Landlord";
    lease.value = "yes";
    myForm.appendChild(lease);
    var label = document.createElement("LABEL");
    text = document.createTextNode("Yes");
    label.appendChild(text);
    myForm.appendChild(label);
    //Create no button
    var lease = document.createElement("INPUT");
    lease.type = "radio";
    lease.name = "Landlord";
    lease.id = "Landlord";
    lease.value = "no";
    myForm.appendChild(lease);
    var label = document.createElement("LABEL");
    text = document.createTextNode("No");
    label.appendChild(text);
    myForm.appendChild(label);
//            var fileId = 0; // used by the addFile() function to keep track of IDs
//            function addFile() {
//                fileId++; // increment fileId to get a unique ID for the new element
//                var html = '<input type="file" name="uploaded_files[]" /> ' +
//                        '<a href="" onclick="javascript:removeElement('file - ' + fileId + ''); return false;">Remove</a>';
//                        addElement('files', 'p', 'file-' + fileId, html);
//            }
//        }

    document.body.appendChild(myForm);
//    var elmnt = document.getElementById("form");
//    elmnt.remove();
}

function removeForm() {
    var elmnt = document.getElementById("form");
    alert("hello")
    elmnt.remove();
}