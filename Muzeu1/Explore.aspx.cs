using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Diagnostics;

public partial class Explore : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if(Session["Username"] != null)
        {
            Debug.WriteLine("Session exists" + Session["Username"]);
        }
        else
        {
            Debug.Write("Session doesn't exist so nothing to do!");
        }
    }
}