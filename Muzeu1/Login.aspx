<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title> Muzeu</title>
    <link rel="stylesheet" type="text/css" href="script21.css" />
</head>

<body id="body">
    <div id="innerBody">
    <form id="form1" runat="server">
        <div id="container">
            <div id="header">
                <h2 id="title"> Intrați în cont pentru a putea încărca CV-ul dumneavoastra. </h2>
            </div>
            <div id="content1">
                <div id="loginContent">
                    <div id="titleLogin"> Intră în cont </div>
                    <div id="input">
                        <p><label for="username" id="user"> Username: </label>
                           <input type="text" name="username" id="username" runat="server"/></p>
                        <p><label for="password" id="pass"> Password: </label>
                           <input type="password" name="password" id="password" runat="server"/></p>
                        <div id="buttons1"><asp:Button ID="login1" runat="server" Text="Log In" OnClick="login1_Click" />
                            <asp:Button ID="signup1" runat="server" Text="Sign Up" OnClick="signup1_Click" />
                        </div>
                    </div>
                    
                </div>
            </div>
            <div id="footer">
                <div id="innerFooter1">
                    <p> Daca nu aveți cont va puteți înregistra si continua după. </p>
                </div>
            </div>
       </div>
    </form>
    </div>
    <script src="script1.js"></script>
</body>
</html>
