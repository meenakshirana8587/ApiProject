using Microsoft.EntityFrameworkCore;
using prodcrudapi2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace prodcrudapi2.Infrastructure
{
    public class ProductContext: DbContext
    {
        public DbSet<Product> Products { get; set; }
        public ProductContext(DbContextOptions<ProductContext> options) : base(options)
        {

        }
    }
}
