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
    [RoutePrefix("api/book")]
    public class BookController : ApiController
    {
        private readonly BookBusiness _bookBusiness;

        public BookController()
        {
            _bookBusiness = new BookBusiness();
        }

        [Route("getList")]
        public async Task<MuliResult<BookInfoModel>> GetBookList()
        {
            return await _bookBusiness.GetBookList();
        }

        [Route("addOrUpdate")]
        [HttpPost]
        public async Task<Operate> AddOrUpdate(JObject paramters)
        {
            var bookInfoModel = paramters["BookInfoModel"].ToObject<BookInfoModel>();
            return await _bookBusiness.AddOrUpdate(bookInfoModel);
        }
    }
}