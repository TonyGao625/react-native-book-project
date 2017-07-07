using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Book.DataModel;
using Book.EntityModel;

namespace Book.Business.ConvertModel
{
    public static partial class ConvertModel
    {
        public static BookBorrowModel ToBorrowModel(this BookBorrow borrow)
        {
            return new BookBorrowModel()
            {
                Id = borrow.Id,
                BookId = borrow.BookId,
                UserId = borrow.UserId,
                BorrowDate = borrow.BorrowDate,
                IsReturn = borrow.IsReturn,
                ReturnDate = borrow.ReturnDate
            };
        }

        public static BookBorrow ToBookBorrow(this BookBorrowModel model)
        {
            return new BookBorrow()
            {
                Id = model.Id,
                BookId = model.BookId,
                UserId = model.UserId,
                BorrowDate = model.BorrowDate,
                IsReturn = model.IsReturn,
                ReturnDate = model.ReturnDate
            };
        }
    }
}
