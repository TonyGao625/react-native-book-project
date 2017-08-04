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
        public static BookInfo ToBookInfo(this BookInfoModel model)
        {
            return new BookInfo()
            {
                Id = model.Id,
                BookName = model.BookName,
                Author = model.Author,
                PublicDate = model.PublicDate,
                PublicAddress = model.PublicAddress,
                CategoryId = model.CategoryId,
                Remark = model.Remark,
                CreateDate = model.CreateDate,
                CreateBy = model.CreateBy
            };
        }

        public static BookInfoModel ToBookInfoModel(this BookInfo book)
        {
            var result = new BookInfoModel()
            {
                Id = book.Id,
                BookName = book.BookName,
                Author = book.Author,
                PublicDate = book.PublicDate,
                PublicAddress = book.PublicAddress,
                CategoryId = book.CategoryId,
                Remark = book.Remark,
                CreateDate = book.CreateDate,
                CreateBy = book.CreateBy,
                CategoryName = book.BookCategory?.Name
            };
            if (IsLoaded(book, entity => entity.BookBorrows))
            {
                result.BookBorrowList = book.BookBorrows.Select(x => x.ToBorrowModel()).OrderByDescending(x=>x.BorrowDate).ToList();
            }
            if (IsLoaded(book, entity => entity.BookImages))
            {
                result.ImagePath = book.BookImages.FirstOrDefault(x => x.IsCover == true)?.ImagePath;
                result.BookImageList = book.BookImages.Select(x => x.ToBookImageModel()).ToList();
            }
            return result;
        }

        public static BookInfoModel ToBookInfoModel(this V_BookAll book)
        {
            var datalist = new BookInfoModel()
            {
                Id = book.Id,
                BookName = book.BookName,
                ShortBookName = book.BookName.Length > 20 ? (book.BookName.Substring(0, 20) + "...") : (book.BookName),
                Author = book.Author,
                PublicDate = book.PublicDate,
                PublicAddress = book.PublicAddress,
                CategoryId = book.CategoryId,
                Remark = book.Remark,
                CreateDate = book.CreateDate,
                CreateBy = book.CreateBy,
                UserName = book.UserName,
                BorrowDate=book.BorrowDate,
                IsReturn=book.IsReturn,
                ReturnDate=book.ReturnDate,
                CanOrder = book.CanOrder,
                ImagePath = book.ImagePath
            };
            return datalist;
        }
    }
}
