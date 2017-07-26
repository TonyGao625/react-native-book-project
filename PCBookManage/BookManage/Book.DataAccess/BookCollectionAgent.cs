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

        public async Task<List<V_BookCollection>> GetCollectList(int userId)
        {
            using (var context=new BookProjectEntities())
            {
                return await context.V_BookCollection.Where(x => x.UserId == userId).ToListAsync();
            }
        }

        public async Task DeleteById(long id)
        {
            using (var context=new BookProjectEntities())
            {
                var data = context.BookCollections.FirstOrDefault(x => x.Id == id);
                if (data != null) context.BookCollections.Remove(data);
                await context.SaveChangesAsync();
            }
        }

        public async Task<List<BookCollection>> GetCollectionByUserId(int userId) {
            using (var context = new BookProjectEntities()) {
                return await context.BookCollections.Where(x => x.UserId == userId).ToListAsync();
            }
        }
    }
}
