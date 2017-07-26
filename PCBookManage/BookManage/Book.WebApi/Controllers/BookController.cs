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
        [HttpPost]
        public async Task<MuliResult<BookInfoModel>> GetBookList(JObject paramters)
        {
            var userId = paramters["UserId"].ToObject<int>();
            var bookName = paramters["BookName"].ToObject<string>();
            var categoryId= paramters["CategoryId"].ToObject<int>();
            return await _bookBusiness.GetBookList(userId, bookName, categoryId);
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
        [Route("BookReturn")]
        [HttpPost]
        public async Task<Operate> BookReturn(JObject paramters)
        {
            var bookReturnModelList= paramters["BookReturnModelList"].ToObject<List<BookBorrowModel>>();
            return await _bookBusiness.BookReturn(bookReturnModelList);
        }

        [Route("backBook")]
        [HttpPost]
        public async Task<Operate> BackBook(JObject paramters)
        {
            var backBookModel = paramters["BookBorrowModel"].ToObject<BookBorrowModel>();
            return await _bookBusiness.BackBook(backBookModel);
        }

        [Route("getBookById/{id}")]
        [HttpGet]
        public async Task<ViewResult<BookInfoModel>> GetBookById(long id)
        {
            return await _bookBusiness.GetBookById(id);
        }
    }
}