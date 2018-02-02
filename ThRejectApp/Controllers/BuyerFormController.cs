using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
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

        public JsonResult SaveForm()
        {
            List<string> RequestKeys = Request.Form.AllKeys.ToList();

            RejectDbEntities DatabaseConnection = new RejectDbEntities();
            tbRejectRecord Rejectrecord;
            PropertyInfo FormProperty;
            int RejectNo = -1;

            for (int i = 0; i < RequestKeys.Count; i++)
            {
                if (RequestKeys.ElementAt(i).ToString() == "RejectNo")
                {
                    RejectNo = Int32.Parse(Request.Form.Get(i));
                }
            }

            //try
            //{
            if (RejectNo != -1)
            {
                Rejectrecord = DatabaseConnection.tbRejectRecords.Find(RejectNo);

                for (int i = 0; i < RequestKeys.Count; i++)
                {
                    FormProperty = Rejectrecord.GetType().GetProperty(RequestKeys.ElementAt(i));
                    FormProperty.SetValue(Rejectrecord, Convert.ChangeType(Request.Form.Get(i).Replace("'", "''"), FormProperty.PropertyType));
                }

                DatabaseConnection.SaveChanges();

            }
            //} 
            //catch
            //{
            //    return Json("Error Caught", JsonRequestBehavior.AllowGet);
            //}

            //return RedirectToAction("Tickets", "TicketGrid");
            return Json("Success", JsonRequestBehavior.AllowGet);
        }
    }
}