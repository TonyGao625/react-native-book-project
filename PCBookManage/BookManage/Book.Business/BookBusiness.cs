using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Book.DataAccess;
using Book.EntityModel;

namespace Book.Business
{
    public class BookBusiness
    {
        private readonly BookAgent _bookAgent;

        public BookBusiness()
        {
            _bookAgent = new BookAgent();
        }

        public async Task<MuliResult<BookInfoModel>> GetBookList()
        {
            var result = new MuliResult<BookInfoModel>();
            try
            {
                var dataList = await _bookAgent.GetBookList();
                result.Datas = dataList.Select(x => new BookInfoModel()
                {
                    Id = x.Id,
                    BookName = x.BookName,
                    Author = x.Author,
                    PublicDate = x.PublicDate,
                    PublicAddress = x.PublicAddress,
                    CategoryId = x.CategoryId,
                    Remark = x.Remark,
                    CreateDate = x.CreateDate,
                    CreateBy = x.CreateBy
                }).ToList();
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
