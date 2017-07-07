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
                UserId = collect.UserId,
                CollectionDate = collect.CollectionDate
            };
        }

        public static BookCollection ToBookCollection(this BookCollectionModel model)
        {
            return new BookCollection()
            {
                Id = model.Id,
                BookId = model.BookId,
                UserId = model.UserId,
                CollectionDate = model.CollectionDate
            };
        }
    }
}
