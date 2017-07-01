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
    public class UserBusiness
    {
        private readonly UsersAgent _usersAgent;

        public UserBusiness()
        {
            _usersAgent=new UsersAgent();
        }

        public async Task<Operate> Register(UsersModel userModel)
        {
            var result=new Operate();
            try
            {
                var user = userModel.ToUser();
                await _usersAgent.Register(user);
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
