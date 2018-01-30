using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ThRejectApp.Models;

namespace ThRejectApp.Controllers
{
    public class TicketGridController : Controller
    {
        // GET: TicketGrid
        public ActionResult Tickets()
        {

            RejectDbEntities dbConnection = new RejectDbEntities();

            DataSet test = new DataSet();
            
            //string sConnectionString;

            //sConnectionString = "Password=myPassword;User ID=myUserID;"
            //+ "Initial Catalog=pubs;"
            //+ "Data Source=(local)";

            //SqlConnection objConn= new SqlConnection(sConnectionString);
            //objConn.Open();

            //SqlDataAdapter daAuthors = new SqlDataAdapter("Select * From Authors", objConn);
            //DataSet dsPubs = new DataSet("Pubs");
            //daAuthors.FillSchema(dsPubs, SchemaType.Source, "Authors");
            //daAuthors.Fill(dsPubs, "Authors");


            SqlConnection SQLdb = new SqlConnection(ConfigurationManager.ConnectionStrings["MyRejectDbEntities"].ConnectionString);
            SQLdb.Open();

            SqlDataAdapter SQLadapter = new SqlDataAdapter("SELECT * FROM tbRejectRecords", SQLdb);
            SQLadapter.Fill(test);
            
            return View(test);
        }
    }
}