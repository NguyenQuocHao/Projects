/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var c = 0;
function addLocation() {
    var formSection = document.getElementById("formSection");
    // Limit the maximum forms (4 max)
    if (c < 4) {
        c++;

        //Create form
        var myForm = document.createElement("FORM");
        myForm.id = "form" + c;
        myForm.name = "form";
        myForm.style="text-align:left";
//        var unitTitle = document.createElement("BR"); //Title for each form
        var fieldset = document.createElement("FIELDSET");
        fieldset.style="padding-left:20px";
//        fieldset.style = "padding-bottom: 50px"
        var legend = document.createElement("LEGEND");
        legend.id = "unitText" + c;
        legend.innerHTML = "Unit " + c;
        legend.style = "text-align: left; margin-left:0px;";
        fieldset.appendChild(legend)
        myForm.appendChild(fieldset)


        //Create remove form button
        var button = document.createElement("INPUT");
        button.type = "button";
        button.id = "removeButton" + c;
        button.setAttribute("class", "remove");
        button.value = "X";
        button.onclick = function() {
            var lastChar = button.id.substr(button.id.length - 1);  //get last number id of the button
            var deleteForm = document.getElementById("form" + lastChar);
            deleteForm.remove(); //Delete the form
//            unitTitle.remove();  //Delete form title
            if (lastChar < c) {
                var gap = c - lastChar;
                for (var i = 1; i <= gap; i++) {
                    var replaceFormPosition = parseInt(lastChar) + parseInt(i);
                    var replaceForm = document.getElementById("form" + replaceFormPosition);
                    var newUnitText = document.getElementById("unitText" + replaceFormPosition);
                    var newButton = document.getElementById("removeButton" + replaceFormPosition);
                    var replaceAddress = document.getElementById("address" + replaceFormPosition);
                    var replacePrice = document.getElementById("price" + replaceFormPosition);
                    var replaceLease = document.getElementById("lease" + replaceFormPosition);
                    var replaceAmenities = document.getElementById("amenities" + replaceFormPosition);
                    var replaceLandlord = document.getElementById("landlord" + replaceFormPosition);
                    var foodInclusionContainer = document.getElementById("foodInclusionContainer" + replaceFormPosition);
                    var foodInclusion = document.getElementById("foodInclusion" + replaceFormPosition);
//                    alert(button.id)

                    var newLastChar = replaceForm.id.substr(replaceForm.id.length - 1);
                    replaceFormPosition = parseInt(newLastChar) - 1;
                    replaceForm.id = "form" + replaceFormPosition;
                    newUnitText.id = "unitText" + replaceFormPosition;
//                    newUnitText.innerHTML = "Unit " + replaceFormPosition;
                    newUnitText.innerHTML = "Unit " + replaceFormPosition;
                    newButton.id = "removeButton" + replaceFormPosition;
                    replaceAddress.id = "address" + replaceFormPosition;
                    replacePrice.id = "price" + replaceFormPosition;
                    replaceLease.id= "lease" + replaceFormPosition;
                    replaceAmenities.id = "amenities" + replaceFormPosition;
                    replaceLandlord.id = "landlord" + replaceFormPosition;
                    foodInclusionContainer.id = "foodInclusionContainer" + replaceFormPosition;// 
                    if (foodInclusion) {    //check if element exists
                        foodInclusion.id = "foodInclusion" + replaceFormPosition;// 

                    }
                }
            }
            c--;
        }
        fieldset.appendChild(button);
        fieldset.appendChild(document.createElement("BR")); //Add newline

        //Create Distance field
        var text = document.createTextNode("Distance to work/study:");
        fieldset.appendChild(text);
        fieldset.appendChild(document.createElement("BR")); //Add newline
        var distance = document.createElement("INPUT");
        distance.setAttribute("type", "number");
        distance.setAttribute("name", "address");
        distance.id = "address" + c
        distance.setAttribute("class", "inputField");
        distance.placeholder = "km"
        distance.min = 0
        distance.value = 0
        distance.required = true;
        fieldset.appendChild(distance);


        //Create Price field
        fieldset.appendChild(document.createElement("BR")); //Add newline
        text = document.createTextNode("Price:");
        fieldset.appendChild(text);
        fieldset.appendChild(document.createElement("BR")); //Add newline
        var price = document.createElement("INPUT");
        price.type = "number";
        price.name = "price";
        price.id = "price" + c;
        price.min = 0;
        price.value = 0;
        price.placeholder = "CAD";
        price.required = true;
        price.title = "Please enter the amount for an individual paid only";
        price.setAttribute("class", "inputField");
        fieldset.appendChild(price);


        //Create Lease field
        fieldset.appendChild(document.createElement("BR")); //Add newline
        text = document.createTextNode("Leasing included:");
        fieldset.appendChild(text);
        fieldset.appendChild(document.createElement("BR")); //Add newline
        //Create options
        var lease = document.createElement("SELECT");
        lease.id = "lease" + c
        lease.name = "lease"
        var leaseNo = document.createElement("OPTION");
        var t = document.createTextNode("No");
        leaseNo.appendChild(t);
        leaseNo.value = "no"
        var leaseYes = document.createElement("OPTION");
        t = document.createTextNode("Yes");
        leaseYes.appendChild(t);
        leaseYes.value = "yes"
        lease.appendChild(leaseNo)
        lease.appendChild(leaseYes)
        lease.setAttribute("class", "inputField");
        fieldset.appendChild(lease)


        //Create Amenities field
        fieldset.appendChild(document.createElement("BR")); //Add newline
        text = document.createTextNode("Electricity, water, internet included:");
        fieldset.appendChild(text);
        fieldset.appendChild(document.createElement("BR")); //Add newline
        //Create options
        var lease = document.createElement("SELECT");
        lease.id = "amenities" + c
        lease.name = "amenities"
        var leaseNo = document.createElement("OPTION");
        var t = document.createTextNode("No");
        leaseNo.appendChild(t);
        leaseNo.value = "no"
        var leaseYes = document.createElement("OPTION");
        t = document.createTextNode("Yes");
        leaseYes.appendChild(t);
        leaseYes.value = "yes"
        lease.appendChild(leaseNo)
        lease.appendChild(leaseYes)
        lease.setAttribute("class", "inputField");
        fieldset.appendChild(lease)


        //Create Share with Landlord field
        fieldset.appendChild(document.createElement("BR")); //Add newline
        text = document.createTextNode("Share with landlord:");
        fieldset.appendChild(text);
        fieldset.appendChild(document.createElement("BR")); //Add newline
        //Create options
        var lease = document.createElement("SELECT");
        lease.id = "landlord" + c
        lease.name = "landlord"
        lease.onchange = function() {
            checkFoodInclusion(lease.id)
        }
        var leaseNo = document.createElement("OPTION");
        var t = document.createTextNode("No");
        leaseNo.appendChild(t);
        leaseNo.value = "no"
        var leaseYes = document.createElement("OPTION");
        t = document.createTextNode("Yes");
        leaseYes.appendChild(t);
        leaseYes.value = "yes"
        lease.appendChild(leaseNo)
        lease.appendChild(leaseYes)
        lease.setAttribute("class", "inputField");
        fieldset.appendChild(lease)


        var div = document.createElement("DIV");
//        div.type="hidden"
        div.id = "foodInclusionContainer" + c;
        fieldset.appendChild(div)

        formSection.appendChild(myForm);
    }
}

