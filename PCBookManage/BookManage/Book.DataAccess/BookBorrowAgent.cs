﻿using System;
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
            using (var context = new BookProjectEntities())
            {
                context.BookBorrows.AddOrUpdate(borrow);
                await context.SaveChangesAsync();
            }
        }

        public async Task<BookBorrow> GetBorrowBookByBookId(long bookId)
        {
            using (var context = new BookProjectEntities())
            {
                return
                    await context.BookBorrows
                    .Where(x => x.BookId == bookId && x.IsReturn == false)
                    .Include(x => x.BookInfo)
                        .FirstOrDefaultAsync();
            }
        }

        public async Task<List<V_BookBorrow>> GetBookBorrowList(string userName)
        {
            using (var context = new BookProjectEntities())
            {
                return await context.V_BookBorrow.Where(x => x.IsReturn == false && x.UserName == userName).ToListAsync();
            }
        }

        public async Task<BookBorrow> GetBorrowById(long id)
        {
            using (var context = new BookProjectEntities())
            {
                return await context.BookBorrows.FirstOrDefaultAsync(x => x.Id == id);
            }
        }

        public async Task<BookBorrow> GetBorrowBookById(long id)
        {
            using (var context = new BookProjectEntities())
            {
                return await context.BookBorrows.FirstOrDefaultAsync(x => x.Id == id);
            }
        }
    }
}
