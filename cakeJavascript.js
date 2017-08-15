var theForm = document.forms["cakeform"];

/* Call the from from the html page from the id="cakeform"  */

var cake_prices = new Array ();
cake_prices["Round6"]=20;
cake_prices["Round8"]=25;
cake_prices["Round10"]=35;
cake_prices["Round12"]=75;

/* ^^^ Created an associative array to set the value of the original ID "values" to a number in an array to be able to pull those number
 amounts so later down the road we can add all our needed values to find our cake price total */

function getCakeSizePrize(){
    /* getCakeSizePrice() finds the price based on the size of the cake*/

    var cakeSizePrice = 0;

    var theForm = document.forms["cakeform"];
    /*  ^^^ Get a reference to the form id="cakeform" */

    var selectedCake = theForm.elements["selectedcake"];
    /*  ^^^ Get a reference to the cake the user Chooses name=selectedCake" */

    for (var i = 0, i < selectedCake.length, i++) {

        /* . ^^^ Here we create a loop that is going to loop until the variable Created - 'i'
        is equal to 4 since selectedCake.length = 4 . */

        if (selectedCake[i].checked) {
            /* FIRST we set cakeSizePrice to the value of the selected radio button *?
            /* FOR EXAMPLE -  if the user choose the 8TH cake -  we set it to 25 
                REMEMBER we did this creating the associative array "CAKE_PRICES"*/
            cakeSizePrice = cake_prices[selectedCake[i].value];
            /* SECOND We get the selected Items value */
            break;
            /* FOR EXAMPLE if cake_prices["Round8".value] and it is a match we BREAK out of the loop
            since we have no need to continue looping if we have a match lol */
        }
    }
    return theCakeSizePrice;
    /* ^^^ FINALLY we return the cakeSizePrice since that is what we
    are using the "getCakeSizePrice" function for . . */
}


