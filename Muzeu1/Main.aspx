<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Main.aspx.cs" Inherits="Main" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title> Muzeu</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body id="body">
    <form id="form1" runat="server">
        <div id="container">
            <div id="header">
                <h2 id="title">~ Muzeul Țării Făgărașului "Valer Literat" ~</h2>
            </div>
            <div id="content">
                <div id="innerContent"></div>
            </div>
            <div id="footer">
                <div id="innerFooter">
                    <div id="textFooter">Mai mult: </div>
                    <div id="buttonFooter"><asp:Button ID="search" runat="server" /></div>
                </div>
            </div>
        </div>
    </form>
    <script src="script.js"></script>
</body>
</html>
