using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class TagValue
    {
        public int Id { get; set; }
        public string Tagname { get; set; }
        public double Value { get; set; }
    }
}