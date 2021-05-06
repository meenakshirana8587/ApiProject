using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using prodcrudapi2.Infrastructure;
using prodcrudapi2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace prodcrudapi2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ProductContext _context;
        public ProductController(ProductContext context)
        {
            _context = context;
        }

        [HttpGet("items")]
        public List<Product> getItems()
        {
            var res = from r in _context.Products select r;
            return res.ToList();
        }
        [HttpPost("items")]
        public Product createItems(Product item)
        {
            _context.Products.Add(item);
            _context.SaveChanges();
            return item;
        }


        [HttpPut("items/{id}")]
        public Product updateItems(Product item)
        {

            _context.Entry(item).State = EntityState.Modified;
            _context.SaveChanges();
            return item;

        }
        [HttpDelete("items/{id}")]
        public Product deleteItems(int id)
        {
            var res = _context.Products.Find(id);
            _context.Products.Remove(res);
            _context.SaveChanges();
            return res;

        }
        [HttpGet("items/{id}")]
        public Product getItem(int id)
        {
            var res = _context.Products.Find(id);
            return res;
        }
    }
}
