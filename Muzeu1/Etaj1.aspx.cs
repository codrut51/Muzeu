using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Etaj1 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void backButton_Click(object sender, EventArgs e)
    { 
        Response.Redirect("Explore.aspx");
    }
}