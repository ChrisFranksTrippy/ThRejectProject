using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ThRejectApp.Models;

namespace ThRejectApp.Controllers
{
    public class BuyerFormController : Controller
    {
        // GET: BuyerForm
        public ActionResult EditForm(int RejectNo)
        {
            ViewBag.RejectNo = RejectNo.ToString();

            RejectDbEntities dbConnection = new RejectDbEntities();

            tbRejectRecord RejectRecord = dbConnection.tbRejectRecords.Find(RejectNo);

            return View(RejectRecord);
        }
    }
}