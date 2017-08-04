using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Book.Business;
using Book.EntityModel;
using Newtonsoft.Json.Linq;

namespace Book.WebApi.Controllers
{
    [RoutePrefix("api/collect")]
    public class BookCollectionController : ApiController
    {
        private readonly BookCollectionBusiness _bookCollectionBusiness;

        public BookCollectionController()
        {
            this._bookCollectionBusiness=new BookCollectionBusiness();
        }

        [Route("getCollectList")]
        [HttpGet]
        public async Task<MuliResult<BookCollectionModel>> GetCollectList(string userName)
        {
            return await _bookCollectionBusiness.GetCollectionList(userName);
        }

        [Route("borrowBook")]
        [HttpPost]
        public async Task<Operate> BorrowBook(JObject paramters)
        {
            var bookCollectionList = paramters["BookCollectionList"].ToObject<List<BookCollectionModel>>();
            var userName = paramters["UserName"].ToObject<string>();
            var borrowDate = paramters["BorrowDate"].ToObject<DateTime>();
            return await _bookCollectionBusiness.BorrowBook(bookCollectionList, userName, borrowDate);
        }

        [Route("sureBorrowBook")]
        [HttpPost]
        public async Task<Operate> SureBorrowBook(JObject paramters)
        {
            var bookCollectionList = paramters["BookCollectionList"].ToObject<List<BookCollectionModel>>();
            var userName = paramters["UserName"].ToObject<string>();
            var borrowDate = paramters["BorrowDate"].ToObject<DateTime>();
            return await _bookCollectionBusiness.SureBorrowBook(bookCollectionList, userName, borrowDate);
        }

        [Route("deleteByIds")]
        [HttpPost]
        public async Task<Operate> DeleteCollectByIds(JObject paramter)
        {
            var ids = paramter["Ids"].ToObject<int[]>();
            return await _bookCollectionBusiness.DeleteCollectionByIds(ids);
        }
    }
}