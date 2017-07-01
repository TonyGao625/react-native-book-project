using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Book.Business;
using Book.EntityModel;

namespace Book.WebApi.Controllers
{
    [RoutePrefix("api/category")]
    public class BookCategoryController:ApiController
    {
        private readonly BookCategoryBusiness _bookCategoryBusiness;

        public BookCategoryController()
        {
            this._bookCategoryBusiness=new BookCategoryBusiness();
        }

        [Route("getList")]
        [HttpGet]
        public async Task<MuliResult<BookCategoryModel>> GetList()
        {
            return await _bookCategoryBusiness.GetBookCategoryList();
        }
    }
}