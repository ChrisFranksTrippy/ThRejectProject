using System;
using System.Collections.Generic;
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
            


            

            return View();
        }
    }
}