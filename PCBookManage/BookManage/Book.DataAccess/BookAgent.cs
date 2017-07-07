using Book.DataModel;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
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

        public async Task AddOrUpdate(BookInfo book)
        {
            using (var context=new BookProjectEntities())
            {
                context.BookInfoes.AddOrUpdate(book);
                await context.SaveChangesAsync();
            }
        }
    }
}
