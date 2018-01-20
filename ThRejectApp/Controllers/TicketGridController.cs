using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ThRejectApp.Controllers
{
    public class TicketGridController : Controller
    {
        // GET: TicketGrid
        public ActionResult Tickets()
        {
            return View();
        }
    }
}