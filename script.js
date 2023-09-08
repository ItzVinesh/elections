function login() {
  // Get the form data
  var scholar_no = document.getElementById("snos").value;
  var classe = document.getElementById("cls").value;
  var section = document.getElementById("sec").value;

  // Create a connection string
  var connectionString = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=/home/vinesh/Documents/Database1.accdb";

  // Create a connection object
  var connection = new ODBCConnection("Database1.accdb");

  // Open the connection
  connection.Open();

  // Create a recordset object
  var recordset = connection.Execute("SELECT * FROM LoginTable");

  // Add the new record to the recordset
  recordset.AddNew();
  recordset("ScholarNo") = scholar_no;
  recordset("Class") = classe;
  recordset("Section") = section;

  // Update the database
  recordset.Update();

  // Close the connection
  connection.Close();
}