function calculate() {
    var calculateButton = document.getElementById("calculateButton");
    calculateButton.innerHTML = "Calculate ↻";
    var results = document.getElementById("result");
    var result = "";
    var grades = [4];
    for (var i = 0; i < c; i++) {
        var positive = 'Pros: <ul style="list-style-type:none;margin-bottom: 10px">';
        var negative = 'Cons: <ul style="list-style-type:none">';
        result += '<form id="result' + parseInt(i + 1) + '">';
        grades[i] = 0
        var form = document.getElementById("form" + parseInt(i + 1));
        var address = document.getElementsByName("address")[i].value;
        var price = document.getElementsByName("price")[i].value;
        var lease = document.getElementsByName("lease")[i].value;
        var amenities = document.getElementsByName("amenities")[i].value;
        var landlord = document.getElementsByName("landlord")[i].value;

        // Check if input is valid
        isInputValid(price)

        if (lease == "yes") {
            grades[i] += 1
            positive += '<li style="color: green">+1: Lease is included.</li>'
        }
        else {
            negative += '<li style="color: orange">No lease!? Seems sketchy...</li>'
        }
        if (amenities == "yes") {
            grades[i] += 2
            positive += '<li style="color: green">+2: No worries about electricy bills.</li>'
        }
        else {
            negative += '<li style="color: orange">Just remember to pay hydro bills.</li>'
        }
        if (landlord == "no") {
            grades[i] += 0.5
//            result += document.getElementsByName("landlord")[i].id + ": " + landlord;
        }
        if (landlord == "yes") {
            var foodInclusion = document.getElementById("foodInclusion" + parseInt(i + 1)).value;
//            result += document.getElementsByName("landlord")[i].id + ": " + landlord;
//            result += "<br>"
            if (foodInclusion == "yes") {
                grades[i] += 0.5
                positive += '<li style="color: green">+0.5: You need not look for food anymore.</li>'
            }
            else {
                negative += '<li style="color: orange">Live nicely. Share with landlord.</li>'
            }
        }
        else {
            positive += "<li style='color: green'>+0.5: The freedom is yours.</li>"
        }
        //Price conditions
        if (address < 2) {
            grades[i] += 3
            positive += '<li style="color: green">+3: You can walk from home.</li>'
        }
        else if (address >= 2 && address < 7) {
            grades[i] += 2.5
            positive += '<li style="color: green">+2.5: You may travel by bus.</li>'
        }
        else if (address >= 7 && address < 12) {
            grades[i] += 2.5
            positive += '<li style="color: green">+2.5: You might wanna use public transit.</li>'
        }
        else if (address >= 12 & address < 20) {
            grades[i] += 1.5
            negative += '<li style="color: orange">Kinda far!</li>'
        }
        else if (address >= 20 & address < 50) {
            grades[i] += 1
            negative += '<li style="color: orange">Too far!!</li>'
        }
        else {
            negative += '<li style="color: orange">You might wanna choose differnt place, or job.</li>'

        }

        if (price < 450) {
            grades[i] += 3
            positive += '<li style="color: green">+3: This place is ideally cheap!</li>'
        }
        else if (price >= 450 & price <= 650) {
            grades[i] += 2
            positive += '<li style="color: green">+2: The price is average.</li>'
        }
        else if (price > 650 & price < 1000) {
            grades[i] += 1
            negative += '<li style="color: orange">The price is relatively high.</li>'
        }
        else if (price >= 1000) {
            grades[i] += 0
            negative += '<li style="color: orange">Price is too high!</li>'
        }

        positive += '</ul>'
        negative += '</ul>'
        result += positive
        result += negative
        var printGrades = ""
        if (grades[i] >= 9) {
            printGrades += "<p class='goodresult'><strong>" + grades[i] + "</strong></p>"
        }
        else if (grades[i] >= 7.5 && grades[i] < 9) {
            printGrades += "<p class='goodresult' style='background-color: #009933'><strong>" + grades[i] + "</strong></p>"
        }
        else if (grades[i] >= 6.5 && grades[i] < 7.5) {
            printGrades += "<p class='goodresult' style='background-color: #00b33c'><strong>" + grades[i] + "</strong></p>"
        }
        else if (grades[i] >= 4 && grades[i] < 6.5) {
            printGrades += "<p class='badresult'  style='background-color: yellow'  ><strong>" + grades[i] + "</strong></p>"
        }
        else {
            printGrades += "<p class='badresult'><strong>" + grades[i] + "</strong></p>"
        }
        result += printGrades
        result += '</form>';
    }
    results.innerHTML = result
}

