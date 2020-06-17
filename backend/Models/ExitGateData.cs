using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class ExitGateData
    {
        public string ServiceId { get; set; }
        public DateTime DateIn { get; set; }
        public TimeSpan TimeIn { get; set; }
        public string PoNo { get; set; }
    }
}
