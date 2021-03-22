customerUpdate.onshow = function() {
    query = "SELECT * FROM customer;"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        if (results.length == 0)
            lblMessage4.value = "There are no customers in the database."
        else {
            message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][1] + "\n"
            txtaCustomers4.value = message
        } // end else

    } else // the transit didn't work - bad wifi? server turned off?
        lblMessage4.value = "Error code: " + req.status
}


btnSubmit2.onclick = function() {
    let oldName = inptNameUpdate.value
    let newName = inptNameUpdate2.value
    query = "SELECT * FROM customer WHERE `name` = '" + oldName + "'"
    alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        if (results.length > 0) {
            query = "UPDATE customer SET `name` ='" + newName + "' WHERE `name` = '" + oldName + "'"
            alert(query)
            req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
            if (req.status == 200)
                if (req.responseText == 500)
                    lblMessage4.value = `You have successfully updated ${oldName} to ${newName}.`
            else
                lblMessage4.value = `There was a problem updating ${oldName} to ${newName}.`
            else
                lblMessage4.value = `Error: ${req.status}`
        }
    } // if 200
}