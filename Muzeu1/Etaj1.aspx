<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Etaj1.aspx.cs" Inherits="Etaj1" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title> Muzeu</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <script src="images/jquery-3.1.0.js"></script>
</head>

<body id="body">
    <form id="form1" runat="server">
        <div id="container1">
            <div id="leftContent">
                <div id="divButton">
                    <asp:Button ID="backButton" runat="server" Text="< Back" />
                </div>
                <div id="leftMenu">
                    <ul id="listMenu">

                    </ul>
                </div>
                <div id="contact">
                    <div id="innerContact">
                        <h1 style="font-weight: normal;"> 
                            Contact
                        </h1>
                        <h3><img src="images/icons/location.png" style="width: 16px; height: 16px;"/> Strada Mihai Viteazul 1, Făgăraș 505200</h3>
                        <h3><img src="images/icons/Phone.png" style="width: 16px; height: 16px;"/> Telefon: 0268 211 862</h3>
                    </div>
                </div>
            </div>
            <div id="rightContent">
                <div id="headRight">
                    <div id="buttons">
                        <button id="leftImage" onclick="prevImage()"> < Prev </button>
                        <button id="rightImage" onclick="nextImage()"> Next > </button>
                    </div>
                </div>
                <div id="Image">
                    <div id="displayImage">
                        <div id="imageDescription"></div>
                    </div>
                </div>
                <div id="images">
                </div>
            </div>
        </div>
    </form>
    <script src="imageScript2.js"></script>
    <script src="script2.js"></script>
</body>
</html>