<%
Dim conn
Dim rs

' Connect to the database
conn = Server.CreateObject("ADODB.Connection")
conn.Open "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=/home/vinesh/Documents/Database.accdb"

' Create a recordset to store the form data
rs = conn.Execute("SELECT * FROM LoginTable")

' Add the new record to the recordset
rs.AddNew()
rs("ScholarNo") = Request.Form("scholar_no")
rs("Class") = Request.Form("class")
rs("Section") = Request.Form("section")

' Update the database
rs.Update()

' Close the connection
conn.Close()
%>
