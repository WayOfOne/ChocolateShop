/*  form.js modified from jadrn000
    Donglin Lao
    CS545 Fall 2016
    Project 4
*/    

function isEmpty(fieldValue) {
    return $.trim(fieldValue).length == 0;    
} 
        
function isValidState(state) {                                
    var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
        "DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA",
        "MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ",
        "NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX",
        "UT","VA","VT","WA","WI","WV","WY");
    for(var i=0; i < stateList.length; i++) 
        if(stateList[i] == $.trim(state))
            return true;
        return false;
    }  
        
$(document).ready(function(){
    var errorStatusHandle = $('#error');
    var elementHandle = new Array(24);
    elementHandle[0] = $('[name="fname1"]');
    elementHandle[1] = $('[name="lname1"]');	
    elementHandle[2] = $('[name="address1"]');
    elementHandle[3] = $('[name="address2"]');
    elementHandle[4] = $('[name="city1"]');
    elementHandle[5] = $('[name="state1"]');
    elementHandle[6] = $('[name="zip1"]');
    elementHandle[7] = $('[name="area_phone1"]');
    elementHandle[8] = $('[name="prefix_phone1"]');
    elementHandle[9] = $('[name="phone1"]');
    

    elementHandle[10] = $('[name="fname2"]');
    elementHandle[11] = $('[name="lname2"]');	
    elementHandle[12] = $('[name="address3"]');
    elementHandle[13] = $('[name="address4"]');
    elementHandle[14] = $('[name="city2"]');
    elementHandle[15] = $('[name="state2"]');
    elementHandle[16] = $('[name="zip2"]');
    elementHandle[17] = $('[name="area_phone2"]');
    elementHandle[18] = $('[name="prefix_phone2"]');
    elementHandle[19] = $('[name="phone2"]');


    elementHandle[20] = $('[name="cardtype"]');
    elementHandle[21] = $('[name="cardnumber"]');
    elementHandle[22] = $('[name="mon"]');
    elementHandle[23] = $('[name="year"]');

		elementHandle[0].focus();
    function isValidData() {
	//billing
        if(isEmpty(elementHandle[0].val())) {
            elementHandle[0].addClass("error");
            errorStatusHandle.text("Please enter your first name in billing address");
            elementHandle[0].focus();
            return false;   
        }
        if(isEmpty(elementHandle[1].val())) {
	    elementHandle[1].addClass("error");
           errorStatusHandle.text("Please enter your last name in billing address");
            elementHandle[1].focus();
            return false;    
        } 
        if(isEmpty(elementHandle[2].val())) {
	    elementHandle[2].addClass("error");
            errorStatusHandle.text("Please enter your billing address");
            elementHandle[2].focus();
            return false;    
        }
        if(isEmpty(elementHandle[4].val())) {
	    elementHandle[4].addClass("error");	
            errorStatusHandle.text("Please enter the city in billing address");
            elementHandle[4].focus();
            return false;    
        }
       if(isEmpty(elementHandle[5].val())) {
	    elementHandle[5].addClass("error");
            errorStatusHandle.text("Please select a state");
            elementHandle[5].focus();
            return false;    
        }

	if(!isValidState(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("The state appears to be invalid, "+
            "please use the two letter state abbreviation");
            elementHandle[5].focus();            
            return false;
        }

        if(isEmpty(elementHandle[6].val())) {
	    elementHandle[6].addClass("error");
            errorStatusHandle.text("Please enter the zip code in billing address");
            elementHandle[6].focus();
            return false;    
        }
        if(!$.isNumeric(elementHandle[6].val())) {
	    elementHandle[6].addClass("error");
            errorStatusHandle.text("The zip code must contain only numbers");
            elementHandle[6].focus();
            return false;    
        }
        if(elementHandle[6].val().length != 5) {
	    elementHandle[6].addClass("error");
            errorStatusHandle.text("The zip code must be exactly five digits");
            elementHandle[6].focus();
            return false;    
        }
	//area code
        if(isEmpty(elementHandle[7].val())) {
	    elementHandle[7].addClass("error");
            errorStatusHandle.text("Please enter the area code phone number in billing address");
            elementHandle[7].focus();
            return false;    
        }
        if(!$.isNumeric(elementHandle[7].val())) {
	   elementHandle[7].addClass("error");
           errorStatusHandle.text("The phone number must only have numbers");
            elementHandle[7].focus();
            return false;    
        }
	 if(elementHandle[7].val().length != 3) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("The area code must be exactly 3 digits");
            elementHandle[7].focus();
            return false;    
        }
	//prefix
	if(isEmpty(elementHandle[8].val())) {
	    elementHandle[8].addClass("error");
            errorStatusHandle.text("Please enter the prefix phone number in billing address");
            elementHandle[8].focus();
            return false;    
        }
        if(!$.isNumeric(elementHandle[8].val())) {
	   elementHandle[8].addClass("error");
           errorStatusHandle.text("The prefix phone number must only have numbers");
            elementHandle[8].focus();
            return false;    
        }
	 if(elementHandle[8].val().length != 3) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("The prefix phone number must have exactly 3 digits!");
            elementHandle[8].focus();
            return false;    
        }
	//phone
	if(isEmpty(elementHandle[9].val())) {
	    elementHandle[9].addClass("error");
            errorStatusHandle.text("Please enter a phone number in billing address");
            elementHandle[9].focus();
            return false;    
        }
        if(!$.isNumeric(elementHandle[9].val())) {
	   elementHandle[9].addClass("error");
           errorStatusHandle.text("The phone number must only have numbers");
            elementHandle[9].focus();
            return false;    
        }
	 if(elementHandle[9].val().length != 4) {
            elementHandle[9].addClass("error");
            errorStatusHandle.text("The phone number must be exactly four digits");
            elementHandle[9].focus();
            return false;    
        }


	
	//shipping
	 if(isEmpty(elementHandle[10].val())) {
            elementHandle[10].addClass("error");
            errorStatusHandle.text("Please enter your first name in shipping address");
            elementHandle[10].focus();
            return false;   
        }
        if(isEmpty(elementHandle[11].val())) {
	    elementHandle[11].addClass("error");
           errorStatusHandle.text("Please enter your last name in shipping address");
            elementHandle[11].focus();
            return false;    
        } 
        if(isEmpty(elementHandle[12].val())) {
	    elementHandle[12].addClass("error");
            errorStatusHandle.text("Please enter your shipping address");
            elementHandle[12].focus();
            return false;    
        }
        if(isEmpty(elementHandle[14].val())) {
	    elementHandle[14].addClass("error");	
            errorStatusHandle.text("Please enter the city in shipping address");
            elementHandle[14].focus();
            return false;    
        }
       if(isEmpty(elementHandle[15].val())) {
	    elementHandle[15].addClass("error");
            errorStatusHandle.text("Please select a state in shipping address");
            elementHandle[15].focus();
            return false;    
        }

	if(!isValidState(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            errorStatusHandle.text("The state appears to be invalid, "+
            "please use the two letter state abbreviation");
            elementHandle[15].focus();            
            return false;
        }

        if(isEmpty(elementHandle[16].val())) {
	    elementHandle[16].addClass("error");
            errorStatusHandle.text("Please enter the zip code in shipping address");
            elementHandle[16].focus();
            return false;    
        }
        if(!$.isNumeric(elementHandle[16].val())) {
	    elementHandle[16].addClass("error");
            errorStatusHandle.text("The zip code must contain only numbers");
            elementHandle[16].focus();
            return false;    
        }
        if(elementHandle[16].val().length != 5) {
	    elementHandle[16].addClass("error");
            errorStatusHandle.text("The zip code must be exactly five digits");
            elementHandle[16].focus();
            return false;    
        }
	//area code
        if(isEmpty(elementHandle[17].val())) {
	    elementHandle[17].addClass("error");
            errorStatusHandle.text("Please enter the area code phone number in shipping address");
            elementHandle[17].focus();
            return false;    
        }
        if(!$.isNumeric(elementHandle[17].val())) {
	   elementHandle[17].addClass("error");
           errorStatusHandle.text("The phone number must only have numbers");
            elementHandle[17].focus();
            return false;    
        }
	 if(elementHandle[17].val().length != 3) {
            elementHandle[17].addClass("error");
            errorStatusHandle.text("The area code must be exactly 3 digits");
            elementHandle[17].focus();
            return false;    
        }
	//prefix
	if(isEmpty(elementHandle[18].val())) {
	    elementHandle[18].addClass("error");
            errorStatusHandle.text("Please enter the area code phone number in shipping address");
            elementHandle[18].focus();
            return false;    
        }
        if(!$.isNumeric(elementHandle[8].val())) {
	   elementHandle[18].addClass("error");
           errorStatusHandle.text("The phone number must only have numbers");
            elementHandle[18].focus();
            return false;    
        }
	 if(elementHandle[18].val().length != 3) {
            elementHandle[18].addClass("error");
            errorStatusHandle.text("The zip code must be exactly five digits");
            elementHandle[18].focus();
            return false;    
        }
	//phone
	if(isEmpty(elementHandle[19].val())) {
	    elementHandle[19].addClass("error");
            errorStatusHandle.text("Please enter the area code phone number in shipping address");
            elementHandle[19].focus();
            return false;    
        }
        if(!$.isNumeric(elementHandle[19].val())) {
	   elementHandle[19].addClass("error");
           errorStatusHandle.text("The phone number must only have numbers");
            elementHandle[19].focus();
            return false;    
        }
	 if(elementHandle[19].val().length != 4) {
            elementHandle[19].addClass("error");
            errorStatusHandle.text("The suffix phone number must be exactly four digits");
            elementHandle[19].focus();
            return false;    
        }

        
	
	//payment
        if(isEmpty(elementHandle[20].val())) {
	    elementHandle[20].addClass("error");
            errorStatusHandle.text("Please select the card type");
            elementHandle[20].focus();
            return false;    
        }
        if(isEmpty(elementHandle[21].val())) {
	    elementHandle[21].addClass("error");	
            errorStatusHandle.text("Please enter the card number");
            elementHandle[21].focus();
            return false;    
        }
        if(!$.isNumeric(elementHandle[21].val())) {
	    elementHandle[21].addClass("error");	
            errorStatusHandle.text("The card number must only have numbers");
            elementHandle[21].focus();
            return false;    
        }
	  if(elementHandle[21].val().length != 12) {
	    elementHandle[21].addClass("error");	
            errorStatusHandle.text("Please Enter a valid 12 digit cc number");
            elementHandle[21].focus();
            return false;    
        }

        if(isEmpty(elementHandle[22].val())) {
	    elementHandle[22].addClass("error");	
            errorStatusHandle.text("Please enter the month in expiration date");
            elementHandle[22].focus();
            return false;    
        }
        if(!$.isNumeric(elementHandle[22].val())) {
	    elementHandle[22].addClass("error");	
            errorStatusHandle.text("The month should only have numbers");
            elementHandle[22].focus();
            return false;    
        }
        if(elementHandle[22].val().length != 2) {
	    elementHandle[22].addClass("error");	
            errorStatusHandle.text("The month must be exactly two digits");
            elementHandle[22].focus();
            return false;    
        }
        if(isEmpty(elementHandle[23].val())) {
	    elementHandle[23].addClass("error");	
            errorStatusHandle.text("Please enter the year in expiration date");
            elementHandle[23].focus();
            return false;    
        }
        if(!$.isNumeric(elementHandle[23].val())) {
	    elementHandle[23].addClass("error");	
            errorStatusHandle.text("The year must only have numbers");
            elementHandle[23].focus();
            return false;    
        }
        if(elementHandle[23].val().length != 2) {
	    elementHandle[23].addClass("error");	
            errorStatusHandle.text("The year must be exactly last two digits");
            elementHandle[23].focus();
            return false;    
        }
     

        return true;
    }

    $("input[type='checkbox']").on('blur', function(){
            elementHandle[10].val(elementHandle[0].val());
            elementHandle[11].val(elementHandle[1].val());
            elementHandle[12].val(elementHandle[2].val());
            elementHandle[13].val(elementHandle[3].val());
            elementHandle[14].val(elementHandle[4].val());
            elementHandle[15].val(elementHandle[5].val());
            elementHandle[16].val(elementHandle[6].val());
	    elementHandle[17].val(elementHandle[7].val());
            elementHandle[18].val(elementHandle[8].val());
            elementHandle[19].val(elementHandle[9].val());
          
    }) 

 
       
    $(':reset').on('click', function() {
        for(var i=0; i < 16; i++)
            elementHandle[i].removeClass("error");
        errorStatusHandle.text("");
        }); 

   $(':submit').on('click', function() {
         for(var i=0; i < 16; i++)
             elementHandle[i].removeClass("error");
         errorStatusHandle.text("");
         return isValidData();
   }); 

})



















