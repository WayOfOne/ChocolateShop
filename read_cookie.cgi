#!/usr/bin/perl  

use CGI;
use CGI::Cookie;

##taken from http://stackoverflow.com/questions/11020812/todays-date-in-perl-in-mm-dd-yyyy-format
use POSIX qw(strftime);
use DBI;

$q = new CGI;


#send a blank cookie.  You must insert this into the header before
#printing anything.  Also, using the CGI module makes printing
#content-type: text/html redundant.

my $cookie = $q->cookie(-name=>'jadrn021',-value=>'',-path=>'/');
print $q->header(-cookie=>$cookie);


print <<END_CONTENT;
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" 
        content="text/html;charset=utf-8" />  
    <title>Contact Us</title>

    <link rel="stylesheet" type="text/css" href="http://jadran.sdsu.edu/~jadrn021/proj4/proj4.css" />
   
</head>


<body>
    <div class="wrapper">
            <div id="header">
                <h1>Bertha's Deluxe Chocolates</h1>
                
                

                <div id="menu">
                    <ul>
                    <li> <a href="http://jadran.sdsu.edu/~jadrn021/proj4/index.html">Home</a></li>
                    <li> <a href="http://jadran.sdsu.edu/~jadrn021/proj4/products.html">Products</a></li>
                    <li> <a href="http://jadran.sdsu.edu/~jadrn021/proj4/cart.html">Order Online</a></li>
                    <li> <a href="http://jadran.sdsu.edu/~jadrn021/proj4/about.html">About us</a></li>
                    <li> <a href="http://jadran.sdsu.edu/~jadrn021/proj4/contact.html">Contact us</a></li>
                    <li> <img src="http://jadran.sdsu.edu/~jadrn021/proj4/images/shopping_cart.png" width=20px alt="cart" id="shopping_cart"/>
                         <a href="cart.html" class="cart">Cart: <span id="count"></span></a>
                    </li>
                    </ul>
                </div>
            </div>
            
            <div class="intro"> 
            <h1>Confirmation</h1>
            <h3>Thank you for ordering from Bertha's Deluxe Chocolates. Below are the information we've received:</h3>    
END_CONTENT
my %cookies = $ENV{COOKIE};


for( keys %cookies) {
print "The value of the cookie is: $cookies{$_}\n";
}

print "<table id = 'confirmTable'>\n";
my ($key, $value);
     
%cookies = CGI::Cookie->fetch;
for(keys %cookies) {
	  print "$cookies{$_}\n";
    }
    
my $v = $q->cookie('jadrn021');
@rows = split('\|\|',$v);
print "<h2>Your Order</h2>";
foreach $row (@rows) {
    ($sku, $qty) = split('\|',$row);
        print "SKU: $sku Quantity: $qty<br />";

    my $host = "opatija.sdsu.edu";
    my $port = "3306";
    my $database = "jadrn021";
    my $username = "jadrn021";
    my $password = "chair";
    my $database_source = "dbi:mysql:$database:$host:$port";

        
    my $dbh = DBI->connect($database_source, $username, $password) 
    or die 'Cannot connect to db';

    my $date = strftime "%Y-%m-%d", localtime;

    my $query = "INSERT INTO products VALUES('0','$date','$sku', '$qty'); "; 

    my $count = $dbh->do($query);
    $dbh->disconnect();
    } 
     
print "<h2>Shipping information</h2>\n";
my ($key, $value);

foreach $key ($q->param) {
     print "<tr>\n";
    print "<td>$key</td>\n";
    foreach $value ($q->param($key)) {
	 
	 if ($key eq "cardnumber"){
            $last = substr($value, -4);
            print "<td>XXXX-XXXX-$last</td>\n\n";
        }
	else{
        	print "<td>$value</td>\n";
	}
    }
    print "</tr>\n";
}

print "</table>\n";
print "</div>\n";

print "</body>\n";
print "</html>\n";

