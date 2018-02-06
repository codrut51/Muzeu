using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Upload : System.Web.UI.Page
{
    private Database db;
    protected void Page_Load(object sender, EventArgs e)
    {
        db = new Database();
    }

    protected void btnsave_Click(object sender, EventArgs e)
    {
        if(Session["username"] != null)
        {
            StringBuilder sb = new StringBuilder();

            if (FileUpload1.HasFile)
            {
                try
                {
                    sb.AppendFormat(" Uploading file: {0}", FileUpload1.FileName);

                    //saving the file
                    FileUpload1.SaveAs("C:\\Users\\Public\\Pictures\\" + FileUpload1.FileName);

                    //Showing the file information
                    sb.AppendFormat("<br/> Save As: {0}", FileUpload1.PostedFile.FileName);
                    sb.AppendFormat("<br/> File type: {0}", FileUpload1.PostedFile.ContentType);
                    sb.AppendFormat("<br/> File length: {0}", FileUpload1.PostedFile.ContentLength);
                    sb.AppendFormat("<br/> File name: {0}", FileUpload1.PostedFile.FileName);
                    db.AddToPath(Session["username"].ToString(), Session["id"].ToString(), "C:\\Users\\Public\\Pictures\\" + FileUpload1.FileName);
                }
                catch (Exception ex)
                {
                    sb.Append("<br/> Error <br/>");
                    sb.AppendFormat("Unable to save file <br/> {0}", ex.Message);
                }
            }
            else
            {
                lblmessage.Text = sb.ToString();
             }
        }
    }

    protected void login1_Click(object sender, EventArgs e)
    {
        Response.Redirect("Explore.aspx");
    }
}