using Book.DataModel;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Book.DataAccess
{
    public class BookAgent
    {
        public async Task<List<BookInfo>> GetBookList()
        {
            using (var context = new BookProjectEntities())
            {
                return await context.BookInfoes.ToListAsync();
            }
        }
    }
}
