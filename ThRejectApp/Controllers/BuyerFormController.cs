using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ThRejectApp.Controllers
{
    public class BuyerFormController : Controller
    {
        // GET: BuyerForm
        public ActionResult EditForm(string RejectNo)
        {
            ViewBag.RejectNo = RejectNo;
            return View();
        }
    }
}