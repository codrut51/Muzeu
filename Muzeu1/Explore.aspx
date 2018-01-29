<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Explore.aspx.cs" Inherits="Explore" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title> Muzeu</title>
    <link rel="stylesheet" type="text/css" href="style2.css" />
</head>
<body id="body">
    <form id="form1" runat="server">
        <div id="container">
            <div id="header">
                <h2 id="title">~ PLANUL MUZEULUI ~</h2>
            </div>
            <div id="content1">
                <div id="menu">
                    <div id="nivele">
                        <asp:HyperLink ID="nivel" runat="server" href="Parter.aspx"></asp:HyperLink>
                        <asp:HyperLink ID="nivel1" runat="server" href="Etaj1.aspx"></asp:HyperLink>
                        <asp:HyperLink ID="nivel2" runat="server" href="Etaj2.aspx"></asp:HyperLink>
                    </div>
                </div>
                <div id="legend">
                    <div id="innerLegend">
                        <div id="lTitle">LEGENDĂ</div>
                        <div id="leftLegend">
                            <p style="color: red;">Spații nevizitabile</p>
                            <p style="color: green;">Spații vizitabile</p>
                            <p style="color: yellow;">Spații admisibile</p>
                            <p style="color: royalblue;">Loggia</p>
                        </div>
                        <div id="rightLegend">
                            <p style="color: brown;">Expoziție permanentă</p>
                            <p style="color: yellowgreen;">Expoziție temporară</p>
                            <p style="color: darkgreen;">Magazin</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer"> 
                <h4 id="footerText1"> << Apasă pe imaginea unui nivel pentru a vizita camerele >> </h4>
            </div>
        </div>
    </form>
    <script src="script.js"></script>
</body>
</html>
