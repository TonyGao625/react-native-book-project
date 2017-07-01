using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Book.Business.ConvertModel;
using Book.DataAccess;
using Book.EntityModel;

namespace Book.Business
{
    public class BookCategoryBusiness
    {
        private readonly BookCategoryAgent _bookCategoryAgent;

        public BookCategoryBusiness()
        {
            _bookCategoryAgent=new BookCategoryAgent();
        }

        public async Task<MuliResult<BookCategoryModel>> GetBookCategoryList()
        {
            var result=new MuliResult<BookCategoryModel>();
            try
            {
                var dataList = await _bookCategoryAgent.GetBookCategory();
                result.Datas = dataList.Select(x => x.ToBookCategoryModel()).ToList();
            }
            catch (Exception ex)
            {
                result.Status = -1;
                result.Message = ex.Message;
            }
            return result;
        }
    }
}
