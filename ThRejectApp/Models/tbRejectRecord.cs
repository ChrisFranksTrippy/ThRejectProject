//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ThRejectApp.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class tbRejectRecord
    {
        public System.DateTime DateRaised { get; set; }
        public string Vendor { get; set; }
        public int RejectNo { get; set; }
        public string BuyerName { get; set; }
        public string PartNo { get; set; }
        public int QtyRejected { get; set; }
        public string PartDescription { get; set; }
        public decimal TotalValue { get; set; }
        public string BuyerEmail { get; set; }
        public string VendorNo { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string City { get; set; }
        public string CountryCode { get; set; }
        public string PostCode { get; set; }
        public string ReplacementRequired { get; set; }
        public int ReasonCode { get; set; }
        public string ReturnDescription { get; set; }
        public string EmployeeName { get; set; }
        public string ProNo { get; set; }
        public string ReplacementPo { get; set; }
        public string CreditNoteReceived { get; set; }
        public string GoodsShipped { get; set; }
        public System.DateTime DateGoodsShipped { get; set; }
        public string RmaNo { get; set; }
        public string ShippingMethod { get; set; }
        public string RejectedPoNo { get; set; }
        public string TrackingNo { get; set; }
        public string MoNo { get; set; }
    }
}
