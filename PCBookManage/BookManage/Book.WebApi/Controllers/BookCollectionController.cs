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
    [RoutePrefix("api/collect")]
    public class BookCollectionController : ApiController
    {
        private readonly BookCollectionBusiness _bookCollectionBusiness;

        public BookCollectionController()
        {
            this._bookCollectionBusiness=new BookCollectionBusiness();
        }

        [Route("getCollectList/{userId}")]
        [HttpGet]
        public async Task<MuliResult<BookCollectionModel>> GetCollectList(int userId)
        {
            return await _bookCollectionBusiness.GetCollectionList(userId);
        }
    }
}