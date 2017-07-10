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

        [Route("borrowBook")]
        [HttpPost]
        public async Task<Operate> BookBorrow(JObject paramters)
        {
            var bookBorrowModel = paramters["BookBorrowModel"].ToObject<BookBorrowModel>();
            return await _bookBusiness.BorrowBook(bookBorrowModel);
        }

        [Route("collectBook")]
        [HttpPost]
        public async Task<Operate> BookCollection(JObject paramters)
        {
            var bookCollectionModel = paramters["BookCollectionModel"].ToObject<BookCollectionModel>();
            return await _bookBusiness.CollectBook(bookCollectionModel);
        }

        [Route("GetBookBorrowListByUserId")]
        [HttpGet]
        public async Task<MuliResult<BookBorrowModel>> GetBookBorrowListByUserId(int userId)
        {
            return await _bookBusiness.GetBookBorrowListByUserId(userId);
        }

        [Route("backBook")]
        [HttpPost]
        public async Task<Operate> BackBook(JObject paramters)
        {
            var backBookModel = paramters["BookBorrowModel"].ToObject<BookBorrowModel>();
            return await _bookBusiness.BackBook(backBookModel);
        }
    }
}