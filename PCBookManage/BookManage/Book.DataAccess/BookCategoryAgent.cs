using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Book.DataModel;

namespace Book.DataAccess
{
    public class BookCategoryAgent
    {
        public async Task<List<BookCategory>> GetBookCategory()
        {
            using (var context=new BookProjectEntities())
            {
                return await context.BookCategories.ToListAsync();
            }
        }
    }
}
