﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Main : System.Web.UI.Page
{
    Database d = new Database();
    protected void Page_Load(object sender, EventArgs e)
    {
       
    }

    protected void search_Click(object sender, EventArgs e)
    {
            Response.Redirect("Explore.aspx", false);
            Context.ApplicationInstance.CompleteRequest();
    }
}