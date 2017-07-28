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
            var result = new BookBorrowModel()
            {
                Id = borrow.Id,
                BookId = borrow.BookId,
                UserId = borrow.UserId,
                BorrowDate = borrow.BorrowDate,
                IsReturn = borrow.IsReturn,
                ReturnDate = borrow.ReturnDate
            };
            if (IsLoaded(borrow, entity => entity.User))
            {
                result.UserName = borrow.User?.UserName;
            }
            return result;
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

        public static BookBorrowModel ToBorrowModel(this V_BookBorrow borrow)
        {
            var result = new BookBorrowModel()
            {
                Id = borrow.Id,
                BookId = borrow.BookId,
                UserId = borrow.UserId,
                BorrowDate = borrow.BorrowDate,
                IsReturn = borrow.IsReturn,
                ReturnDate = borrow.ReturnDate,
                BookName = borrow.BookName,
                Author = borrow.Author,
                PublicDate = borrow.PublicDate,
                PublicAddress = borrow.PublicAddress,
                CategoryId = borrow.CategoryId,
                Remark = borrow.Remark,
                CreateDate = borrow.CreateDate,
                CreateBy = borrow.CreateBy,
                NeedReturnDate = borrow.NeedReturnDate,
                IsOverTime= -1,
                ImagePath = borrow.ImagePath
            };
            if (borrow.BorrowDate != null && borrow.NeedReturnDate != null)
            {
                result.IsOverTime = DateTime.Compare((DateTime) borrow.BorrowDate, (DateTime) borrow.NeedReturnDate);
            }
            return result;
        }
    }
}
