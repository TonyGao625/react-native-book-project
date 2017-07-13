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
        public static BookImage ToBookImage(this BookImageModel model)
        {
            return new BookImage()
            {
                Id = model.Id,
                BookId = model.BookId,
                IsCover = model.IsCover,
                SortOrder = model.SortOrder,
                ImagePath = model.ImagePath
            };
        }

        public static BookImageModel ToBookImageModel(this BookImage image)
        {
            return new BookImageModel()
            {
                Id = image.Id,
                BookId = image.BookId,
                IsCover = image.IsCover,
                SortOrder = image.SortOrder??0,
                ImagePath = image.ImagePath
            };
        }
    }
}
