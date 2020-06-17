using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class ReconciliationSheet
    {
        public DateTime Date { get; set; }
        public string PoNo { get; set; }
        public double PaymentNo { get; set; }
        public string InvoiceNo { get; set; }
        public string CustomerId { get; set; }
        public string PetrolType { get; set; }
        public double? UnitPrice { get; set; }
        public double Quantity { get; set; }
        public double? Amount { get; set; }
        public string Agent { get; set; }
    }
}
