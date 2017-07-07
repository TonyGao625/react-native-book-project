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
    public class BookCollectionAgent
    {
        public async Task AddOrUpdate(BookCollection collect)
        {
            using (var context=new BookProjectEntities())
            {
                context.BookCollections.AddOrUpdate(collect);
                await context.SaveChangesAsync();
            }
        }

        public async Task<BookCollection> GetBookCollect(long bookId,int userId)
        {
            using (var context=new BookProjectEntities())
            {
                return await context.BookCollections.Where(x => x.BookId == bookId && x.UserId == userId).FirstOrDefaultAsync();
            }
        }
    }
}
