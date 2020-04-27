/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var c = 0;

function addLocation() {
    // Limit the maximum forms (4 max)
    if (c < 4) {
        c++;

        //Create form
        var myForm = document.createElement("FORM");
        myForm.id = "form" + c;
        myForm.name = "form";
        var unitTitle = document.createElement("P"); //Title for each form
        unitTitle.id = "unitText" + c;
        document.body.appendChild(unitTitle);
        unitTitle.innerHTML = "Unit " + c;


        //Create remove form button
        var button = document.createElement("INPUT");
        button.type = "button";
        button.id = "removeButton" + c;
        button.setAttribute("class", "remove");
        button.value = "X";
        button.onclick = function() {
            var lastChar = button.id.substr(button.id.length - 1);  //get last number id of the button
            var deleteForm = document.getElementById("form" + lastChar);
            alert("last char: " + lastChar)
            deleteForm.remove(); //Delete the form
            unitTitle.remove();  //Delete form title
            if (lastChar < c) {
                var gap = c - lastChar;
                for (var i = 1; i <= gap; i++) {
                    var replaceFormPosition = parseInt(lastChar) + parseInt(i);
                    var replaceForm = document.getElementById("form" + replaceFormPosition);
                    var newUnitText = document.getElementById("unitText" + replaceFormPosition);
                    var newButton = document.getElementById("removeButton" + replaceFormPosition);
                    alert(newButton.id);


                    var newLastChar = replaceForm.id.substr(replaceForm.id.length - 1);
                    replaceFormPosition = parseInt(newLastChar) - 1;
                    replaceForm.id = "form" + replaceFormPosition;// 
                    newUnitText.id = "unitText" + replaceFormPosition;// 
//                    newUnitText.innerHTML = "Unit " + replaceFormPosition;
                    newUnitText.innerHTML += replaceFormPosition;
                    newButton.id = "removeButton" + replaceFormPosition;// 
                }
            }
            c--;
        }
        myForm.appendChild(button);

        //Create Address field
        var text = document.createTextNode("Address:" + c);
        myForm.appendChild(text);
        myForm.appendChild(document.createElement("BR")); //Add newline
        var address = document.createElement("INPUT");
        address.setAttribute("type", "text");
        address.setAttribute("name", "address");
        myForm.appendChild(address);


        //Create Price field
        myForm.appendChild(document.createElement("BR")); //Add newline
        text = document.createTextNode("Price:");
        myForm.appendChild(text);
        myForm.appendChild(document.createElement("BR")); //Add newline
        var price = document.createElement("INPUT");
        price.type = "number";
        price.name = "price";
        myForm.appendChild(price);


        //Create Lease field
        myForm.appendChild(document.createElement("BR")); //Add newline
        text = document.createTextNode("Does the place include lease:");
        myForm.appendChild(text);
        myForm.appendChild(document.createElement("BR")); //Add newline
        //Create yes button
        var lease = document.createElement("INPUT");
        lease.type = "radio";
        lease.name = "lease";
        lease.value = "yes";
        myForm.appendChild(lease);
        var label = document.createElement("LABEL");
        text = document.createTextNode("Yes");
        label.appendChild(text);
        myForm.appendChild(label);
        //Create no button
        var lease = document.createElement("INPUT");
        lease.type = "radio";
        lease.name = "lease";
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
        var amenities = document.createElement("INPUT");
        amenities.type = "radio";
        amenities.name = "amenities";
        amenities.value = "yes";
        myForm.appendChild(amenities);
        var label = document.createElement("LABEL");
        text = document.createTextNode("Yes");
        label.appendChild(text);
        myForm.appendChild(label);
        //Create no button
        var amenities = document.createElement("INPUT");
        amenities.type = "radio";
        amenities.name = "amenities";
        amenities.value = "no";
        myForm.appendChild(amenities);
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
        var landlordShare = document.createElement("INPUT");
        landlordShare.type = "radio";
        landlordShare.name = "landlord";
        landlordShare.value = "yes";
        myForm.appendChild(landlordShare);
        var label = document.createElement("LABEL");
        text = document.createTextNode("Yes");
        label.appendChild(text);
        myForm.appendChild(label);
        //Create no button
        var landlordShare = document.createElement("INPUT");
        landlordShare.type = "radio";
        landlordShare.name = "landlord";
        landlordShare.value = "no";
        myForm.appendChild(landlordShare);
        var label = document.createElement("LABEL");
        text = document.createTextNode("No");
        label.appendChild(text);
        myForm.appendChild(label);

        document.body.appendChild(myForm);

    }
}

function calculate() {
//    var data = [4][5];
    alert("open")
    var grades = [4];
    for (var i = 0; i < c; i++) {
//        var form = document.getElementByName("form" + i);
        var address = document.getElementsByName("address")[i].value;
        var price = document.getElementsByName("price")[i].value;
        var lease = document.getElementsByName("lease")[i].value;
        var amenities = document.getElementsByName("amenities")[i].value;

    }
    alert("close")

}