function checkFoodInclusion(landlordId) {
//    document.getElementById('mySelect1').disabled = !elem.selectedIndex;
    var landlord = document.getElementById(landlordId).value;
    var lastChar = landlordId.substr(landlordId.length - 1);  //get last number id of the button
    var foodInclusion = document.getElementById('foodInclusionContainer' + lastChar);
    if (landlord == "yes") {
        var text = document.createTextNode("Does the landlord feed you:");
        foodInclusion.appendChild(text);
        foodInclusion.appendChild(document.createElement("BR")); //Add newline
        //Create options
        var foodInclusionOpts = document.createElement("SELECT");
        foodInclusionOpts.id = "foodInclusion" + lastChar
        foodInclusionOpts.name = "foodInclusion"
        var foodInclusionOptsNo = document.createElement("OPTION");
        var t = document.createTextNode("No");
        foodInclusionOptsNo.appendChild(t);
        foodInclusionOptsNo.value = "no"
        var foodInclusionOptsYes = document.createElement("OPTION");
        t = document.createTextNode("Yes");
        foodInclusionOptsYes.appendChild(t);
        foodInclusionOptsYes.value = "yes"
        foodInclusionOpts.appendChild(foodInclusionOptsNo)
        foodInclusionOpts.appendChild(foodInclusionOptsYes)
        foodInclusion.appendChild(foodInclusionOpts)

    }
    else
        document.getElementById(foodInclusion.id).innerHTML = "";
}

function isInputValid(input) {
    if (isNaN(input) == 'true') {
        alert('Please enter only number!')
        return false;
    }
    else {
        return true;
    }
    if (parseFloat(input) < 0) {
        alert('Please enter number larger or equal to 0.')
        return false;
    }
}


//To-do:
