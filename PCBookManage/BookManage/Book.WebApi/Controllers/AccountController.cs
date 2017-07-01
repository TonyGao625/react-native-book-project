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
    [RoutePrefix("api/account")]
    public class AccountController:ApiController
    {
        private readonly UserBusiness _userBusiness;

        public AccountController()
        {
            _userBusiness=new UserBusiness();
        }

        [Route("register")]
        [HttpPost]
        public async Task<Operate> Register(JObject paramter)
        {
            var userModel = paramter["userModel"].ToObject<UsersModel>();
            return await _userBusiness.Register(userModel);
        }


    }
}