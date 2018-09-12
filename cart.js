var proj4_data;

$(document).ready( function() {
    var cart = new shopping_cart("jadrn021");
    proj4_data = new Array();
    $.get('/perl/jadrn021/proj4/get_products.cgi', storeData);
    updateDisplay();

    $(document).on('click','.remove', function() {
        cart.delete(this.id);
        $('#count').text(cart.size());
        updateDisplay();
        console.log("Stored Data");
        var items = get_cart();
        console.log("after call")
        updateTable(items)
        console.log(items);
    })

    $(document).on('click','.update', function() {
        var sku = this.id;
        var qty =  $("#q"+sku).val();
        if (qty == "" || qty<=0){
            return;
        };
        cart.setQuantity(sku, qty);
        $('#count').text(cart.size());
        updateDisplay();
        console.log("Stored Data");
        var items = get_cart();
        console.log("after call")
        updateTable(items)
        console.log(items);
    })
    
    $('#addButton').on('click', function() {
        cart.add($('#sku').val(), $('#qty').val());
        updateDisplay();
        console.log("Stored Data");
        var items = get_cart();
        console.log("after call")
        updateTable(items)
        console.log(items);
        });
    $('#deleteButton').on('click', function() {
        cart.delete($('#sku').val());
        updateDisplay();
        console.log("Stored Data");
        var items = get_cart();
        console.log("after call")
        updateTable(items)
        console.log(items);
        });   
        
    $('#quantityButton').on('click', function() {
        cart.setQuantity($('#sku').val(), $('#qty').val());
        updateDisplay();
        console.log("Stored Data");
        var items = get_cart();
        console.log("after call")
        updateTable(items)
        console.log(items);
        });   

    function updateDisplay() {
        var cartArray = cart.getCartArray();
        var toWrite = "<table>";
        toWrite += "<tr><th>SKU</th><th>Quantity</th></tr>";
        for(i=0; i < cartArray.length; i++) {
            toWrite += "<tr>";
            toWrite += "<td>"+cartArray[i][0]+"</td>";
            toWrite += "<td>"+cartArray[i][1]+"</td>"; 
            toWrite += "</tr>";
            }
        toWrite += "</table>"; 
        $('#cartTable').html(toWrite); 
        $('#count').text(cart.size());     
     }              
    
 
    $( "#dialog-modal" ).dialog({
            height: 750,
            width: 900,
            modal: true,
            autoOpen: false
    });
    
    $('#order_button').on('click', function($e) {       
            $("#dialog-modal").dialog('open');
    });  
        
                  
});


    function updateTable(items) {
        var tmpString = "<h2>Cart</h2><table id = 'itemTable'>";
        var totalItems = 0;
        var total = 0;

        tmpString += "<tr><th>SKU</th><th>Name</th><th>Price</th><th>Quantity</th></tr>"
        for (var i = 0; i < items.length; i++) {
            tmpString += "<tr>";
            tmpString += "<td>" + items[i]['sku'] + "</td>";
            tmpString += "<td>" + items[i]['title'] + "</td>";
            tmpString += "<td>$" + items[i]['retail'] + "</td>";
            tmpString += "<td><input id='q" + items[i]['sku']  + "' value="+ items[i]['qty'] + " size='3'></td>";
            tmpString += "<td><input id='" + items[i]['sku'] + "' class='remove' type='button' value='Remove'></td>";
            tmpString += "<td><input id='" + items[i]['sku'] + "' class='update' type='button' value='Update'></td>"; 
            tmpString += "</tr>";
            totalItems += Number(items[i]['qty']);
            total += Number(items[i]['retail']) * Number(items[i]['qty'])
        };
        tmpString += "</table><br />";
        tmpString += "<h2>Cost Details</h2>";
        tmpString += "<table id = 'priceTable'>";

	// calculate costs
        var subtotal = total;
     
        var shipping = 2 * totalItems;
        var tax = (shipping + subtotal) * 0.08;
        var total = subtotal + shipping + tax;


        tmpString += "<tr><td>Subtotal</td><td>$" + Number(subtotal).toFixed(2)+ "</td></tr>";
        tmpString += "<tr><td>Shipping Charges ($2 each)</td><td>$"+ Number(shipping).toFixed(2) +"</td></tr>";
        tmpString += "<tr><td>Tax (8.00%)</td><td>$"+ Number(tax).toFixed(2) +"</td></tr>";
        tmpString += "<tr><td>Total</td><td>$"+ Number(total).toFixed(2) +"</td></tr>";
        tmpString += "</table>";
        console.log("Total Price" + total);
        $('#cartTable').html(tmpString);
        return total;
    }

function get_cart() {
    var cart = new shopping_cart("jadrn021");
    var cartArray = cart.getCartArray();
    var array = []
    for (var i = 0; i < cartArray.length; i++) {
        array[i] = get_sku_data(cartArray[i][0],cartArray[i][1]);
    };
    console.log(array);
    return array;
}

function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
    console.log("Stored Data");
    var items = get_cart();
    console.log("after call")
    updateTable(items)
    console.log(items);
    }
    
function get_sku_data(sku, qty) {
    var result={};
    for(var i=0; i < proj4_data.length; i++) {
        if(proj4_data[i][0] == sku) {
            result['sku'] = sku;
            result['title'] = proj4_data[i][2];
            result['retail'] = proj4_data[i][6];
            result['qty'] = qty;
        }
    }
    return result;
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