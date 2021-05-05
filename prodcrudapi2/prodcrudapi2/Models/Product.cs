﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace prodcrudapi2.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }
        public string Color { get; set; }
        public string ExpDate { get; set; }
        public bool InStock { get; set; }
    }
}