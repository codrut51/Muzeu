using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Diagnostics;

public partial class Login : System.Web.UI.Page
{
    private Database db;
    protected void Page_Load(object sender, EventArgs e)
    {
        db = new Database();
    }

    protected void login1_Click(object sender, EventArgs e)
    {
        if(db.Login(username.Value, password.Value))
        {
            Session["username"] = username.Value;
            Session["password"] = password.Value;
            Debug.WriteLine(username.Value + " " + password.Value);
            Response.Redirect("");
        }
    }

    protected void signup1_Click(object sender, EventArgs e)
    {

    }
}