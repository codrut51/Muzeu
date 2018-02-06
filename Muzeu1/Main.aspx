<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Main.aspx.cs" Inherits="Main" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title> Muzeu</title>
    <link rel="stylesheet" type="text/css" href="style1.css" />
</head>
<body id="body">
    <div id="innerBody">
    <form id="form1" runat="server">
        <div id="container">
            <div id="header">
                <div id="loginButton">
                        <asp:Button ID="login" runat="server" Text="Login" OnClick="login_Click" />
                </div>
                <h2 id="title">~ Muzeul Țării Făgărașului "Valer Literat" ~</h2>
            </div>
            <div id="content">
                <div id="innerContent"></div>
            </div>
            <div id="footer">
                <div id="innerFooter">
                    <div id="textFooter">Mai mult: </div>
                    <div id="buttonFooter"><asp:Button ID="search" runat="server" OnClick="search_Click" /></div>
                </div>
            </div>
        </div>
    </form>
    </div>
    <script src="script1.js"></script>
</body>
</html>
