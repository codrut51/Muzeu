<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Upload.aspx.cs" Inherits="Upload" %>

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
                <h2 id="title"> încărca CV-ul dumneavoastra. </h2>
            </div>
            <div id="content1">
                 <div id="loginContent">
                     <h3> File Upload:</h3>
                     <br />
                     <asp:FileUpload ID="FileUpload1" runat="server" />
                     <br /><br />
                     <asp:Button ID="btnsave" runat="server" onclick="btnsave_Click"  Text="Save" style="width:85px" />
                     <br /><br />
                     <asp:Label ID="lblmessage" runat="server" />
                  </div>
            </div>
            <div id="footer">
                <div id="innerFooter1">
                    <p> <asp:Button ID="login1" runat="server" Text="Continuă" OnClick="login1_Click" /> </p>
                    
                </div>
            </div>
       </div>
    </form>
    </div>
    <script src="script1.js"></script>
</body>
</html>
