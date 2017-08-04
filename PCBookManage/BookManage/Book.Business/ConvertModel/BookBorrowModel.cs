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
                UserName = borrow.UserName,
                BorrowDate = borrow.BorrowDate,
                IsReturn = borrow.IsReturn,
                ReturnDate = borrow.ReturnDate
            };
            return result;
        }

        public static BookBorrow ToBookBorrow(this BookBorrowModel model)
        {
            return new BookBorrow()
            {
                Id = model.Id,
                BookId = model.BookId,
                UserName = model.UserName,
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
                UserName = borrow.UserName,
                BorrowDate = borrow.BorrowDate,
                IsReturn = borrow.IsReturn,
                ReturnDate = borrow.ReturnDate,
                BookName = borrow.BookName,
                ShortBookName = borrow.BookName.Length > 20 ? (borrow.BookName.Substring(0,20)+"...") : (borrow.BookName),
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
            if (!borrow.IsReturn)
            {
                var dataNow = DateTime.Now;
                var needReturnData= (DateTime)borrow.NeedReturnDate;
                TimeSpan timeSpan = dataNow - needReturnData;
                result.IsOverTime = timeSpan.Days;
            }
            return result;
        }
    }
}
