/*  We load the global array proj4_data once, then use it as needed
    to retrieve product information.
    
    The Milk Chocolate handler is done the old-fashion way, with an 
    'onclick' call in the xhtml code.  The rest of the buttons have 
    handlers assigned the correct way.
    

*/    


var proj4_data;

$(document).ready(function() {

    proj4_data = new Array();
    $.get('/perl/jadrn021/proj4/get_products.cgi', storeData);

    var cart = new shopping_cart("jadrn021");
    $('#count').text(cart.size());

    

     $('#dark').on('click', function() {
        tmpString = "<h2>Dark chocolate</h2><hr />";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Dark chocolate") {
                
            //get image
            tmpString += "<div class='item'>";
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";
                
            //get product info
            tmpString += "<h4>" + proj4_data[i][2] + "</h4><br/><br/>";
            tmpString += "<p>";
            tmpString += "<b>SKU: </b>" + proj4_data[i][0] + "<br />";            
            tmpString += proj4_data[i][3] + "<br />";
            tmpString += proj4_data[i][4] + "<br />";
            tmpString += "<h3><b>Price: </b>" + "$" + proj4_data[i][6] + "</h3>";         
            tmpString += "</p>";           
            tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<div class='span'>Added to Cart</span></div><br /><hr />";
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
        
    $('#nuts').on('click', function() {   
        tmpString = "<h2>Nuts and chews</h2><hr />";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Nuts and chews") { 
                 
            //get image
            tmpString += "<div class='item'>";
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";
                
            //get product info
            tmpString += "<h4>" + proj4_data[i][2] + "</h4><br/><br/>";
            tmpString += "<p>";
            tmpString += "<b>SKU: </b>" + proj4_data[i][0] + "<br />";            
            tmpString += proj4_data[i][3] + "<br />";
            tmpString += proj4_data[i][4] + "<br />";
            tmpString += "<h3><b>Price: </b>" + "$" + proj4_data[i][6] + "</h3>";         
            tmpString += "</p>";           
            tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<div class='span'>Added to Cart</span></div><br /><hr />";
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
        
    $('#brittle').on('click', function() {
        tmpString = "<h2>Brittles and toffies</h2><hr />";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Brittles and toffies") {
             //get image
            tmpString += "<div class='item'>";
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";
                
            //get product info
            tmpString += "<h4>" + proj4_data[i][2] + "</h4><br/><br/>";
            tmpString += "<p>";
            tmpString += "<b>SKU: </b>" + proj4_data[i][0] + "<br />";            
            tmpString += proj4_data[i][3] + "<br />";
            tmpString += proj4_data[i][4] + "<br />";
            tmpString += "<h3><b>Price: </b>" + "$" + proj4_data[i][6] + "</h3>";         
            tmpString += "</p>";           
            tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<div class='span'>Added to Cart</span></div><br /><hr />";
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })

    $('#truffles').on('click', function() {
         tmpString = "<h2>Truffles</h2><hr />";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Truffles") {
            //get image
            tmpString += "<div class='item'>";
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";
                
            //get product info
            tmpString += "<h4>" + proj4_data[i][2] + "</h4><br/><br/>";
            tmpString += "<p>";
            tmpString += "<b>SKU: </b>" + proj4_data[i][0] + "<br />";            
            tmpString += proj4_data[i][3] + "<br />";
            tmpString += proj4_data[i][4] + "<br />";
            tmpString += "<h3><b>Price: </b>" + "$" + proj4_data[i][6] + "</h3>";         
            tmpString += "</p>";           
            tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<div class='span'>Added to Cart</span></div><br /><hr />";
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })

    $('#gifts').on('click', function() {
         tmpString = "<h2>Gifts</h2><hr />";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Gifts") {
            //get image
            tmpString += "<div class='item'>";
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";
                
            //get product info
            tmpString += "<h4>" + proj4_data[i][2] + "</h4><br/><br/>";
            tmpString += "<p>";
            tmpString += "<b>SKU: </b>" + proj4_data[i][0] + "<br />";            
            tmpString += proj4_data[i][3] + "<br />";
            tmpString += proj4_data[i][4] + "<br />";
            tmpString += "<h3><b>Price: </b>" + "$" + proj4_data[i][6] + "</h3>";         
            tmpString += "</p>";           
            tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<div class='span'>Added to Cart</span></div><br /><hr />";
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })

    $('#assortments').on('click', function() {
         tmpString = "<h2>Holiday Assortments</h2><hr />";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Holiday assortments") {
            //get image
            tmpString += "<div class='item'>";
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";
                
            //get product info
            tmpString += "<h4>" + proj4_data[i][2] + "</h4><br/><br/>";
            tmpString += "<p>";
            tmpString += "<b>SKU: </b>" + proj4_data[i][0] + "<br />";            
            tmpString += proj4_data[i][3] + "<br />";
            tmpString += proj4_data[i][4] + "<br />";
            tmpString += "<h3><b>Price: </b>" + "$" + proj4_data[i][6] + "</h3>";         
            tmpString += "</p>";           
            tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<div class='span'>Added to Cart</span></div><br /><hr />";
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
        
    $(document).on('click', ".buy", function() {  
        var sku = this.id;
        cart.add(sku,1);
        console.log(cart);
        console.log(cart.size());
        $(this).next().fadeIn(50).fadeOut(2000);
        $('#count').text(cart.size());
        });      
    });    

    
function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
        display_milk_chocolate();
    }
    
function display_milk_chocolate() {
     tmpString = "<h2>Milk Chocolate</h2><hr />";
    for(var i=0; i < proj4_data.length; i++) {
        if(proj4_data[i][1] == "Milk chocolate") {
            //get image
            tmpString += "<div class='item'>";
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";
                
            //get product info
            tmpString += "<h4>" + proj4_data[i][2] + "</h4><br/><br/>";
            tmpString += "<p>";
            tmpString += "<b>SKU: </b>" + proj4_data[i][0] + "<br />";            
            tmpString += proj4_data[i][3] + "<br />";
            tmpString += proj4_data[i][4] + "<br />";
            tmpString += "<h3><b>Price: </b>" + "$" + proj4_data[i][6] + "</h3>";         
            tmpString += "</p>";           
            tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<div class='span'>Added to Cart</span></div><br /><hr />";
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
    }        
    
    
// from http://www.webmasterworld.com/forum91/3262.htm            
function explodeArray(item,delimiter) {
tempArray=new Array(1);
var Count=0;
var tempString=new String(item);

while (tempString.indexOf(delimiter)>0) {
tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
Count=Count+1
}

tempArray[Count]=tempString;
return tempArray;
}     