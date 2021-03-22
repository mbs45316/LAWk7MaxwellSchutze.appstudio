customerAdd.onshow = function() {
    query = "SELECT * FROM customer;"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        if (results.length == 0)
            lblMessage3.value = "There are no customers in the database."
        else {
            message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][1] + "\n"
            txtaCustomers3.value = message
        } // end else

    } else // the transit didn't work - bad wifi? server turned off?
        lblMessage3.value = "Error code: " + req.status
}


btnAdd.onclick = function() {
    let newName = 'Jesse Antiques' 
    let newStreet = '1113 F St' 
    let newCity = 'Omaha'
    let newState = 'NE' 
    let newZipcode = '68178'
    query = "INSERT INTO customer (`name`,`street`, `city`, `state`, `zipcode`) VALUES ('" + newName + "', '" + newStreet + "', '" + newCity + "', '" + newState + "', '" + newZipcode + "')"
    alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) {
        if (req.responseText == 500)
            lblMessage3.value = "You have successfully added the new customer!"
        else
            lblMessage3.value = "There was a problem with adding the new customer to the database."
    } else
        lblMessage3.value = "Error: " + req.status

}