
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {
        private readonly StoreContext context;
        public ProductsController(StoreContext storeContext)
        {
            context = storeContext;
        }

        [HttpGet]
        public async Task< ActionResult<List<Product>>> GetProducts(){
            var products = await context.Products.ToListAsync();
            return Ok(products);
        }

         [HttpGet("{id}")]
        public async  Task<ActionResult<Product>> GetProductById(int id){
           var product = await context.Products.FindAsync(id);

            if (product == null) return NotFound();

            return product;
        }
    }
}