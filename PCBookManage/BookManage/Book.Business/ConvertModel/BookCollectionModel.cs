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
        public static BookCollectionModel ToBookCollectionModel(this BookCollection collect)
        {
            return new BookCollectionModel()
            {
                Id = collect.Id,
                BookId=collect.BookId,
                UserName = collect.UserName,
                CollectionDate = collect.CollectionDate
            };
        }

        public static BookCollection ToBookCollection(this BookCollectionModel model)
        {
            return new BookCollection()
            {
                Id = model.Id,
                BookId = model.BookId,
                UserName = model.UserName,
                CollectionDate = model.CollectionDate
            };
        }

        public static BookCollectionModel ToBookCollectionModel(this V_BookCollection collect)
        {
            return new BookCollectionModel()
            {
                Id = collect.Id,
                BookId = collect.BookId,
                UserName = collect.UserName,
                CollectionDate = collect.CollectionDate,
                BookName = collect.BookName,
                Author = collect.Author,
                PublicDate = collect.PublicDate,
                PublicAddress = collect.PublicAddress,
                CategoryId = collect.CategoryId,
                Remark = collect.Remark,
                CreateDate = collect.CreateDate,
                CreateBy = collect.CreateBy,
                ImagePath = collect.ImagePath
            };
        }
    }
}
