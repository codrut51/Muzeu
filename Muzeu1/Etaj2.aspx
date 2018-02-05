<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Etaj2.aspx.cs" Inherits="Etaj2" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title> Muzeu</title>
    <link rel="stylesheet" type="text/css" href="style1.css" />
    <script src="images/jquery-3.1.0.js"></script>
</head>

<body id="body">
    <div id="innerBody">
        <div id="container1">
            <div id="leftContent">
                <div id="divButton">
                    <form id="form1" runat="server">
                          <asp:Button ID="backButton" runat="server" Text="< Back" OnClick="backButton_Click" />           
                    </form>
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
                        <div id="imageDescription">
                        </div>
                    </div>
                </div>
                <div id="images">
                </div>
            </div>
        </div>
    </div>
    <script src="imageScript3.js"></script>
    <script src="script1.js"></script>
</body>
</html>