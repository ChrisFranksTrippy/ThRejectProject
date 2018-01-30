using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Reflection;
using System.Web;
using System.Web.Mvc;
using ThRejectApp.Models;

namespace ThRejectApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult SubmitForm(string test)
        {

            string test2 = test;

            List<string> RequestKeys = Request.Form.AllKeys.ToList();

            RejectDbEntities DatabaseConnection = new RejectDbEntities();
            tbRejectRecord NewRejectrecord = new tbRejectRecord();
            PropertyInfo FormProperty;

            for (int i = 0; i < RequestKeys.Count; i++)
            {            
                FormProperty = NewRejectrecord.GetType().GetProperty(RequestKeys.ElementAt(i));
                FormProperty.SetValue(NewRejectrecord, Convert.ChangeType(Request.Form.Get(i).Replace("'", "''"), FormProperty.PropertyType));
            }

            NewRejectrecord.DateRaised = DateTime.Now;

            NewRejectrecord.ProNo = "Test";
            NewRejectrecord.ReplacementPo = "Test";
            NewRejectrecord.RejectedPoNo = "Test";
            NewRejectrecord.ShippingMethod = "Test";
            NewRejectrecord.TrackingNo = "Test";
            NewRejectrecord.RmaNo = "Test";


            //NewRejectrecord.ProNo = "";
            //NewRejectrecord.ReplacementPo = "";
            //NewRejectrecord.RejectedPoNo = "";
            NewRejectrecord.CreditNoteReceived = "NO";
            NewRejectrecord.GoodsShipped = "NO";

            DatabaseConnection.tbRejectRecords.Add(NewRejectrecord);
            DatabaseConnection.SaveChanges();

            //Added POR, return Rejection Note
            //Buyer Email must be in the correct format.

            //MailMessage mailMessage = new MailMessage();
            //mailMessage.To.Add("1000frankschris@gmail.com");
            //mailMessage.CC.Add(NewRejectrecord.BuyerEmail);
            //mailMessage.From = new MailAddress("New_Reject_Note@ametek.com");
            //mailMessage.Subject = "New Reject Note: " + NewRejectrecord.RejectNo;
            //mailMessage.Body = NewRejectrecord.BuyerName + ",\n\nNew Reject Note " + NewRejectrecord.RejectNo + " raised: "

            //    + "\n\nVendor: " + NewRejectrecord.Vendor
            //    + "\n\nVendor No: " + NewRejectrecord.VendorNo

            //    + "\n\nPart No: " + NewRejectrecord.PartNo
            //    + "\nDescription: " + NewRejectrecord.PartDescription
            //    + "\nQty: " + NewRejectrecord.QtyRejected
            //    + "\nTotal Value: " + NewRejectrecord.TotalValue

            //    + "\n\nReturn Code: " + NewRejectrecord.ReasonCode
            //    + "\nDescription: " + NewRejectrecord.ReturnDescription

            //    + "\nRaised By: " + NewRejectrecord.EmployeeName

            //    + "\n\nReplacement Required: " + NewRejectrecord.ReplacementRequired;

            //SmtpClient smtpClient = new SmtpClient("uk-leic1.ametek.com");
            //smtpClient.Send(mailMessage);

            return Json(NewRejectrecord.RejectNo, JsonRequestBehavior.AllowGet);
            
        }
    }
}