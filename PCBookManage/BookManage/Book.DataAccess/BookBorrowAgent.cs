using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Book.DataModel;

namespace Book.DataAccess
{
    public class BookBorrowAgent
    {
        public async Task AddOrUpdate(BookBorrow borrow)
        {
            using (var context=new BookProjectEntities())
            {
                context.BookBorrows.AddOrUpdate(borrow);
                await context.SaveChangesAsync();
            }
        }

        public async Task<BookBorrow> GetBorrowBook(long bookId)
        {
            using (var context=new BookProjectEntities())
            {
                return
                    await context.BookBorrows.Where(x => x.BookId == bookId && x.IsReturn == false)
                        .FirstOrDefaultAsync();
            }
        }
    }
}
