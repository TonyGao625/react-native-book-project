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
    public class BookCollectionBusiness
    {
        private readonly BookCollectionAgent _bookCollectionAgent; 

        public BookCollectionBusiness()
        {
            _bookCollectionAgent = new BookCollectionAgent();
        }

        public async Task<MuliResult<BookCollectionModel>> GetCollectionList(int userId)
        {
            var result=new MuliResult<BookCollectionModel>();
            try
            {
                var datalist = await _bookCollectionAgent.GetCollectList(userId);
                result.Datas = datalist.Select(x => x.ToBookCollectionModel()).ToList();
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
