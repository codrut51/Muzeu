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
        String[] rez = db.Login(username.Value, password.Value);
        if (rez.Length == 3)
        {
            Session["id"] = rez[0];
            Session["username"] = rez[1];
            Session["password"] = rez[2];
            Debug.WriteLine(rez[1] + " " + rez[2]);
            Response.Redirect("Upload.aspx");
        }
    }

    protected void signup1_Click(object sender, EventArgs e)
    {
        if(account.Checked)
        {
            if(password.Value == password1.Value)
            {
                db.CreateUser(username.Value, password.Value);
                account.Checked = false;
            }else
            {
                Debug.WriteLine("Passwords should be the same");
            }
        }
    }
}