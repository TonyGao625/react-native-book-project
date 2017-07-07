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
            return new BookInfoModel()
            {
                Id = book.Id,
                BookName = book.BookName,
                Author = book.Author,
                PublicDate = book.PublicDate,
                PublicAddress = book.PublicAddress,
                CategoryId = book.CategoryId,
                Remark = book.Remark,
                CreateDate = book.CreateDate,
                CreateBy = book.CreateBy
            };
        }
    }
}
