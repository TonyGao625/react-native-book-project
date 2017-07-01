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
        public static BookCategory ToBookCategory(this BookCategoryModel model)
        {
            return new BookCategory()
            {
                Id = model.Id,
                Name = model.Name
            };
        }

        public static BookCategoryModel ToBookCategoryModel(this BookCategory model)
        {
            return new BookCategoryModel()
            {
                Id = model.Id,
                Name = model.Name
            };
        }
    }
}
